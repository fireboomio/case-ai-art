import {
  List,
  Table,
  useTable,
  NumberField,
  ShowButton,
  Space,
  DeleteButton,
  EditButton,
  ExportButton,
  CreateButton,
  Card,
  ImportButton,
  useImport,
  Image
} from '@pankod/refine-antd'
import {HttpError, useExport} from '@pankod/refine-core'

import {IAppUser, IAppUserFilterVariables} from './interfaces'
import {Filter, onSearch} from './filter'
import React from "react";

export const AppUserList = () => {
  const {tableProps, searchFormProps} = useTable<IAppUser, HttpError, IAppUserFilterVariables>({
    onSearch,
  })
  return (
    <Space direction="vertical" style={{display: 'flex'}}>
      <Card bodyStyle={{paddingBottom: 0}}>
        <Filter formProps={searchFormProps}/>
      </Card>
      <List
        pageHeaderProps={{
          title: <CreateButton type="primary"/>,
          extra: <Space>
          </Space>,
        }}
      >
        <Table {...tableProps} rowKey="id">
          <Table.Column dataIndex="id" title="id"/>
          <Table.Column dataIndex="avatar" title="头像" render={v => <Image width={50} height={50} src={v}/>}/>
          <Table.Column dataIndex="nickname" title="用户昵称"/>
          <Table.Column dataIndex="points" title="积分"/>
          <Table.Column<IAppUser>
            title="操作"
            dataIndex="actions"
            render={(_text, record): React.ReactNode => {
              return (
                <Space>
                  <ShowButton size="small" recordItemId={record.id} hideText/>
                  <EditButton size="small" recordItemId={record.id} hideText/>
                  {/*<DeleteButton size="small" recordItemId={record.id} hideText/>*/}
                </Space>
              )
            }}
          />
        </Table>
      </List>
    </Space>
  )
}
