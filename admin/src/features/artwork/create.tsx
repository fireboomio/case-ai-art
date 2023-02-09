// import MultipleFileUpload from '@/components/MultipleFileUpload'
import SingleFileUpload from '@/components/SingleFileUpload'
import { Create, Form, Input, InputNumber, Select, useForm } from '@pankod/refine-antd'

import { IArtWork } from './interfaces'

export const ArtWorkCreate = () => {
  const { formProps, saveButtonProps, onFinish } = useForm<IArtWork>()

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form
        {...formProps}
        layout="vertical"
        // onFinish={(values: any) => {
        //   onFinish({
        //     ...values,
        //     pictures: values.pictures ? JSON.stringify({ pictures: values.pictures }) : null
        //   })
        // }}
      >
        <Form.Item
          label="名称"
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="年龄"
          name="age"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="性别"
          name={'sex'}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={[
              { label: '男', value: 1 },
              { label: '女', value: 2 },
            ]}
          />
        </Form.Item>
        <Form.Item label="头像" name={'avatar'}>
          <SingleFileUpload listType="picture" />
        </Form.Item>
        {/* <Form.Item label="生活照" name={'pictures'}>
          <MultipleFileUpload listType="picture-card" />
        </Form.Item> */}
      </Form>
    </Create>
  )
}
