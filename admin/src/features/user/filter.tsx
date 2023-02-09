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
import { IAppUserFilterVariables } from './interfaces'

const { RangePicker } = DatePicker

export const Filter = ({ formProps }: { formProps: FormProps }) => {
  return (
    <Form layout="horizontal" {...formProps} onReset={() => formProps.onFinish!({})}>
      <Row gutter={24}>
        <Col span={8} lg={6} xxl={4}>
          <Form.Item label="昵称" name="nickname">
            <Input allowClear placeholder="名称模糊搜索" prefix={<Icons.SearchOutlined />} />
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

export const onSearch: (data: IAppUserFilterVariables) => CrudFilters = (params) => {
  const filters: CrudFilters = []
  const { nickname } = params

  filters.push(
    {
      field: 'nickname',
      operator: 'contains',
      value: nickname,
    }
  )

  return filters
}
