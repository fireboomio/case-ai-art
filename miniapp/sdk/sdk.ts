import { buildQuery, buildMutation, uploadFile, setAuthHeader, setBaseUrl, getBaseUrl } from './request'
import type { ConnectOneRoleMenuResponse,ConnectOneRoleMenuInput,ConnectOneUserRoleResponse,ConnectOneUserRoleInput,CreateOneMenuResponse,CreateOneMenuInput,CreateOneUserResponse,CreateOneUserInput,DeleteOneMenuResponse,DeleteOneMenuInput,DisconnectOneRoleMenuResponse,DisconnectOneRoleMenuInput,DisconnectOneUserRoleResponse,DisconnectOneUserRoleInput,GetMenuListResponse,GetOneMenuResponse,GetOneMenuInput,GetOneUserResponse,GetOneUserInput,GetRoleListResponse,GetRoleMenusResponse,GetRoleMenusInput,GetRoleUsersResponse,GetRoleUsersInput,GetUserListResponse,GetUserListInput,GetUserRoleMenuResponse,GetUserRoleMenuInput,GetUserRolesResponse,GetUserRolesInput,GetUsersWithoutRoleResponse,GetUsersWithoutRoleInput,UpdateOneMenuResponse,UpdateOneMenuInput } from "./models";

setBaseUrl('http://127.0.0.1:9991')

const s3Providers = {
}


function upload(serverName, filePath, fileName) {
  const s3Config = s3Providers[serverName]
  if (!s3Config) {
    return null
  }
  return uploadFile({
    url: `${getBaseUrl()}/app/main/s3/${serverName}/upload`,
    filePath,
    name: fileName
  }).then(res => {
    const data = JSON.parse(res.data)
    const key = data && data[0] && data[0].key
    const {useSSL, bucketName, endpoint} = s3Config
    return `${useSSL ? `https` : `http`}://${bucketName}.${endpoint}/${key}`
  })
}
export default {
  query: {
    GetMenuList: buildQuery<GetMenuListResponse>('/operations/GetMenuList'),
    GetOneMenu: buildQuery<GetOneMenuResponse ,GetOneMenuInput>('/operations/GetOneMenu'),
    GetOneUser: buildQuery<GetOneUserResponse ,GetOneUserInput>('/operations/GetOneUser'),
    GetRoleList: buildQuery<GetRoleListResponse>('/operations/GetRoleList'),
    GetRoleMenus: buildQuery<GetRoleMenusResponse ,GetRoleMenusInput>('/operations/GetRoleMenus'),
    GetRoleUsers: buildQuery<GetRoleUsersResponse ,GetRoleUsersInput>('/operations/GetRoleUsers'),
    GetUserList: buildQuery<GetUserListResponse ,GetUserListInput>('/operations/GetUserList'),
    GetUserRoleMenu: buildQuery<GetUserRoleMenuResponse ,GetUserRoleMenuInput>('/operations/GetUserRoleMenu'),
    GetUserRoles: buildQuery<GetUserRolesResponse ,GetUserRolesInput>('/operations/GetUserRoles'),
    GetUsersWithoutRole: buildQuery<GetUsersWithoutRoleResponse ,GetUsersWithoutRoleInput>('/operations/GetUsersWithoutRole'),
  },

  mutation: {
    ConnectOneRoleMenu: buildMutation<ConnectOneRoleMenuResponse ,ConnectOneRoleMenuInput>('/operations/ConnectOneRoleMenu'),
    ConnectOneUserRole: buildMutation<ConnectOneUserRoleResponse ,ConnectOneUserRoleInput>('/operations/ConnectOneUserRole'),
    CreateOneMenu: buildMutation<CreateOneMenuResponse ,CreateOneMenuInput>('/operations/CreateOneMenu'),
    CreateOneUser: buildMutation<CreateOneUserResponse ,CreateOneUserInput>('/operations/CreateOneUser'),
    DeleteOneMenu: buildMutation<DeleteOneMenuResponse ,DeleteOneMenuInput>('/operations/DeleteOneMenu'),
    DisconnectOneRoleMenu: buildMutation<DisconnectOneRoleMenuResponse ,DisconnectOneRoleMenuInput>('/operations/DisconnectOneRoleMenu'),
    DisconnectOneUserRole: buildMutation<DisconnectOneUserRoleResponse ,DisconnectOneUserRoleInput>('/operations/DisconnectOneUserRole'),
    UpdateOneMenu: buildMutation<UpdateOneMenuResponse ,UpdateOneMenuInput>('/operations/UpdateOneMenu'),
  },
  upload,
  setBaseUrl
}