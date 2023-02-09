import { useCustom, useCustomMutation, useList } from '@pankod/refine-core'
import { Button, message, Space, Tree } from '@pankod/refine-antd'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { arrayToTree } from '@/utils/array'
import { IMenu } from '../menu/interfaces'

interface RoleMenuBindProps {
  roleCode: string
  onClose?: () => void
}

const RoleMenuBind = ({ roleCode, onClose }: RoleMenuBindProps) => {
  const { data } = useList<IMenu>({ config: { hasPagination: false }, resource: 'Menu'})
  const { mutateAsync, isLoading } = useCustomMutation()

  const { data: roleMenus } = useCustom<IMenu[]>({
    url: 'GetRoleMenus',
    method: 'get',
    config: { query: { roleCode }}
  })
  
  const menusMap = useMemo(() => {
    return data?.data.reduce<Record<number, IMenu>>((obj, item) => {
      obj[item.id] = item
      return obj
    }, {}) ?? {}
  }, [data?.data])
  
  const treeData = useMemo(() => {
    return arrayToTree(data?.data ?? [])
  }, [data?.data])

  const [checkedMenus, setCheckedMenus] = useState<number[]>([])

  useEffect(() => {
    setCheckedMenus(roleMenus?.data.map(item => item.id) ?? [])
  }, [roleMenus])

  const onSave = useCallback(async () => {
    try {
      await Promise.all(roleMenus!.data.map(menu => {
        return mutateAsync({
          url: '/DisconnectOneRoleMenu',
          method: 'post',
          values: {
            menuId: menu.id,
            roleCode
          }
        })
      }))

      await Promise.all(checkedMenus.map(sel => {
        return mutateAsync({
          url: '/ConnectOneRoleMenu',
          method: 'post',
          values: {
            menuId: sel,
            roleCode
          }
        })
      }))
      message.success('菜单已更新')
      onClose?.()
    } catch (error) {
      console.error(error)
      message.error('更新失败')
    }
  }, [checkedMenus, mutateAsync, onClose, roleCode, roleMenus])

  const onCheck = useCallback(({ checked, halfChecked }: {
    checked: number[];
    halfChecked: number[];
  }) => {
    for (const id of checked) {
      let item = menusMap[id]
      while(item.parentId) {
        if (!checked.includes(item.parentId)) {
          checked.push(item.parentId)
        }
        item = menusMap[item.parentId]
      }
    }
    setCheckedMenus(checked)
  }, [menusMap])

  return (
    <>
      {data?.data && <Tree
        checkable
        checkStrictly
        treeData={treeData}
        fieldNames={{ key: 'id', title: 'label', children: 'children' }}
        checkedKeys={checkedMenus}
        defaultExpandAll
        // @ts-ignore
        onCheck={onCheck}
      />}
      <Space className="mt-4">
        <Button type="primary" loading={isLoading} onClick={onSave}>
          保存
        </Button>
        <Button onClick={onClose}>取消</Button>
      </Space>
    </>
  )
}

export default RoleMenuBind
