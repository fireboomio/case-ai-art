import {HookRequestWithInput} from 'generated/fireboom.hooks'
import {InjectedRecordMyInviterInput, RecordMyInviterResponse} from 'generated/models'
import { Client } from 'generated/fireboom.client'
export default async function customResolve(hook: HookRequestWithInput<InjectedRecordMyInviterInput>)
  //: Promise<void | RecordMyInviterResponse>{ // 取消注释以使用严格的返回类型
  : Promise<any> {
  // TODO: 在此处添加代码
  const currentUser = await hook.internalClient.queries.FindOneAppUser({
    input: {
      id: hook.input.userId
    }
  })
  if (!currentUser) {
    return {
      data: {}, errors: [{
        message: '用户不存在'
      }]
    }
  }
  if (currentUser.data?.data?.AppUser?.id) {
    return {
      data: {}, errors: [{
        message: '已有邀请人'
      }]
    }
  }

  const client = new Client({})
  // 增加魔法值
  await client.mutation.CreateOnePointRecord({
    input: {
      way:'Invite',
      point: 0,
      userId: hook.input.userId
    }
  })
  await client.mutation.CreateOnePointRecord({
    input: {
      way:'Invite',
      point: 0,
      userId: hook.input.inviterId
    }
  })
}