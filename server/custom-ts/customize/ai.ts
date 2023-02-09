import { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql'
import { FastifyBaseLogger } from 'fastify/types/logger'
import { InternalClient } from 'fireboom-wundersdk/server'
import { Mutations, Queries } from 'generated/fireboom.internal.client';
import { Client } from "generated/fireboom.client";
import { translate } from './translate'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      _dummy: { type: GraphQLString }
    }
  }),
  mutation: new GraphQLObjectType<{
    args: string,
    userId: string
  }, {
    wundergraph: {
      log: FastifyBaseLogger,
      internalClient: InternalClient<Queries, Mutations>
    }
  }>({
    name: 'Mutation',
    fields: {
      GeneratePictureWithAI: {
        args: {
          args: {
            type: new GraphQLNonNull(GraphQLString)
          },
          userId: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        type: new GraphQLObjectType({
          fields: {
            id: {
              type: GraphQLID,
            },
            url: {
              type: GraphQLString
            }
          },
          name: 'data'
        }),
        async resolve(_, input, ctx) {
          const { log, internalClient } = ctx.wundergraph
          const userId = input.userId
          const json = JSON.parse(input.args)
          if (json.prompt && /[\u4e00-\u9fa5]/.test(json.prompt)) {
            json.prompt = await translate(json.prompt, log)
          }
          try {
            const client = new Client({})
            // 消耗积分
            const resp = await client.mutation.UsePoints({})
            if (resp.status !== "ok" || resp?.body.errors) {
              throw resp
            }
            // const data = await fetch('https://stablediffusionapi.com/api/v3/dreambooth', {
            //   method: 'post',
            //   headers: {
            //     'Content-Type': 'application/json'
            //   },
            //   body: JSON.stringify({
            //     key: 'EXKt6qfISnSLeFYlLpw9gqHirkCT8hWIpYWllNfuvCUHXBIYk8UoIkUkX8xk',
            //     samples: '1',
            //     num_inference_steps: '30',
            //     guidance_scale: 7.5,
            //     ...json
            //   })
            // }).then(resp => resp.json())
            const data = {
              status: 'success',
              messege: '',
              output: ['https://stable-diffusion-api.s3.amazonaws.com/generations/dd011494-4bd7-4257-9eb6-dc2269b1288c-0.png']
            }
            if (data.status === 'error') {
              throw new Error(data.messege)
            }
            if (data.status === 'success') {
              const resp1 = await internalClient.mutations.CreateOneCreation({ input: {args: input.args, userId }})
              if (!resp1.errors) {
                const resp2 = await internalClient.mutations.CreateOneDraft({ input: {
                  creationId: resp1.data.data.id,
                  url: data.output[0]
                }})
                if (!resp2.errors) {
                  return {
                    url: data.output[0],
                    id: resp2.data.data.id
                  }
                }
              }
            }
            return data
          } catch (error) {
            throw error
          }
        }
      }
    }
  })
})