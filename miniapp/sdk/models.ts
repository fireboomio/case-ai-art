


export interface art_AppUserOrderByWithRelationInput {
LikeRecord?: art_LikeRecordOrderByRelationAggregateInput
other_AppUser?: art_AppUserOrderByRelationAggregateInput
points?: string
createdAt?: string
inviteById?: string
nickname?: string
Creation?: art_CreationOrderByRelationAggregateInput
phone?: string
providerId?: string
id?: string
provider?: string
AppUser?: art_AppUserOrderByWithRelationInput
PointRecord?: art_PointRecordOrderByRelationAggregateInput
avatar?: string
}

export interface art_ArtWorkOrderByWithRelationInput {
LikeRecord?: art_LikeRecordOrderByRelationAggregateInput
creationId?: string
id?: string
recommendRate?: string
Creation?: art_CreationOrderByWithRelationInput
likeCount?: string
publishAt?: string
published?: string
sharedCount?: string
url?: string
isDraft?: string
}

export interface art_AppUserCreateManyAppUserInputEnvelope {
data?: art_AppUserCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_ArtWorkCreateNestedOneWithoutLikeRecordInput {
connect?: art_ArtWorkWhereUniqueInput
connectOrCreate?: art_ArtWorkCreateOrConnectWithoutLikeRecordInput
create?: art_ArtWorkCreateWithoutLikeRecordInput
}

export interface art_PointRecordCreateManyAppUserInputEnvelope {
data?: art_PointRecordCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_LikeRecordCreateManyArtWorkInputEnvelope {
data?: art_LikeRecordCreateManyArtWorkInput[],skipDuplicates?: boolean
}

export interface art_LikeRecordCreateNestedManyWithoutAppUserInput {
connect?: art_LikeRecordWhereUniqueInput
connectOrCreate?: art_LikeRecordCreateOrConnectWithoutAppUserInput
create?: art_LikeRecordCreateWithoutAppUserInput
createMany?: art_LikeRecordCreateManyAppUserInputEnvelope
}

export interface art_CreationCreateNestedOneWithoutArtWorkInput {
connectOrCreate?: art_CreationCreateOrConnectWithoutArtWorkInput
create?: art_CreationCreateWithoutArtWorkInput
connect?: art_CreationWhereUniqueInput
}

export interface art_IntFilter {
gte?: number
in?: number[],lt?: number
lte?: number
not?: art_NestedIntFilter
notIn?: number[],equals?: number
gt?: number
}

export interface art_ArtWorkOrderByRelationAggregateInput {
_count?: string
}

export interface art_AppUserCreateWithoutOther_AppUserInput {
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
createdAt?: string
points?: number
phone?: string
provider?: string
providerId?: string
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
avatar?: string
id?: string
nickname?: string
}

export interface art_ArtWorkCreateOrConnectWithoutLikeRecordInput {
create?: art_ArtWorkCreateWithoutLikeRecordInput
where?: art_ArtWorkWhereUniqueInput
}

export interface art_AppUserCreateOrConnectWithoutAppUserInput {
where?: art_AppUserWhereUniqueInput
create?: art_AppUserCreateWithoutAppUserInput
}

export interface art_LikeRecordWhereUniqueInput {
id?: number
}

export interface art_AppUserCreateInput {
providerId: string
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
id: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
avatar: string
createdAt?: string
nickname: string
phone?: string
points?: number
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
provider: string
}

export interface art_CreationListRelationFilter {
every?: art_CreationWhereInput
none?: art_CreationWhereInput
some?: art_CreationWhereInput
}

export interface art_CreationWhereInput {
createdAt?: art_DateTimeFilter
AppUser?: art_AppUserRelationFilter
ArtWork?: art_ArtWorkListRelationFilter
NOT?: art_CreationWhereInput
args?: art_StringFilter
authorId?: art_StringFilter
AND?: art_CreationWhereInput
OR?: art_CreationWhereInput[],id?: art_IntFilter
}

export interface art_LikeRecordCreateManyArtWorkInput {
userId?: string
createdAt?: string
id?: number
}

export interface art_ArtWorkCreateManyCreationInputEnvelope {
data?: art_ArtWorkCreateManyCreationInput[],skipDuplicates?: boolean
}

export interface art_CreationCreateWithoutArtWorkInput {
AppUser?: art_AppUserCreateNestedOneWithoutCreationInput
args?: string
createdAt?: string
}

export interface art_DateTimeNullableFilter {
gt?: string
gte?: string
in?: string[],lt?: string
lte?: string
not?: art_NestedDateTimeNullableFilter
notIn?: string[],equals?: string
}

export interface art_ArtWorkCreateNestedManyWithoutCreationInput {
connect?: art_ArtWorkWhereUniqueInput
connectOrCreate?: art_ArtWorkCreateOrConnectWithoutCreationInput
create?: art_ArtWorkCreateWithoutCreationInput
createMany?: art_ArtWorkCreateManyCreationInputEnvelope
}

export interface art_LikeRecordCreateManyAppUserInput {
artWorkId?: number
createdAt?: string
id?: number
}

export interface art_CreationCreateManyAppUserInputEnvelope {
data?: art_CreationCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_CreationCreateOrConnectWithoutArtWorkInput {
create?: art_CreationCreateWithoutArtWorkInput
where?: art_CreationWhereUniqueInput
}

export interface art_LikeRecordCreateOrConnectWithoutArtWorkInput {
create?: art_LikeRecordCreateWithoutArtWorkInput
where?: art_LikeRecordWhereUniqueInput
}

export interface art_LikeRecordWhereInput {
userId?: art_StringFilter
ArtWork?: art_ArtWorkRelationFilter
NOT?: art_LikeRecordWhereInput
OR?: art_LikeRecordWhereInput[],createdAt?: art_DateTimeFilter
AND?: art_LikeRecordWhereInput
AppUser?: art_AppUserRelationFilter
artWorkId?: art_IntFilter
id?: art_IntFilter
}

export interface art_LikeRecordListRelationFilter {
every?: art_LikeRecordWhereInput
none?: art_LikeRecordWhereInput
some?: art_LikeRecordWhereInput
}

export interface art_NestedIntFilter {
notIn?: number[],equals?: number
gt?: number
gte?: number
in?: number[],lt?: number
lte?: number
not?: art_NestedIntFilter
}

export interface art_LikeRecordCreateWithoutAppUserInput {
ArtWork?: art_ArtWorkCreateNestedOneWithoutLikeRecordInput
createdAt?: string
}

export interface art_CreationCreateManyAppUserInput {
args?: string
createdAt?: string
id?: number
}

export interface art_AppUserRelationFilter {
is?: art_AppUserWhereInput
isNot?: art_AppUserWhereInput
}

export interface art_PointRecordWhereInput {
AND?: art_PointRecordWhereInput
NOT?: art_PointRecordWhereInput
userId?: art_StringFilter
way?: art_EnumPointRecord_wayFilter
AppUser?: art_AppUserRelationFilter
OR?: art_PointRecordWhereInput[],createdAt?: art_DateTimeFilter
id?: art_IntFilter
point?: art_IntFilter
}

export interface art_AppUserOrderByRelationAggregateInput {
_count?: string
}

export interface art_AppUserListRelationFilter {
every?: art_AppUserWhereInput
none?: art_AppUserWhereInput
some?: art_AppUserWhereInput
}

export interface art_AppUserCreateNestedOneWithoutLikeRecordInput {
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutLikeRecordInput
create?: art_AppUserCreateWithoutLikeRecordInput
}

export interface art_DateTimeFilter {
lte?: string
not?: art_NestedDateTimeFilter
notIn?: string[],equals?: string
gt?: string
gte?: string
in?: string[],lt?: string
}

export interface art_AppUserCreateOrConnectWithoutLikeRecordInput {
create?: art_AppUserCreateWithoutLikeRecordInput
where?: art_AppUserWhereUniqueInput
}

export interface art_PointRecordListRelationFilter {
every?: art_PointRecordWhereInput
none?: art_PointRecordWhereInput
some?: art_PointRecordWhereInput
}

export interface art_PointRecordWhereUniqueInput {
id?: number
}

export interface art_LikeRecordCreateNestedManyWithoutArtWorkInput {
connect?: art_LikeRecordWhereUniqueInput
connectOrCreate?: art_LikeRecordCreateOrConnectWithoutArtWorkInput
create?: art_LikeRecordCreateWithoutArtWorkInput
createMany?: art_LikeRecordCreateManyArtWorkInputEnvelope
}

export interface art_NestedDateTimeFilter {
lte?: string
not?: art_NestedDateTimeFilter
notIn?: string[],equals?: string
gt?: string
gte?: string
in?: string[],lt?: string
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

export interface art_LikeRecordCreateOrConnectWithoutAppUserInput {
create?: art_LikeRecordCreateWithoutAppUserInput
where?: art_LikeRecordWhereUniqueInput
}

export interface art_AppUserCreateWithoutAppUserInput {
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
id?: string
nickname?: string
points?: number
providerId?: string
provider?: string
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
avatar?: string
createdAt?: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
phone?: string
}

export interface art_ArtWorkCreateOrConnectWithoutCreationInput {
create?: art_ArtWorkCreateWithoutCreationInput
where?: art_ArtWorkWhereUniqueInput
}

export interface art_AppUserCreateNestedOneWithoutOther_AppUserInput {
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutOther_AppUserInput
create?: art_AppUserCreateWithoutOther_AppUserInput
}

export interface art_NestedBoolFilter {
equals?: boolean
not?: art_NestedBoolFilter
}

export interface art_NestedStringFilter {
in?: string[],lt?: string
endsWith?: string
equals?: string
gte?: string
lte?: string
not?: art_NestedStringFilter
notIn?: string[],startsWith?: string
contains?: string
gt?: string
}

export interface art_ArtWorkWhereUniqueInput {
id?: number
}

export interface art_LikeRecordCreateWithoutArtWorkInput {
AppUser?: art_AppUserCreateNestedOneWithoutLikeRecordInput
createdAt?: string
}

export interface art_CreationCreateWithoutAppUserInput {
ArtWork?: art_ArtWorkCreateNestedManyWithoutCreationInput
args?: string
createdAt?: string
}

export interface art_CreationOrderByRelationAggregateInput {
_count?: string
}

export interface art_CreationCreateOrConnectWithoutAppUserInput {
create?: art_CreationCreateWithoutAppUserInput
where?: art_CreationWhereUniqueInput
}

export interface art_NestedStringNullableFilter {
endsWith?: string
equals?: string
gt?: string
lte?: string
startsWith?: string
contains?: string
gte?: string
in?: string[],lt?: string
not?: art_NestedStringNullableFilter
notIn?: string[],}

export interface art_PointRecordCreateManyAppUserInput {
id?: number
point?: number
way?: string
createdAt?: string
}

export interface art_AppUserCreateWithoutCreationInput {
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
nickname: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
phone?: string
points?: number
provider: string
providerId: string
avatar: string
createdAt?: string
id: string
}

export interface art_LikeRecordOrderByRelationAggregateInput {
_count?: string
}

export interface art_NestedDateTimeNullableFilter {
gt?: string
gte?: string
in?: string[],lt?: string
lte?: string
not?: art_NestedDateTimeNullableFilter
notIn?: string[],equals?: string
}

export interface art_PointRecordCreateNestedManyWithoutAppUserInput {
create?: art_PointRecordCreateWithoutAppUserInput
createMany?: art_PointRecordCreateManyAppUserInputEnvelope
connect?: art_PointRecordWhereUniqueInput
connectOrCreate?: art_PointRecordCreateOrConnectWithoutAppUserInput
}

export interface art_AppUserCreateManyAppUserInput {
provider?: string
providerId?: string
avatar?: string
createdAt?: string
id?: string
nickname?: string
phone?: string
points?: number
}

export interface art_PointRecordCreateWithoutAppUserInput {
createdAt?: string
point?: number
way?: string
}

export interface art_ArtWorkRelationFilter {
is?: art_ArtWorkWhereInput
isNot?: art_ArtWorkWhereInput
}

export interface art_CreationRelationFilter {
is?: art_CreationWhereInput
isNot?: art_CreationWhereInput
}

export interface art_EnumPointRecord_wayFilter {
equals?: string
in?: string[],not?: string
notIn?: string[],}

export interface art_AppUserWhereInput {
other_AppUser?: art_AppUserListRelationFilter
providerId?: art_StringFilter
Creation?: art_CreationListRelationFilter
PointRecord?: art_PointRecordListRelationFilter
avatar?: art_StringFilter
nickname?: art_StringFilter
phone?: art_StringNullableFilter
createdAt?: art_DateTimeFilter
points?: art_IntFilter
AppUser?: art_AppUserRelationFilter
LikeRecord?: art_LikeRecordListRelationFilter
NOT?: art_AppUserWhereInput
inviteById?: art_StringNullableFilter
provider?: art_StringFilter
AND?: art_AppUserWhereInput
OR?: art_AppUserWhereInput[],id?: art_StringFilter
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

export interface art_LikeRecordCreateManyAppUserInputEnvelope {
data?: art_LikeRecordCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_PointRecordCreateOrConnectWithoutAppUserInput {
create?: art_PointRecordCreateWithoutAppUserInput
where?: art_PointRecordWhereUniqueInput
}

export interface art_CreationCreateNestedManyWithoutAppUserInput {
createMany?: art_CreationCreateManyAppUserInputEnvelope
connect?: art_CreationWhereUniqueInput
connectOrCreate?: art_CreationCreateOrConnectWithoutAppUserInput
create?: art_CreationCreateWithoutAppUserInput
}

export interface art_BoolFilter {
equals?: boolean
not?: art_NestedBoolFilter
}

export interface art_StringFilter {
endsWith?: string
equals?: string
gt?: string
gte?: string
lt?: string
not?: art_NestedStringFilter
contains?: string
in?: string[],lte?: string
notIn?: string[],startsWith?: string
}

export interface art_ArtWorkListRelationFilter {
every?: art_ArtWorkWhereInput
none?: art_ArtWorkWhereInput
some?: art_ArtWorkWhereInput
}

export interface art_AppUserCreateOrConnectWithoutCreationInput {
create?: art_AppUserCreateWithoutCreationInput
where?: art_AppUserWhereUniqueInput
}

export interface art_CreationWhereUniqueInput {
id?: number
}

export interface art_CreationOrderByWithRelationInput {
args?: string
authorId?: string
createdAt?: string
id?: string
AppUser?: art_AppUserOrderByWithRelationInput
ArtWork?: art_ArtWorkOrderByRelationAggregateInput
}

export interface art_ArtWorkWhereInput {
creationId?: art_IntFilter
sharedCount?: art_IntFilter
AND?: art_ArtWorkWhereInput
likeCount?: art_IntFilter
NOT?: art_ArtWorkWhereInput
isDraft?: art_BoolFilter
published?: art_BoolFilter
LikeRecord?: art_LikeRecordListRelationFilter
OR?: art_ArtWorkWhereInput[],id?: art_IntFilter
publishAt?: art_DateTimeNullableFilter
recommendRate?: art_IntFilter
url?: art_StringFilter
Creation?: art_CreationRelationFilter
}

export interface art_PointRecordOrderByRelationAggregateInput {
_count?: string
}

export interface art_AppUserWhereUniqueInput {
id?: string
}

export interface art_AppUserCreateNestedManyWithoutAppUserInput {
connectOrCreate?: art_AppUserCreateOrConnectWithoutAppUserInput
create?: art_AppUserCreateWithoutAppUserInput
createMany?: art_AppUserCreateManyAppUserInputEnvelope
connect?: art_AppUserWhereUniqueInput
}

export interface art_AppUserCreateNestedOneWithoutCreationInput {
create?: art_AppUserCreateWithoutCreationInput
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutCreationInput
}

export interface art_StringNullableFilter {
notIn?: string[],startsWith?: string
contains?: string
equals?: string
gte?: string
in?: string[],not?: art_NestedStringNullableFilter
endsWith?: string
gt?: string
lt?: string
lte?: string
}

export interface art_AppUserCreateOrConnectWithoutOther_AppUserInput {
create?: art_AppUserCreateWithoutOther_AppUserInput
where?: art_AppUserWhereUniqueInput
}

export interface art_AppUserCreateWithoutLikeRecordInput {
createdAt?: string
nickname: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
phone?: string
provider: string
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
providerId: string
avatar: string
id: string
points?: number
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
take?: number
orderBy?: art_ArtWorkOrderByWithRelationInput[],query?: art_ArtWorkWhereInput
skip?: number
}

export interface GetMyAlbumInput {
take?: number
skip?: number
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
url: string
creationId: number
}

export interface InternalCreateOnePointRecordInput {
userId: string
way: string
point: number
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
skip?: number
take?: number
orderBy?: art_AppUserOrderByWithRelationInput[],query?: art_AppUserWhereInput
}

export interface InternalGetArtWorkDetailInput {
id: number
}

export interface InternalGetArtWorkListInput {
orderBy?: art_ArtWorkOrderByWithRelationInput[],query?: art_ArtWorkWhereInput
skip?: number
take?: number
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
skip?: number
take?: number
}

export interface InternalGetWorksByNewestInput {
skip?: number
take?: number
}

export interface InternalGetWorksByRecommendInput {
take?: number
skip?: number
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
way: string
point: number
userId: string
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
take?: number
orderBy?: art_AppUserOrderByWithRelationInput[],query?: art_AppUserWhereInput
skip?: number
}

export interface InjectedGetArtWorkDetailInput {
id: number
userId: string
}

export interface InjectedGetArtWorkListInput {
query?: art_ArtWorkWhereInput
skip?: number
take?: number
orderBy?: art_ArtWorkOrderByWithRelationInput[],}

export interface InjectedGetMyAlbumInput {
skip?: number
take?: number
userId: string
}

export interface InjectedGetMyDraftsInput {
userId: string
creationId: number
skip?: number
take?: number
}

export interface InjectedGetMyLikedInput {
take?: number
userId: string
skip?: number
}

export interface InjectedGetMyPointRecordsInput {
userId: string
way?: string[],timeStart: string
}

export interface InjectedGetMyPublicAlbumInput {
take?: number
userId: string
skip?: number
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
id: number
date?: string
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

export interface DeleteOneArtWorkResponseData {
data?: {
id: number
},
}

export interface FindOneAppUserResponseData {
data?: {
AppUser?: {
id: string
},
inviteById?: string
points: number
provider: string
providerId: string
avatar: string
createdAt: string
id: string
nickname: string
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
total: number
data: {
id: string
points: number
providerId: string
avatar: string
createdAt: string
inviteById?: string
nickname: string
phone?: string
provider: string
}[],}

export interface GetArtWorkDetailResponseData {
data?: {
args: string
isDraft: boolean
likeRecords?: {
id: number
}[],published: boolean
id: number
likeCount: number
sharedCount: number
url: string
user: {
avatar: string
id: string
nickname: string
},
},
}

export interface GetArtWorkListResponseData {
data: {
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
creationId: number
id: number
isDraft: boolean
likeCount: number
published: boolean
url: string
publishAt?: string
recommendRate: number
sharedCount: number
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

export interface GetMyAlbumResponseData {
data: {
likeCount: number
publishAt?: string
published: boolean
recommendRate: number
sharedCount: number
url: string
id: number
}[],}

export interface GetMyDraftsResponseData {
data: {
artWork: {
id: number
url: string
},
count: number
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
url: string
id: number
likeCount: number
sharedCount: number
}[],}

export interface GetOneAppUserResponseData {
data?: {
avatar: string
createdAt: string
inviteById?: string
nickname: string
providerId: string
id: string
phone?: string
points: number
provider: string
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
avatar: string
id: string
nickname: string
phone?: string
points: number
},
}

export interface GetWorksByHotResponseData {
data: {
sharedCount: number
url: string
id: number
likeCount: number
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
id: number
likeCount: number
recommendRate: number
sharedCount: number
url: string
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


