
export interface InternalCreateOneAppUserInput {
data: aigc_AppUserCreateInput
}

export interface InternalCreateOneArtWorkInput {
creationId: number
url: string
}

export interface InternalCreateOneCreationInput {
args: string
userId: number
}

export interface InternalCreateOneDraftInput {
creationId: number
url: string
}

export interface InternalCreateOneShareInput {
userId: number
way: string
point: number
}

export interface InternalDecreaseArtWorkLikeCountInput {
id: number
}

export interface InternalFindOneAppUserInput {
providerUserId: string
}

export interface InternalGeneratePictureWithAIInput {
args: string
}

export interface InternalGetArtWorkDetailInput {
id: number
userId: number
}

export interface InternalGetDraftWorksInput {
creationId: number
}

export interface InternalGetLatestArtWorkInput {
creationId: number
}

export interface InternalGetMyAlbumInput {
skip?: number
take?: number
userId: number
}

export interface InternalGetMyDraftsInput {
take?: number
userId: number
skip?: number
}

export interface InternalGetMyLikedInput {
take?: number
userId: number
skip?: number
}

export interface InternalGetMyPointRecordsInput {
way?: string[],timeStart: string
userId: number
}

export interface InternalGetMyPublicAlbumInput {
skip?: number
take?: number
userId: number
}

export interface InternalGetOneAppUserInput {
id: number
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
id: number
points: number
}

export interface InternalLikeOneArtWorkInput {
artWorkId: number
userId: number
}

export interface InternalMoveDraftToAlbumInput {
id: number
}

export interface InternalPublishMyArtWorkInput {
id: number
}

export interface InternalRecordMyInviterInput {
userId: number
inviterId: number
}

export interface InternalShareArtWorkToPublicInput {
id: number
}

export interface InternalUnlikeOneArtWorkInput {
artWorkId: number
userId: number
}

export interface InternalUpdateOneAppUserInput {
provider?: string
providerId?: string
providerUserId?: string
AppUser?: aigc_AppUserUpdateOneWithoutOther_AppUserNestedInput
avatar?: string
id: number
nickname?: string
phone?: string
points?: number
}

export interface InternalUsePointsInput {
id: number
}



export interface InjectedCreateOneAppUserInput {
data: aigc_AppUserCreateInput
}

export interface InjectedCreateOneArtWorkInput {
url: string
creationId: number
}

export interface InjectedCreateOneCreationInput {
userId: number
args: string
}

export interface InjectedCreateOneDraftInput {
creationId: number
url: string
}

export interface InjectedCreateOneShareInput {
point: number
userId: number
way: string
}

export interface InjectedDecreaseArtWorkLikeCountInput {
id: number
}

export interface InjectedFindOneAppUserInput {
providerUserId: string
}

export interface InjectedGeneratePictureWithAIInput {
args: string
}

export interface InjectedGetArtWorkDetailInput {
id: number
userId: number
}

export interface InjectedGetDraftWorksInput {
creationId: number
}

export interface InjectedGetLatestArtWorkInput {
creationId: number
}

export interface InjectedGetMyAlbumInput {
skip?: number
take?: number
userId: number
}

export interface InjectedGetMyDraftsInput {
skip?: number
take?: number
userId: number
}

export interface InjectedGetMyLikedInput {
skip?: number
take?: number
userId: number
}

export interface InjectedGetMyPointRecordsInput {
timeStart: string
userId: number
way?: string[],}

export interface InjectedGetMyPublicAlbumInput {
skip?: number
take?: number
userId: number
}

export interface InjectedGetOneAppUserInput {
id: number
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
id: number
points: number
}

export interface InjectedLikeOneArtWorkInput {
artWorkId: number
userId: number
}

export interface InjectedMoveDraftToAlbumInput {
id: number
}

export interface InjectedPublishMyArtWorkInput {
id: number
}

export interface InjectedRecordMyInviterInput {
userId: number
inviterId: number
}

export interface InjectedShareArtWorkToPublicInput {
id: number
}

export interface InjectedUnlikeOneArtWorkInput {
artWorkId: number
userId: number
}

export interface InjectedUpdateOneAppUserInput {
AppUser?: aigc_AppUserUpdateOneWithoutOther_AppUserNestedInput
id: number
phone?: string
points?: number
providerUserId?: string
avatar?: string
nickname?: string
provider?: string
providerId?: string
}

export interface InjectedUsePointsInput {
id: number
}



export interface CreateOneAppUserResponse {
data?: CreateOneAppUserResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface CreateOneArtWorkResponse {
data?: CreateOneArtWorkResponseData
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

export interface CreateOneShareResponse {
data?: CreateOneShareResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface DecreaseArtWorkLikeCountResponse {
data?: DecreaseArtWorkLikeCountResponseData
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

export interface GetDraftWorksResponse {
data?: GetDraftWorksResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetLatestArtWorkResponse {
data?: GetLatestArtWorkResponseData
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

export interface ShareArtWorkToPublicResponse {
data?: ShareArtWorkToPublicResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface TestClaimResponse {
data?: TestClaimResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface UnlikeOneArtWorkResponse {
data?: UnlikeOneArtWorkResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface UpdateOneAppUserResponse {
data?: UpdateOneAppUserResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface UsePointsResponse {
data?: UsePointsResponseData
errors?: ReadonlyArray<GraphQLError>;
}



export interface CreateOneAppUserResponseData {
data?: {
id: number
},
}

export interface CreateOneArtWorkResponseData {
data?: {
id: number
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

export interface CreateOneShareResponseData {
data?: {
id: number
},
}

export interface DecreaseArtWorkLikeCountResponseData {
data?: {
id: number
},
}

export interface FindOneAppUserResponseData {
data?: {
providerUserId: string
avatar: string
id: number
phone?: string
points: number
providerId: string
createdAt: string
inviteById?: number
nickname: string
provider: string
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
url: string
args: string
isDraft: boolean
likeRecords: {
id: number
}[],published: boolean
id: number
likeCount: number
sharedCount: number
user: {
avatar: string
id: number
nickname: string
},
},
}

export interface GetDraftWorksResponseData {
data: {
id: number
url: string
}[],}

export interface GetLatestArtWorkResponseData {
data?: {
url: string
},
}

export interface GetMyAlbumResponseData {
data: {
sharedCount: number
url: string
id: number
likeCount: number
publishAt?: string
published: boolean
recommendRate: number
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
id: number
likeCount: number
sharedCount: number
url: string
}[],}

export interface GetOneAppUserResponseData {
data?: {
AppUser?: {
id: number
nickname: string
},
avatar: string
createdAt: string
inviteById?: number
nickname: string
points: number
providerId: string
id: number
phone?: string
provider: string
providerUserId: string
},
}

export interface GetUserinfoResponseData {
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
id: number
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
published: boolean
id: number
publishAt?: string
},
}

export interface RecordMyInviterResponseData {
data?: {
id: number
},
}

export interface ShareArtWorkToPublicResponseData {
data?: {
id: number
},
}

export interface TestClaimResponseData {
data?: {
createdAt: string
id: number
},
}

export interface UnlikeOneArtWorkResponseData {
data?: {
count: number
},
}

export interface UpdateOneAppUserResponseData {
data?: {
id: number
inviteById?: number
nickname: string
phone?: string
points: number
providerUserId: string
avatar: string
createdAt: string
provider: string
providerId: string
},
}

export interface UsePointsResponseData {
data?: {
id: number
},
}





export interface aigc_LikeRecordCreateNestedManyWithoutArtWorkInput {
connect?: aigc_LikeRecordWhereUniqueInput
connectOrCreate?: aigc_LikeRecordCreateOrConnectWithoutArtWorkInput
create?: aigc_LikeRecordCreateWithoutArtWorkInput
createMany?: aigc_LikeRecordCreateManyArtWorkInputEnvelope
}

export interface aigc_LikeRecordCreateManyArtWorkInputEnvelope {
data?: aigc_LikeRecordCreateManyArtWorkInput[],skipDuplicates?: boolean
}

export interface aigc_AppUserUpdateWithoutOther_AppUserInput {
providerUserId?: aigc_StringFieldUpdateOperationsInput
AppUser?: aigc_AppUserUpdateOneWithoutOther_AppUserNestedInput
Creation?: aigc_CreationUpdateManyWithoutAppUserNestedInput
LikeRecord?: aigc_LikeRecordUpdateManyWithoutAppUserNestedInput
PointRecord?: aigc_PointRecordUpdateManyWithoutAppUserNestedInput
createdAt?: aigc_DateTimeFieldUpdateOperationsInput
providerId?: aigc_StringFieldUpdateOperationsInput
avatar?: aigc_StringFieldUpdateOperationsInput
nickname?: aigc_StringFieldUpdateOperationsInput
phone?: aigc_NullableStringFieldUpdateOperationsInput
points?: aigc_IntFieldUpdateOperationsInput
provider?: aigc_StringFieldUpdateOperationsInput
}

export interface aigc_LikeRecordWhereUniqueInput {
id?: number
}

export interface aigc_PointRecordCreateManyAppUserInput {
point?: number
way?: string
createdAt?: string
id?: number
}

export interface aigc_BoolFieldUpdateOperationsInput {
set?: boolean
}

export interface aigc_LikeRecordUpsertWithWhereUniqueWithoutAppUserInput {
where?: aigc_LikeRecordWhereUniqueInput
create?: aigc_LikeRecordCreateWithoutAppUserInput
update?: aigc_LikeRecordUpdateWithoutAppUserInput
}

export interface aigc_CreationUpdateManyMutationInput {
args?: aigc_StringFieldUpdateOperationsInput
createdAt?: aigc_DateTimeFieldUpdateOperationsInput
}

export interface aigc_AppUserCreateNestedOneWithoutLikeRecordInput {
connect?: aigc_AppUserWhereUniqueInput
connectOrCreate?: aigc_AppUserCreateOrConnectWithoutLikeRecordInput
create?: aigc_AppUserCreateWithoutLikeRecordInput
}

export interface aigc_ArtWorkCreateManyCreationInputEnvelope {
data?: aigc_ArtWorkCreateManyCreationInput[],skipDuplicates?: boolean
}

export interface aigc_NullableDateTimeFieldUpdateOperationsInput {
set?: string
}

export interface aigc_LikeRecordUpdateManyWithWhereWithoutAppUserInput {
data?: aigc_LikeRecordUpdateManyMutationInput
where?: aigc_LikeRecordScalarWhereInput
}

export interface aigc_NestedIntNullableFilter {
notIn?: number[],equals?: number
gt?: number
gte?: number
in?: number[],lt?: number
lte?: number
not?: aigc_NestedIntNullableFilter
}

export interface aigc_LikeRecordCreateOrConnectWithoutAppUserInput {
where?: aigc_LikeRecordWhereUniqueInput
create?: aigc_LikeRecordCreateWithoutAppUserInput
}

export interface aigc_AppUserUpsertWithWhereUniqueWithoutAppUserInput {
create?: aigc_AppUserCreateWithoutAppUserInput
update?: aigc_AppUserUpdateWithoutAppUserInput
where?: aigc_AppUserWhereUniqueInput
}

export interface aigc_PointRecordCreateWithoutAppUserInput {
createdAt?: string
point?: number
way?: string
}

export interface aigc_IntNullableFilter {
gte?: number
in?: number[],lt?: number
lte?: number
not?: aigc_NestedIntNullableFilter
notIn?: number[],equals?: number
gt?: number
}

export interface aigc_ArtWorkUpsertWithoutLikeRecordInput {
update?: aigc_ArtWorkUpdateWithoutLikeRecordInput
create?: aigc_ArtWorkCreateWithoutLikeRecordInput
}

export interface aigc_CreationCreateManyAppUserInput {
args?: string
createdAt?: string
id?: number
}

export interface aigc_StringFilter {
not?: aigc_NestedStringFilter
notIn?: string[],contains?: string
endsWith?: string
gt?: string
gte?: string
in?: string[],lte?: string
equals?: string
lt?: string
startsWith?: string
}

export interface aigc_LikeRecordUpdateWithoutArtWorkInput {
AppUser?: aigc_AppUserUpdateOneRequiredWithoutLikeRecordNestedInput
createdAt?: aigc_DateTimeFieldUpdateOperationsInput
}

export interface aigc_AppUserCreateNestedManyWithoutAppUserInput {
createMany?: aigc_AppUserCreateManyAppUserInputEnvelope
connect?: aigc_AppUserWhereUniqueInput
connectOrCreate?: aigc_AppUserCreateOrConnectWithoutAppUserInput
create?: aigc_AppUserCreateWithoutAppUserInput
}

export interface aigc_AppUserCreateWithoutCreationInput {
createdAt?: string
nickname?: string
other_AppUser?: aigc_AppUserCreateNestedManyWithoutAppUserInput
phone?: string
points?: number
provider?: string
AppUser?: aigc_AppUserCreateNestedOneWithoutOther_AppUserInput
PointRecord?: aigc_PointRecordCreateNestedManyWithoutAppUserInput
providerUserId?: string
providerId?: string
LikeRecord?: aigc_LikeRecordCreateNestedManyWithoutAppUserInput
avatar?: string
}

export interface aigc_CreationScalarWhereInput {
AND?: aigc_CreationScalarWhereInput
NOT?: aigc_CreationScalarWhereInput
OR?: aigc_CreationScalarWhereInput[],args?: aigc_StringFilter
authorId?: aigc_IntFilter
createdAt?: aigc_DateTimeFilter
id?: aigc_IntFilter
}

export interface aigc_ArtWorkCreateWithoutCreationInput {
published?: boolean
recommendRate?: number
sharedCount?: number
url?: string
LikeRecord?: aigc_LikeRecordCreateNestedManyWithoutArtWorkInput
isDraft?: boolean
likeCount?: number
publishAt?: string
}

export interface aigc_DateTimeFieldUpdateOperationsInput {
set?: string
}

export interface aigc_PointRecordUpdateWithWhereUniqueWithoutAppUserInput {
data?: aigc_PointRecordUpdateWithoutAppUserInput
where?: aigc_PointRecordWhereUniqueInput
}

export interface aigc_LikeRecordCreateOrConnectWithoutArtWorkInput {
where?: aigc_LikeRecordWhereUniqueInput
create?: aigc_LikeRecordCreateWithoutArtWorkInput
}

export interface aigc_DateTimeFilter {
lte?: string
not?: aigc_NestedDateTimeFilter
notIn?: string[],equals?: string
gt?: string
gte?: string
in?: string[],lt?: string
}

export interface aigc_LikeRecordUpdateManyWithoutAppUserNestedInput {
disconnect?: aigc_LikeRecordWhereUniqueInput
set?: aigc_LikeRecordWhereUniqueInput
connectOrCreate?: aigc_LikeRecordCreateOrConnectWithoutAppUserInput
create?: aigc_LikeRecordCreateWithoutAppUserInput
createMany?: aigc_LikeRecordCreateManyAppUserInputEnvelope
update?: aigc_LikeRecordUpdateWithWhereUniqueWithoutAppUserInput
updateMany?: aigc_LikeRecordUpdateManyWithWhereWithoutAppUserInput
upsert?: aigc_LikeRecordUpsertWithWhereUniqueWithoutAppUserInput
connect?: aigc_LikeRecordWhereUniqueInput
delete?: aigc_LikeRecordWhereUniqueInput
deleteMany?: aigc_LikeRecordScalarWhereInput
}

export interface aigc_CreationWhereUniqueInput {
id?: number
}

export interface aigc_AppUserCreateNestedOneWithoutOther_AppUserInput {
connect?: aigc_AppUserWhereUniqueInput
connectOrCreate?: aigc_AppUserCreateOrConnectWithoutOther_AppUserInput
create?: aigc_AppUserCreateWithoutOther_AppUserInput
}

export interface aigc_CreationUpsertWithoutArtWorkInput {
create?: aigc_CreationCreateWithoutArtWorkInput
update?: aigc_CreationUpdateWithoutArtWorkInput
}

export interface aigc_StringFieldUpdateOperationsInput {
set?: string
}

export interface aigc_NestedDateTimeNullableFilter {
not?: aigc_NestedDateTimeNullableFilter
notIn?: string[],equals?: string
gt?: string
gte?: string
in?: string[],lt?: string
lte?: string
}

export interface aigc_NullableStringFieldUpdateOperationsInput {
set?: string
}

export interface aigc_CreationCreateWithoutArtWorkInput {
AppUser: aigc_AppUserCreateNestedOneWithoutCreationInput
args: string
createdAt?: string
}

export interface aigc_AppUserCreateWithoutLikeRecordInput {
PointRecord?: aigc_PointRecordCreateNestedManyWithoutAppUserInput
phone?: string
points?: number
providerId?: string
AppUser?: aigc_AppUserCreateNestedOneWithoutOther_AppUserInput
Creation?: aigc_CreationCreateNestedManyWithoutAppUserInput
avatar?: string
createdAt?: string
nickname?: string
other_AppUser?: aigc_AppUserCreateNestedManyWithoutAppUserInput
provider?: string
providerUserId?: string
}

export interface aigc_LikeRecordCreateWithoutArtWorkInput {
AppUser: aigc_AppUserCreateNestedOneWithoutLikeRecordInput
createdAt?: string
}

export interface aigc_ArtWorkScalarWhereInput {
likeCount?: aigc_IntFilter
published?: aigc_BoolFilter
recommendRate?: aigc_IntFilter
sharedCount?: aigc_IntFilter
url?: aigc_StringFilter
AND?: aigc_ArtWorkScalarWhereInput
NOT?: aigc_ArtWorkScalarWhereInput
id?: aigc_IntFilter
isDraft?: aigc_BoolFilter
publishAt?: aigc_DateTimeNullableFilter
OR?: aigc_ArtWorkScalarWhereInput[],creationId?: aigc_IntFilter
}

export interface aigc_AppUserUpdateWithoutAppUserInput {
other_AppUser?: aigc_AppUserUpdateManyWithoutAppUserNestedInput
phone?: aigc_NullableStringFieldUpdateOperationsInput
points?: aigc_IntFieldUpdateOperationsInput
providerId?: aigc_StringFieldUpdateOperationsInput
Creation?: aigc_CreationUpdateManyWithoutAppUserNestedInput
createdAt?: aigc_DateTimeFieldUpdateOperationsInput
avatar?: aigc_StringFieldUpdateOperationsInput
nickname?: aigc_StringFieldUpdateOperationsInput
provider?: aigc_StringFieldUpdateOperationsInput
providerUserId?: aigc_StringFieldUpdateOperationsInput
LikeRecord?: aigc_LikeRecordUpdateManyWithoutAppUserNestedInput
PointRecord?: aigc_PointRecordUpdateManyWithoutAppUserNestedInput
}

export interface aigc_CreationCreateManyAppUserInputEnvelope {
data?: aigc_CreationCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface aigc_CreationUpdateWithoutAppUserInput {
args?: aigc_StringFieldUpdateOperationsInput
createdAt?: aigc_DateTimeFieldUpdateOperationsInput
ArtWork?: aigc_ArtWorkUpdateManyWithoutCreationNestedInput
}

export interface aigc_StringNullableFilter {
equals?: string
gte?: string
not?: aigc_NestedStringNullableFilter
notIn?: string[],contains?: string
endsWith?: string
gt?: string
in?: string[],lt?: string
lte?: string
startsWith?: string
}

export interface aigc_CreationUpsertWithWhereUniqueWithoutAppUserInput {
update?: aigc_CreationUpdateWithoutAppUserInput
where?: aigc_CreationWhereUniqueInput
create?: aigc_CreationCreateWithoutAppUserInput
}

export interface aigc_LikeRecordUpdateManyWithoutArtWorkNestedInput {
createMany?: aigc_LikeRecordCreateManyArtWorkInputEnvelope
delete?: aigc_LikeRecordWhereUniqueInput
deleteMany?: aigc_LikeRecordScalarWhereInput
disconnect?: aigc_LikeRecordWhereUniqueInput
set?: aigc_LikeRecordWhereUniqueInput
update?: aigc_LikeRecordUpdateWithWhereUniqueWithoutArtWorkInput
connect?: aigc_LikeRecordWhereUniqueInput
connectOrCreate?: aigc_LikeRecordCreateOrConnectWithoutArtWorkInput
updateMany?: aigc_LikeRecordUpdateManyWithWhereWithoutArtWorkInput
upsert?: aigc_LikeRecordUpsertWithWhereUniqueWithoutArtWorkInput
create?: aigc_LikeRecordCreateWithoutArtWorkInput
}

export interface aigc_AppUserCreateInput {
providerId: string
providerUserId: string
AppUser?: aigc_AppUserCreateNestedOneWithoutOther_AppUserInput
avatar: string
createdAt?: string
points?: number
provider: string
phone?: string
Creation?: aigc_CreationCreateNestedManyWithoutAppUserInput
LikeRecord?: aigc_LikeRecordCreateNestedManyWithoutAppUserInput
PointRecord?: aigc_PointRecordCreateNestedManyWithoutAppUserInput
nickname: string
other_AppUser?: aigc_AppUserCreateNestedManyWithoutAppUserInput
}

export interface aigc_CreationCreateNestedManyWithoutAppUserInput {
connect?: aigc_CreationWhereUniqueInput
connectOrCreate?: aigc_CreationCreateOrConnectWithoutAppUserInput
create?: aigc_CreationCreateWithoutAppUserInput
createMany?: aigc_CreationCreateManyAppUserInputEnvelope
}

export interface aigc_PointRecordCreateOrConnectWithoutAppUserInput {
create?: aigc_PointRecordCreateWithoutAppUserInput
where?: aigc_PointRecordWhereUniqueInput
}

export interface aigc_NestedIntFilter {
gte?: number
in?: number[],lt?: number
lte?: number
not?: aigc_NestedIntFilter
notIn?: number[],equals?: number
gt?: number
}

export interface aigc_PointRecordUpdateWithoutAppUserInput {
createdAt?: aigc_DateTimeFieldUpdateOperationsInput
point?: aigc_IntFieldUpdateOperationsInput
way?: string
}

export interface aigc_AppUserUpdateWithWhereUniqueWithoutAppUserInput {
data?: aigc_AppUserUpdateWithoutAppUserInput
where?: aigc_AppUserWhereUniqueInput
}

export interface aigc_AppUserUpdateOneWithoutOther_AppUserNestedInput {
disconnect?: boolean
update?: aigc_AppUserUpdateWithoutOther_AppUserInput
upsert?: aigc_AppUserUpsertWithoutOther_AppUserInput
connect?: aigc_AppUserWhereUniqueInput
connectOrCreate?: aigc_AppUserCreateOrConnectWithoutOther_AppUserInput
create?: aigc_AppUserCreateWithoutOther_AppUserInput
delete?: boolean
}

export interface aigc_AppUserCreateOrConnectWithoutOther_AppUserInput {
create?: aigc_AppUserCreateWithoutOther_AppUserInput
where?: aigc_AppUserWhereUniqueInput
}

export interface aigc_CreationUpdateOneRequiredWithoutArtWorkNestedInput {
connect?: aigc_CreationWhereUniqueInput
connectOrCreate?: aigc_CreationCreateOrConnectWithoutArtWorkInput
create?: aigc_CreationCreateWithoutArtWorkInput
update?: aigc_CreationUpdateWithoutArtWorkInput
upsert?: aigc_CreationUpsertWithoutArtWorkInput
}

export interface aigc_PointRecordUpdateManyWithoutAppUserNestedInput {
connect?: aigc_PointRecordWhereUniqueInput
connectOrCreate?: aigc_PointRecordCreateOrConnectWithoutAppUserInput
createMany?: aigc_PointRecordCreateManyAppUserInputEnvelope
delete?: aigc_PointRecordWhereUniqueInput
deleteMany?: aigc_PointRecordScalarWhereInput
set?: aigc_PointRecordWhereUniqueInput
update?: aigc_PointRecordUpdateWithWhereUniqueWithoutAppUserInput
create?: aigc_PointRecordCreateWithoutAppUserInput
disconnect?: aigc_PointRecordWhereUniqueInput
updateMany?: aigc_PointRecordUpdateManyWithWhereWithoutAppUserInput
upsert?: aigc_PointRecordUpsertWithWhereUniqueWithoutAppUserInput
}

export interface aigc_AppUserScalarWhereInput {
avatar?: aigc_StringFilter
createdAt?: aigc_DateTimeFilter
id?: aigc_IntFilter
nickname?: aigc_StringFilter
points?: aigc_IntFilter
OR?: aigc_AppUserScalarWhereInput[],NOT?: aigc_AppUserScalarWhereInput
inviteById?: aigc_IntNullableFilter
phone?: aigc_StringNullableFilter
provider?: aigc_StringFilter
providerId?: aigc_StringFilter
providerUserId?: aigc_StringFilter
AND?: aigc_AppUserScalarWhereInput
}

export interface aigc_AppUserUpdateManyWithoutAppUserNestedInput {
connect?: aigc_AppUserWhereUniqueInput
connectOrCreate?: aigc_AppUserCreateOrConnectWithoutAppUserInput
delete?: aigc_AppUserWhereUniqueInput
updateMany?: aigc_AppUserUpdateManyWithWhereWithoutAppUserInput
upsert?: aigc_AppUserUpsertWithWhereUniqueWithoutAppUserInput
create?: aigc_AppUserCreateWithoutAppUserInput
createMany?: aigc_AppUserCreateManyAppUserInputEnvelope
deleteMany?: aigc_AppUserScalarWhereInput
disconnect?: aigc_AppUserWhereUniqueInput
set?: aigc_AppUserWhereUniqueInput
update?: aigc_AppUserUpdateWithWhereUniqueWithoutAppUserInput
}

export interface aigc_IntFieldUpdateOperationsInput {
decrement?: number
divide?: number
increment?: number
multiply?: number
set?: number
}

export interface aigc_LikeRecordCreateWithoutAppUserInput {
ArtWork?: aigc_ArtWorkCreateNestedOneWithoutLikeRecordInput
createdAt?: string
}

export interface aigc_NestedStringFilter {
endsWith?: string
gte?: string
in?: string[],lt?: string
lte?: string
not?: aigc_NestedStringFilter
notIn?: string[],startsWith?: string
contains?: string
equals?: string
gt?: string
}

export interface aigc_PointRecordUpdateManyMutationInput {
createdAt?: aigc_DateTimeFieldUpdateOperationsInput
point?: aigc_IntFieldUpdateOperationsInput
way?: string
}

export interface aigc_IntFilter {
not?: aigc_NestedIntFilter
notIn?: number[],equals?: number
gt?: number
gte?: number
in?: number[],lt?: number
lte?: number
}

export interface aigc_AppUserCreateOrConnectWithoutCreationInput {
create?: aigc_AppUserCreateWithoutCreationInput
where?: aigc_AppUserWhereUniqueInput
}

export interface aigc_AppUserUpsertWithoutLikeRecordInput {
update?: aigc_AppUserUpdateWithoutLikeRecordInput
create?: aigc_AppUserCreateWithoutLikeRecordInput
}

export interface aigc_ArtWorkCreateNestedOneWithoutLikeRecordInput {
connect?: aigc_ArtWorkWhereUniqueInput
connectOrCreate?: aigc_ArtWorkCreateOrConnectWithoutLikeRecordInput
create?: aigc_ArtWorkCreateWithoutLikeRecordInput
}

export interface aigc_NestedBoolFilter {
not?: aigc_NestedBoolFilter
equals?: boolean
}

export interface aigc_AppUserUpdateWithoutCreationInput {
createdAt?: aigc_DateTimeFieldUpdateOperationsInput
nickname?: aigc_StringFieldUpdateOperationsInput
other_AppUser?: aigc_AppUserUpdateManyWithoutAppUserNestedInput
phone?: aigc_NullableStringFieldUpdateOperationsInput
points?: aigc_IntFieldUpdateOperationsInput
AppUser?: aigc_AppUserUpdateOneWithoutOther_AppUserNestedInput
LikeRecord?: aigc_LikeRecordUpdateManyWithoutAppUserNestedInput
PointRecord?: aigc_PointRecordUpdateManyWithoutAppUserNestedInput
providerId?: aigc_StringFieldUpdateOperationsInput
avatar?: aigc_StringFieldUpdateOperationsInput
provider?: aigc_StringFieldUpdateOperationsInput
providerUserId?: aigc_StringFieldUpdateOperationsInput
}

export interface aigc_ArtWorkUpdateWithoutCreationInput {
recommendRate?: aigc_IntFieldUpdateOperationsInput
sharedCount?: aigc_IntFieldUpdateOperationsInput
url?: aigc_StringFieldUpdateOperationsInput
LikeRecord?: aigc_LikeRecordUpdateManyWithoutArtWorkNestedInput
isDraft?: aigc_BoolFieldUpdateOperationsInput
likeCount?: aigc_IntFieldUpdateOperationsInput
publishAt?: aigc_NullableDateTimeFieldUpdateOperationsInput
published?: aigc_BoolFieldUpdateOperationsInput
}

export interface aigc_ArtWorkCreateWithoutLikeRecordInput {
likeCount?: number
publishAt?: string
published?: boolean
recommendRate?: number
sharedCount?: number
url: string
Creation: aigc_CreationCreateNestedOneWithoutArtWorkInput
isDraft?: boolean
}

export interface aigc_ArtWorkCreateManyCreationInput {
isDraft?: boolean
likeCount?: number
publishAt?: string
published?: boolean
recommendRate?: number
sharedCount?: number
url?: string
id?: number
}

export interface aigc_AppUserCreateManyAppUserInputEnvelope {
data?: aigc_AppUserCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface aigc_ArtWorkUpdateManyWithoutCreationNestedInput {
connectOrCreate?: aigc_ArtWorkCreateOrConnectWithoutCreationInput
delete?: aigc_ArtWorkWhereUniqueInput
deleteMany?: aigc_ArtWorkScalarWhereInput
upsert?: aigc_ArtWorkUpsertWithWhereUniqueWithoutCreationInput
connect?: aigc_ArtWorkWhereUniqueInput
create?: aigc_ArtWorkCreateWithoutCreationInput
createMany?: aigc_ArtWorkCreateManyCreationInputEnvelope
disconnect?: aigc_ArtWorkWhereUniqueInput
set?: aigc_ArtWorkWhereUniqueInput
update?: aigc_ArtWorkUpdateWithWhereUniqueWithoutCreationInput
updateMany?: aigc_ArtWorkUpdateManyWithWhereWithoutCreationInput
}

export interface aigc_NestedDateTimeFilter {
equals?: string
gt?: string
gte?: string
in?: string[],lt?: string
lte?: string
not?: aigc_NestedDateTimeFilter
notIn?: string[],}

export interface aigc_LikeRecordUpsertWithWhereUniqueWithoutArtWorkInput {
create?: aigc_LikeRecordCreateWithoutArtWorkInput
update?: aigc_LikeRecordUpdateWithoutArtWorkInput
where?: aigc_LikeRecordWhereUniqueInput
}

export interface aigc_LikeRecordCreateNestedManyWithoutAppUserInput {
connect?: aigc_LikeRecordWhereUniqueInput
connectOrCreate?: aigc_LikeRecordCreateOrConnectWithoutAppUserInput
create?: aigc_LikeRecordCreateWithoutAppUserInput
createMany?: aigc_LikeRecordCreateManyAppUserInputEnvelope
}

export interface aigc_AppUserCreateNestedOneWithoutCreationInput {
connect?: aigc_AppUserWhereUniqueInput
connectOrCreate?: aigc_AppUserCreateOrConnectWithoutCreationInput
create?: aigc_AppUserCreateWithoutCreationInput
}

export interface aigc_AppUserWhereUniqueInput {
id?: number
}

export interface aigc_PointRecordCreateManyAppUserInputEnvelope {
data?: aigc_PointRecordCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface aigc_ArtWorkUpdateManyWithWhereWithoutCreationInput {
where?: aigc_ArtWorkScalarWhereInput
data?: aigc_ArtWorkUpdateManyMutationInput
}

export interface aigc_EnumPointRecord_wayFilter {
equals?: string
in?: string[],not?: string
notIn?: string[],}

export interface aigc_ArtWorkCreateNestedManyWithoutCreationInput {
connectOrCreate?: aigc_ArtWorkCreateOrConnectWithoutCreationInput
create?: aigc_ArtWorkCreateWithoutCreationInput
createMany?: aigc_ArtWorkCreateManyCreationInputEnvelope
connect?: aigc_ArtWorkWhereUniqueInput
}

export interface aigc_ArtWorkUpdateManyMutationInput {
likeCount?: aigc_IntFieldUpdateOperationsInput
publishAt?: aigc_NullableDateTimeFieldUpdateOperationsInput
published?: aigc_BoolFieldUpdateOperationsInput
recommendRate?: aigc_IntFieldUpdateOperationsInput
sharedCount?: aigc_IntFieldUpdateOperationsInput
url?: aigc_StringFieldUpdateOperationsInput
isDraft?: aigc_BoolFieldUpdateOperationsInput
}

export interface aigc_BoolFilter {
equals?: boolean
not?: aigc_NestedBoolFilter
}

export interface aigc_NestedStringNullableFilter {
gte?: string
in?: string[],lte?: string
startsWith?: string
endsWith?: string
equals?: string
lt?: string
not?: aigc_NestedStringNullableFilter
notIn?: string[],contains?: string
gt?: string
}

export interface aigc_ArtWorkUpdateWithoutLikeRecordInput {
isDraft?: aigc_BoolFieldUpdateOperationsInput
likeCount?: aigc_IntFieldUpdateOperationsInput
publishAt?: aigc_NullableDateTimeFieldUpdateOperationsInput
published?: aigc_BoolFieldUpdateOperationsInput
recommendRate?: aigc_IntFieldUpdateOperationsInput
sharedCount?: aigc_IntFieldUpdateOperationsInput
url?: aigc_StringFieldUpdateOperationsInput
Creation?: aigc_CreationUpdateOneRequiredWithoutArtWorkNestedInput
}

export interface aigc_CreationCreateWithoutAppUserInput {
args?: string
createdAt?: string
ArtWork?: aigc_ArtWorkCreateNestedManyWithoutCreationInput
}

export interface aigc_LikeRecordCreateManyArtWorkInput {
createdAt?: string
id?: number
userId?: number
}

export interface aigc_DateTimeNullableFilter {
in?: string[],lt?: string
lte?: string
not?: aigc_NestedDateTimeNullableFilter
notIn?: string[],equals?: string
gt?: string
gte?: string
}

export interface aigc_PointRecordScalarWhereInput {
id?: aigc_IntFilter
point?: aigc_IntFilter
userId?: aigc_IntFilter
way?: aigc_EnumPointRecord_wayFilter
AND?: aigc_PointRecordScalarWhereInput
NOT?: aigc_PointRecordScalarWhereInput
OR?: aigc_PointRecordScalarWhereInput[],createdAt?: aigc_DateTimeFilter
}

export interface aigc_LikeRecordUpdateWithWhereUniqueWithoutAppUserInput {
data?: aigc_LikeRecordUpdateWithoutAppUserInput
where?: aigc_LikeRecordWhereUniqueInput
}

export interface aigc_CreationUpdateWithWhereUniqueWithoutAppUserInput {
where?: aigc_CreationWhereUniqueInput
data?: aigc_CreationUpdateWithoutAppUserInput
}

export interface aigc_CreationCreateOrConnectWithoutAppUserInput {
create?: aigc_CreationCreateWithoutAppUserInput
where?: aigc_CreationWhereUniqueInput
}

export interface aigc_PointRecordCreateNestedManyWithoutAppUserInput {
connect?: aigc_PointRecordWhereUniqueInput
connectOrCreate?: aigc_PointRecordCreateOrConnectWithoutAppUserInput
create?: aigc_PointRecordCreateWithoutAppUserInput
createMany?: aigc_PointRecordCreateManyAppUserInputEnvelope
}

export interface aigc_ArtWorkUpdateWithWhereUniqueWithoutCreationInput {
data?: aigc_ArtWorkUpdateWithoutCreationInput
where?: aigc_ArtWorkWhereUniqueInput
}

export interface aigc_ArtWorkUpdateOneRequiredWithoutLikeRecordNestedInput {
connect?: aigc_ArtWorkWhereUniqueInput
connectOrCreate?: aigc_ArtWorkCreateOrConnectWithoutLikeRecordInput
create?: aigc_ArtWorkCreateWithoutLikeRecordInput
update?: aigc_ArtWorkUpdateWithoutLikeRecordInput
upsert?: aigc_ArtWorkUpsertWithoutLikeRecordInput
}

export interface aigc_AppUserUpdateManyWithWhereWithoutAppUserInput {
data?: aigc_AppUserUpdateManyMutationInput
where?: aigc_AppUserScalarWhereInput
}

export interface aigc_CreationUpdateWithoutArtWorkInput {
AppUser?: aigc_AppUserUpdateOneRequiredWithoutCreationNestedInput
args?: aigc_StringFieldUpdateOperationsInput
createdAt?: aigc_DateTimeFieldUpdateOperationsInput
}

export interface aigc_AppUserCreateWithoutOther_AppUserInput {
createdAt?: string
phone?: string
points?: number
provider?: string
AppUser?: aigc_AppUserCreateNestedOneWithoutOther_AppUserInput
Creation?: aigc_CreationCreateNestedManyWithoutAppUserInput
LikeRecord?: aigc_LikeRecordCreateNestedManyWithoutAppUserInput
providerId?: string
providerUserId?: string
PointRecord?: aigc_PointRecordCreateNestedManyWithoutAppUserInput
avatar?: string
nickname?: string
}

export interface aigc_LikeRecordUpdateWithoutAppUserInput {
ArtWork?: aigc_ArtWorkUpdateOneRequiredWithoutLikeRecordNestedInput
createdAt?: aigc_DateTimeFieldUpdateOperationsInput
}

export interface aigc_AppUserUpdateWithoutLikeRecordInput {
avatar?: aigc_StringFieldUpdateOperationsInput
nickname?: aigc_StringFieldUpdateOperationsInput
points?: aigc_IntFieldUpdateOperationsInput
provider?: aigc_StringFieldUpdateOperationsInput
providerId?: aigc_StringFieldUpdateOperationsInput
AppUser?: aigc_AppUserUpdateOneWithoutOther_AppUserNestedInput
Creation?: aigc_CreationUpdateManyWithoutAppUserNestedInput
PointRecord?: aigc_PointRecordUpdateManyWithoutAppUserNestedInput
providerUserId?: aigc_StringFieldUpdateOperationsInput
createdAt?: aigc_DateTimeFieldUpdateOperationsInput
other_AppUser?: aigc_AppUserUpdateManyWithoutAppUserNestedInput
phone?: aigc_NullableStringFieldUpdateOperationsInput
}

export interface aigc_AppUserCreateManyAppUserInput {
createdAt?: string
points?: number
provider?: string
providerUserId?: string
avatar?: string
id?: number
nickname?: string
phone?: string
providerId?: string
}

export interface aigc_CreationCreateOrConnectWithoutArtWorkInput {
create?: aigc_CreationCreateWithoutArtWorkInput
where?: aigc_CreationWhereUniqueInput
}

export interface aigc_PointRecordWhereUniqueInput {
id?: number
}

export interface aigc_AppUserCreateOrConnectWithoutLikeRecordInput {
create?: aigc_AppUserCreateWithoutLikeRecordInput
where?: aigc_AppUserWhereUniqueInput
}

export interface aigc_CreationUpdateManyWithWhereWithoutAppUserInput {
data?: aigc_CreationUpdateManyMutationInput
where?: aigc_CreationScalarWhereInput
}

export interface aigc_PointRecordUpsertWithWhereUniqueWithoutAppUserInput {
create?: aigc_PointRecordCreateWithoutAppUserInput
update?: aigc_PointRecordUpdateWithoutAppUserInput
where?: aigc_PointRecordWhereUniqueInput
}

export interface aigc_ArtWorkCreateOrConnectWithoutLikeRecordInput {
create?: aigc_ArtWorkCreateWithoutLikeRecordInput
where?: aigc_ArtWorkWhereUniqueInput
}

export interface aigc_AppUserUpsertWithoutOther_AppUserInput {
create?: aigc_AppUserCreateWithoutOther_AppUserInput
update?: aigc_AppUserUpdateWithoutOther_AppUserInput
}

export interface aigc_CreationCreateNestedOneWithoutArtWorkInput {
connectOrCreate?: aigc_CreationCreateOrConnectWithoutArtWorkInput
create?: aigc_CreationCreateWithoutArtWorkInput
connect?: aigc_CreationWhereUniqueInput
}

export interface aigc_LikeRecordUpdateManyMutationInput {
createdAt?: aigc_DateTimeFieldUpdateOperationsInput
}

export interface aigc_AppUserUpdateOneRequiredWithoutCreationNestedInput {
connect?: aigc_AppUserWhereUniqueInput
connectOrCreate?: aigc_AppUserCreateOrConnectWithoutCreationInput
create?: aigc_AppUserCreateWithoutCreationInput
update?: aigc_AppUserUpdateWithoutCreationInput
upsert?: aigc_AppUserUpsertWithoutCreationInput
}

export interface aigc_AppUserUpdateManyMutationInput {
createdAt?: aigc_DateTimeFieldUpdateOperationsInput
nickname?: aigc_StringFieldUpdateOperationsInput
phone?: aigc_NullableStringFieldUpdateOperationsInput
points?: aigc_IntFieldUpdateOperationsInput
provider?: aigc_StringFieldUpdateOperationsInput
providerId?: aigc_StringFieldUpdateOperationsInput
providerUserId?: aigc_StringFieldUpdateOperationsInput
avatar?: aigc_StringFieldUpdateOperationsInput
}

export interface aigc_LikeRecordScalarWhereInput {
createdAt?: aigc_DateTimeFilter
id?: aigc_IntFilter
userId?: aigc_IntFilter
AND?: aigc_LikeRecordScalarWhereInput
NOT?: aigc_LikeRecordScalarWhereInput
OR?: aigc_LikeRecordScalarWhereInput[],artWorkId?: aigc_IntFilter
}

export interface aigc_LikeRecordUpdateManyWithWhereWithoutArtWorkInput {
where?: aigc_LikeRecordScalarWhereInput
data?: aigc_LikeRecordUpdateManyMutationInput
}

export interface aigc_AppUserCreateWithoutAppUserInput {
nickname?: string
other_AppUser?: aigc_AppUserCreateNestedManyWithoutAppUserInput
provider?: string
providerUserId?: string
Creation?: aigc_CreationCreateNestedManyWithoutAppUserInput
LikeRecord?: aigc_LikeRecordCreateNestedManyWithoutAppUserInput
avatar?: string
createdAt?: string
PointRecord?: aigc_PointRecordCreateNestedManyWithoutAppUserInput
phone?: string
points?: number
providerId?: string
}

export interface aigc_CreationUpdateManyWithoutAppUserNestedInput {
update?: aigc_CreationUpdateWithWhereUniqueWithoutAppUserInput
upsert?: aigc_CreationUpsertWithWhereUniqueWithoutAppUserInput
connectOrCreate?: aigc_CreationCreateOrConnectWithoutAppUserInput
createMany?: aigc_CreationCreateManyAppUserInputEnvelope
delete?: aigc_CreationWhereUniqueInput
disconnect?: aigc_CreationWhereUniqueInput
updateMany?: aigc_CreationUpdateManyWithWhereWithoutAppUserInput
connect?: aigc_CreationWhereUniqueInput
create?: aigc_CreationCreateWithoutAppUserInput
deleteMany?: aigc_CreationScalarWhereInput
set?: aigc_CreationWhereUniqueInput
}

export interface aigc_LikeRecordUpdateWithWhereUniqueWithoutArtWorkInput {
data?: aigc_LikeRecordUpdateWithoutArtWorkInput
where?: aigc_LikeRecordWhereUniqueInput
}

export interface aigc_ArtWorkCreateOrConnectWithoutCreationInput {
create?: aigc_ArtWorkCreateWithoutCreationInput
where?: aigc_ArtWorkWhereUniqueInput
}

export interface aigc_ArtWorkWhereUniqueInput {
id?: number
}

export interface aigc_ArtWorkUpsertWithWhereUniqueWithoutCreationInput {
create?: aigc_ArtWorkCreateWithoutCreationInput
update?: aigc_ArtWorkUpdateWithoutCreationInput
where?: aigc_ArtWorkWhereUniqueInput
}

export interface aigc_LikeRecordCreateManyAppUserInputEnvelope {
data?: aigc_LikeRecordCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface aigc_AppUserCreateOrConnectWithoutAppUserInput {
where?: aigc_AppUserWhereUniqueInput
create?: aigc_AppUserCreateWithoutAppUserInput
}

export interface aigc_LikeRecordCreateManyAppUserInput {
artWorkId?: number
createdAt?: string
id?: number
}

export interface aigc_AppUserUpsertWithoutCreationInput {
create?: aigc_AppUserCreateWithoutCreationInput
update?: aigc_AppUserUpdateWithoutCreationInput
}

export interface aigc_PointRecordUpdateManyWithWhereWithoutAppUserInput {
data?: aigc_PointRecordUpdateManyMutationInput
where?: aigc_PointRecordScalarWhereInput
}

export interface aigc_AppUserUpdateOneRequiredWithoutLikeRecordNestedInput {
connectOrCreate?: aigc_AppUserCreateOrConnectWithoutLikeRecordInput
create?: aigc_AppUserCreateWithoutLikeRecordInput
update?: aigc_AppUserUpdateWithoutLikeRecordInput
upsert?: aigc_AppUserUpsertWithoutLikeRecordInput
connect?: aigc_AppUserWhereUniqueInput
}

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
    message: string;
    path?: ReadonlyArray<string | number>;
}



export interface CreateOneAppUserInput {
data: aigc_AppUserCreateInput
}

export interface CreateOneArtWorkInput {
creationId: number
url: string
}

export interface CreateOneCreationInput {
args: string
userId: number
}

export interface CreateOneDraftInput {
creationId: number
url: string
}

export interface CreateOneShareInput {
point: number
userId: number
way: string
}

export interface DecreaseArtWorkLikeCountInput {
id: number
}

export interface FindOneAppUserInput {
providerUserId: string
}

export interface GeneratePictureWithAIInput {
args: string
}

export interface GetArtWorkDetailInput {
id: number
userId: number
}

export interface GetDraftWorksInput {
creationId: number
}

export interface GetLatestArtWorkInput {
creationId: number
}

export interface GetMyAlbumInput {
skip?: number
take?: number
userId: number
}

export interface GetMyDraftsInput {
take?: number
userId: number
skip?: number
}

export interface GetMyLikedInput {
take?: number
userId: number
skip?: number
}

export interface GetMyPointRecordsInput {
timeStart: string
userId: number
way?: string[],}

export interface GetMyPublicAlbumInput {
take?: number
userId: number
skip?: number
}

export interface GetOneAppUserInput {
id: number
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
take?: number
skip?: number
}

export interface IncreaseArtWorkLikeCountInput {
id: number
}

export interface IncreaseArtWorkShareCountInput {
id: number
}

export interface IncreasePointsInput {
id: number
points: number
}

export interface LikeOneArtWorkInput {
artWorkId: number
userId: number
}

export interface MoveDraftToAlbumInput {
id: number
}

export interface PublishMyArtWorkInput {
id: number
}

export interface RecordMyInviterInput {
inviterId: number
userId: number
}

export interface ShareArtWorkToPublicInput {
id: number
}

export interface UnlikeOneArtWorkInput {
artWorkId: number
userId: number
}

export interface UpdateOneAppUserInput {
avatar?: string
nickname?: string
points?: number
providerId?: string
AppUser?: aigc_AppUserUpdateOneWithoutOther_AppUserNestedInput
phone?: string
provider?: string
providerUserId?: string
id: number
}

export interface UsePointsInput {
id: number
}


