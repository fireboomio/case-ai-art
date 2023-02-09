import {
  List,
  Table,
  useTable,
  Space,
  Button,
  Drawer
} from '@pankod/refine-antd'
import { useCallback, useState } from 'react'
import RoleApiBind from './bind.api'
import RoleMenuBind from './bind.menu'
import RoleUserBind from './bind.user'

import { IRole } from './interfaces'

export const RoleList = () => {
  const { tableProps } = useTable<IRole>({
    hasPagination: false
  })

  const [userBindingRole, setUserBindingRole] = useState<IRole | null>(null)
  const [apiBindingRole, setApiBindingRole] = useState<IRole | null>(null)
  const [menuBindingRole, setMenuBindingRole] = useState<IRole | null>(null)

  const onCloseUserBindingDrawer = useCallback(() => {
    setUserBindingRole(null)
  }, [])

  const onCloseApiBindingDrawer = useCallback(() => {
    setApiBindingRole(null)
  }, [])

  const onCloseMenuBindingDrawer = useCallback(() => {
    setMenuBindingRole(null)
  }, [])
  
  return (
    <>
      <List title="角色列表">
        <Table {...tableProps} pagination={false} rowKey="id">
          <Table.Column dataIndex="id" title="ID" />
          <Table.Column dataIndex="code" title="Code" sorter />
          <Table.Column dataIndex="desc" title="备注" />
          <Table.Column<IRole>
            title="操作"
            dataIndex="actions"
            render={(_text, record): React.ReactNode => {
              return (
                <Space>
                  <Button onClick={() => setUserBindingRole(record)}>绑定用户</Button>
                  <Button onClick={() => setApiBindingRole(record)}>绑定API</Button>
                  <Button onClick={() => setMenuBindingRole(record)}>绑定菜单</Button>
                </Space>
              )
            }}
          />
        </Table>
      </List>
      <Drawer title={`${userBindingRole?.code} - 绑定用户`} visible={!!userBindingRole} onClose={onCloseUserBindingDrawer} width={520}>
        {userBindingRole && <RoleUserBind roleCode={userBindingRole?.code} onClose={onCloseUserBindingDrawer} />}
      </Drawer>
      <Drawer title={`${apiBindingRole?.code} - 绑定API`} visible={!!apiBindingRole} onClose={onCloseApiBindingDrawer} width={520}>
        {apiBindingRole && <RoleApiBind roleCode={apiBindingRole?.code} onClose={onCloseApiBindingDrawer} />}
      </Drawer>
      <Drawer title={`${menuBindingRole?.code} - 绑定菜单`} visible={!!menuBindingRole} onClose={onCloseMenuBindingDrawer} width={520}>
        {menuBindingRole && <RoleMenuBind roleCode={menuBindingRole?.code} onClose={onCloseMenuBindingDrawer} />}
      </Drawer>
    </>
  )
}
