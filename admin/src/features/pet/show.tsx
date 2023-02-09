import { useShow } from '@pankod/refine-core'
import { RefreshButton, Show, Typography } from '@pankod/refine-antd'
import { IPet } from './interfaces'

const { Title, Text } = Typography

export const PetShow = () => {
  const { queryResult } = useShow()
  const { data, isLoading } = queryResult
  const record = data?.data as IPet

  return (
    <Show isLoading={isLoading} pageHeaderProps={{ extra: <RefreshButton /> }}>
      <Title level={5}>名称</Title>
      <Text>{record?.name}</Text>

      <Title level={5}>年龄</Title>
      <Text>{record?.age}</Text>

      <Title level={5}>性别</Title>
      <Text>{record ? (record.sex === 2 ? '男' : '女') : '-'}</Text>
    </Show>
  )
}
