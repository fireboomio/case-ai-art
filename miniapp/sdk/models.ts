
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
point: number
userId: string
way: string
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
skip?: number
take?: number
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
timeStart: string
way?: string[],}

export interface InternalGetMyPublicAlbumInput {
skip?: number
take?: number
}

export interface InternalGetWorksByHotInput {
take?: number
skip?: number
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
id: string
points: number
}

export interface InjectedFindOneAppUserInput {
id: string
}

export interface InjectedGeneratePictureWithAIInput {
args: string
userId: string
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
take?: number
userId: string
skip?: number
}

export interface InjectedGetMyLikedInput {
skip?: number
take?: number
userId: string
}

export interface InjectedGetMyPointRecordsInput {
way?: string[],timeStart: string
userId: string
}

export interface InjectedGetMyPublicAlbumInput {
take?: number
userId: string
skip?: number
}

export interface InjectedGetUserinfoInput {
userId?: string
}

export interface InjectedGetWorksByHotInput {
skip?: number
take?: number
}

export interface InjectedGetWorksByNewestInput {
skip?: number
take?: number
}

export interface InjectedGetWorksByRecommendInput {
skip?: number
take?: number
}

export interface InjectedIncreaseArtWorkLikeCountInput {
id: number
}

export interface InjectedIncreaseArtWorkShareCountInput {
id: number
}

export interface InjectedIncreasePointsInput {
id: string
points: number
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
inviterId: string
userId: string
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
avatar: string
createdAt: string
inviteById?: string
nickname: string
phone?: string
points: number
provider: string
AppUser?: {
id: string
},
id: string
providerId: string
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
isDraft: boolean
likeCount: number
user: {
avatar: string
id: string
nickname: string
},
id: number
likeRecords?: {
id: number
}[],published: boolean
sharedCount: number
url: string
args: string
},
}

export interface GetMyAlbumResponseData {
data: {
url: string
id: number
likeCount: number
publishAt?: string
published: boolean
recommendRate: number
sharedCount: number
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
likeCount: number
sharedCount: number
url: string
id: number
},
}[],}

export interface GetMyPointRecordsResponseData {
data: {
id: number
way: JSONValue
}[],}

export interface GetMyPublicAlbumResponseData {
data: {
likeCount: number
sharedCount: number
url: string
id: number
}[],}

export interface GetUserinfoResponseData {
data?: {
avatar: string
id: string
nickname: string
phone?: string
points: number
},
}

export interface GetWorksByHotResponseData {
data: {
url: string
id: number
likeCount: number
sharedCount: number
}[],}

export interface GetWorksByNewestResponseData {
data: {
id: number
likeCount: number
sharedCount: number
url: string
}[],}

export interface GetWorksByRecommendResponseData {
data: {
sharedCount: number
url: string
id: number
likeCount: number
recommendRate: number
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
publishAt?: string
published: boolean
id: number
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





export interface art_ArtWorkCreateWithoutCreationInput {
likeCount?: number
publishAt?: string
published?: boolean
recommendRate?: number
sharedCount?: number
url?: string
LikeRecord?: art_LikeRecordCreateNestedManyWithoutArtWorkInput
isDraft?: boolean
}

export interface art_AppUserCreateOrConnectWithoutOther_AppUserInput {
create?: art_AppUserCreateWithoutOther_AppUserInput
where?: art_AppUserWhereUniqueInput
}

export interface art_CreationCreateNestedManyWithoutAppUserInput {
connect?: art_CreationWhereUniqueInput
connectOrCreate?: art_CreationCreateOrConnectWithoutAppUserInput
create?: art_CreationCreateWithoutAppUserInput
createMany?: art_CreationCreateManyAppUserInputEnvelope
}

export interface art_LikeRecordCreateOrConnectWithoutAppUserInput {
create?: art_LikeRecordCreateWithoutAppUserInput
where?: art_LikeRecordWhereUniqueInput
}

export interface art_ArtWorkCreateWithoutLikeRecordInput {
sharedCount?: number
url?: string
Creation?: art_CreationCreateNestedOneWithoutArtWorkInput
isDraft?: boolean
likeCount?: number
publishAt?: string
published?: boolean
recommendRate?: number
}

export interface art_CreationCreateWithoutArtWorkInput {
AppUser: art_AppUserCreateNestedOneWithoutCreationInput
args: string
createdAt?: string
}

export interface art_CreationCreateWithoutAppUserInput {
ArtWork?: art_ArtWorkCreateNestedManyWithoutCreationInput
args?: string
createdAt?: string
}

export interface art_AppUserCreateInput {
provider: string
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
createdAt?: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
points?: number
id: string
nickname: string
phone?: string
providerId: string
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
avatar: string
}

export interface art_ArtWorkCreateManyCreationInputEnvelope {
data?: art_ArtWorkCreateManyCreationInput[],skipDuplicates?: boolean
}

export interface art_LikeRecordCreateOrConnectWithoutArtWorkInput {
create?: art_LikeRecordCreateWithoutArtWorkInput
where?: art_LikeRecordWhereUniqueInput
}

export interface art_PointRecordCreateManyAppUserInput {
createdAt?: string
id?: number
point?: number
way?: string
}

export interface art_ArtWorkCreateNestedOneWithoutLikeRecordInput {
connect?: art_ArtWorkWhereUniqueInput
connectOrCreate?: art_ArtWorkCreateOrConnectWithoutLikeRecordInput
create?: art_ArtWorkCreateWithoutLikeRecordInput
}

export interface art_AppUserCreateWithoutAppUserInput {
id?: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
phone?: string
points?: number
provider?: string
providerId?: string
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
avatar?: string
createdAt?: string
nickname?: string
}

export interface art_PointRecordCreateManyAppUserInputEnvelope {
data?: art_PointRecordCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_AppUserCreateManyAppUserInputEnvelope {
data?: art_AppUserCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_AppUserCreateNestedManyWithoutAppUserInput {
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutAppUserInput
create?: art_AppUserCreateWithoutAppUserInput
createMany?: art_AppUserCreateManyAppUserInputEnvelope
}

export interface art_ArtWorkCreateOrConnectWithoutCreationInput {
create?: art_ArtWorkCreateWithoutCreationInput
where?: art_ArtWorkWhereUniqueInput
}

export interface art_LikeRecordCreateNestedManyWithoutAppUserInput {
connect?: art_LikeRecordWhereUniqueInput
connectOrCreate?: art_LikeRecordCreateOrConnectWithoutAppUserInput
create?: art_LikeRecordCreateWithoutAppUserInput
createMany?: art_LikeRecordCreateManyAppUserInputEnvelope
}

export interface art_LikeRecordCreateManyAppUserInputEnvelope {
data?: art_LikeRecordCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_LikeRecordCreateManyAppUserInput {
artWorkId?: number
createdAt?: string
id?: number
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

export interface art_AppUserCreateNestedOneWithoutOther_AppUserInput {
create?: art_AppUserCreateWithoutOther_AppUserInput
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutOther_AppUserInput
}

export interface art_ArtWorkWhereUniqueInput {
id?: number
}

export interface art_LikeRecordCreateNestedManyWithoutArtWorkInput {
createMany?: art_LikeRecordCreateManyArtWorkInputEnvelope
connect?: art_LikeRecordWhereUniqueInput
connectOrCreate?: art_LikeRecordCreateOrConnectWithoutArtWorkInput
create?: art_LikeRecordCreateWithoutArtWorkInput
}

export interface art_AppUserCreateWithoutLikeRecordInput {
createdAt?: string
phone?: string
points?: number
providerId?: string
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
avatar?: string
id?: string
nickname?: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
provider?: string
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
}

export interface art_ArtWorkCreateManyCreationInput {
url?: string
id?: number
isDraft?: boolean
likeCount?: number
publishAt?: string
published?: boolean
recommendRate?: number
sharedCount?: number
}

export interface art_CreationCreateManyAppUserInputEnvelope {
data?: art_CreationCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_AppUserCreateWithoutOther_AppUserInput {
points?: number
providerId?: string
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
avatar?: string
createdAt?: string
id?: string
nickname?: string
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
phone?: string
provider?: string
}

export interface art_AppUserCreateOrConnectWithoutCreationInput {
where?: art_AppUserWhereUniqueInput
create?: art_AppUserCreateWithoutCreationInput
}

export interface art_PointRecordCreateNestedManyWithoutAppUserInput {
connectOrCreate?: art_PointRecordCreateOrConnectWithoutAppUserInput
create?: art_PointRecordCreateWithoutAppUserInput
createMany?: art_PointRecordCreateManyAppUserInputEnvelope
connect?: art_PointRecordWhereUniqueInput
}

export interface art_LikeRecordCreateManyArtWorkInputEnvelope {
data?: art_LikeRecordCreateManyArtWorkInput[],skipDuplicates?: boolean
}

export interface art_CreationWhereUniqueInput {
id?: number
}

export interface art_AppUserCreateNestedOneWithoutLikeRecordInput {
create?: art_AppUserCreateWithoutLikeRecordInput
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutLikeRecordInput
}

export interface art_PointRecordCreateWithoutAppUserInput {
way?: string
createdAt?: string
point?: number
}

export interface art_CreationCreateManyAppUserInput {
id?: number
args?: string
createdAt?: string
}

export interface art_PointRecordCreateOrConnectWithoutAppUserInput {
where?: art_PointRecordWhereUniqueInput
create?: art_PointRecordCreateWithoutAppUserInput
}

export interface art_PointRecordWhereUniqueInput {
id?: number
}

export interface art_AppUserCreateWithoutCreationInput {
nickname?: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
phone?: string
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
avatar?: string
createdAt?: string
id?: string
points?: number
providerId?: string
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
provider?: string
}

export interface art_LikeRecordCreateWithoutAppUserInput {
ArtWork?: art_ArtWorkCreateNestedOneWithoutLikeRecordInput
createdAt?: string
}

export interface art_ArtWorkCreateOrConnectWithoutLikeRecordInput {
where?: art_ArtWorkWhereUniqueInput
create?: art_ArtWorkCreateWithoutLikeRecordInput
}

export interface art_AppUserCreateManyAppUserInput {
nickname?: string
phone?: string
points?: number
provider?: string
providerId?: string
avatar?: string
createdAt?: string
id?: string
}

export interface art_ArtWorkCreateNestedManyWithoutCreationInput {
connect?: art_ArtWorkWhereUniqueInput
connectOrCreate?: art_ArtWorkCreateOrConnectWithoutCreationInput
create?: art_ArtWorkCreateWithoutCreationInput
createMany?: art_ArtWorkCreateManyCreationInputEnvelope
}

export interface art_AppUserWhereUniqueInput {
id?: string
}

export interface art_LikeRecordCreateWithoutArtWorkInput {
AppUser?: art_AppUserCreateNestedOneWithoutLikeRecordInput
createdAt?: string
}

export interface art_LikeRecordWhereUniqueInput {
id?: number
}

export interface art_CreationCreateOrConnectWithoutAppUserInput {
create?: art_CreationCreateWithoutAppUserInput
where?: art_CreationWhereUniqueInput
}

export interface art_CreationCreateNestedOneWithoutArtWorkInput {
connect?: art_CreationWhereUniqueInput
connectOrCreate?: art_CreationCreateOrConnectWithoutArtWorkInput
create?: art_CreationCreateWithoutArtWorkInput
}

export interface art_CreationCreateOrConnectWithoutArtWorkInput {
create?: art_CreationCreateWithoutArtWorkInput
where?: art_CreationWhereUniqueInput
}

export interface art_LikeRecordCreateManyArtWorkInput {
createdAt?: string
id?: number
userId?: string
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


