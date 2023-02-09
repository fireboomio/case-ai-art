import { buildQuery, buildMutation, uploadFile, setAuthHeader, setBaseUrl, getBaseUrl } from './request'
import type { CreateOneAdminUserResponse,CreateOneAdminUserInput,DeleteOneArtWorkResponse,DeleteOneArtWorkInput,GetAppUserListResponse,GetAppUserListInput,GetArtWorkListResponse,GetArtWorkListInput,GetCountResponse,GetManyAdminUserResponse,GetOneAppUserResponse,GetOneAppUserInput,GetTodayCountResponse,GetTodayCountInput,QueryStatisticResponse,UpdateOneAppUserResponse,UpdateOneAppUserInput } from "./models";

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
    GetAppUserList: buildQuery<GetAppUserListResponse ,GetAppUserListInput>('/operations/GetAppUserList'),
    GetArtWorkList: buildQuery<GetArtWorkListResponse ,GetArtWorkListInput>('/operations/GetArtWorkList'),
    GetCount: buildQuery<GetCountResponse>('/operations/GetCount'),
    GetManyAdminUser: buildQuery<GetManyAdminUserResponse>('/operations/GetManyAdminUser'),
    GetOneAppUser: buildQuery<GetOneAppUserResponse ,GetOneAppUserInput>('/operations/GetOneAppUser'),
    GetTodayCount: buildQuery<GetTodayCountResponse ,GetTodayCountInput>('/operations/GetTodayCount'),
    QueryStatistic: buildQuery<QueryStatisticResponse>('/operations/QueryStatistic'),
  },

  mutation: {
    CreateOneAdminUser: buildMutation<CreateOneAdminUserResponse ,CreateOneAdminUserInput>('/operations/CreateOneAdminUser'),
    DeleteOneArtWork: buildMutation<DeleteOneArtWorkResponse ,DeleteOneArtWorkInput>('/operations/DeleteOneArtWork'),
    UpdateOneAppUser: buildMutation<UpdateOneAppUserResponse ,UpdateOneAppUserInput>('/operations/UpdateOneAppUser'),
  },
  upload,
  setBaseUrl
}