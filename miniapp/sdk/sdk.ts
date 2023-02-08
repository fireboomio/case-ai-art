import { buildQuery, buildMutation, uploadFile, setAuthHeader, setBaseUrl, getBaseUrl } from './request'
import type { AResponse,FindOneAppUserResponse,FindOneAppUserInput,GetUserinfoResponse } from "./models";

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
    FindOneAppUser: buildQuery<FindOneAppUserResponse ,FindOneAppUserInput>('/operations/FindOneAppUser'),
    GetUserinfo: buildQuery<GetUserinfoResponse>('/operations/GetUserinfo'),
  },

  mutation: {
    A: buildMutation<AResponse>('/operations/A'),
  },
  upload,
  setBaseUrl
}