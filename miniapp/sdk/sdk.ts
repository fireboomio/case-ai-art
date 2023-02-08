import { buildQuery, buildMutation, uploadFile, setAuthHeader, setBaseUrl, getBaseUrl } from './request'
import type { CreateOneShareResponse,CreateOneShareInput,FindOneAppUserResponse,FindOneAppUserInput,GeneratePictureWithAIResponse,GeneratePictureWithAIInput,GetArtWorkDetailResponse,GetArtWorkDetailInput,GetDraftWorksResponse,GetDraftWorksInput,GetMyAlbumResponse,GetMyAlbumInput,GetMyDraftsResponse,GetMyDraftsInput,GetMyLikedResponse,GetMyLikedInput,GetMyPointRecordsResponse,GetMyPointRecordsInput,GetMyPublicAlbumResponse,GetMyPublicAlbumInput,GetOneAppUserResponse,GetOneAppUserInput,GetUserinfoResponse,GetWorksByHotResponse,GetWorksByHotInput,GetWorksByNewestResponse,GetWorksByNewestInput,GetWorksByRecommendResponse,GetWorksByRecommendInput,IncreaseArtWorkShareCountResponse,IncreaseArtWorkShareCountInput,LikeOneArtWorkResponse,LikeOneArtWorkInput,MoveDraftToAlbumResponse,MoveDraftToAlbumInput,PublishMyArtWorkResponse,PublishMyArtWorkInput,RecordMyInviterResponse,RecordMyInviterInput,ShareArtWorkToPublicResponse,ShareArtWorkToPublicInput,TestClaimResponse,UnlikeOneArtWorkResponse,UnlikeOneArtWorkInput,UpdateOneAppUserResponse,UpdateOneAppUserInput,UsePointsResponse,UsePointsInput } from "./models";

setBaseUrl('http://127.0.0.1:9991')

const s3Providers = {
  a: {
    "endpoint" : "a",
    "bucketName" : "a",
    "useSSL" : false,
  },
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
    GetDraftWorks: buildQuery<GetDraftWorksResponse ,GetDraftWorksInput>('/operations/GetDraftWorks'),
    GetMyAlbum: buildQuery<GetMyAlbumResponse ,GetMyAlbumInput>('/operations/GetMyAlbum'),
    GetMyDrafts: buildQuery<GetMyDraftsResponse ,GetMyDraftsInput>('/operations/GetMyDrafts'),
    GetMyLiked: buildQuery<GetMyLikedResponse ,GetMyLikedInput>('/operations/GetMyLiked'),
    GetMyPointRecords: buildQuery<GetMyPointRecordsResponse ,GetMyPointRecordsInput>('/operations/GetMyPointRecords'),
    GetMyPublicAlbum: buildQuery<GetMyPublicAlbumResponse ,GetMyPublicAlbumInput>('/operations/GetMyPublicAlbum'),
    GetOneAppUser: buildQuery<GetOneAppUserResponse ,GetOneAppUserInput>('/operations/GetOneAppUser'),
    GetUserinfo: buildQuery<GetUserinfoResponse>('/operations/GetUserinfo'),
    GetWorksByHot: buildQuery<GetWorksByHotResponse ,GetWorksByHotInput>('/operations/GetWorksByHot'),
    GetWorksByNewest: buildQuery<GetWorksByNewestResponse ,GetWorksByNewestInput>('/operations/GetWorksByNewest'),
    GetWorksByRecommend: buildQuery<GetWorksByRecommendResponse ,GetWorksByRecommendInput>('/operations/GetWorksByRecommend'),
    TestClaim: buildQuery<TestClaimResponse>('/operations/TestClaim'),
  },

  mutation: {
    CreateOneShare: buildMutation<CreateOneShareResponse ,CreateOneShareInput>('/operations/CreateOneShare'),
    GeneratePictureWithAI: buildMutation<GeneratePictureWithAIResponse ,GeneratePictureWithAIInput>('/operations/GeneratePictureWithAI'),
    IncreaseArtWorkShareCount: buildMutation<IncreaseArtWorkShareCountResponse ,IncreaseArtWorkShareCountInput>('/operations/IncreaseArtWorkShareCount'),
    LikeOneArtWork: buildMutation<LikeOneArtWorkResponse ,LikeOneArtWorkInput>('/operations/LikeOneArtWork'),
    MoveDraftToAlbum: buildMutation<MoveDraftToAlbumResponse ,MoveDraftToAlbumInput>('/operations/MoveDraftToAlbum'),
    PublishMyArtWork: buildMutation<PublishMyArtWorkResponse ,PublishMyArtWorkInput>('/operations/PublishMyArtWork'),
    RecordMyInviter: buildMutation<RecordMyInviterResponse ,RecordMyInviterInput>('/operations/RecordMyInviter'),
    ShareArtWorkToPublic: buildMutation<ShareArtWorkToPublicResponse ,ShareArtWorkToPublicInput>('/operations/ShareArtWorkToPublic'),
    UnlikeOneArtWork: buildMutation<UnlikeOneArtWorkResponse ,UnlikeOneArtWorkInput>('/operations/UnlikeOneArtWork'),
    UpdateOneAppUser: buildMutation<UpdateOneAppUserResponse ,UpdateOneAppUserInput>('/operations/UpdateOneAppUser'),
    UsePoints: buildMutation<UsePointsResponse ,UsePointsInput>('/operations/UsePoints'),
  },
  upload,
  setBaseUrl
}