import { AuthenticationHookRequest } from 'fireboom-wundersdk/server'

export default async function postAuthentication(hook: AuthenticationHookRequest) : Promise<void>{
  if (hook.user?.userId && hook.user.providerId === 'wx') {
    const { provider, providerId, userId } = hook.user
    const { nickname, picture } = hook.user.idToken!
    const resp = await hook.internalClient.queries.FindOneAppUser({
      input: {
        providerUserId: userId,
        providerId
      }
    })
    const existedUser = resp?.data?.data
    if (!existedUser) {
      await hook.internalClient.mutations.CreateOneAppUser({
        input: {
          data: {
            id: userId,
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
