import { IApi } from "../permission/interfaces"

export type IRole = {
  id: number
  code: string
  desc?: string
}

export type IRoleWithApi = IRole & {
  apis: Partial<IApi>[]
}