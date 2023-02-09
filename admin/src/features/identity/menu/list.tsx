import { List, Table, useTable, Space, useDrawerForm, Drawer, EditButton, DeleteButton } from '@pankod/refine-antd'
import { arrayToTree } from '@/utils/array'

import { IMenu, IMenuWithChildren } from './interfaces'
import { MenuCreate } from './create'
import { MenuEdit } from './edit'

export const MenuList = () => {
  let {
    tableProps: { dataSource, ...restTableProps },
  } = useTable<IMenu>({ hasPagination: false })

  const { show: showCreate, drawerProps: createDrawerProps } = useDrawerForm<IMenu>({
      action: "create",
  });

  const { show: showEdit, drawerProps: editDrawerProps } = useDrawerForm<IMenu>({
    action: "edit",
  });

  const treeData = arrayToTree([...(dataSource ?? [])], null) as IMenuWithChildren[]

  console.log(dataSource, treeData)

  return (
    <>
      <List
        title="菜单树"
        createButtonProps={{
          type: 'primary',
          onClick: showCreate,
          children: '新增'
        }}
        // pageHeaderProps={{
        //   title: <CreateButton type="primary"   />,
        // }}
      >
        <Table {...restTableProps} dataSource={treeData} pagination={false} rowKey="id">
          <Table.Column dataIndex="id" title="ID" />
          <Table.Column dataIndex="label" title="标题" />
          <Table.Column dataIndex="path" title="路由名称" />
          <Table.Column dataIndex="sort" title="排序" />
          {/* <Table.Column dataIndex="level" title="层级" /> */}
          <Table.Column<IMenu>
            title="操作"
            dataIndex="actions"
            render={(_text, record): React.ReactNode => {
              return (
                <Space>
                  <EditButton size="small" recordItemId={record.id} hideText onClick={() => showEdit(record.id)} />
                  <DeleteButton size="small" recordItemId={record.id} hideText />
                </Space>
              )
            }}
          />
        </Table>
      </List>
      <Drawer {...createDrawerProps}>
        <MenuCreate />
      </Drawer>
      <Drawer {...editDrawerProps}>
        <MenuEdit />
      </Drawer>
    </>
  )
}
