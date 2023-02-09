import { useCustom, useCustomMutation } from '@pankod/refine-core'
import { Avatar, Button, CreateButton, Drawer, message, Space, Table } from '@pankod/refine-antd'
import { useEffect, useState } from 'react'
import { IUser } from '../user/interfaces'
import UserSelection from './user.selection'

interface RoleUserBindProps {
  roleCode: string
  onClose?: () => void
}

const RoleUserBind = ({ roleCode, onClose }: RoleUserBindProps) => {
  const [users, setUsers] = useState<IUser[]>([])

  const { data, isLoading } = useCustom<IUser[]>({
    url: 'GetRoleUsers',
    method: 'get',
    config: { query: { roleCode }}
  })
  const [drawerVisible, setDrawerVisible] = useState(false)
  const { mutateAsync } = useCustomMutation()

  useEffect(() => {
    setUsers(data?.data ?? [])
  }, [data])

  const onSave = async () => {
    try {
      await Promise.all(data!.data.map(user => {
        return mutateAsync({
          url: '/DisconnectOneUserRole',
          method: 'post',
          values: {
            userId: user.id,
            roleCode
          }
        })
      }))

      await Promise.all(users.map(sel => {
        return mutateAsync({
          url: '/ConnectOneUserRole',
          method: 'post',
          values: {
            userId: sel.id,
            roleCode
          }
        })
      }))
      message.success('用户已更新')
      onClose?.()
    } catch (error) {
      console.error(error)
      message.error('更新失败')
    }
  }

  const closeDrawer = () => {
    setDrawerVisible(false)
  }

  return (
    <>
      <CreateButton type="primary" className="mb-4" onClick={() => setDrawerVisible(true)}>
        添加
      </CreateButton>
      <Table<IUser>
        loading={isLoading}
        dataSource={users}
        rowKey="id"
      >
        <Table.Column dataIndex="avatarUrl" title="头像" render={(value) => <Avatar src={value} size="small" />} />
        <Table.Column dataIndex="name" title="名称" />
        <Table.Column<IUser> dataIndex="provider" title="提供商" render={(v, rec) => `${v}.${rec.providerId}`} />
      </Table>
      <Space className="mt-4">
        <Button type="primary" onClick={onSave}>
          保存
        </Button>
        <Button onClick={onClose}>取消</Button>
      </Space>
      <Drawer title="选择用户" visible={drawerVisible} onClose={closeDrawer} width={520}>
        {drawerVisible && <UserSelection roleCode={roleCode} onClose={closeDrawer} onSelect={v => {
          setUsers([...users, ...v.filter(u => !users.find(u1 => u1.id === u.id))])
        }} />}
      </Drawer>
    </>
  )
}

export default RoleUserBind
