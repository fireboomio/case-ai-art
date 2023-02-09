import { useList } from '@pankod/refine-core'
import { Button,Icons, Space, Table } from '@pankod/refine-antd'
import { useState } from 'react'
import { IApi } from '../permission/interfaces'

interface ApiSelectionProps {
  roleCode: string
  onClose?: () => void
  onSelect?: (users: IApi[]) => void
}

const ApiSelection = ({ roleCode, onClose, onSelect }: ApiSelectionProps) => {
  const { data, isLoading } = useList<IApi>({
    dataProviderName: 'proxy',
    resource: 'operateApi',
    config: { hasPagination: false }
  })
  const [selections, setSelections] = useState<IApi[]>([])

  const onSubmit = () => {
    onSelect?.(selections)
    onClose?.()
  }

  return (
    <>
      <Table<IApi>
        loading={isLoading}
        dataSource={data?.data}
        rowKey="id"
        rowSelection={{
          selectedRowKeys: selections.map(i => i.id),
          onChange: (v, apis) => setSelections(apis),
        }}
      >
        <Table.Column dataIndex="path" title="路径" />
        <Table.Column dataIndex="method" title="方法" />
        <Table.Column dataIndex="enable" title="状态" render={v => v ? '已上线' : '已下架'} />
        <Table.Column dataIndex="isPublic" title="是否公开" render={v => v ? '公开' : '内部'} />
        <Table.Column dataIndex="legal" title="校验" render={v => v ? <Icons.CheckCircleFilled /> : <><Icons.WarningFilled />错误</>} />
      </Table>
      <Space className="mt-4">
        <Button type="primary" onClick={onSubmit}>
          保存
        </Button>
        <Button onClick={onClose}>取消</Button>
      </Space>
    </>
  )
}

export default ApiSelection
