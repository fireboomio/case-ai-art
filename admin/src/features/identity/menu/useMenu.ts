import { useList } from "@pankod/refine-core"
import { arrayToTree } from "@/utils/array"
import { IMenu, IMenuWithChildren } from "./interfaces"
import { mockMenus } from "../mock"

export function useMenu() {
  const { data, isLoading } = useList<IMenu>({
    resource: 'Menu',
    config: { hasPagination: false }
  })
  const dataSource = mockMenus
  const treeData = arrayToTree(dataSource, null) as IMenuWithChildren[]
  return {
    menus: data,
    isLoading,
    treeData
  }
}