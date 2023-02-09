import { HookRequestWithInput } from 'generated/fireboom.hooks'
import { InjectedCreateOnePointRecordInput, CreateOnePointRecordResponse } from 'generated/models'

export default async function customResolve(hook: HookRequestWithInput<InjectedCreateOnePointRecordInput>)
  : Promise<void | CreateOnePointRecordResponse> {
  // 根据用户查询今日分享次数，超出直接200返回
  const now = new Date(Math.floor(Date.now() / 86400000) * 86400000)
  const resp = await hook.internalClient.queries.GetMyPointRecords({
    input: {
      way: [hook.input.way],
      userId: hook.input.userId,
      timeStart: now.toISOString()
    }
  })
  const limitTimes = {
    ShareToFriend: 2,
    ShareToGroup: 2,
    WatchAD: 10
  }[hook.input.way] ?? 0
  const currentTimes = resp.data?.data?.length??0
  if ((currentTimes >= limitTimes) && limitTimes) {
    return {
      data:{}
    }
  }
}