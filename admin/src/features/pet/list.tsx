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
} from '@pankod/refine-antd'
import { HttpError, useExport } from '@pankod/refine-core'

import { IPet, IPetFilterVariables } from './interfaces'
import { Filter, onSearch } from './filter'

export const PetList = () => {
  const { tableProps, searchFormProps } = useTable<IPet, HttpError, IPetFilterVariables>({
    onSearch,
  })
  const importProps = useImport({
    mapData(item) {
      return {
        name: item['名称'],
        age: +item['年龄'],
        sex: item['性别'] === '女' ? 2 : 1,
      }
    },
  })
  const { isLoading, triggerExport } = useExport<IPet>({
    mapData(item) {
      return {
        名称: item.name,
        年龄: item.age,
        性别: item.sex === 2 ? '女' : '男',
      }
    },
  })
  return (
    <Space direction="vertical" style={{ display: 'flex' }}>
      <Card bodyStyle={{ paddingBottom: 0 }}>
        <Filter formProps={searchFormProps} />
      </Card>
      <List
        pageHeaderProps={{
          title: <CreateButton type="primary" />,
          extra: <Space>
            <ImportButton {...importProps} />
            <ExportButton onClick={triggerExport} loading={isLoading} />
          </Space>,
        }}
      >
        <Table {...tableProps} rowKey="id">
          <Table.Column dataIndex="name" title="名称" sorter />
          {/* <Table.Column dataIndex="category" title="分类" render={(v) => v.name} /> */}
          <Table.Column dataIndex="age" title="年龄" sorter render={(value) => <NumberField value={value} />} />
          <Table.Column dataIndex="sex" title="性别" sorter render={(value) => (value === 2 ? '女' : '男')} />
          <Table.Column<IPet>
            title="操作"
            dataIndex="actions"
            render={(_text, record): React.ReactNode => {
              return (
                <Space>
                  <ShowButton size="small" recordItemId={record.id} hideText />
                  <EditButton size="small" recordItemId={record.id} hideText />
                  <DeleteButton size="small" recordItemId={record.id} hideText />
                </Space>
              )
            }}
          />
        </Table>
      </List>
    </Space>
  )
}
