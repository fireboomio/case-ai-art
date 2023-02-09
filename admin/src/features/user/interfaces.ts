// export enum ESex {
//   male,
//   female
// }

// export type ITag = {
//   id: number
//   name: string
// }

export type IAppUser = {
  id:          number
  nickname:        string
  points:         number
  // sex:         ESex
  avatar: string
  // category: {
  //   id: number
  //   name: string
  // }
  // tags:         ITag[]
}

export type IArtWorkFilterVariables = {
  publishAt?: string
}