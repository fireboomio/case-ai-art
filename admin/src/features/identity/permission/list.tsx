import {
  List,
  Table,
  useTable,
  Icons
} from '@pankod/refine-antd'

import { IApi } from './interfaces'

export const ApiList = () => {
  const { tableProps  } = useTable<IApi>({
    dataProviderName: 'proxy',
    resource: 'operateApi',
    hasPagination: false
  })
  return (
      <List title="API列表">
        <Table {...tableProps} rowKey="id">
          <Table.Column dataIndex="path" title="路径" />
          <Table.Column dataIndex="method" title="方法" />
          <Table.Column dataIndex="enable" title="状态" render={v => v ? '已上线' : '已下架'} />
          <Table.Column dataIndex="isPublic" title="是否公开" render={v => v ? '公开' : '内部'} />
          <Table.Column dataIndex="legal" title="校验" render={v => !v ? <Icons.CheckCircleFilled /> : <><Icons.WarningFilled />错误</>} />
          <Table.Column dataIndex="operationType" title="类型" />
          <Table.Column dataIndex="liveQuery" title="实时" render={v => v ? '是' : '否'} />
          {/* <Table.Column<IApi>
            title="操作"
            dataIndex="actions"
            render={(_text, record): React.ReactNode => {
              return (
                <Space>
                  <ShowButton size="small" recordItemId={record.id} hideText />
                </Space>
              )
            }}
          /> */}
        </Table>
      </List>
  )
}
