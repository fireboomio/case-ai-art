
export interface InternalCreateOneAppUserInput {
data: art_AppUserCreateInput
}

export interface InternalCreateOneCreationInput {
args: string
}

export interface InternalCreateOneDraftInput {
creationId: number
url: string
}

export interface InternalCreateOnePointRecordInput {
point: number
userId: string
way: string
}

export interface InternalDecreaseArtWorkLikeCountInput {
id: number
}

export interface InternalDecreasePointsInput {
points: number
}

export interface InternalFindOneAppUserInput {
id: string
}

export interface InternalGeneratePictureWithAIInput {
args: string
}

export interface InternalGetArtWorkDetailInput {
id: number
}

export interface InternalGetMyAlbumInput {
take?: number
skip?: number
}

export interface InternalGetMyDraftsInput {
skip?: number
take?: number
}

export interface InternalGetMyLikedInput {
skip?: number
take?: number
}

export interface InternalGetMyPointRecordsInput {
way?: string[],timeStart: string
}

export interface InternalGetMyPublicAlbumInput {
skip?: number
take?: number
}

export interface InternalGetWorksByHotInput {
skip?: number
take?: number
}

export interface InternalGetWorksByNewestInput {
skip?: number
take?: number
}

export interface InternalGetWorksByRecommendInput {
skip?: number
take?: number
}

export interface InternalIncreaseArtWorkLikeCountInput {
id: number
}

export interface InternalIncreaseArtWorkShareCountInput {
id: number
}

export interface InternalIncreasePointsInput {
points: number
}

export interface InternalLikeOneArtWorkInput {
artWorkId: number
}

export interface InternalMoveDraftToAlbumInput {
id: number
}

export interface InternalPublishMyArtWorkInput {
id: number
}

export interface InternalRecordMyInviterInput {
inviterId: string
}

export interface InternalUnlikeOneArtWorkInput {
artWorkId: number
}



export interface InjectedCreateOneAppUserInput {
data: art_AppUserCreateInput
}

export interface InjectedCreateOneCreationInput {
args: string
userId: string
}

export interface InjectedCreateOneDraftInput {
creationId: number
url: string
}

export interface InjectedCreateOnePointRecordInput {
userId: string
way: string
point: number
}

export interface InjectedDecreaseArtWorkLikeCountInput {
id: number
}

export interface InjectedDecreasePointsInput {
points: number
id: string
}

export interface InjectedFindOneAppUserInput {
id: string
}

export interface InjectedGeneratePictureWithAIInput {
userId: string
args: string
}

export interface InjectedGetArtWorkDetailInput {
id: number
userId: string
}

export interface InjectedGetMyAlbumInput {
skip?: number
take?: number
userId: string
}

export interface InjectedGetMyDraftsInput {
skip?: number
take?: number
userId: string
}

export interface InjectedGetMyLikedInput {
skip?: number
take?: number
userId: string
}

export interface InjectedGetMyPointRecordsInput {
timeStart: string
userId: string
way?: string[],}

export interface InjectedGetMyPublicAlbumInput {
skip?: number
take?: number
userId: string
}

export interface InjectedGetUserinfoInput {
userId?: string
}

export interface InjectedGetWorksByHotInput {
skip?: number
take?: number
}

export interface InjectedGetWorksByNewestInput {
take?: number
skip?: number
}

export interface InjectedGetWorksByRecommendInput {
take?: number
skip?: number
}

export interface InjectedIncreaseArtWorkLikeCountInput {
id: number
}

export interface InjectedIncreaseArtWorkShareCountInput {
id: number
}

export interface InjectedIncreasePointsInput {
points: number
id: string
}

export interface InjectedLikeOneArtWorkInput {
artWorkId: number
userId: string
}

export interface InjectedMoveDraftToAlbumInput {
id: number
}

export interface InjectedPublishMyArtWorkInput {
date?: string
id: number
}

export interface InjectedRecordMyInviterInput {
userId: string
inviterId: string
}

export interface InjectedUnlikeOneArtWorkInput {
artWorkId: number
userId: string
}

export interface InjectedUsePointsInput {
id: string
}



export interface CreateOneAppUserResponse {
data?: CreateOneAppUserResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface CreateOneCreationResponse {
data?: CreateOneCreationResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface CreateOneDraftResponse {
data?: CreateOneDraftResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface CreateOnePointRecordResponse {
data?: CreateOnePointRecordResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface DecreaseArtWorkLikeCountResponse {
data?: DecreaseArtWorkLikeCountResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface DecreasePointsResponse {
data?: DecreasePointsResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface FindOneAppUserResponse {
data?: FindOneAppUserResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GeneratePictureWithAIResponse {
data?: GeneratePictureWithAIResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetArtWorkDetailResponse {
data?: GetArtWorkDetailResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetMyAlbumResponse {
data?: GetMyAlbumResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetMyDraftsResponse {
data?: GetMyDraftsResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetMyLikedResponse {
data?: GetMyLikedResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetMyPointRecordsResponse {
data?: GetMyPointRecordsResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetMyPublicAlbumResponse {
data?: GetMyPublicAlbumResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetUserinfoResponse {
data?: GetUserinfoResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetWorksByHotResponse {
data?: GetWorksByHotResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetWorksByNewestResponse {
data?: GetWorksByNewestResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetWorksByRecommendResponse {
data?: GetWorksByRecommendResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface IncreaseArtWorkLikeCountResponse {
data?: IncreaseArtWorkLikeCountResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface IncreaseArtWorkShareCountResponse {
data?: IncreaseArtWorkShareCountResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface IncreasePointsResponse {
data?: IncreasePointsResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface LikeOneArtWorkResponse {
data?: LikeOneArtWorkResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface MoveDraftToAlbumResponse {
data?: MoveDraftToAlbumResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface PublishMyArtWorkResponse {
data?: PublishMyArtWorkResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface RecordMyInviterResponse {
data?: RecordMyInviterResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface UnlikeOneArtWorkResponse {
data?: UnlikeOneArtWorkResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface UsePointsResponse {
data?: UsePointsResponseData
errors?: ReadonlyArray<GraphQLError>;
}



export interface CreateOneAppUserResponseData {
data?: {
id: string
},
}

export interface CreateOneCreationResponseData {
data?: {
id: number
},
}

export interface CreateOneDraftResponseData {
data?: {
id: number
url: string
},
}

export interface CreateOnePointRecordResponseData {
data?: {
id: number
},
}

export interface DecreaseArtWorkLikeCountResponseData {
data?: {
id: number
},
}

export interface DecreasePointsResponseData {
data?: {
id: string
},
}

export interface FindOneAppUserResponseData {
data?: {
phone?: string
provider: string
points: number
providerId: string
AppUser?: {
id: string
},
avatar: string
createdAt: string
id: string
inviteById?: string
nickname: string
},
}

export interface GeneratePictureWithAIResponseData {
data?: {
id?: string
url?: string
},
}

export interface GetArtWorkDetailResponseData {
data?: {
args: string
isDraft: boolean
likeCount: number
likeRecords?: {
id: number
}[],published: boolean
url: string
user: {
id: string
nickname: string
avatar: string
},
id: number
sharedCount: number
},
}

export interface GetMyAlbumResponseData {
data: {
recommendRate: number
sharedCount: number
url: string
id: number
likeCount: number
publishAt?: string
published: boolean
}[],}

export interface GetMyDraftsResponseData {
data: {
count: {
ArtWork: number
},
id: number
}[],}

export interface GetMyLikedResponseData {
data: {
artWork: {
sharedCount: number
url: string
id: number
likeCount: number
},
}[],}

export interface GetMyPointRecordsResponseData {
data: {
way: JSONValue
id: number
}[],}

export interface GetMyPublicAlbumResponseData {
data: {
sharedCount: number
url: string
id: number
likeCount: number
}[],}

export interface GetUserinfoResponseData {
data?: {
points: number
avatar: string
id: string
nickname: string
phone?: string
},
}

export interface GetWorksByHotResponseData {
data: {
id: number
likeCount: number
sharedCount: number
url: string
}[],}

export interface GetWorksByNewestResponseData {
data: {
likeCount: number
sharedCount: number
url: string
id: number
}[],}

export interface GetWorksByRecommendResponseData {
data: {
recommendRate: number
sharedCount: number
url: string
id: number
likeCount: number
}[],}

export interface IncreaseArtWorkLikeCountResponseData {
data?: {
id: number
},
}

export interface IncreaseArtWorkShareCountResponseData {
data?: {
id: number
},
}

export interface IncreasePointsResponseData {
data?: {
id: string
},
}

export interface LikeOneArtWorkResponseData {
data?: {
id: number
},
}

export interface MoveDraftToAlbumResponseData {
data?: {
id: number
},
}

export interface PublishMyArtWorkResponseData {
data?: {
id: number
publishAt?: string
published: boolean
},
}

export interface RecordMyInviterResponseData {
data?: {
id: string
},
}

export interface UnlikeOneArtWorkResponseData {
data?: {
count: number
},
}

export interface UsePointsResponseData {
data?: {
id: number
},
}





export interface art_AppUserCreateOrConnectWithoutOther_AppUserInput {
create?: art_AppUserCreateWithoutOther_AppUserInput
where?: art_AppUserWhereUniqueInput
}

export interface art_LikeRecordCreateManyAppUserInputEnvelope {
data?: art_LikeRecordCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_LikeRecordCreateManyArtWorkInputEnvelope {
data?: art_LikeRecordCreateManyArtWorkInput[],skipDuplicates?: boolean
}

export interface art_ArtWorkCreateManyCreationInputEnvelope {
data?: art_ArtWorkCreateManyCreationInput[],skipDuplicates?: boolean
}

export interface art_AppUserCreateWithoutOther_AppUserInput {
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
avatar?: string
createdAt?: string
provider?: string
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
id?: string
nickname?: string
phone?: string
points?: number
providerId?: string
}

export interface art_AppUserCreateInput {
provider: string
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
id: string
nickname: string
phone?: string
points?: number
providerId: string
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
avatar: string
createdAt?: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
}

export interface art_ArtWorkCreateNestedManyWithoutCreationInput {
connect?: art_ArtWorkWhereUniqueInput
connectOrCreate?: art_ArtWorkCreateOrConnectWithoutCreationInput
create?: art_ArtWorkCreateWithoutCreationInput
createMany?: art_ArtWorkCreateManyCreationInputEnvelope
}

export interface art_ArtWorkCreateWithoutCreationInput {
url?: string
LikeRecord?: art_LikeRecordCreateNestedManyWithoutArtWorkInput
isDraft?: boolean
likeCount?: number
publishAt?: string
published?: boolean
recommendRate?: number
sharedCount?: number
}

export interface art_CreationCreateOrConnectWithoutArtWorkInput {
create?: art_CreationCreateWithoutArtWorkInput
where?: art_CreationWhereUniqueInput
}

export interface art_CreationWhereUniqueInput {
id?: number
}

export interface art_PointRecordCreateWithoutAppUserInput {
createdAt?: string
point?: number
way?: string
}

export interface art_CreationCreateNestedOneWithoutArtWorkInput {
connectOrCreate?: art_CreationCreateOrConnectWithoutArtWorkInput
create?: art_CreationCreateWithoutArtWorkInput
connect?: art_CreationWhereUniqueInput
}

export interface art_CreationCreateManyAppUserInputEnvelope {
data?: art_CreationCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_AppUserCreateManyAppUserInputEnvelope {
data?: art_AppUserCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_CreationCreateNestedManyWithoutAppUserInput {
createMany?: art_CreationCreateManyAppUserInputEnvelope
connect?: art_CreationWhereUniqueInput
connectOrCreate?: art_CreationCreateOrConnectWithoutAppUserInput
create?: art_CreationCreateWithoutAppUserInput
}

export interface art_AppUserCreateWithoutLikeRecordInput {
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
points?: number
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
id: string
nickname: string
createdAt?: string
phone?: string
provider: string
providerId: string
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
avatar: string
}

export interface art_LikeRecordCreateManyAppUserInput {
createdAt?: string
id?: number
artWorkId?: number
}

export interface art_LikeRecordCreateNestedManyWithoutArtWorkInput {
connect?: art_LikeRecordWhereUniqueInput
connectOrCreate?: art_LikeRecordCreateOrConnectWithoutArtWorkInput
create?: art_LikeRecordCreateWithoutArtWorkInput
createMany?: art_LikeRecordCreateManyArtWorkInputEnvelope
}

export interface art_LikeRecordCreateWithoutArtWorkInput {
AppUser?: art_AppUserCreateNestedOneWithoutLikeRecordInput
createdAt?: string
}

export interface art_PointRecordCreateOrConnectWithoutAppUserInput {
where?: art_PointRecordWhereUniqueInput
create?: art_PointRecordCreateWithoutAppUserInput
}

export interface art_AppUserCreateNestedOneWithoutCreationInput {
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutCreationInput
create?: art_AppUserCreateWithoutCreationInput
}

export interface art_AppUserCreateOrConnectWithoutAppUserInput {
create?: art_AppUserCreateWithoutAppUserInput
where?: art_AppUserWhereUniqueInput
}

export interface art_CreationCreateManyAppUserInput {
createdAt?: string
id?: number
args?: string
}

export interface art_ArtWorkCreateOrConnectWithoutCreationInput {
create?: art_ArtWorkCreateWithoutCreationInput
where?: art_ArtWorkWhereUniqueInput
}

export interface art_LikeRecordWhereUniqueInput {
id?: number
}

export interface art_PointRecordCreateManyAppUserInput {
createdAt?: string
id?: number
point?: number
way?: string
}

export interface art_LikeRecordCreateNestedManyWithoutAppUserInput {
connect?: art_LikeRecordWhereUniqueInput
connectOrCreate?: art_LikeRecordCreateOrConnectWithoutAppUserInput
create?: art_LikeRecordCreateWithoutAppUserInput
createMany?: art_LikeRecordCreateManyAppUserInputEnvelope
}

export interface art_AppUserCreateWithoutAppUserInput {
providerId?: string
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
avatar?: string
id?: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
phone?: string
points?: number
provider?: string
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
createdAt?: string
nickname?: string
}

export interface art_CreationCreateOrConnectWithoutAppUserInput {
create?: art_CreationCreateWithoutAppUserInput
where?: art_CreationWhereUniqueInput
}

export interface art_ArtWorkWhereUniqueInput {
id?: number
}

export interface art_AppUserCreateOrConnectWithoutCreationInput {
create?: art_AppUserCreateWithoutCreationInput
where?: art_AppUserWhereUniqueInput
}

export interface art_PointRecordCreateNestedManyWithoutAppUserInput {
connect?: art_PointRecordWhereUniqueInput
connectOrCreate?: art_PointRecordCreateOrConnectWithoutAppUserInput
create?: art_PointRecordCreateWithoutAppUserInput
createMany?: art_PointRecordCreateManyAppUserInputEnvelope
}

export interface art_LikeRecordCreateManyArtWorkInput {
userId?: string
createdAt?: string
id?: number
}

export interface art_LikeRecordCreateOrConnectWithoutArtWorkInput {
create?: art_LikeRecordCreateWithoutArtWorkInput
where?: art_LikeRecordWhereUniqueInput
}

export interface art_AppUserWhereUniqueInput {
id?: string
}

export interface art_AppUserCreateManyAppUserInput {
points?: number
provider?: string
providerId?: string
avatar?: string
createdAt?: string
id?: string
nickname?: string
phone?: string
}

export interface art_ArtWorkCreateWithoutLikeRecordInput {
publishAt?: string
published?: boolean
recommendRate?: number
sharedCount?: number
url?: string
Creation?: art_CreationCreateNestedOneWithoutArtWorkInput
isDraft?: boolean
likeCount?: number
}

export interface art_PointRecordCreateManyAppUserInputEnvelope {
data?: art_PointRecordCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_AppUserCreateNestedManyWithoutAppUserInput {
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutAppUserInput
create?: art_AppUserCreateWithoutAppUserInput
createMany?: art_AppUserCreateManyAppUserInputEnvelope
}

export interface art_AppUserCreateNestedOneWithoutLikeRecordInput {
create?: art_AppUserCreateWithoutLikeRecordInput
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutLikeRecordInput
}

export interface art_CreationCreateWithoutAppUserInput {
ArtWork?: art_ArtWorkCreateNestedManyWithoutCreationInput
args?: string
createdAt?: string
}

export interface art_ArtWorkCreateOrConnectWithoutLikeRecordInput {
create?: art_ArtWorkCreateWithoutLikeRecordInput
where?: art_ArtWorkWhereUniqueInput
}

export interface art_ArtWorkCreateManyCreationInput {
recommendRate?: number
sharedCount?: number
url?: string
id?: number
isDraft?: boolean
likeCount?: number
publishAt?: string
published?: boolean
}

export interface art_AppUserCreateWithoutCreationInput {
provider?: string
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
id?: string
nickname?: string
phone?: string
points?: number
providerId?: string
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
avatar?: string
createdAt?: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
}

export interface art_PointRecordWhereUniqueInput {
id?: number
}

export interface art_CreationCreateWithoutArtWorkInput {
AppUser: art_AppUserCreateNestedOneWithoutCreationInput
args: string
createdAt?: string
}

export interface art_ArtWorkCreateNestedOneWithoutLikeRecordInput {
connect?: art_ArtWorkWhereUniqueInput
connectOrCreate?: art_ArtWorkCreateOrConnectWithoutLikeRecordInput
create?: art_ArtWorkCreateWithoutLikeRecordInput
}

export interface art_LikeRecordCreateOrConnectWithoutAppUserInput {
create?: art_LikeRecordCreateWithoutAppUserInput
where?: art_LikeRecordWhereUniqueInput
}

export interface art_AppUserCreateNestedOneWithoutOther_AppUserInput {
connectOrCreate?: art_AppUserCreateOrConnectWithoutOther_AppUserInput
create?: art_AppUserCreateWithoutOther_AppUserInput
connect?: art_AppUserWhereUniqueInput
}

export interface art_LikeRecordCreateWithoutAppUserInput {
ArtWork?: art_ArtWorkCreateNestedOneWithoutLikeRecordInput
createdAt?: string
}

export interface art_AppUserCreateOrConnectWithoutLikeRecordInput {
create?: art_AppUserCreateWithoutLikeRecordInput
where?: art_AppUserWhereUniqueInput
}

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
    message: string;
    path?: ReadonlyArray<string | number>;
}



export interface CreateOneAppUserInput {
data: art_AppUserCreateInput
}

export interface CreateOneCreationInput {
args: string
}

export interface CreateOneDraftInput {
creationId: number
url: string
}

export interface CreateOnePointRecordInput {
way: string
point: number
userId: string
}

export interface DecreaseArtWorkLikeCountInput {
id: number
}

export interface DecreasePointsInput {
points: number
}

export interface FindOneAppUserInput {
id: string
}

export interface GeneratePictureWithAIInput {
args: string
}

export interface GetArtWorkDetailInput {
id: number
}

export interface GetMyAlbumInput {
skip?: number
take?: number
}

export interface GetMyDraftsInput {
skip?: number
take?: number
}

export interface GetMyLikedInput {
skip?: number
take?: number
}

export interface GetMyPointRecordsInput {
timeStart: string
way?: string[],}

export interface GetMyPublicAlbumInput {
skip?: number
take?: number
}

export interface GetWorksByHotInput {
skip?: number
take?: number
}

export interface GetWorksByNewestInput {
skip?: number
take?: number
}

export interface GetWorksByRecommendInput {
skip?: number
take?: number
}

export interface IncreaseArtWorkLikeCountInput {
id: number
}

export interface IncreaseArtWorkShareCountInput {
id: number
}

export interface IncreasePointsInput {
points: number
}

export interface LikeOneArtWorkInput {
artWorkId: number
}

export interface MoveDraftToAlbumInput {
id: number
}

export interface PublishMyArtWorkInput {
id: number
}

export interface RecordMyInviterInput {
inviterId: string
}

export interface UnlikeOneArtWorkInput {
artWorkId: number
}


