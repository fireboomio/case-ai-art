# 用户、角色、菜单、API 业务设计

## 数据模型

```prisma
model User {
  id        Int @id @default(autoincrement())
  createdAt DateTime @default(now())
  providerUserId   String
  name String
  avatarUrl String?
  provider String
  providerId String
  Role Role[]
}

model Role {
  id        Int @id @default(autoincrement())
  code String @unique
  desc String?
  User User[]
  Menu Menu[]
}

model Menu {
  id Int @id @default(autoincrement())
  parentId Int?
  label String
  path String
  icon String?
  sort Int @default(0)
  level Int @default(1)
  Menu            Menu?  @relation("MenuToMenu_parentId", fields: [parentId], references: [id])
  other_Menu          Menu[] @relation("MenuToMenu_parentId")
  Role Role[]
}
```

## Operations

1. 分页查询用户

```graphql
query GetUserList(
  $take: Int = 10
  $skip: Int = 0
  $orderBy: [local_my_UserOrderByWithRelationInput]
  $query: local_my_UserWhereInput
) {
  data: local_my_findManyUser(skip: $skip, take: $take, where: { AND: $query }, orderBy: $orderBy) {
    id
    name
    createdAt
    avatarUrl
    provider
    providerId
    providerUserId
  }
  total: local_my_aggregateUser(where: { AND: $query }) @transform(get: "_count.id") {
    _count {
      id
    }
  }
}
```

2. 查询所有角色
query GetRoleList {
  data: local_my_findManyRole {
    id
    code
    desc
  }
}

3. 查询所有菜单

```graphql
query GetMenuList {
  data: local_my_findManyMenu {
    id
    label
    path
    sort
    parentId
  }
}
```

4. 创建一个菜单

```graphql
mutation CreateOneMenu($label: String!, $level: Int, $sort: Int, $path: String!) {
  data: local_my_createOneMenu(
    data: {label: $label, path: $path, sort: $sort, level: $level, icon: ""}
  ) {
    id
  }
}
```

5. 获取一个菜单

```graphql
query GetOneMenu($id: Int!) {
  data: local_my_findFirstMenu(where: {id: {equals: $id}}) {
    icon
    id
    label
    level
    parentId
    path
    sort
  }
}
```

6. 修改一个菜单

```graphql
mutation UpdateOneMenu($id: Int!, $sort: Int, $path: String, $level: Int, $label: String, $icon: String) {
  data: local_my_updateOneMenu(
    data: {sort: {set: $sort}, path: {set: $path}, level: {set: $level}, label: {set: $label}, icon: {set: $icon}}
    where: {id: $id}
  ) {
    id
  }
}
```

7. 删除一个菜单

```graphql
mutation DeleteOneMenu($id: Int) {
  data: local_my_deleteOneMenu(where: {id: $id}) {
    id
  }
}
```

8. 查询所有 API
  调 fireboom api

9. 查用户的角色列表

```grahpql
query GetUserRoles($userId: Int!) {
  data: local_my_findFirstUser(where: {id: {equals: $userId}}) @transform(get: "Role") {
    Role {
      code
      desc
      id
    }
  }
}
```

10. 用户关联角色
  1. 删除用户所有角色，目前只能先查然后通过循环调用

  ```graphql
  mutation DisconnectOneUserRole($userId: Int!, $roleCode: String!) {
    data: local_my_updateOneUser(where: {id: $userId}, data: {Role: {disconnect: {code: $roleCode}}}) {
      id
    }
  }
  ```

  2. 批量添加用户的角色，目前只能循环调用

  ```graphql
  mutation ConnectOneUserRole($userId: Int!, $roleCode: String!) {
    data: local_my_updateOneUser(where: {id: $userId}, data: {Role: {connect: {code: $roleCode}}}) {
      id
    }
  }
  ```

11. 查询角色的用户列表

```graphql
query GetRoleUsers($roleCode: String!) {
  data: local_my_findFirstRole(where: {code: {equals: $roleCode}}) @transform(get: "User") {
    User {
      id
      name
      provider
      providerId
      providerUserId
      avatarUrl
      createdAt
    }
  }
}
```

~~12. 分页查询所有不含某角色的用户列表

```graphql
query GetUsersWithoutRole($roleCode: String!, $take: Int = 10, $skip: Int = 0) {
  data: local_my_findManyUser(
    where: {Role: {every: {NOT: {code: {equals: $roleCode}}}}}
    skip: $skip
    take: $take
  ) {
    avatarUrl
    createdAt
    id
    name
    provider
    providerId
    providerUserId
  }
  total: local_my_aggregateUser(
    where: {Role: {every: {NOT: {code: {equals: $roleCode}}}}}
  ) @transform(get: "_count.id") {
    _count {
      id
    }
  }
}
```~~

12. 查询角色所拥有的菜单

```graphql
query GetRoleMenus($roleCode: String!) {
  data: local_my_findFirstRole(where: {code: {equals: $roleCode}}) @transform(get: "Menu") {
    Menu {
      sort
      path
      parentId
      level
      label
      id
      icon
    }
  }
}
```

13. 给角色关联菜单
  1. 删除角色的所有菜单，目前只能循环删除
  ```graphql
  mutation DisconnectOneRoleMenu($roleCode: String!, $menuId: Int!) {
    data: local_my_updateOneRole(where: {code: $roleCode}, data: {Menu: {disconnect: {id: $menuId}}}) {
      id
    }
  }

  ```
  2. 批量添加角色的菜单

  ```graphql
  mutation ConnectOneRoleMenu($roleCode: String!, $menuId: Int!) {
    data: local_my_updateOneRole(data: {Menu: {connect: {id: $menuId}}}, where: {code: $roleCode}) {
      id
    }
  }
  ```

14. 角色查API列表
  调 fireboom api

15. 角色关联多个API
  调 fireboom api

16. 同步用户
  1. 查询用户是否存在

  ```graphql
  query GetOneUser($providerId: String!, $providerUserId: String!) {
    data: local_my_findFirstUser(
      where: { providerId: {equals: $providerId}, providerUserId: {equals: $providerUserId }}
    ) {
      name
      id
    }
  }
  ```

  2. 如果用户不存在，则插入用户

  ```graphql
  mutation CreateOneUser($data: local_my_UserCreateInput!) {
    local_my_createOneUser(data: $data) {
      id
    }
  }
  ```

  3. 如果用户存在，则获取用户角色、菜单

  ```graphql
  query GetUserRoleMenu($providerId: String!, $providerUserId: String!) {
    data: local_my_findFirstUser(
      where: { providerId: {equals: $providerId}, providerUserId: {equals: $providerUserId }}
    ) {
      roles: Role {
        id
        desc
        code
        menus: Menu {
          icon
          id
          label
          level
          parentId
          path
          sort
        }
      }
      avatarUrl
      id
      name
    }
  }
  ```
  对应的 `postAuthentication.ts` 钩子内容如下

  ```ts
  import { Client } from '../generated/fireboom.client'
  import { AuthenticationHookRequest } from 'fireboom-wundersdk'

  export default async function postAuthentication(hook: AuthenticationHookRequest) : Promise<void>{
    if (hook.user) {
      const client = new Client({})
      const { avatarUrl, email, name, nickName, provider, providerId, userId } = hook.user
      const resp = await client.query.GetOneUser({
        input: {
          // provider: provider!,
          providerId: providerId!,
          providerUserId: userId!
        }
      })
      if (resp.status === 'ok') {
        if (!resp.body.errors) {
          const existedUser = resp.body.data!.data
          if (!existedUser) {
            const _name = nickName || name || email!
            const rest = await client.mutation.CreateOneUser({
              input: {
                data: {
                  name: _name,
                  provider: provider!,
                  providerId: providerId!,
                  providerUserId: userId!,
                  avatarUrl: avatarUrl
                }
              }
            })
            if (rest.status === 'ok') {
              if (!rest.body.errors) {
                console.info(`Success sync user: ${providerId} - ${_name}`)
              }
            }
          }
        }
      }
    }
  }
  ```
