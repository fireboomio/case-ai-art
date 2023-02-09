import {GraphQLFloat, GraphQLInt, GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList } from 'graphql';
import { prisma } from 'generated/prisma'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      DailyCreation: {
            type: new GraphQLList(new GraphQLObjectType({
                name: 'DailyCreation',
                fields: {
                  date: {
                        type: GraphQLString,
                    },
                    total: {
                        type: GraphQLFloat
                    }
                },
            })),
            resolve() {
                const t: any = prisma.art.queryRaw(`SELECT DATE_FORMAT(createdAt,'%Y-%m-%d') date, COUNT(1) total from Creation GROUP BY date`, {});
                return t
            },
        },
    },
  }),
})