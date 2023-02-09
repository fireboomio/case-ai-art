
export interface CreateOneAdminUserInput {
avatarUrl?: string
name: string
provider: string
providerId: string
providerUserId: string
}

export interface DeleteOneArtWorkInput {
id: number
}

export interface GetAppUserListInput {
orderBy?: art_AppUserOrderByWithRelationInput[],query?: art_AppUserWhereInput
skip?: number
take?: number
}

export interface GetArtWorkListInput {
orderBy?: art_ArtWorkOrderByWithRelationInput[],query?: art_ArtWorkWhereInput
skip?: number
take?: number
}

export interface GetOneAppUserInput {
id: number
}

export interface GetTodayCountInput {
date: string
}

export interface UpdateOneAppUserInput {
AppUser?: art_AppUserUpdateOneWithoutOther_AppUserNestedInput
id: number
nickname?: string
phone?: string
providerId?: string
avatar?: string
points?: number
provider?: string
providerUserId?: string
}



export interface InternalCreateOneAdminUserInput {
avatarUrl?: string
name: string
provider: string
providerId: string
providerUserId: string
}

export interface InternalDeleteOneArtWorkInput {
id: number
}

export interface InternalGetAppUserListInput {
orderBy?: art_AppUserOrderByWithRelationInput[],query?: art_AppUserWhereInput
skip?: number
take?: number
}

export interface InternalGetArtWorkListInput {
orderBy?: art_ArtWorkOrderByWithRelationInput[],query?: art_ArtWorkWhereInput
skip?: number
take?: number
}

export interface InternalGetOneAppUserInput {
id: number
}

export interface InternalGetTodayCountInput {
date: string
}

export interface InternalUpdateOneAppUserInput {
nickname?: string
points?: number
providerId?: string
providerUserId?: string
AppUser?: art_AppUserUpdateOneWithoutOther_AppUserNestedInput
avatar?: string
id: number
phone?: string
provider?: string
}



export interface InjectedCreateOneAdminUserInput {
avatarUrl?: string
name: string
provider: string
providerId: string
providerUserId: string
}

export interface InjectedDeleteOneArtWorkInput {
id: number
}

export interface InjectedGetAppUserListInput {
orderBy?: art_AppUserOrderByWithRelationInput[],query?: art_AppUserWhereInput
skip?: number
take?: number
}

export interface InjectedGetArtWorkListInput {
query?: art_ArtWorkWhereInput
skip?: number
take?: number
orderBy?: art_ArtWorkOrderByWithRelationInput[],}

export interface InjectedGetOneAppUserInput {
id: number
}

export interface InjectedGetTodayCountInput {
date: string
}

export interface InjectedUpdateOneAppUserInput {
points?: number
providerId?: string
providerUserId?: string
AppUser?: art_AppUserUpdateOneWithoutOther_AppUserNestedInput
avatar?: string
id: number
nickname?: string
phone?: string
provider?: string
}



export interface CreateOneAdminUserResponse {
data?: CreateOneAdminUserResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface DeleteOneArtWorkResponse {
data?: DeleteOneArtWorkResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetAppUserListResponse {
data?: GetAppUserListResponseData
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

export interface GetManyAdminUserResponse {
data?: GetManyAdminUserResponseData
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

export interface QueryStatisticResponse {
data?: QueryStatisticResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface UpdateOneAppUserResponse {
data?: UpdateOneAppUserResponseData
errors?: ReadonlyArray<GraphQLError>;
}



export interface CreateOneAdminUserResponseData {
data?: {
avatarUrl?: string
createdAt: string
id: number
name: string
provider: string
providerId: string
providerUserId: string
},
}

export interface DeleteOneArtWorkResponseData {
data?: {
id: number
},
}

export interface GetAppUserListResponseData {
data: {
avatar: string
createdAt: string
nickname: string
provider: string
providerId: string
id: number
inviteById?: number
phone?: string
points: number
providerUserId: string
}[],total: number
}

export interface GetArtWorkListResponseData {
total: number
data: {
Creation: {
id: number
AppUser: {
id: number
nickname: string
},
authorId: number
},
creationId: number
publishAt?: string
recommendRate: number
sharedCount: number
url: string
id: number
isDraft: boolean
likeCount: number
published: boolean
}[],}

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

export interface GetManyAdminUserResponseData {
data: {
providerId: string
providerUserId: string
avatarUrl?: string
createdAt: string
id: number
name: string
provider: string
}[],}

export interface GetOneAppUserResponseData {
data?: {
createdAt: string
id: number
nickname: string
phone?: string
provider: string
avatar: string
inviteById?: number
points: number
providerId: string
providerUserId: string
},
}

export interface GetTodayCountResponseData {
creation: {
_count?: {
_all: number
},
},
}

export interface QueryStatisticResponseData {
statistics_DailyCreation?: {
date?: string
total?: number
}[],}

export interface UpdateOneAppUserResponseData {
data?: {
createdAt: string
providerId: string
providerUserId: string
avatar: string
id: number
inviteById?: number
nickname: string
phone?: string
points: number
provider: string
},
}





export interface art_IntFilter {
in?: number[],lt?: number
lte?: number
not?: art_NestedIntFilter
notIn?: number[],equals?: number
gt?: number
gte?: number
}

export interface art_PointRecordWhereUniqueInput {
id?: number
}

export interface art_PointRecordCreateOrConnectWithoutAppUserInput {
create?: art_PointRecordCreateWithoutAppUserInput
where?: art_PointRecordWhereUniqueInput
}

export interface art_LikeRecordCreateNestedManyWithoutArtWorkInput {
connect?: art_LikeRecordWhereUniqueInput
connectOrCreate?: art_LikeRecordCreateOrConnectWithoutArtWorkInput
create?: art_LikeRecordCreateWithoutArtWorkInput
createMany?: art_LikeRecordCreateManyArtWorkInputEnvelope
}

export interface art_LikeRecordWhereInput {
ArtWork?: art_ArtWorkRelationFilter
OR?: art_LikeRecordWhereInput[],artWorkId?: art_IntFilter
id?: art_IntFilter
AND?: art_LikeRecordWhereInput
AppUser?: art_AppUserRelationFilter
NOT?: art_LikeRecordWhereInput
createdAt?: art_DateTimeFilter
userId?: art_IntFilter
}

export interface art_AppUserListRelationFilter {
every?: art_AppUserWhereInput
none?: art_AppUserWhereInput
some?: art_AppUserWhereInput
}

export interface art_ArtWorkRelationFilter {
is?: art_ArtWorkWhereInput
isNot?: art_ArtWorkWhereInput
}

export interface art_LikeRecordScalarWhereInput {
NOT?: art_LikeRecordScalarWhereInput
OR?: art_LikeRecordScalarWhereInput[],artWorkId?: art_IntFilter
createdAt?: art_DateTimeFilter
id?: art_IntFilter
userId?: art_IntFilter
AND?: art_LikeRecordScalarWhereInput
}

export interface art_PointRecordCreateManyAppUserInput {
id?: number
point?: number
way?: string
createdAt?: string
}

export interface art_AppUserCreateNestedOneWithoutCreationInput {
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutCreationInput
create?: art_AppUserCreateWithoutCreationInput
}

export interface art_LikeRecordOrderByRelationAggregateInput {
_count?: string
}

export interface art_CreationListRelationFilter {
every?: art_CreationWhereInput
none?: art_CreationWhereInput
some?: art_CreationWhereInput
}

export interface art_CreationCreateNestedManyWithoutAppUserInput {
createMany?: art_CreationCreateManyAppUserInputEnvelope
connect?: art_CreationWhereUniqueInput
connectOrCreate?: art_CreationCreateOrConnectWithoutAppUserInput
create?: art_CreationCreateWithoutAppUserInput
}

export interface art_LikeRecordUpsertWithWhereUniqueWithoutArtWorkInput {
update?: art_LikeRecordUpdateWithoutArtWorkInput
where?: art_LikeRecordWhereUniqueInput
create?: art_LikeRecordCreateWithoutArtWorkInput
}

export interface art_AppUserUpdateWithoutCreationInput {
AppUser?: art_AppUserUpdateOneWithoutOther_AppUserNestedInput
PointRecord?: art_PointRecordUpdateManyWithoutAppUserNestedInput
avatar?: art_StringFieldUpdateOperationsInput
createdAt?: art_DateTimeFieldUpdateOperationsInput
nickname?: art_StringFieldUpdateOperationsInput
provider?: art_StringFieldUpdateOperationsInput
providerUserId?: art_StringFieldUpdateOperationsInput
LikeRecord?: art_LikeRecordUpdateManyWithoutAppUserNestedInput
other_AppUser?: art_AppUserUpdateManyWithoutAppUserNestedInput
phone?: art_NullableStringFieldUpdateOperationsInput
points?: art_IntFieldUpdateOperationsInput
providerId?: art_StringFieldUpdateOperationsInput
}

export interface art_AppUserUpdateWithoutAppUserInput {
points?: art_IntFieldUpdateOperationsInput
provider?: art_StringFieldUpdateOperationsInput
providerUserId?: art_StringFieldUpdateOperationsInput
LikeRecord?: art_LikeRecordUpdateManyWithoutAppUserNestedInput
avatar?: art_StringFieldUpdateOperationsInput
createdAt?: art_DateTimeFieldUpdateOperationsInput
nickname?: art_StringFieldUpdateOperationsInput
other_AppUser?: art_AppUserUpdateManyWithoutAppUserNestedInput
phone?: art_NullableStringFieldUpdateOperationsInput
providerId?: art_StringFieldUpdateOperationsInput
Creation?: art_CreationUpdateManyWithoutAppUserNestedInput
PointRecord?: art_PointRecordUpdateManyWithoutAppUserNestedInput
}

export interface art_NestedIntNullableFilter {
lte?: number
not?: art_NestedIntNullableFilter
notIn?: number[],equals?: number
gt?: number
gte?: number
in?: number[],lt?: number
}

export interface art_ArtWorkListRelationFilter {
every?: art_ArtWorkWhereInput
none?: art_ArtWorkWhereInput
some?: art_ArtWorkWhereInput
}

export interface art_LikeRecordListRelationFilter {
every?: art_LikeRecordWhereInput
none?: art_LikeRecordWhereInput
some?: art_LikeRecordWhereInput
}

export interface art_LikeRecordCreateOrConnectWithoutAppUserInput {
create?: art_LikeRecordCreateWithoutAppUserInput
where?: art_LikeRecordWhereUniqueInput
}

export interface art_CreationCreateWithoutArtWorkInput {
args?: string
createdAt?: string
AppUser?: art_AppUserCreateNestedOneWithoutCreationInput
}

export interface art_DateTimeNullableFilter {
in?: string[],lt?: string
lte?: string
not?: art_NestedDateTimeNullableFilter
notIn?: string[],equals?: string
gt?: string
gte?: string
}

export interface art_LikeRecordCreateNestedManyWithoutAppUserInput {
connect?: art_LikeRecordWhereUniqueInput
connectOrCreate?: art_LikeRecordCreateOrConnectWithoutAppUserInput
create?: art_LikeRecordCreateWithoutAppUserInput
createMany?: art_LikeRecordCreateManyAppUserInputEnvelope
}

export interface art_LikeRecordUpdateWithoutArtWorkInput {
AppUser?: art_AppUserUpdateOneRequiredWithoutLikeRecordNestedInput
createdAt?: art_DateTimeFieldUpdateOperationsInput
}

export interface art_LikeRecordCreateManyArtWorkInputEnvelope {
data?: art_LikeRecordCreateManyArtWorkInput[],skipDuplicates?: boolean
}

export interface art_PointRecordUpdateManyWithoutAppUserNestedInput {
set?: art_PointRecordWhereUniqueInput
upsert?: art_PointRecordUpsertWithWhereUniqueWithoutAppUserInput
createMany?: art_PointRecordCreateManyAppUserInputEnvelope
disconnect?: art_PointRecordWhereUniqueInput
create?: art_PointRecordCreateWithoutAppUserInput
delete?: art_PointRecordWhereUniqueInput
deleteMany?: art_PointRecordScalarWhereInput
update?: art_PointRecordUpdateWithWhereUniqueWithoutAppUserInput
updateMany?: art_PointRecordUpdateManyWithWhereWithoutAppUserInput
connect?: art_PointRecordWhereUniqueInput
connectOrCreate?: art_PointRecordCreateOrConnectWithoutAppUserInput
}

export interface art_PointRecordUpdateWithWhereUniqueWithoutAppUserInput {
data?: art_PointRecordUpdateWithoutAppUserInput
where?: art_PointRecordWhereUniqueInput
}

export interface art_NestedStringNullableFilter {
in?: string[],not?: art_NestedStringNullableFilter
contains?: string
endsWith?: string
equals?: string
gt?: string
gte?: string
lt?: string
lte?: string
notIn?: string[],startsWith?: string
}

export interface art_LikeRecordUpdateManyWithWhereWithoutAppUserInput {
data?: art_LikeRecordUpdateManyMutationInput
where?: art_LikeRecordScalarWhereInput
}

export interface art_AppUserCreateWithoutCreationInput {
providerUserId?: string
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
createdAt?: string
nickname?: string
phone?: string
providerId?: string
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
avatar?: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
points?: number
provider?: string
}

export interface art_AppUserUpdateManyMutationInput {
providerUserId?: art_StringFieldUpdateOperationsInput
avatar?: art_StringFieldUpdateOperationsInput
createdAt?: art_DateTimeFieldUpdateOperationsInput
nickname?: art_StringFieldUpdateOperationsInput
phone?: art_NullableStringFieldUpdateOperationsInput
points?: art_IntFieldUpdateOperationsInput
provider?: art_StringFieldUpdateOperationsInput
providerId?: art_StringFieldUpdateOperationsInput
}

export interface art_NullableStringFieldUpdateOperationsInput {
set?: string
}

export interface art_AppUserCreateNestedManyWithoutAppUserInput {
create?: art_AppUserCreateWithoutAppUserInput
createMany?: art_AppUserCreateManyAppUserInputEnvelope
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutAppUserInput
}

export interface art_ArtWorkUpdateWithoutLikeRecordInput {
published?: art_BoolFieldUpdateOperationsInput
recommendRate?: art_IntFieldUpdateOperationsInput
sharedCount?: art_IntFieldUpdateOperationsInput
url?: art_StringFieldUpdateOperationsInput
Creation?: art_CreationUpdateOneRequiredWithoutArtWorkNestedInput
isDraft?: art_BoolFieldUpdateOperationsInput
likeCount?: art_IntFieldUpdateOperationsInput
publishAt?: art_NullableDateTimeFieldUpdateOperationsInput
}

export interface art_ArtWorkCreateOrConnectWithoutCreationInput {
create?: art_ArtWorkCreateWithoutCreationInput
where?: art_ArtWorkWhereUniqueInput
}

export interface art_NullableDateTimeFieldUpdateOperationsInput {
set?: string
}

export interface art_LikeRecordCreateWithoutAppUserInput {
ArtWork?: art_ArtWorkCreateNestedOneWithoutLikeRecordInput
createdAt?: string
}

export interface art_IntFieldUpdateOperationsInput {
decrement?: number
divide?: number
increment?: number
multiply?: number
set?: number
}

export interface art_LikeRecordUpdateWithWhereUniqueWithoutAppUserInput {
data?: art_LikeRecordUpdateWithoutAppUserInput
where?: art_LikeRecordWhereUniqueInput
}

export interface art_CreationUpsertWithWhereUniqueWithoutAppUserInput {
update?: art_CreationUpdateWithoutAppUserInput
where?: art_CreationWhereUniqueInput
create?: art_CreationCreateWithoutAppUserInput
}

export interface art_LikeRecordCreateManyAppUserInput {
artWorkId?: number
createdAt?: string
id?: number
}

export interface art_NestedIntFilter {
in?: number[],lt?: number
lte?: number
not?: art_NestedIntFilter
notIn?: number[],equals?: number
gt?: number
gte?: number
}

export interface art_NestedStringFilter {
endsWith?: string
equals?: string
gt?: string
gte?: string
not?: art_NestedStringFilter
notIn?: string[],startsWith?: string
contains?: string
in?: string[],lt?: string
lte?: string
}

export interface art_AppUserWhereUniqueInput {
id?: number
}

export interface art_AppUserOrderByWithRelationInput {
Creation?: art_CreationOrderByRelationAggregateInput
avatar?: string
phone?: string
providerId?: string
AppUser?: art_AppUserOrderByWithRelationInput
points?: string
createdAt?: string
id?: string
nickname?: string
other_AppUser?: art_AppUserOrderByRelationAggregateInput
provider?: string
providerUserId?: string
LikeRecord?: art_LikeRecordOrderByRelationAggregateInput
PointRecord?: art_PointRecordOrderByRelationAggregateInput
inviteById?: string
}

export interface art_ArtWorkCreateWithoutCreationInput {
isDraft?: boolean
likeCount?: number
publishAt?: string
published?: boolean
recommendRate?: number
sharedCount?: number
url?: string
LikeRecord?: art_LikeRecordCreateNestedManyWithoutArtWorkInput
}

export interface art_AppUserCreateNestedOneWithoutOther_AppUserInput {
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutOther_AppUserInput
create?: art_AppUserCreateWithoutOther_AppUserInput
}

export interface art_AppUserCreateOrConnectWithoutOther_AppUserInput {
create?: art_AppUserCreateWithoutOther_AppUserInput
where?: art_AppUserWhereUniqueInput
}

export interface art_BoolFieldUpdateOperationsInput {
set?: boolean
}

export interface art_CreationRelationFilter {
isNot?: art_CreationWhereInput
is?: art_CreationWhereInput
}

export interface art_ArtWorkWhereInput {
Creation?: art_CreationRelationFilter
NOT?: art_ArtWorkWhereInput
isDraft?: art_BoolFilter
publishAt?: art_DateTimeNullableFilter
OR?: art_ArtWorkWhereInput[],id?: art_IntFilter
likeCount?: art_IntFilter
recommendRate?: art_IntFilter
LikeRecord?: art_LikeRecordListRelationFilter
creationId?: art_IntFilter
sharedCount?: art_IntFilter
AND?: art_ArtWorkWhereInput
published?: art_BoolFilter
url?: art_StringFilter
}

export interface art_ArtWorkCreateNestedManyWithoutCreationInput {
connect?: art_ArtWorkWhereUniqueInput
connectOrCreate?: art_ArtWorkCreateOrConnectWithoutCreationInput
create?: art_ArtWorkCreateWithoutCreationInput
createMany?: art_ArtWorkCreateManyCreationInputEnvelope
}

export interface art_AppUserUpdateWithWhereUniqueWithoutAppUserInput {
data?: art_AppUserUpdateWithoutAppUserInput
where?: art_AppUserWhereUniqueInput
}

export interface art_AppUserUpsertWithWhereUniqueWithoutAppUserInput {
where?: art_AppUserWhereUniqueInput
create?: art_AppUserCreateWithoutAppUserInput
update?: art_AppUserUpdateWithoutAppUserInput
}

export interface art_EnumPointRecord_wayFilter {
notIn?: string[],equals?: string
in?: string[],not?: string
}

export interface art_AppUserUpsertWithoutLikeRecordInput {
create?: art_AppUserCreateWithoutLikeRecordInput
update?: art_AppUserUpdateWithoutLikeRecordInput
}

export interface art_LikeRecordUpdateManyMutationInput {
createdAt?: art_DateTimeFieldUpdateOperationsInput
}

export interface art_AppUserCreateOrConnectWithoutLikeRecordInput {
create?: art_AppUserCreateWithoutLikeRecordInput
where?: art_AppUserWhereUniqueInput
}

export interface art_ArtWorkUpdateManyMutationInput {
publishAt?: art_NullableDateTimeFieldUpdateOperationsInput
published?: art_BoolFieldUpdateOperationsInput
recommendRate?: art_IntFieldUpdateOperationsInput
sharedCount?: art_IntFieldUpdateOperationsInput
url?: art_StringFieldUpdateOperationsInput
isDraft?: art_BoolFieldUpdateOperationsInput
likeCount?: art_IntFieldUpdateOperationsInput
}

export interface art_AppUserCreateManyAppUserInput {
providerUserId?: string
avatar?: string
id?: number
providerId?: string
points?: number
provider?: string
createdAt?: string
nickname?: string
phone?: string
}

export interface art_ArtWorkUpdateWithoutCreationInput {
url?: art_StringFieldUpdateOperationsInput
LikeRecord?: art_LikeRecordUpdateManyWithoutArtWorkNestedInput
isDraft?: art_BoolFieldUpdateOperationsInput
likeCount?: art_IntFieldUpdateOperationsInput
publishAt?: art_NullableDateTimeFieldUpdateOperationsInput
published?: art_BoolFieldUpdateOperationsInput
recommendRate?: art_IntFieldUpdateOperationsInput
sharedCount?: art_IntFieldUpdateOperationsInput
}

export interface art_AppUserCreateWithoutOther_AppUserInput {
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
avatar: string
nickname: string
points?: number
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
createdAt?: string
phone?: string
provider: string
providerId: string
providerUserId: string
}

export interface art_StringNullableFilter {
lte?: string
contains?: string
equals?: string
gte?: string
in?: string[],notIn?: string[],startsWith?: string
endsWith?: string
gt?: string
lt?: string
not?: art_NestedStringNullableFilter
}

export interface art_ArtWorkOrderByWithRelationInput {
published?: string
recommendRate?: string
url?: string
likeCount?: string
publishAt?: string
creationId?: string
id?: string
isDraft?: string
sharedCount?: string
Creation?: art_CreationOrderByWithRelationInput
LikeRecord?: art_LikeRecordOrderByRelationAggregateInput
}

export interface art_LikeRecordWhereUniqueInput {
id?: number
}

export interface art_ArtWorkUpdateManyWithWhereWithoutCreationInput {
data?: art_ArtWorkUpdateManyMutationInput
where?: art_ArtWorkScalarWhereInput
}

export interface art_CreationWhereUniqueInput {
id?: number
}

export interface art_CreationCreateManyAppUserInputEnvelope {
data?: art_CreationCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_PointRecordUpdateWithoutAppUserInput {
createdAt?: art_DateTimeFieldUpdateOperationsInput
point?: art_IntFieldUpdateOperationsInput
way?: string
}

export interface art_ArtWorkUpdateManyWithoutCreationNestedInput {
connectOrCreate?: art_ArtWorkCreateOrConnectWithoutCreationInput
delete?: art_ArtWorkWhereUniqueInput
set?: art_ArtWorkWhereUniqueInput
updateMany?: art_ArtWorkUpdateManyWithWhereWithoutCreationInput
update?: art_ArtWorkUpdateWithWhereUniqueWithoutCreationInput
upsert?: art_ArtWorkUpsertWithWhereUniqueWithoutCreationInput
connect?: art_ArtWorkWhereUniqueInput
create?: art_ArtWorkCreateWithoutCreationInput
createMany?: art_ArtWorkCreateManyCreationInputEnvelope
deleteMany?: art_ArtWorkScalarWhereInput
disconnect?: art_ArtWorkWhereUniqueInput
}

export interface art_ArtWorkCreateOrConnectWithoutLikeRecordInput {
where?: art_ArtWorkWhereUniqueInput
create?: art_ArtWorkCreateWithoutLikeRecordInput
}

export interface art_AppUserCreateManyAppUserInputEnvelope {
data?: art_AppUserCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_CreationUpdateManyWithWhereWithoutAppUserInput {
where?: art_CreationScalarWhereInput
data?: art_CreationUpdateManyMutationInput
}

export interface art_AppUserCreateOrConnectWithoutAppUserInput {
where?: art_AppUserWhereUniqueInput
create?: art_AppUserCreateWithoutAppUserInput
}

export interface art_StringFilter {
endsWith?: string
equals?: string
in?: string[],lt?: string
lte?: string
startsWith?: string
contains?: string
gt?: string
gte?: string
not?: art_NestedStringFilter
notIn?: string[],}

export interface art_AppUserRelationFilter {
is?: art_AppUserWhereInput
isNot?: art_AppUserWhereInput
}

export interface art_ArtWorkOrderByRelationAggregateInput {
_count?: string
}

export interface art_PointRecordScalarWhereInput {
OR?: art_PointRecordScalarWhereInput[],createdAt?: art_DateTimeFilter
id?: art_IntFilter
point?: art_IntFilter
userId?: art_IntFilter
way?: art_EnumPointRecord_wayFilter
AND?: art_PointRecordScalarWhereInput
NOT?: art_PointRecordScalarWhereInput
}

export interface art_CreationUpdateManyMutationInput {
args?: art_StringFieldUpdateOperationsInput
createdAt?: art_DateTimeFieldUpdateOperationsInput
}

export interface art_LikeRecordUpdateManyWithoutArtWorkNestedInput {
updateMany?: art_LikeRecordUpdateManyWithWhereWithoutArtWorkInput
upsert?: art_LikeRecordUpsertWithWhereUniqueWithoutArtWorkInput
connect?: art_LikeRecordWhereUniqueInput
create?: art_LikeRecordCreateWithoutArtWorkInput
deleteMany?: art_LikeRecordScalarWhereInput
disconnect?: art_LikeRecordWhereUniqueInput
set?: art_LikeRecordWhereUniqueInput
update?: art_LikeRecordUpdateWithWhereUniqueWithoutArtWorkInput
connectOrCreate?: art_LikeRecordCreateOrConnectWithoutArtWorkInput
createMany?: art_LikeRecordCreateManyArtWorkInputEnvelope
delete?: art_LikeRecordWhereUniqueInput
}

export interface art_DateTimeFieldUpdateOperationsInput {
set?: string
}

export interface art_PointRecordUpdateManyMutationInput {
createdAt?: art_DateTimeFieldUpdateOperationsInput
point?: art_IntFieldUpdateOperationsInput
way?: string
}

export interface art_LikeRecordUpdateManyWithWhereWithoutArtWorkInput {
data?: art_LikeRecordUpdateManyMutationInput
where?: art_LikeRecordScalarWhereInput
}

export interface art_PointRecordCreateManyAppUserInputEnvelope {
skipDuplicates?: boolean
data?: art_PointRecordCreateManyAppUserInput[],}

export interface art_AppUserUpdateWithoutOther_AppUserInput {
Creation?: art_CreationUpdateManyWithoutAppUserNestedInput
LikeRecord?: art_LikeRecordUpdateManyWithoutAppUserNestedInput
PointRecord?: art_PointRecordUpdateManyWithoutAppUserNestedInput
createdAt?: art_DateTimeFieldUpdateOperationsInput
nickname?: art_StringFieldUpdateOperationsInput
phone?: art_NullableStringFieldUpdateOperationsInput
providerUserId?: art_StringFieldUpdateOperationsInput
AppUser?: art_AppUserUpdateOneWithoutOther_AppUserNestedInput
avatar?: art_StringFieldUpdateOperationsInput
points?: art_IntFieldUpdateOperationsInput
provider?: art_StringFieldUpdateOperationsInput
providerId?: art_StringFieldUpdateOperationsInput
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

export interface art_AppUserCreateWithoutAppUserInput {
points?: number
providerId?: string
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
createdAt?: string
avatar?: string
nickname?: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
phone?: string
provider?: string
providerUserId?: string
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
}

export interface art_CreationUpdateWithoutArtWorkInput {
AppUser?: art_AppUserUpdateOneRequiredWithoutCreationNestedInput
args?: art_StringFieldUpdateOperationsInput
createdAt?: art_DateTimeFieldUpdateOperationsInput
}

export interface art_PointRecordListRelationFilter {
every?: art_PointRecordWhereInput
none?: art_PointRecordWhereInput
some?: art_PointRecordWhereInput
}

export interface art_AppUserUpdateManyWithoutAppUserNestedInput {
create?: art_AppUserCreateWithoutAppUserInput
delete?: art_AppUserWhereUniqueInput
deleteMany?: art_AppUserScalarWhereInput
set?: art_AppUserWhereUniqueInput
updateMany?: art_AppUserUpdateManyWithWhereWithoutAppUserInput
upsert?: art_AppUserUpsertWithWhereUniqueWithoutAppUserInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutAppUserInput
createMany?: art_AppUserCreateManyAppUserInputEnvelope
disconnect?: art_AppUserWhereUniqueInput
update?: art_AppUserUpdateWithWhereUniqueWithoutAppUserInput
connect?: art_AppUserWhereUniqueInput
}

export interface art_AppUserUpdateWithoutLikeRecordInput {
other_AppUser?: art_AppUserUpdateManyWithoutAppUserNestedInput
phone?: art_NullableStringFieldUpdateOperationsInput
provider?: art_StringFieldUpdateOperationsInput
providerId?: art_StringFieldUpdateOperationsInput
providerUserId?: art_StringFieldUpdateOperationsInput
AppUser?: art_AppUserUpdateOneWithoutOther_AppUserNestedInput
PointRecord?: art_PointRecordUpdateManyWithoutAppUserNestedInput
createdAt?: art_DateTimeFieldUpdateOperationsInput
nickname?: art_StringFieldUpdateOperationsInput
points?: art_IntFieldUpdateOperationsInput
Creation?: art_CreationUpdateManyWithoutAppUserNestedInput
avatar?: art_StringFieldUpdateOperationsInput
}

export interface art_PointRecordCreateWithoutAppUserInput {
point: number
way: string
createdAt?: string
}

export interface art_CreationUpdateWithWhereUniqueWithoutAppUserInput {
data?: art_CreationUpdateWithoutAppUserInput
where?: art_CreationWhereUniqueInput
}

export interface art_PointRecordWhereInput {
AND?: art_PointRecordWhereInput
point?: art_IntFilter
AppUser?: art_AppUserRelationFilter
NOT?: art_PointRecordWhereInput
OR?: art_PointRecordWhereInput[],createdAt?: art_DateTimeFilter
id?: art_IntFilter
userId?: art_IntFilter
way?: art_EnumPointRecord_wayFilter
}

export interface art_CreationScalarWhereInput {
authorId?: art_IntFilter
createdAt?: art_DateTimeFilter
id?: art_IntFilter
AND?: art_CreationScalarWhereInput
NOT?: art_CreationScalarWhereInput
OR?: art_CreationScalarWhereInput[],args?: art_StringFilter
}

export interface art_ArtWorkUpsertWithWhereUniqueWithoutCreationInput {
update?: art_ArtWorkUpdateWithoutCreationInput
where?: art_ArtWorkWhereUniqueInput
create?: art_ArtWorkCreateWithoutCreationInput
}

export interface art_ArtWorkUpsertWithoutLikeRecordInput {
update?: art_ArtWorkUpdateWithoutLikeRecordInput
create?: art_ArtWorkCreateWithoutLikeRecordInput
}

export interface art_LikeRecordUpdateManyWithoutAppUserNestedInput {
update?: art_LikeRecordUpdateWithWhereUniqueWithoutAppUserInput
connect?: art_LikeRecordWhereUniqueInput
create?: art_LikeRecordCreateWithoutAppUserInput
disconnect?: art_LikeRecordWhereUniqueInput
deleteMany?: art_LikeRecordScalarWhereInput
set?: art_LikeRecordWhereUniqueInput
updateMany?: art_LikeRecordUpdateManyWithWhereWithoutAppUserInput
upsert?: art_LikeRecordUpsertWithWhereUniqueWithoutAppUserInput
connectOrCreate?: art_LikeRecordCreateOrConnectWithoutAppUserInput
createMany?: art_LikeRecordCreateManyAppUserInputEnvelope
delete?: art_LikeRecordWhereUniqueInput
}

export interface art_PointRecordCreateNestedManyWithoutAppUserInput {
create?: art_PointRecordCreateWithoutAppUserInput
createMany?: art_PointRecordCreateManyAppUserInputEnvelope
connect?: art_PointRecordWhereUniqueInput
connectOrCreate?: art_PointRecordCreateOrConnectWithoutAppUserInput
}

export interface art_CreationOrderByWithRelationInput {
AppUser?: art_AppUserOrderByWithRelationInput
ArtWork?: art_ArtWorkOrderByRelationAggregateInput
args?: string
authorId?: string
createdAt?: string
id?: string
}

export interface art_AppUserCreateOrConnectWithoutCreationInput {
create?: art_AppUserCreateWithoutCreationInput
where?: art_AppUserWhereUniqueInput
}

export interface art_ArtWorkUpdateOneRequiredWithoutLikeRecordNestedInput {
connect?: art_ArtWorkWhereUniqueInput
connectOrCreate?: art_ArtWorkCreateOrConnectWithoutLikeRecordInput
create?: art_ArtWorkCreateWithoutLikeRecordInput
update?: art_ArtWorkUpdateWithoutLikeRecordInput
upsert?: art_ArtWorkUpsertWithoutLikeRecordInput
}

export interface art_AppUserScalarWhereInput {
avatar?: art_StringFilter
id?: art_IntFilter
nickname?: art_StringFilter
phone?: art_StringNullableFilter
providerId?: art_StringFilter
providerUserId?: art_StringFilter
provider?: art_StringFilter
AND?: art_AppUserScalarWhereInput
NOT?: art_AppUserScalarWhereInput
OR?: art_AppUserScalarWhereInput[],createdAt?: art_DateTimeFilter
inviteById?: art_IntNullableFilter
points?: art_IntFilter
}

export interface art_CreationCreateOrConnectWithoutArtWorkInput {
create?: art_CreationCreateWithoutArtWorkInput
where?: art_CreationWhereUniqueInput
}

export interface art_LikeRecordUpdateWithWhereUniqueWithoutArtWorkInput {
data?: art_LikeRecordUpdateWithoutArtWorkInput
where?: art_LikeRecordWhereUniqueInput
}

export interface art_AppUserUpsertWithoutOther_AppUserInput {
create?: art_AppUserCreateWithoutOther_AppUserInput
update?: art_AppUserUpdateWithoutOther_AppUserInput
}

export interface art_CreationCreateWithoutAppUserInput {
ArtWork?: art_ArtWorkCreateNestedManyWithoutCreationInput
args?: string
createdAt?: string
}

export interface art_PointRecordUpdateManyWithWhereWithoutAppUserInput {
data?: art_PointRecordUpdateManyMutationInput
where?: art_PointRecordScalarWhereInput
}

export interface art_CreationOrderByRelationAggregateInput {
_count?: string
}

export interface art_ArtWorkScalarWhereInput {
creationId?: art_IntFilter
id?: art_IntFilter
isDraft?: art_BoolFilter
recommendRate?: art_IntFilter
sharedCount?: art_IntFilter
OR?: art_ArtWorkScalarWhereInput[],NOT?: art_ArtWorkScalarWhereInput
likeCount?: art_IntFilter
publishAt?: art_DateTimeNullableFilter
published?: art_BoolFilter
url?: art_StringFilter
AND?: art_ArtWorkScalarWhereInput
}

export interface art_CreationUpdateOneRequiredWithoutArtWorkNestedInput {
upsert?: art_CreationUpsertWithoutArtWorkInput
connect?: art_CreationWhereUniqueInput
connectOrCreate?: art_CreationCreateOrConnectWithoutArtWorkInput
create?: art_CreationCreateWithoutArtWorkInput
update?: art_CreationUpdateWithoutArtWorkInput
}

export interface art_LikeRecordCreateManyAppUserInputEnvelope {
data?: art_LikeRecordCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_NestedBoolFilter {
equals?: boolean
not?: art_NestedBoolFilter
}

export interface art_CreationCreateManyAppUserInput {
createdAt?: string
id?: number
args?: string
}

export interface art_StringFieldUpdateOperationsInput {
set?: string
}

export interface art_ArtWorkCreateWithoutLikeRecordInput {
url?: string
Creation?: art_CreationCreateNestedOneWithoutArtWorkInput
isDraft?: boolean
likeCount?: number
publishAt?: string
published?: boolean
recommendRate?: number
sharedCount?: number
}

export interface art_PointRecordUpsertWithWhereUniqueWithoutAppUserInput {
create?: art_PointRecordCreateWithoutAppUserInput
update?: art_PointRecordUpdateWithoutAppUserInput
where?: art_PointRecordWhereUniqueInput
}

export interface art_ArtWorkCreateNestedOneWithoutLikeRecordInput {
connect?: art_ArtWorkWhereUniqueInput
connectOrCreate?: art_ArtWorkCreateOrConnectWithoutLikeRecordInput
create?: art_ArtWorkCreateWithoutLikeRecordInput
}

export interface art_AppUserCreateWithoutLikeRecordInput {
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
avatar?: string
nickname?: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
provider?: string
providerId?: string
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
createdAt?: string
phone?: string
points?: number
providerUserId?: string
}

export interface art_AppUserWhereInput {
other_AppUser?: art_AppUserListRelationFilter
phone?: art_StringNullableFilter
provider?: art_StringFilter
providerId?: art_StringFilter
providerUserId?: art_StringFilter
avatar?: art_StringFilter
AND?: art_AppUserWhereInput
AppUser?: art_AppUserRelationFilter
Creation?: art_CreationListRelationFilter
OR?: art_AppUserWhereInput[],PointRecord?: art_PointRecordListRelationFilter
LikeRecord?: art_LikeRecordListRelationFilter
NOT?: art_AppUserWhereInput
createdAt?: art_DateTimeFilter
id?: art_IntFilter
inviteById?: art_IntNullableFilter
nickname?: art_StringFilter
points?: art_IntFilter
}

export interface art_PointRecordOrderByRelationAggregateInput {
_count?: string
}

export interface art_AppUserCreateNestedOneWithoutLikeRecordInput {
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutLikeRecordInput
create?: art_AppUserCreateWithoutLikeRecordInput
}

export interface art_AppUserUpdateOneWithoutOther_AppUserNestedInput {
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutOther_AppUserInput
create?: art_AppUserCreateWithoutOther_AppUserInput
delete?: boolean
disconnect?: boolean
update?: art_AppUserUpdateWithoutOther_AppUserInput
upsert?: art_AppUserUpsertWithoutOther_AppUserInput
}

export interface art_LikeRecordUpsertWithWhereUniqueWithoutAppUserInput {
update?: art_LikeRecordUpdateWithoutAppUserInput
where?: art_LikeRecordWhereUniqueInput
create?: art_LikeRecordCreateWithoutAppUserInput
}

export interface art_CreationUpsertWithoutArtWorkInput {
create?: art_CreationCreateWithoutArtWorkInput
update?: art_CreationUpdateWithoutArtWorkInput
}

export interface art_CreationCreateNestedOneWithoutArtWorkInput {
connect?: art_CreationWhereUniqueInput
connectOrCreate?: art_CreationCreateOrConnectWithoutArtWorkInput
create?: art_CreationCreateWithoutArtWorkInput
}

export interface art_ArtWorkWhereUniqueInput {
id?: number
}

export interface art_AppUserUpdateOneRequiredWithoutLikeRecordNestedInput {
upsert?: art_AppUserUpsertWithoutLikeRecordInput
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutLikeRecordInput
create?: art_AppUserCreateWithoutLikeRecordInput
update?: art_AppUserUpdateWithoutLikeRecordInput
}

export interface art_AppUserUpdateManyWithWhereWithoutAppUserInput {
data?: art_AppUserUpdateManyMutationInput
where?: art_AppUserScalarWhereInput
}

export interface art_ArtWorkUpdateWithWhereUniqueWithoutCreationInput {
data?: art_ArtWorkUpdateWithoutCreationInput
where?: art_ArtWorkWhereUniqueInput
}

export interface art_AppUserUpdateOneRequiredWithoutCreationNestedInput {
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutCreationInput
create?: art_AppUserCreateWithoutCreationInput
update?: art_AppUserUpdateWithoutCreationInput
upsert?: art_AppUserUpsertWithoutCreationInput
}

export interface art_NestedDateTimeNullableFilter {
not?: art_NestedDateTimeNullableFilter
notIn?: string[],equals?: string
gt?: string
gte?: string
in?: string[],lt?: string
lte?: string
}

export interface art_CreationUpdateManyWithoutAppUserNestedInput {
create?: art_CreationCreateWithoutAppUserInput
delete?: art_CreationWhereUniqueInput
disconnect?: art_CreationWhereUniqueInput
set?: art_CreationWhereUniqueInput
update?: art_CreationUpdateWithWhereUniqueWithoutAppUserInput
updateMany?: art_CreationUpdateManyWithWhereWithoutAppUserInput
connectOrCreate?: art_CreationCreateOrConnectWithoutAppUserInput
createMany?: art_CreationCreateManyAppUserInputEnvelope
deleteMany?: art_CreationScalarWhereInput
upsert?: art_CreationUpsertWithWhereUniqueWithoutAppUserInput
connect?: art_CreationWhereUniqueInput
}

export interface art_LikeRecordUpdateWithoutAppUserInput {
ArtWork?: art_ArtWorkUpdateOneRequiredWithoutLikeRecordNestedInput
createdAt?: art_DateTimeFieldUpdateOperationsInput
}

export interface art_LikeRecordCreateOrConnectWithoutArtWorkInput {
create?: art_LikeRecordCreateWithoutArtWorkInput
where?: art_LikeRecordWhereUniqueInput
}

export interface art_LikeRecordCreateManyArtWorkInput {
createdAt?: string
id?: number
userId?: number
}

export interface art_BoolFilter {
equals?: boolean
not?: art_NestedBoolFilter
}

export interface art_AppUserOrderByRelationAggregateInput {
_count?: string
}

export interface art_NestedDateTimeFilter {
lt?: string
lte?: string
not?: art_NestedDateTimeFilter
notIn?: string[],equals?: string
gt?: string
gte?: string
in?: string[],}

export interface art_CreationWhereInput {
AND?: art_CreationWhereInput
AppUser?: art_AppUserRelationFilter
OR?: art_CreationWhereInput[],args?: art_StringFilter
authorId?: art_IntFilter
createdAt?: art_DateTimeFilter
id?: art_IntFilter
ArtWork?: art_ArtWorkListRelationFilter
NOT?: art_CreationWhereInput
}

export interface art_CreationCreateOrConnectWithoutAppUserInput {
where?: art_CreationWhereUniqueInput
create?: art_CreationCreateWithoutAppUserInput
}

export interface art_AppUserUpsertWithoutCreationInput {
create?: art_AppUserCreateWithoutCreationInput
update?: art_AppUserUpdateWithoutCreationInput
}

export interface art_ArtWorkCreateManyCreationInputEnvelope {
data?: art_ArtWorkCreateManyCreationInput[],skipDuplicates?: boolean
}

export interface art_LikeRecordCreateWithoutArtWorkInput {
AppUser: art_AppUserCreateNestedOneWithoutLikeRecordInput
createdAt?: string
}

export interface art_IntNullableFilter {
in?: number[],lt?: number
lte?: number
not?: art_NestedIntNullableFilter
notIn?: number[],equals?: number
gt?: number
gte?: number
}

export interface art_DateTimeFilter {
equals?: string
gt?: string
gte?: string
in?: string[],lt?: string
lte?: string
not?: art_NestedDateTimeFilter
notIn?: string[],}

export interface art_CreationUpdateWithoutAppUserInput {
ArtWork?: art_ArtWorkUpdateManyWithoutCreationNestedInput
args?: art_StringFieldUpdateOperationsInput
createdAt?: art_DateTimeFieldUpdateOperationsInput
}

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
    message: string;
    path?: ReadonlyArray<string | number>;
}


