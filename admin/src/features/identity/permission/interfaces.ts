export type IApi = {
  children?: IApi[]
  content: string
  createTime?: string
  enable: boolean
  id: number
  isDel?: number
  isDir: boolean
  isPublic: boolean
  legal: boolean
  liveQuery: boolean
  method: string
  operationType: "queries" | "mutations" | "subscriptions" | null
  path: string
  remark?: string
  restUrl?: string
  updateTime?: string
}
