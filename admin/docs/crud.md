# 一个示例的 crud 的 Grahpql 语句

测试模型

```prisma
model Pet {
  id        Int      @id @default(autoincrement())
  name      String
  age       Int
  sex       Int
  createdAt DateTime @default(now())
}
```

- 分页查询

```graphql
query GetPetList($take: Int = 10, $skip: Int = 0, $orderBy: [local_PetOrderByWithRelationInput] = [{ createdAt: desc }], $query: local_PetWhereInput) {
  data: local_findManyPet(
    skip: $skip
    take: $take
    where: {AND: $query}
    orderBy: $orderBy
  ) {
    id
    name
    age
    createdAt
    sex
  }
  total: local_aggregatePet(where: {AND: $query}) @transform(get: "_count.id") {
    _count {
      id
    }
  }
}
```

- 查询所有

```graphql
query GetManyPet {
  data: local_findManyPet {
    id
    name
    age
    createdAt
    sex
  }
}
```

- 查询单个

```graphql
query GetOnePet($id: Int!) {
  data: local_findFirstPet(where: {id: {equals: $id}}) {
    age
    createdAt
    id
    name
    sex
  }
}
```

- 创建单个

```graphql
mutation CreateOnePet($age: Int!, $name: String!, $sex: Int!) {
  data: local_createOnePet(data: {name: $name, sex: $sex, age: $age}) {
    id
    createdAt
    age
    name
    sex
  }
}
```

- 更新单个

```graphql
mutation UpdateOnePet($id: Int!, $name: String, $sex: Int, $age: Int) {
  data: local_updateOnePet(
    data: {name: {set: $name}, sex: {set: $sex}, age: {set: $age}}
    where: {id: $id}
  ) {
    age
    id
    name
    sex
  }
}
```

- 删除单个

```graphql
mutation DeleteOnePet($id: Int!) {
  data: local_deleteOnePet(where: {id: $id}) {
    id
  }
}
```

- 批量删除

```graphql
mutation DeleteManyPet($ids: [Int]!) {
  data: local_deleteManyPet(where: {id: {in: $ids}}) {
    count
  }
}
```