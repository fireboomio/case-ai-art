import SingleFileUpload from '@/components/SingleFileUpload'
import { useForm, Form, Input, Select, Edit, InputNumber } from '@pankod/refine-antd'
import { IAppUser } from './interfaces'

export const AppUserEdit: React.FC = () => {
  const { formProps, saveButtonProps } = useForm<IAppUser>()

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="名称"
          name="nickname"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="积分"
          name="points"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  )
}
