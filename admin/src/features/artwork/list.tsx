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

import {IArtWork, IArtWorkFilterVariables} from './interfaces'
import {Filter, onSearch} from './filter'
import React from "react";

export const ArtWorkList = () => {
  const {tableProps, searchFormProps} = useTable<IArtWork, HttpError, IArtWorkFilterVariables>({
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
          <Table.Column dataIndex="Creation.AppUser.nickname" title="用户昵称"
                        render={(_, r: any) => r?.Creation?.AppUser?.nickname ?? ''}/>
          <Table.Column dataIndex="url" title="作品" render={v => <Image width={50} height={50} src={v}/>}/>
          <Table.Column dataIndex="isDraft" title="是否草稿" render={(v) => v ? '是' : '否'}/>
          <Table.Column dataIndex="likeCount" title="点赞数量"/>
          <Table.Column dataIndex="publishAt" title="发布" sorter
                        render={(value, r: any) => r.published ? r.publishAt : '未发布'}/>
          <Table.Column<IArtWork>
            title="操作"
            dataIndex="actions"
            render={(_text, record): React.ReactNode => {
              return (
                <Space>
                  {/*<ShowButton size="small" recordItemId={record.id} hideText/>*/}
                  {/*<EditButton size="small" recordItemId={record.id} hideText/>*/}
                  <DeleteButton size="small" recordItemId={record.id} hideText/>
                </Space>
              )
            }}
          />
        </Table>
      </List>
    </Space>
  )
}
