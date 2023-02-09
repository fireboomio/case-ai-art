import {
  FormProps,
  Form,
  Input,
  Icons,
  InputNumber,
  Select,
  Button,
  Row,
  Col,
  DatePicker,
  Space
} from '@pankod/refine-antd'
import { CrudFilters } from '@pankod/refine-core'
import { IPetFilterVariables } from './interfaces'

const { RangePicker } = DatePicker

export const Filter = ({ formProps }: { formProps: FormProps }) => {
  return (
    <Form layout="horizontal" {...formProps} onReset={() => formProps.onFinish!({})}>
      <Row gutter={24}>
        <Col span={8} lg={6} xxl={4}>
          <Form.Item label="名称" name="name">
            <Input allowClear placeholder="名称模糊搜索" prefix={<Icons.SearchOutlined />} />
          </Form.Item>
        </Col>
        <Col span={8} lg={6} xxl={4}>
          <Form.Item label="年龄" name="age">
            <InputNumber placeholder="年龄搜索" className="!w-full" />
          </Form.Item>
        </Col>
        <Col span={8} lg={6} xxl={4}>
          <Form.Item label="性别" name="sex">
            <Select
              allowClear
              placeholder="性别搜索"
              options={[
                { label: '男', value: 1 },
                { label: '女', value: 2 },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={8} lg={6} xxl={4}>
          <Form.Item label="创建时间" name="createdAt">
            <RangePicker allowClear placeholder={['开始时间', '结束时间']} />
          </Form.Item>
        </Col>
        <Col span={8} lg={6} xxl={4}>
          <Form.Item>
            <Space>
              <Button htmlType='reset' icon={<Icons.RestOutlined />}>重置</Button>
              <Button htmlType="submit" type="primary" icon={<Icons.SearchOutlined />}>
                搜索
              </Button>
            </Space>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export const onSearch: (data: IPetFilterVariables) => CrudFilters = (params) => {
  const filters: CrudFilters = []
  const { name, age, sex, createdAt } = params

  filters.push(
    {
      field: 'name',
      operator: 'contains',
      value: name,
    },
    {
      field: 'age',
      operator: 'eq',
      value: age,
    },
    {
      field: 'sex',
      operator: 'eq',
      value: sex,
    },
    {
      field: 'createdAt',
      operator: 'between',
      value: createdAt ? createdAt : undefined,
    }
  )

  return filters
}
