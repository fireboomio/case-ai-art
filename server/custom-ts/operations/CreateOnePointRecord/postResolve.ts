import { HookRequestWithInput, HookRequestWithResponse } from 'generated/fireboom.hooks'
import { InjectedCreateOnePointRecordInput, CreateOnePointRecordResponse } from 'generated/models'

export default async function postResolve(hook: HookRequestWithInput<InjectedCreateOnePointRecordInput> & HookRequestWithResponse<CreateOnePointRecordResponse>): Promise<void> {
  await hook.internalClient.mutations.IncreasePoints({
    input: {
      id: hook.input.userId,
      points: hook.input.point
    }
  })
}