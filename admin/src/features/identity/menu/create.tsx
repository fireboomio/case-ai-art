import { Create, Form, Input, InputNumber, TreeSelect, useDrawerForm } from '@pankod/refine-antd'

import { IMenu } from './interfaces'
import { useMenu } from './useMenu'

export const MenuCreate = () => {
  const { formProps, saveButtonProps } = useDrawerForm<IMenu>({ action: 'create' })
  const { treeData } = useMenu()

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="名称" name="label" rules={[{ required: true }]}>
          <Input maxLength={6} placeholder="请输入菜单名称" />
        </Form.Item>
        <Form.Item label="路由名称" name="path" rules={[{ required: true }]}>
          <Input placeholder="请输入菜单路径 eg: Pet" />
        </Form.Item>
        <Form.Item label="父菜单" name="parentId">
          <TreeSelect
            treeData={treeData}
            fieldNames={{
              label: 'label',
              value: 'id',
              children: 'children',
            }}
            placeholder="父级菜单"
          />
        </Form.Item>
        <Form.Item label="排序" name="sort" initialValue={0}>
          <InputNumber min={0} />
        </Form.Item>
      </Form>
    </Create>
  )
}
