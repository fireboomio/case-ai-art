import {Refine, ResourceProps} from '@pankod/refine-core'
import {notificationProvider, Layout, ReadyPage, ErrorComponent, Result} from '@pankod/refine-antd'

import '@pankod/refine-antd/dist/styles.min.css'
// import 'antd/es/style/variable.less'
import routerProvider from '@pankod/refine-react-router-v6'
import AntConfigProvider from './providers/AntConfigProvider'
import {LoginPage} from './features/oidc/login'

import CallbackPage from './features/oidc/callback'
import {useAuth} from './providers/AuthenticationContext'
import {FireboomDataProvider, OperationDataProvider} from './providers/dataProvider'
import {RoleList} from './features/identity/role'
import {MenuList} from './features/identity/menu'
import {ApiList} from './features/identity/permission'
import {ArtWorkCreate, ArtWorkEdit, ArtWorkList, ArtWorkShow} from './features/artwork'
import {AppUserCreate, AppUserEdit, AppUserList, AppUserShow} from './features/user'
import {DashboardList} from './features/dashboard'


// const allResources = {
//   User: {
//     list: UserList,
//   },
//   Role: {
//     list: RoleList,
//   },
//   Menu: {
//     list: MenuList,
//   },
//   Api: {
//     list: ApiList,
//   },
//   Pet: {
//     list: PetList,
//     create: PetCreate,
//     edit: PetEdit,
//     show: PetShow,
//   },
// }

function App() {
  const {isAuthenticated, user, isLoading, logout, menus} = useAuth()

  if (isLoading) {
    return <div>loading..</div>
  }

  // const resources: ResourceProps[] = []
  // const routeMap: Record<number, string> = {}
  // for (const menu of menus) {
  //   if (!routeMap[menu.id]) {
  //     routeMap[menu.id] = menu.path.replace(/\//g, '')
  //   }
  //   const res: ResourceProps = {
  //     name: menu.path,
  //     options: {
  //       label: menu.label,
  //     },
  //   }
  //   if (menu.parentId) {
  //     res.parentName = routeMap[menu.parentId]
  //   }
  //   const route = menu.path.replace(/\//g, '')
  //   res.options!.route = route
  //   const resKey = route
  //   Object.assign(res, allResources[resKey as keyof typeof allResources])
  //   resources.push(res)
  // }
  //
  // console.log(resources)

  return (
    <AntConfigProvider theme={{primaryColor: '#F21212'}}>
      <Refine
        notificationProvider={notificationProvider}
        Layout={Layout}
        LoginPage={LoginPage}
        ReadyPage={ReadyPage}
        catchAll={<ErrorComponent/>}
        authProvider={{
          login: () => {
            console.log('auth login')
            return Promise.resolve()
          },
          logout: () => {
            console.log('auth logout')
            return logout()
          },
          checkAuth: () => {
            console.log('auth isAuthenticated', isAuthenticated)
            return isAuthenticated ? Promise.resolve() : Promise.reject()
          },
          checkError: (error) => {
            console.log('auth checkError', error)
            if (error.status === 401) {
              return Promise.reject('/login')
            }
            return Promise.resolve()
          },
          getPermissions: () => {
            console.log('auth getPermissions')
            return Promise.resolve()
          },
          getUserIdentity() {
            console.log('auth getUserIdentity')
            if (user) {
              return Promise.resolve({
                ...user,
                avatar: user.avatarUrl,
              })
            }
            return Promise.reject()
          },
        }}
        routerProvider={{
          ...routerProvider,
          routes: [
            {
              path: '/oidc/callback',
              element: <CallbackPage/>,
            },
            {
              path: '/500',
              element: <Result status="500" title="500" subTitle="Sorry, something went wrong."/>,
            },
          ],
        }}
        dataProvider={{
          default: OperationDataProvider(),
          proxy: FireboomDataProvider(),
        }}
        resources={[
          {
            options: {
              label: '作品列表',
            },
            key: 'Role',
            name: 'ArtWork',
            list: ArtWorkList,
            create: ArtWorkCreate,
            edit: ArtWorkEdit,
            show: ArtWorkShow,
          },
          {
            options: {
              label: '用户列表',
            },
            name: 'AppUser',
            list: AppUserList,
            create: AppUserCreate,
            edit: AppUserEdit,
            show: AppUserShow,
          },
          {
            options: {
              label: '数据统计',
            },
            name: 'Dashboard',
            list: DashboardList,
          }
        ]}
      />
    </AntConfigProvider>
  )
}

export default App
