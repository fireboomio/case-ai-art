import {
  List,
  Table,
  useTable,
  Space,
  Card,
  Avatar,
  Button,
  Drawer,
} from '@pankod/refine-antd'
import { HttpError } from '@pankod/refine-core'

import { IUser, IUserFilterVariables } from './interfaces'
import { Filter, onSearch } from './filter'
import { useCallback, useState } from 'react'
import UserRoleBind from './bind.role'

export const UserList = () => {
  const { tableProps, searchFormProps } = useTable<IUser, HttpError, IUserFilterVariables>({
    onSearch,
  })

  const [bindingUser, setBindingUser] = useState<IUser | null>(null)

  const onCloseDrawer = useCallback(() => {
    setBindingUser(null)
  }, [])

  return (
    <Space direction="vertical" style={{ display: 'flex' }}>
      <Card bodyStyle={{ paddingBottom: 0 }}>
        <Filter formProps={searchFormProps} />
      </Card>
      <List title="用户列表">
        <Table {...tableProps} rowKey="id">
          <Table.Column dataIndex="avatarUrl" title="头像" render={(value) => <Avatar src={value} size="small" />} />
          <Table.Column dataIndex="name" title="名称" sorter />
          <Table.Column<IUser> dataIndex="provider" title="提供商" render={(v, rec) => `${v}.${rec.providerId}`} />
          <Table.Column<IUser>
            title="操作"
            dataIndex="actions"
            render={(_text, record): React.ReactNode => {
              return (
                <Space>
                  <Button onClick={() => setBindingUser(record)}>角色管理</Button>
                </Space>
              )
            }}
          />
        </Table>
      </List>
      <Drawer title={`${bindingUser?.name} - 角色管理`} visible={!!bindingUser} onClose={onCloseDrawer} width={520}>
        {bindingUser && <UserRoleBind userId={bindingUser?.id} onClose={onCloseDrawer} />}
      </Drawer>
    </Space>
  )
}
