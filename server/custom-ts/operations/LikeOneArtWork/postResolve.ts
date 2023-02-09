import { HookRequestWithInput, HookRequestWithResponse } from 'generated/fireboom.hooks'
import { InjectedLikeOneArtWorkInput, LikeOneArtWorkResponse } from 'generated/models'

export default async function postResolve(hook: HookRequestWithInput<InjectedLikeOneArtWorkInput> & HookRequestWithResponse<LikeOneArtWorkResponse>) : Promise<void>{
	// 增加like数
   await hook.internalClient.mutations.IncreaseArtWorkLikeCount({ input: {id: hook.input.artWorkId }})
}