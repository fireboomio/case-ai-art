
import { AuthenticationHookRequest } from 'fireboom-wundersdk/server'

export default async function postAuthentication(hook: AuthenticationHookRequest) : Promise<void>{
  if (hook.user?.accessToken?.sub) {
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
            provider,
            providerId,
            nickname,
            avatar: picture,
            phone: '',
            points: 100
          }
        }
      })
    }
  }
}