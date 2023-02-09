export type FlatArrayItem = { id: string | number, parentId?: string | number | null, [key: string]: any }

export function arrayToTree(items: FlatArrayItem[], id:string|number|null = null, link = 'parentId'): (FlatArrayItem & { children: FlatArrayItem[] | null})[] {
  return items
  .filter(item => item[link] === id)
    .map(item => {
      const children = arrayToTree(items, item.id)
      return {
        ...item,
        children: children.length ? children : null
      }
    })
}
  