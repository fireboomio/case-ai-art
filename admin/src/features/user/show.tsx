import { useShow } from '@pankod/refine-core'
import { RefreshButton, Show, Typography } from '@pankod/refine-antd'
import { IAppUser } from './interfaces'

const { Title, Text } = Typography

export const AppUserShow = () => {
  const { queryResult } = useShow()
  const { data, isLoading } = queryResult
  const record = data as IAppUser

  return (
    <Show isLoading={isLoading} pageHeaderProps={{ extra: <RefreshButton /> }}>
      <Title level={5}>名称</Title>
      <Text>{record?.nickname}</Text>

      <Title level={5}>头像</Title>
      <Text><img src={record?.avatar} style={{height:100}}/></Text>
      <Title level={5}>积分</Title>
      <Text>{record?.points}</Text>

    </Show>
  )
}
