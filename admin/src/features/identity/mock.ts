import { IUser } from './user/interfaces'
import { IRole, IRoleWithApi } from './role/interfaces'
import { IMenu } from './menu/interfaces'

export const mockUsers: IUser[] = [
  { id: 1, name: 'Admin', provider: 'oidc', providerId: 'authing', createdAt: new Date().toISOString() },
  { id: 2, name: 'Guest', provider: 'oidc', providerId: 'auth0', createdAt: new Date().toISOString() },
  { id: 3, name: 'User', provider: 'oidc', providerId: 'authing', createdAt: new Date().toISOString() },
]

export const mockRoles: IRole[] = [
  { id: 1, code: 'admin', desc: '管理员' },
  { id: 2, code: 'guest', desc: '访客' },
]

export const mockMyRoles: IRoleWithApi[] = [
  { id: 1, code: 'admin', desc: '管理员', apis: [
    {
      id: 1,
      path: 'GetUserList'
    },
    {
      id: 2,
      path: 'GetPetList'
    }
  ] },
]

export const mockMenus: IMenu[] = [
  { id: 1, label: '控制台', parentId: null, path: 'Dashboard', level: 1, sort: 10 },
  { id: 2, label: '系统管理', parentId: null, path: 'Manage', level: 1, sort: 9 },
  { id: 3, label: '用户管理', parentId: 2, path: 'User', level: 2, sort: 10 },
  { id: 4, label: '角色管理', parentId: 2, path: 'Role', level: 2, sort: 9 },
  { id: 5, label: '菜单管理', parentId: 2, path: 'Menu', level: 2, sort: 8 },
  { id: 6, label: 'API管理', parentId: 2, path: 'Api', level: 2, sort: 7 },
  { id: 7, label: '宠物管理', parentId: null, path: 'Pet', level: 1, sort: 8 },
]

export const mockMyMenus = [...mockMenus]
