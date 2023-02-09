import { type IRole } from "../role/interfaces"

export type IMenu = {
  id: number
  parentId: number | null
  label: string
  path: string
  sort?: number
  level?: number
}

export type IMenuWithChildren = IMenu & {
  children: IMenu[] | null
}

export type IMenuWithRelation = IMenu & {
  Menu?: IMenu
  other_Menu?: IMenu[]
  Role?: IRole[]
}
