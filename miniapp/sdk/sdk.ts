import { buildQuery, buildMutation, uploadFile, setAuthHeader, setBaseUrl, getBaseUrl } from './request'
import type { CreateOnePointRecordResponse,CreateOnePointRecordInput,FindOneAppUserResponse,FindOneAppUserInput,GeneratePictureWithAIResponse,GeneratePictureWithAIInput,GetArtWorkDetailResponse,GetArtWorkDetailInput,GetMyAlbumResponse,GetMyAlbumInput,GetMyDraftsResponse,GetMyDraftsInput,GetMyLikedResponse,GetMyLikedInput,GetMyPointRecordsResponse,GetMyPointRecordsInput,GetMyPublicAlbumResponse,GetMyPublicAlbumInput,GetUserinfoResponse,GetWorksByHotResponse,GetWorksByHotInput,GetWorksByNewestResponse,GetWorksByNewestInput,GetWorksByRecommendResponse,GetWorksByRecommendInput,LikeOneArtWorkResponse,LikeOneArtWorkInput,MoveDraftToAlbumResponse,MoveDraftToAlbumInput,PublishMyArtWorkResponse,PublishMyArtWorkInput,RecordMyInviterResponse,RecordMyInviterInput,UnlikeOneArtWorkResponse,UnlikeOneArtWorkInput,UsePointsResponse,UsePointsInput } from "./models";

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
    GetArtWorkDetail: buildQuery<GetArtWorkDetailResponse ,GetArtWorkDetailInput>('/operations/GetArtWorkDetail'),
    GetMyAlbum: buildQuery<GetMyAlbumResponse ,GetMyAlbumInput>('/operations/GetMyAlbum'),
    GetMyDrafts: buildQuery<GetMyDraftsResponse ,GetMyDraftsInput>('/operations/GetMyDrafts'),
    GetMyLiked: buildQuery<GetMyLikedResponse ,GetMyLikedInput>('/operations/GetMyLiked'),
    GetMyPointRecords: buildQuery<GetMyPointRecordsResponse ,GetMyPointRecordsInput>('/operations/GetMyPointRecords'),
    GetMyPublicAlbum: buildQuery<GetMyPublicAlbumResponse ,GetMyPublicAlbumInput>('/operations/GetMyPublicAlbum'),
    GetUserinfo: buildQuery<GetUserinfoResponse>('/operations/GetUserinfo'),
    GetWorksByHot: buildQuery<GetWorksByHotResponse ,GetWorksByHotInput>('/operations/GetWorksByHot'),
    GetWorksByNewest: buildQuery<GetWorksByNewestResponse ,GetWorksByNewestInput>('/operations/GetWorksByNewest'),
    GetWorksByRecommend: buildQuery<GetWorksByRecommendResponse ,GetWorksByRecommendInput>('/operations/GetWorksByRecommend'),
  },

  mutation: {
    CreateOnePointRecord: buildMutation<CreateOnePointRecordResponse ,CreateOnePointRecordInput>('/operations/CreateOnePointRecord'),
    GeneratePictureWithAI: buildMutation<GeneratePictureWithAIResponse ,GeneratePictureWithAIInput>('/operations/GeneratePictureWithAI'),
    LikeOneArtWork: buildMutation<LikeOneArtWorkResponse ,LikeOneArtWorkInput>('/operations/LikeOneArtWork'),
    MoveDraftToAlbum: buildMutation<MoveDraftToAlbumResponse ,MoveDraftToAlbumInput>('/operations/MoveDraftToAlbum'),
    PublishMyArtWork: buildMutation<PublishMyArtWorkResponse ,PublishMyArtWorkInput>('/operations/PublishMyArtWork'),
    RecordMyInviter: buildMutation<RecordMyInviterResponse ,RecordMyInviterInput>('/operations/RecordMyInviter'),
    UnlikeOneArtWork: buildMutation<UnlikeOneArtWorkResponse ,UnlikeOneArtWorkInput>('/operations/UnlikeOneArtWork'),
    UsePoints: buildMutation<UsePointsResponse ,UsePointsInput>('/operations/UsePoints'),
  },
  upload,
  setBaseUrl
}