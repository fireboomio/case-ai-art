import { AuthenticationHookRequest } from 'fireboom-wundersdk/server'
import { Client } from 'generated/fireboom.client'
export default async function postAuthentication(hook: AuthenticationHookRequest) : Promise<void>{
  if (hook.user?.accessToken?.sub && hook.user.providerId === 'sail') {
    const { providerId } = hook.user
    const {nickname, sub, picture } = hook.user.accessToken
    const resp = await hook.internalClient.queries.FindOneAppUser({
      input: {
        providerUserId: sub,
        providerId
      }
    })
    const existedUser = resp?.data?.data
    if (!existedUser) {
      await hook.internalClient.mutations.CreateOneAppUser({
        input: {
          data: {
            id: sub,
            providerId,
            nickname,
            avatar: picture,
            phone: '',
            points: 100
          }
        }
      })
    }
  } else if (hook.user) {
    const client = new Client({})
    const { avatarUrl, provider, providerId, userId } = hook.user
    const { email, name, nickName } = hook.user.idToken as any
    const resp = await client.query.GetManyAdminUser({})

    if (resp.status === 'ok') {
      if (!resp.body.errors) {
        const existedUser = resp.body.data!.data
        if (!existedUser) {
          const _name = nickName || name || email || ''
          const rest = await client.mutation.CreateOneAdminUser({
            input: {
              name: _name,
              provider: provider!,
              providerId: providerId!,
              providerUserId: userId!,
              avatarUrl: avatarUrl
            }
          })
          if (rest.status === 'ok') {
            if (!rest.body.errors) {
              console.info(`Success sync user: ${providerId} - ${_name}`)
            }
          }
        }
      }
    }
  }
}
