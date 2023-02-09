import { HookRequest } from 'generated/fireboom.hooks'

export default async function customResolve(hook: HookRequest)
  //: Promise<void | UsePointsResponse>{ // 取消注释以使用严格的返回类型
  : Promise<any> {
  // TODO: 在此处添加代码
  const resp = await hook.internalClient.queries.FindOneAppUser({
    input: {
      id: hook.user?.userId
    }
  })
  // 积分不足时，跳过后续流程直接返回
  const points = resp?.data?.data?.points ?? 0
  if (points < 1) {
    return {
      data: {},
      errors: [{
        message: '积分不足'
      }]
    }
  }
  // 修改用户积分
  await hook.internalClient.mutations.DecreasePoints({
    input: {
      points: 1
    }
  })
}