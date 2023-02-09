import { useShow } from '@pankod/refine-core'
import { RefreshButton, Show, Typography } from '@pankod/refine-antd'
import { IArtWork } from './interfaces'

const { Title, Text } = Typography

export const ArtWorkShow = () => {
  const { queryResult } = useShow()
  const { data, isLoading } = queryResult
  const record = data?.data as IArtWork

  return (
    <Show isLoading={isLoading} pageHeaderProps={{ extra: <RefreshButton /> }}>
      <Title level={5}>名称</Title>
      <Text>{record?.name}</Text>

      <Title level={5}>年龄</Title>
      <Text>{record?.age}</Text>

    </Show>
  )
}
