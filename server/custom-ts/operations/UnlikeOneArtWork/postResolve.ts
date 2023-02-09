import { HookRequestWithInput, HookRequestWithResponse } from 'generated/fireboom.hooks'
import { InjectedUnlikeOneArtWorkInput, UnlikeOneArtWorkResponse } from 'generated/models'

export default async function postResolve(hook: HookRequestWithInput<InjectedUnlikeOneArtWorkInput> & HookRequestWithResponse<UnlikeOneArtWorkResponse>) : Promise<void>{
	// like - 1
  await hook.internalClient.mutations.DecreaseArtWorkLikeCount({ input: {id: hook.input.artWorkId }})
}