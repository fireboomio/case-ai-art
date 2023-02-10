
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
url: string
id: number
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

export interface DeleteOneArtWorkResponseData {
data?: {
id: number
},
}

export interface FindOneAppUserResponseData {
data?: {
points: number
provider: string
providerId: string
AppUser?: {
id: string
},
avatar: string
id: string
inviteById?: string
nickname: string
createdAt: string
phone?: string
},
}

export interface GeneratePictureWithAIResponseData {
data?: {
id?: string
url?: string
},
}

export interface GetAppUserListResponseData {
data: {
provider: string
providerId: string
id: string
inviteById?: string
phone?: string
points: number
avatar: string
createdAt: string
nickname: string
}[],total: number
}

export interface GetArtWorkDetailResponseData {
data?: {
user: {
id: string
nickname: string
avatar: string
},
isDraft: boolean
likeCount: number
likeRecords?: {
id: number
}[],sharedCount: number
url: string
args: string
id: number
published: boolean
},
}

export interface GetArtWorkListResponseData {
data: {
published: boolean
url: string
creationId: number
id: number
isDraft: boolean
recommendRate: number
sharedCount: number
Creation: {
AppUser: {
id: string
nickname: string
},
args: string
authorId: string
createdAt: string
id: number
},
likeCount: number
publishAt?: string
}[],total: number
}

export interface GetCountResponseData {
creation: {
_count?: {
_all: number
},
},
user: {
_count?: {
_all: number
},
},
}

export interface GetDraftItemsResponseData {
data: {
id: number
url: string
}[],}

export interface GetMyAlbumResponseData {
data: {
publishAt?: string
published: boolean
recommendRate: number
sharedCount: number
url: string
id: number
likeCount: number
}[],}

export interface GetMyDraftsResponseData {
data: {
artWork: {
id: number
url: string
},
count: {
ArtWork: number
},
id: number
}[],}

export interface GetMyLikedResponseData {
data: {
artWork: {
id: number
likeCount: number
sharedCount: number
url: string
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

export interface GetOneAppUserResponseData {
data?: {
createdAt: string
inviteById?: string
points: number
provider: string
providerId: string
avatar: string
id: string
nickname: string
phone?: string
},
}

export interface GetTodayCountResponseData {
creation: {
_count?: {
_all: number
},
},
}

export interface GetUserinfoResponseData {
data?: {
phone?: string
points: number
avatar: string
id: string
nickname: string
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
id: number
likeCount: number
sharedCount: number
url: string
}[],}

export interface GetWorksByRecommendResponseData {
data: {
likeCount: number
recommendRate: number
sharedCount: number
url: string
id: number
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

export interface QueryStatisticResponseData {
data?: {
date?: string
total?: number
}[],}

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





export interface art_ArtWorkCreateNestedManyWithoutCreationInput {
connect?: art_ArtWorkWhereUniqueInput
connectOrCreate?: art_ArtWorkCreateOrConnectWithoutCreationInput
create?: art_ArtWorkCreateWithoutCreationInput
createMany?: art_ArtWorkCreateManyCreationInputEnvelope
}

export interface art_NestedDateTimeNullableFilter {
notIn?: string[],equals?: string
gt?: string
gte?: string
in?: string[],lt?: string
lte?: string
not?: art_NestedDateTimeNullableFilter
}

export interface art_LikeRecordCreateOrConnectWithoutAppUserInput {
create?: art_LikeRecordCreateWithoutAppUserInput
where?: art_LikeRecordWhereUniqueInput
}

export interface art_AppUserCreateWithoutLikeRecordInput {
id?: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
providerId?: string
createdAt?: string
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
avatar?: string
nickname?: string
phone?: string
points?: number
provider?: string
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
}

export interface art_AppUserCreateOrConnectWithoutCreationInput {
create?: art_AppUserCreateWithoutCreationInput
where?: art_AppUserWhereUniqueInput
}

export interface art_ArtWorkCreateOrConnectWithoutLikeRecordInput {
create?: art_ArtWorkCreateWithoutLikeRecordInput
where?: art_ArtWorkWhereUniqueInput
}

export interface art_CreationWhereUniqueInput {
id?: number
}

export interface art_AppUserCreateOrConnectWithoutOther_AppUserInput {
create?: art_AppUserCreateWithoutOther_AppUserInput
where?: art_AppUserWhereUniqueInput
}

export interface art_LikeRecordWhereInput {
AND?: art_LikeRecordWhereInput
ArtWork?: art_ArtWorkRelationFilter
NOT?: art_LikeRecordWhereInput
createdAt?: art_DateTimeFilter
userId?: art_StringFilter
AppUser?: art_AppUserRelationFilter
OR?: art_LikeRecordWhereInput[],artWorkId?: art_IntFilter
id?: art_IntFilter
}

export interface art_DateTimeFilter {
lt?: string
lte?: string
not?: art_NestedDateTimeFilter
notIn?: string[],equals?: string
gt?: string
gte?: string
in?: string[],}

export interface art_CreationOrderByRelationAggregateInput {
_count?: string
}

export interface art_CreationCreateWithoutArtWorkInput {
AppUser?: art_AppUserCreateNestedOneWithoutCreationInput
args?: string
createdAt?: string
}

export interface art_ArtWorkWhereUniqueInput {
id?: number
}

export interface art_StringNullableFilter {
in?: string[],contains?: string
endsWith?: string
gte?: string
lte?: string
not?: art_NestedStringNullableFilter
notIn?: string[],startsWith?: string
equals?: string
gt?: string
lt?: string
}

export interface art_IntFilter {
lt?: number
lte?: number
not?: art_NestedIntFilter
notIn?: number[],equals?: number
gt?: number
gte?: number
in?: number[],}

export interface art_EnumPointRecord_wayFilter {
notIn?: string[],equals?: string
in?: string[],not?: string
}

export interface art_ArtWorkCreateNestedOneWithoutLikeRecordInput {
connect?: art_ArtWorkWhereUniqueInput
connectOrCreate?: art_ArtWorkCreateOrConnectWithoutLikeRecordInput
create?: art_ArtWorkCreateWithoutLikeRecordInput
}

export interface art_PointRecordOrderByRelationAggregateInput {
_count?: string
}

export interface art_BoolFilter {
equals?: boolean
not?: art_NestedBoolFilter
}

export interface art_AppUserRelationFilter {
is?: art_AppUserWhereInput
isNot?: art_AppUserWhereInput
}

export interface art_CreationListRelationFilter {
every?: art_CreationWhereInput
none?: art_CreationWhereInput
some?: art_CreationWhereInput
}

export interface art_AppUserListRelationFilter {
every?: art_AppUserWhereInput
none?: art_AppUserWhereInput
some?: art_AppUserWhereInput
}

export interface art_AppUserCreateOrConnectWithoutAppUserInput {
create?: art_AppUserCreateWithoutAppUserInput
where?: art_AppUserWhereUniqueInput
}

export interface art_LikeRecordCreateManyArtWorkInput {
userId?: string
createdAt?: string
id?: number
}

export interface art_PointRecordCreateWithoutAppUserInput {
createdAt?: string
point?: number
way?: string
}

export interface art_LikeRecordCreateOrConnectWithoutArtWorkInput {
create?: art_LikeRecordCreateWithoutArtWorkInput
where?: art_LikeRecordWhereUniqueInput
}

export interface art_LikeRecordCreateWithoutAppUserInput {
ArtWork?: art_ArtWorkCreateNestedOneWithoutLikeRecordInput
createdAt?: string
}

export interface art_AppUserCreateWithoutCreationInput {
id?: string
points?: number
provider?: string
providerId?: string
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
avatar?: string
createdAt?: string
nickname?: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
phone?: string
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
}

export interface art_AppUserCreateNestedManyWithoutAppUserInput {
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutAppUserInput
create?: art_AppUserCreateWithoutAppUserInput
createMany?: art_AppUserCreateManyAppUserInputEnvelope
}

export interface art_AppUserCreateWithoutAppUserInput {
avatar?: string
createdAt?: string
id?: string
phone?: string
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
provider?: string
providerId?: string
nickname?: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
points?: number
}

export interface art_LikeRecordCreateNestedManyWithoutAppUserInput {
connectOrCreate?: art_LikeRecordCreateOrConnectWithoutAppUserInput
create?: art_LikeRecordCreateWithoutAppUserInput
createMany?: art_LikeRecordCreateManyAppUserInputEnvelope
connect?: art_LikeRecordWhereUniqueInput
}

export interface art_NestedStringFilter {
contains?: string
endsWith?: string
equals?: string
gt?: string
in?: string[],not?: art_NestedStringFilter
notIn?: string[],gte?: string
lt?: string
lte?: string
startsWith?: string
}

export interface art_StringFilter {
contains?: string
endsWith?: string
gt?: string
gte?: string
in?: string[],lte?: string
notIn?: string[],equals?: string
lt?: string
not?: art_NestedStringFilter
startsWith?: string
}

export interface art_CreationRelationFilter {
is?: art_CreationWhereInput
isNot?: art_CreationWhereInput
}

export interface art_ArtWorkCreateWithoutCreationInput {
recommendRate?: number
sharedCount?: number
url?: string
LikeRecord?: art_LikeRecordCreateNestedManyWithoutArtWorkInput
isDraft?: boolean
likeCount?: number
publishAt?: string
published?: boolean
}

export interface art_ArtWorkCreateOrConnectWithoutCreationInput {
create?: art_ArtWorkCreateWithoutCreationInput
where?: art_ArtWorkWhereUniqueInput
}

export interface art_PointRecordCreateNestedManyWithoutAppUserInput {
create?: art_PointRecordCreateWithoutAppUserInput
createMany?: art_PointRecordCreateManyAppUserInputEnvelope
connect?: art_PointRecordWhereUniqueInput
connectOrCreate?: art_PointRecordCreateOrConnectWithoutAppUserInput
}

export interface art_CreationCreateManyAppUserInput {
id?: number
args?: string
createdAt?: string
}

export interface art_AppUserCreateNestedOneWithoutOther_AppUserInput {
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutOther_AppUserInput
create?: art_AppUserCreateWithoutOther_AppUserInput
}

export interface art_AppUserOrderByWithRelationInput {
nickname?: string
phone?: string
points?: string
id?: string
other_AppUser?: art_AppUserOrderByRelationAggregateInput
providerId?: string
LikeRecord?: art_LikeRecordOrderByRelationAggregateInput
avatar?: string
provider?: string
AppUser?: art_AppUserOrderByWithRelationInput
Creation?: art_CreationOrderByRelationAggregateInput
PointRecord?: art_PointRecordOrderByRelationAggregateInput
createdAt?: string
inviteById?: string
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

export interface art_AppUserCreateManyAppUserInputEnvelope {
skipDuplicates?: boolean
data?: art_AppUserCreateManyAppUserInput[],}

export interface art_LikeRecordCreateManyAppUserInputEnvelope {
data?: art_LikeRecordCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_NestedDateTimeFilter {
gte?: string
in?: string[],lt?: string
lte?: string
not?: art_NestedDateTimeFilter
notIn?: string[],equals?: string
gt?: string
}

export interface art_ArtWorkOrderByRelationAggregateInput {
_count?: string
}

export interface art_AppUserCreateNestedOneWithoutLikeRecordInput {
connectOrCreate?: art_AppUserCreateOrConnectWithoutLikeRecordInput
create?: art_AppUserCreateWithoutLikeRecordInput
connect?: art_AppUserWhereUniqueInput
}

export interface art_ArtWorkCreateManyCreationInputEnvelope {
data?: art_ArtWorkCreateManyCreationInput[],skipDuplicates?: boolean
}

export interface art_NestedStringNullableFilter {
endsWith?: string
equals?: string
gt?: string
gte?: string
lt?: string
not?: art_NestedStringNullableFilter
startsWith?: string
contains?: string
in?: string[],lte?: string
notIn?: string[],}

export interface art_AppUserWhereInput {
AND?: art_AppUserWhereInput
LikeRecord?: art_LikeRecordListRelationFilter
NOT?: art_AppUserWhereInput
PointRecord?: art_PointRecordListRelationFilter
id?: art_StringFilter
phone?: art_StringNullableFilter
points?: art_IntFilter
provider?: art_StringFilter
providerId?: art_StringFilter
Creation?: art_CreationListRelationFilter
avatar?: art_StringFilter
createdAt?: art_DateTimeFilter
inviteById?: art_StringNullableFilter
other_AppUser?: art_AppUserListRelationFilter
AppUser?: art_AppUserRelationFilter
OR?: art_AppUserWhereInput[],nickname?: art_StringFilter
}

export interface art_ArtWorkRelationFilter {
is?: art_ArtWorkWhereInput
isNot?: art_ArtWorkWhereInput
}

export interface art_PointRecordWhereUniqueInput {
id?: number
}

export interface art_AppUserCreateInput {
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
createdAt?: string
nickname: string
provider: string
providerId: string
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
avatar: string
id: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
phone?: string
points?: number
}

export interface art_ArtWorkCreateManyCreationInput {
publishAt?: string
published?: boolean
recommendRate?: number
sharedCount?: number
url?: string
id?: number
isDraft?: boolean
likeCount?: number
}

export interface art_CreationWhereInput {
ArtWork?: art_ArtWorkListRelationFilter
NOT?: art_CreationWhereInput
OR?: art_CreationWhereInput[],authorId?: art_StringFilter
id?: art_IntFilter
AND?: art_CreationWhereInput
AppUser?: art_AppUserRelationFilter
args?: art_StringFilter
createdAt?: art_DateTimeFilter
}

export interface art_AppUserCreateOrConnectWithoutLikeRecordInput {
create?: art_AppUserCreateWithoutLikeRecordInput
where?: art_AppUserWhereUniqueInput
}

export interface art_LikeRecordCreateManyAppUserInput {
id?: number
artWorkId?: number
createdAt?: string
}

export interface art_PointRecordCreateManyAppUserInputEnvelope {
data?: art_PointRecordCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_CreationCreateWithoutAppUserInput {
ArtWork?: art_ArtWorkCreateNestedManyWithoutCreationInput
args?: string
createdAt?: string
}

export interface art_LikeRecordCreateNestedManyWithoutArtWorkInput {
connect?: art_LikeRecordWhereUniqueInput
connectOrCreate?: art_LikeRecordCreateOrConnectWithoutArtWorkInput
create?: art_LikeRecordCreateWithoutArtWorkInput
createMany?: art_LikeRecordCreateManyArtWorkInputEnvelope
}

export interface art_PointRecordCreateOrConnectWithoutAppUserInput {
where?: art_PointRecordWhereUniqueInput
create?: art_PointRecordCreateWithoutAppUserInput
}

export interface art_LikeRecordCreateWithoutArtWorkInput {
createdAt?: string
AppUser?: art_AppUserCreateNestedOneWithoutLikeRecordInput
}

export interface art_CreationCreateManyAppUserInputEnvelope {
data?: art_CreationCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_NestedIntFilter {
not?: art_NestedIntFilter
notIn?: number[],equals?: number
gt?: number
gte?: number
in?: number[],lt?: number
lte?: number
}

export interface art_AppUserWhereUniqueInput {
id?: string
}

export interface art_AppUserCreateWithoutOther_AppUserInput {
avatar?: string
createdAt?: string
nickname?: string
points?: number
provider?: string
providerId?: string
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
id?: string
phone?: string
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
}

export interface art_PointRecordCreateManyAppUserInput {
createdAt?: string
id?: number
point?: number
way?: string
}

export interface art_LikeRecordWhereUniqueInput {
id?: number
}

export interface art_LikeRecordListRelationFilter {
none?: art_LikeRecordWhereInput
some?: art_LikeRecordWhereInput
every?: art_LikeRecordWhereInput
}

export interface art_PointRecordWhereInput {
createdAt?: art_DateTimeFilter
way?: art_EnumPointRecord_wayFilter
AND?: art_PointRecordWhereInput
AppUser?: art_AppUserRelationFilter
NOT?: art_PointRecordWhereInput
userId?: art_StringFilter
OR?: art_PointRecordWhereInput[],id?: art_IntFilter
point?: art_IntFilter
}

export interface art_CreationCreateNestedOneWithoutArtWorkInput {
connect?: art_CreationWhereUniqueInput
connectOrCreate?: art_CreationCreateOrConnectWithoutArtWorkInput
create?: art_CreationCreateWithoutArtWorkInput
}

export interface art_ArtWorkCreateWithoutLikeRecordInput {
isDraft?: boolean
likeCount?: number
publishAt?: string
published?: boolean
recommendRate?: number
sharedCount?: number
url?: string
Creation?: art_CreationCreateNestedOneWithoutArtWorkInput
}

export interface art_CreationCreateOrConnectWithoutAppUserInput {
create?: art_CreationCreateWithoutAppUserInput
where?: art_CreationWhereUniqueInput
}

export interface art_DateTimeNullableFilter {
equals?: string
gt?: string
gte?: string
in?: string[],lt?: string
lte?: string
not?: art_NestedDateTimeNullableFilter
notIn?: string[],}

export interface art_NestedBoolFilter {
equals?: boolean
not?: art_NestedBoolFilter
}

export interface art_ArtWorkListRelationFilter {
some?: art_ArtWorkWhereInput
every?: art_ArtWorkWhereInput
none?: art_ArtWorkWhereInput
}

export interface art_AppUserOrderByRelationAggregateInput {
_count?: string
}

export interface art_CreationOrderByWithRelationInput {
createdAt?: string
id?: string
AppUser?: art_AppUserOrderByWithRelationInput
ArtWork?: art_ArtWorkOrderByRelationAggregateInput
args?: string
authorId?: string
}

export interface art_CreationCreateNestedManyWithoutAppUserInput {
connect?: art_CreationWhereUniqueInput
connectOrCreate?: art_CreationCreateOrConnectWithoutAppUserInput
create?: art_CreationCreateWithoutAppUserInput
createMany?: art_CreationCreateManyAppUserInputEnvelope
}

export interface art_LikeRecordCreateManyArtWorkInputEnvelope {
skipDuplicates?: boolean
data?: art_LikeRecordCreateManyArtWorkInput[],}

export interface art_CreationCreateOrConnectWithoutArtWorkInput {
where?: art_CreationWhereUniqueInput
create?: art_CreationCreateWithoutArtWorkInput
}

export interface art_ArtWorkWhereInput {
id?: art_IntFilter
isDraft?: art_BoolFilter
likeCount?: art_IntFilter
AND?: art_ArtWorkWhereInput
publishAt?: art_DateTimeNullableFilter
recommendRate?: art_IntFilter
OR?: art_ArtWorkWhereInput[],sharedCount?: art_IntFilter
url?: art_StringFilter
published?: art_BoolFilter
LikeRecord?: art_LikeRecordListRelationFilter
NOT?: art_ArtWorkWhereInput
creationId?: art_IntFilter
Creation?: art_CreationRelationFilter
}

export interface art_PointRecordListRelationFilter {
every?: art_PointRecordWhereInput
none?: art_PointRecordWhereInput
some?: art_PointRecordWhereInput
}

export interface art_LikeRecordOrderByRelationAggregateInput {
_count?: string
}

export interface art_AppUserCreateNestedOneWithoutCreationInput {
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutCreationInput
create?: art_AppUserCreateWithoutCreationInput
}

export interface art_ArtWorkOrderByWithRelationInput {
LikeRecord?: art_LikeRecordOrderByRelationAggregateInput
isDraft?: string
publishAt?: string
recommendRate?: string
url?: string
Creation?: art_CreationOrderByWithRelationInput
creationId?: string
id?: string
likeCount?: string
published?: string
sharedCount?: string
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

export interface DeleteOneArtWorkInput {
id: number
}

export interface FindOneAppUserInput {
id: string
}

export interface GeneratePictureWithAIInput {
args: string
}

export interface GetAppUserListInput {
orderBy?: art_AppUserOrderByWithRelationInput[],query?: art_AppUserWhereInput
skip?: number
take?: number
}

export interface GetArtWorkDetailInput {
id: number
}

export interface GetArtWorkListInput {
orderBy?: art_ArtWorkOrderByWithRelationInput[],query?: art_ArtWorkWhereInput
skip?: number
take?: number
}

export interface GetDraftItemsInput {
draftId: number
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

export interface GetOneAppUserInput {
id: string
}

export interface GetTodayCountInput {
date: string
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

export interface UsePointsInput {
id: string
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

export interface InternalDeleteOneArtWorkInput {
id: number
}

export interface InternalFindOneAppUserInput {
id: string
}

export interface InternalGeneratePictureWithAIInput {
args: string
}

export interface InternalGetAppUserListInput {
orderBy?: art_AppUserOrderByWithRelationInput[],query?: art_AppUserWhereInput
skip?: number
take?: number
}

export interface InternalGetArtWorkDetailInput {
id: number
}

export interface InternalGetArtWorkListInput {
orderBy?: art_ArtWorkOrderByWithRelationInput[],query?: art_ArtWorkWhereInput
skip?: number
take?: number
}

export interface InternalGetDraftItemsInput {
draftId: number
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

export interface InternalGetOneAppUserInput {
id: string
}

export interface InternalGetTodayCountInput {
date: string
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

export interface InternalUsePointsInput {
id: string
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
point: number
userId: string
way: string
}

export interface InjectedDecreaseArtWorkLikeCountInput {
id: number
}

export interface InjectedDecreasePointsInput {
id: string
points: number
}

export interface InjectedDeleteOneArtWorkInput {
id: number
}

export interface InjectedFindOneAppUserInput {
id: string
}

export interface InjectedGeneratePictureWithAIInput {
args: string
userId: string
}

export interface InjectedGetAppUserListInput {
orderBy?: art_AppUserOrderByWithRelationInput[],query?: art_AppUserWhereInput
skip?: number
take?: number
}

export interface InjectedGetArtWorkDetailInput {
id: number
userId: string
}

export interface InjectedGetArtWorkListInput {
orderBy?: art_ArtWorkOrderByWithRelationInput[],query?: art_ArtWorkWhereInput
skip?: number
take?: number
}

export interface InjectedGetDraftItemsInput {
draftId: number
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
creationId: number
skip?: number
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

export interface InjectedGetOneAppUserInput {
id: string
}

export interface InjectedGetTodayCountInput {
date: string
}

export interface InjectedGetUserinfoInput {
userId?: string
}

export interface InjectedGetWorksByHotInput {
take?: number
skip?: number
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

export interface DeleteOneArtWorkResponse {
data?: DeleteOneArtWorkResponseData
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

export interface GetAppUserListResponse {
data?: GetAppUserListResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetArtWorkDetailResponse {
data?: GetArtWorkDetailResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetArtWorkListResponse {
data?: GetArtWorkListResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetCountResponse {
data?: GetCountResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetDraftItemsResponse {
data?: GetDraftItemsResponseData
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

export interface GetOneAppUserResponse {
data?: GetOneAppUserResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetTodayCountResponse {
data?: GetTodayCountResponseData
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

export interface QueryStatisticResponse {
data?: QueryStatisticResponseData
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


