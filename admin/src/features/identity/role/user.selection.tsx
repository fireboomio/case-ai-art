import { Avatar, Button, Space, Table, useTable } from '@pankod/refine-antd'
import { useState } from 'react'
import { IUser } from '../user/interfaces'

interface UserSelectionProps {
  roleCode: number | string
  onClose?: () => void
  onSelect?: (users: IUser[]) => void
}

const UserSelection = ({ roleCode, onClose, onSelect }: UserSelectionProps) => {
  
  const { tableProps } = useTable<IUser, any, any>({ resource: 'User' })
  const [selections, setSelections] = useState<IUser[]>([])

  const onSubmit = () => {
    onSelect?.(selections)
    onClose?.()
  }

  return (
    <>
      <Table<IUser>
        {...tableProps}
        rowKey="id"
        rowSelection={{
          selectedRowKeys: selections.map(i => i.id),
          onChange: (v, users) => setSelections(users),
        }}
      >
        <Table.Column dataIndex="avatarUrl" title="头像" render={(value) => <Avatar src={value} size="small" />} />
        <Table.Column dataIndex="name" title="名称" />
        <Table.Column<IUser> dataIndex="provider" title="提供商" render={(v, rec) => `${v}.${rec.providerId}`} />
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

export default UserSelection
