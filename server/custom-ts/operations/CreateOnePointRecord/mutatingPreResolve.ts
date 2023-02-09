import { HookRequestWithInput } from 'generated/fireboom.hooks'
import { InjectedCreateOnePointRecordInput } from 'generated/models'

export default async function mutatingPreResolve(hook: HookRequestWithInput<InjectedCreateOnePointRecordInput>) : Promise<InjectedCreateOnePointRecordInput>{
  switch (hook.input.way) {
    case 'ShareToFriend':
      hook.input.point = 2
      break
    case 'ShareToGroup':
      hook.input.point = 2
      break
    case 'WatchAD':
      hook.input.point = 4
      break
    case 'Invite':
      hook.input.point = 10
      break
    default:
      hook.input.point = 0
  }
  return hook.input
}