import axios from 'axios'
import { IMenu } from '../features/identity/menu/interfaces'
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react'
import { IApi } from '../features/identity/permission/interfaces'
import { IRole } from '../features/identity/role/interfaces'
import { emtpyMenu } from '@/features/empty'

export type UserInfo = {
  name?: string
  avatarUrl: string
  provider: string
  providerId: string
  roles: string[] | null
  userId: string
}

export type UserState = {
  user: UserInfo | null
  roles: IRole[]
  menus: IMenu[]
  apis: IApi[]
  isAuthenticated: boolean
  isLoading: boolean
  login: () => Promise<void> | void
  logout: () => Promise<void>
  checkAuthentication: () => Promise<boolean>
}

/** @ts-ignore */
const AuthenticationContext = createContext<UserState>(null)

export function useAuth() {
  return useContext(AuthenticationContext)
}

export function AuthenticationProvider({ children }: { children?: ReactNode }) {
  const [user, setUser] = useState<UserState['user']>(null)
  const [roles, setRoles] = useState<IRole[]>([])
  const [menus, setMenus] = useState<IMenu[]>([])
  const [apis, setApis] = useState<IApi[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const login = useCallback(() => {
    window.location.href = `http://localhost:9991/auth/cookie/authorize/authing?redirect_uri=${encodeURIComponent(
      `${window.location.origin}/oidc/callback`
    )}`
  }, [])

  const logout = useCallback(() => {
    axios.get('/auth/cookie/user/logout', {
        params: { logout_openid_connect_provider: 'true' }
      })
  }, [])

  const fetchUserPermissions = useCallback(async (user?: UserInfo) => {
    if (user) {
      console.log(user)
      console.log('====','/operations/GetUserRoleMenu', {
        params: { providerId: user.providerId, providerUserId: user.userId }
      })
      const res = await axios.get('/operations/GetUserRoleMenu', {
        params: { providerId: user.providerId, providerUserId: user.userId }
      })
      if (res.status < 300) {
        const data = res.data.data.data
        if (data) {
          setRoles(roles)
          setMenus(roles.reduce((arr, role) => {
            arr.push(...role.menus)
            return arr
          }, []))
          // // TODO
          // setApis(_roles.reduce<IApi[]>((arr, item) => {
          //   // @ts-ignore
          //   arr.push(...item.apis)
          //   return arr
          // }, []))
        }
      }
    }
  }, [])

  const checkAuthentication = useCallback(() => {
    setIsLoading(true)
    return axios
      .get('/api/v1/oidc/userInfo', {
        withCredentials: true,
      })
      .then((data) => {
        if (data.status < 300 && data.status >= 200) {
          setUser(data.data as UserInfo)
          return data.data as UserInfo
        }
      })
      .catch(() => {})
      .then((ret) => {
        setIsLoading(false)
        setMenus([emtpyMenu])
        return fetchUserPermissions(ret ?? undefined).then(() => ret ? true : false).catch(() => false)
        // return false
      })
  }, [])

  useEffect(() => {
    checkAuthentication()
  }, [])

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        menus,
        apis,
        roles,
        login,
        logout,
        checkAuthentication,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}
