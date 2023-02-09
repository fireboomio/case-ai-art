// export enum ESex {
//   male,
//   female
// }

// export type ITag = {
//   id: number
//   name: string
// }

export type IPet = {
  id:          number
  name:        string
  age:         number
  // sex:         ESex
  sex: number
  // category: {
  //   id: number
  //   name: string
  // }
  // tags:         ITag[]
}

export type IPetFilterVariables = {
  name?: string
  age?: number
  sex?: number
  createdAt?: string
}