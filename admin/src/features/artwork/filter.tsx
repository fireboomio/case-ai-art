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
import { IArtWorkFilterVariables } from './interfaces'

const { RangePicker } = DatePicker

export const Filter = ({ formProps }: { formProps: FormProps }) => {
  return (
    <Form layout="horizontal" {...formProps} onReset={() => formProps.onFinish!({})}>
      <Row gutter={24}>
        <Col span={8} lg={6} xxl={4}>
          <Form.Item label="发布时间" name="publishAt">
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

export const onSearch: (data: IArtWorkFilterVariables) => CrudFilters = (params) => {
  const filters: CrudFilters = []
  const { publishAt } = params

  filters.push(
    {
      field: 'publishAt',
      operator: 'between',
      value: publishAt ? publishAt : undefined,
    }
  )

  return filters
}
