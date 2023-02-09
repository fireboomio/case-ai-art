
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
take?: number
orderBy?: art_AppUserOrderByWithRelationInput[],query?: art_AppUserWhereInput
skip?: number
}

export interface GetArtWorkListInput {
query?: art_ArtWorkWhereInput
skip?: number
take?: number
orderBy?: art_ArtWorkOrderByWithRelationInput[],}

export interface GetOneAppUserInput {
id: number
}

export interface GetTodayCountInput {
date: string
}

export interface UpdateOneAppUserInput {
providerId?: string
providerUserId?: string
AppUser?: art_AppUserUpdateOneWithoutOther_AppUserNestedInput
avatar?: string
id: number
nickname?: string
phone?: string
points?: number
provider?: string
}



export interface InternalCreateOneAdminUserInput {
provider: string
providerId: string
providerUserId: string
avatarUrl?: string
name: string
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
id: number
points?: number
providerId?: string
providerUserId?: string
provider?: string
AppUser?: art_AppUserUpdateOneWithoutOther_AppUserNestedInput
avatar?: string
nickname?: string
phone?: string
}



export interface InjectedCreateOneAdminUserInput {
providerId: string
providerUserId: string
avatarUrl?: string
name: string
provider: string
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
orderBy?: art_ArtWorkOrderByWithRelationInput[],query?: art_ArtWorkWhereInput
skip?: number
take?: number
}

export interface InjectedGetOneAppUserInput {
id: number
}

export interface InjectedGetTodayCountInput {
date: string
}

export interface InjectedUpdateOneAppUserInput {
avatar?: string
id: number
nickname?: string
phone?: string
points?: number
providerId?: string
AppUser?: art_AppUserUpdateOneWithoutOther_AppUserNestedInput
provider?: string
providerUserId?: string
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
total: number
data: {
avatar: string
id: number
phone?: string
provider: string
providerUserId: string
createdAt: string
inviteById?: number
nickname: string
points: number
providerId: string
}[],}

export interface GetArtWorkListResponseData {
total: number
data: {
id: number
likeCount: number
recommendRate: number
sharedCount: number
url: string
Creation: {
AppUser: {
id: number
nickname: string
},
authorId: number
id: number
},
creationId: number
isDraft: boolean
publishAt?: string
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
provider: string
providerId: string
providerUserId: string
avatarUrl?: string
createdAt: string
id: number
name: string
}[],}

export interface GetOneAppUserResponseData {
data?: {
phone?: string
points: number
providerId: string
providerUserId: string
inviteById?: number
createdAt: string
id: number
nickname: string
provider: string
avatar: string
},
}

export interface GetTodayCountResponseData {
creation: {
_count?: {
_all: number
},
},
}

export interface UpdateOneAppUserResponseData {
data?: {
createdAt: string
id: number
phone?: string
points: number
providerId: string
avatar: string
inviteById?: number
nickname: string
provider: string
providerUserId: string
},
}





export interface art_LikeRecordCreateOrConnectWithoutAppUserInput {
create?: art_LikeRecordCreateWithoutAppUserInput
where?: art_LikeRecordWhereUniqueInput
}

export interface art_LikeRecordUpdateManyWithoutAppUserNestedInput {
delete?: art_LikeRecordWhereUniqueInput
set?: art_LikeRecordWhereUniqueInput
update?: art_LikeRecordUpdateWithWhereUniqueWithoutAppUserInput
connectOrCreate?: art_LikeRecordCreateOrConnectWithoutAppUserInput
createMany?: art_LikeRecordCreateManyAppUserInputEnvelope
deleteMany?: art_LikeRecordScalarWhereInput
disconnect?: art_LikeRecordWhereUniqueInput
updateMany?: art_LikeRecordUpdateManyWithWhereWithoutAppUserInput
upsert?: art_LikeRecordUpsertWithWhereUniqueWithoutAppUserInput
connect?: art_LikeRecordWhereUniqueInput
create?: art_LikeRecordCreateWithoutAppUserInput
}

export interface art_AppUserUpdateManyMutationInput {
nickname?: art_StringFieldUpdateOperationsInput
phone?: art_NullableStringFieldUpdateOperationsInput
points?: art_IntFieldUpdateOperationsInput
provider?: art_StringFieldUpdateOperationsInput
providerId?: art_StringFieldUpdateOperationsInput
providerUserId?: art_StringFieldUpdateOperationsInput
avatar?: art_StringFieldUpdateOperationsInput
createdAt?: art_DateTimeFieldUpdateOperationsInput
}

export interface art_PointRecordOrderByRelationAggregateInput {
_count?: string
}

export interface art_CreationRelationFilter {
is?: art_CreationWhereInput
isNot?: art_CreationWhereInput
}

export interface art_ArtWorkOrderByRelationAggregateInput {
_count?: string
}

export interface art_PointRecordCreateManyAppUserInput {
createdAt?: string
id?: number
point?: number
way?: string
}

export interface art_AppUserCreateOrConnectWithoutCreationInput {
create?: art_AppUserCreateWithoutCreationInput
where?: art_AppUserWhereUniqueInput
}

export interface art_AppUserUpsertWithoutLikeRecordInput {
create?: art_AppUserCreateWithoutLikeRecordInput
update?: art_AppUserUpdateWithoutLikeRecordInput
}

export interface art_AppUserCreateWithoutCreationInput {
points?: number
providerId?: string
providerUserId?: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
phone?: string
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
avatar?: string
createdAt?: string
nickname?: string
provider?: string
}

export interface art_BoolFilter {
equals?: boolean
not?: art_NestedBoolFilter
}

export interface art_CreationUpdateManyMutationInput {
args?: art_StringFieldUpdateOperationsInput
createdAt?: art_DateTimeFieldUpdateOperationsInput
}

export interface art_PointRecordCreateManyAppUserInputEnvelope {
data?: art_PointRecordCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_CreationCreateOrConnectWithoutAppUserInput {
create?: art_CreationCreateWithoutAppUserInput
where?: art_CreationWhereUniqueInput
}

export interface art_LikeRecordCreateManyAppUserInputEnvelope {
data?: art_LikeRecordCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_LikeRecordUpdateManyMutationInput {
createdAt?: art_DateTimeFieldUpdateOperationsInput
}

export interface art_AppUserOrderByRelationAggregateInput {
_count?: string
}

export interface art_AppUserCreateNestedOneWithoutOther_AppUserInput {
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutOther_AppUserInput
create?: art_AppUserCreateWithoutOther_AppUserInput
}

export interface art_ArtWorkCreateOrConnectWithoutCreationInput {
create?: art_ArtWorkCreateWithoutCreationInput
where?: art_ArtWorkWhereUniqueInput
}

export interface art_LikeRecordUpdateWithoutAppUserInput {
ArtWork?: art_ArtWorkUpdateOneRequiredWithoutLikeRecordNestedInput
createdAt?: art_DateTimeFieldUpdateOperationsInput
}

export interface art_NestedDateTimeFilter {
gte?: string
in?: string[],lt?: string
lte?: string
not?: art_NestedDateTimeFilter
notIn?: string[],equals?: string
gt?: string
}

export interface art_DateTimeNullableFilter {
notIn?: string[],equals?: string
gt?: string
gte?: string
in?: string[],lt?: string
lte?: string
not?: art_NestedDateTimeNullableFilter
}

export interface art_PointRecordWhereUniqueInput {
id?: number
}

export interface art_ArtWorkCreateNestedOneWithoutLikeRecordInput {
create?: art_ArtWorkCreateWithoutLikeRecordInput
connect?: art_ArtWorkWhereUniqueInput
connectOrCreate?: art_ArtWorkCreateOrConnectWithoutLikeRecordInput
}

export interface art_LikeRecordScalarWhereInput {
AND?: art_LikeRecordScalarWhereInput
NOT?: art_LikeRecordScalarWhereInput
OR?: art_LikeRecordScalarWhereInput[],artWorkId?: art_IntFilter
createdAt?: art_DateTimeFilter
id?: art_IntFilter
userId?: art_IntFilter
}

export interface art_LikeRecordCreateWithoutArtWorkInput {
AppUser?: art_AppUserCreateNestedOneWithoutLikeRecordInput
createdAt?: string
}

export interface art_StringFilter {
contains?: string
endsWith?: string
equals?: string
gt?: string
in?: string[],lt?: string
gte?: string
lte?: string
not?: art_NestedStringFilter
notIn?: string[],startsWith?: string
}

export interface art_LikeRecordCreateNestedManyWithoutArtWorkInput {
createMany?: art_LikeRecordCreateManyArtWorkInputEnvelope
connect?: art_LikeRecordWhereUniqueInput
connectOrCreate?: art_LikeRecordCreateOrConnectWithoutArtWorkInput
create?: art_LikeRecordCreateWithoutArtWorkInput
}

export interface art_CreationCreateManyAppUserInput {
args?: string
createdAt?: string
id?: number
}

export interface art_CreationUpsertWithoutArtWorkInput {
create?: art_CreationCreateWithoutArtWorkInput
update?: art_CreationUpdateWithoutArtWorkInput
}

export interface art_PointRecordCreateOrConnectWithoutAppUserInput {
create?: art_PointRecordCreateWithoutAppUserInput
where?: art_PointRecordWhereUniqueInput
}

export interface art_ArtWorkWhereInput {
published?: art_BoolFilter
sharedCount?: art_IntFilter
NOT?: art_ArtWorkWhereInput
isDraft?: art_BoolFilter
likeCount?: art_IntFilter
publishAt?: art_DateTimeNullableFilter
url?: art_StringFilter
AND?: art_ArtWorkWhereInput
creationId?: art_IntFilter
id?: art_IntFilter
recommendRate?: art_IntFilter
Creation?: art_CreationRelationFilter
LikeRecord?: art_LikeRecordListRelationFilter
OR?: art_ArtWorkWhereInput[],}

export interface art_AppUserUpsertWithoutCreationInput {
create?: art_AppUserCreateWithoutCreationInput
update?: art_AppUserUpdateWithoutCreationInput
}

export interface art_AppUserScalarWhereInput {
NOT?: art_AppUserScalarWhereInput
OR?: art_AppUserScalarWhereInput[],avatar?: art_StringFilter
id?: art_IntFilter
nickname?: art_StringFilter
points?: art_IntFilter
provider?: art_StringFilter
AND?: art_AppUserScalarWhereInput
providerId?: art_StringFilter
inviteById?: art_IntNullableFilter
phone?: art_StringNullableFilter
providerUserId?: art_StringFilter
createdAt?: art_DateTimeFilter
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

export interface art_CreationUpdateWithoutArtWorkInput {
AppUser?: art_AppUserUpdateOneRequiredWithoutCreationNestedInput
args?: art_StringFieldUpdateOperationsInput
createdAt?: art_DateTimeFieldUpdateOperationsInput
}

export interface art_DateTimeFilter {
equals?: string
gt?: string
gte?: string
in?: string[],lt?: string
lte?: string
not?: art_NestedDateTimeFilter
notIn?: string[],}

export interface art_ArtWorkListRelationFilter {
every?: art_ArtWorkWhereInput
none?: art_ArtWorkWhereInput
some?: art_ArtWorkWhereInput
}

export interface art_IntFilter {
gt?: number
gte?: number
in?: number[],lt?: number
lte?: number
not?: art_NestedIntFilter
notIn?: number[],equals?: number
}

export interface art_AppUserUpsertWithWhereUniqueWithoutAppUserInput {
create?: art_AppUserCreateWithoutAppUserInput
update?: art_AppUserUpdateWithoutAppUserInput
where?: art_AppUserWhereUniqueInput
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

export interface art_CreationOrderByWithRelationInput {
id?: string
AppUser?: art_AppUserOrderByWithRelationInput
ArtWork?: art_ArtWorkOrderByRelationAggregateInput
args?: string
authorId?: string
createdAt?: string
}

export interface art_AppUserCreateNestedOneWithoutLikeRecordInput {
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutLikeRecordInput
create?: art_AppUserCreateWithoutLikeRecordInput
}

export interface art_CreationCreateWithoutAppUserInput {
args?: string
createdAt?: string
ArtWork?: art_ArtWorkCreateNestedManyWithoutCreationInput
}

export interface art_IntNullableFilter {
notIn?: number[],equals?: number
gt?: number
gte?: number
in?: number[],lt?: number
lte?: number
not?: art_NestedIntNullableFilter
}

export interface art_AppUserUpdateWithWhereUniqueWithoutAppUserInput {
data?: art_AppUserUpdateWithoutAppUserInput
where?: art_AppUserWhereUniqueInput
}

export interface art_AppUserUpdateWithoutLikeRecordInput {
AppUser?: art_AppUserUpdateOneWithoutOther_AppUserNestedInput
Creation?: art_CreationUpdateManyWithoutAppUserNestedInput
PointRecord?: art_PointRecordUpdateManyWithoutAppUserNestedInput
avatar?: art_StringFieldUpdateOperationsInput
createdAt?: art_DateTimeFieldUpdateOperationsInput
nickname?: art_StringFieldUpdateOperationsInput
providerId?: art_StringFieldUpdateOperationsInput
other_AppUser?: art_AppUserUpdateManyWithoutAppUserNestedInput
phone?: art_NullableStringFieldUpdateOperationsInput
points?: art_IntFieldUpdateOperationsInput
provider?: art_StringFieldUpdateOperationsInput
providerUserId?: art_StringFieldUpdateOperationsInput
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

export interface art_LikeRecordCreateWithoutAppUserInput {
ArtWork?: art_ArtWorkCreateNestedOneWithoutLikeRecordInput
createdAt?: string
}

export interface art_AppUserCreateOrConnectWithoutOther_AppUserInput {
create?: art_AppUserCreateWithoutOther_AppUserInput
where?: art_AppUserWhereUniqueInput
}

export interface art_LikeRecordCreateManyArtWorkInputEnvelope {
skipDuplicates?: boolean
data?: art_LikeRecordCreateManyArtWorkInput[],}

export interface art_CreationUpdateOneRequiredWithoutArtWorkNestedInput {
connect?: art_CreationWhereUniqueInput
connectOrCreate?: art_CreationCreateOrConnectWithoutArtWorkInput
create?: art_CreationCreateWithoutArtWorkInput
update?: art_CreationUpdateWithoutArtWorkInput
upsert?: art_CreationUpsertWithoutArtWorkInput
}

export interface art_LikeRecordListRelationFilter {
every?: art_LikeRecordWhereInput
none?: art_LikeRecordWhereInput
some?: art_LikeRecordWhereInput
}

export interface art_ArtWorkWhereUniqueInput {
id?: number
}

export interface art_ArtWorkCreateManyCreationInput {
published?: boolean
recommendRate?: number
sharedCount?: number
url?: string
id?: number
isDraft?: boolean
likeCount?: number
publishAt?: string
}

export interface art_LikeRecordCreateNestedManyWithoutAppUserInput {
connect?: art_LikeRecordWhereUniqueInput
connectOrCreate?: art_LikeRecordCreateOrConnectWithoutAppUserInput
create?: art_LikeRecordCreateWithoutAppUserInput
createMany?: art_LikeRecordCreateManyAppUserInputEnvelope
}

export interface art_AppUserUpdateWithoutOther_AppUserInput {
avatar?: art_StringFieldUpdateOperationsInput
nickname?: art_StringFieldUpdateOperationsInput
phone?: art_NullableStringFieldUpdateOperationsInput
points?: art_IntFieldUpdateOperationsInput
providerUserId?: art_StringFieldUpdateOperationsInput
AppUser?: art_AppUserUpdateOneWithoutOther_AppUserNestedInput
Creation?: art_CreationUpdateManyWithoutAppUserNestedInput
PointRecord?: art_PointRecordUpdateManyWithoutAppUserNestedInput
providerId?: art_StringFieldUpdateOperationsInput
LikeRecord?: art_LikeRecordUpdateManyWithoutAppUserNestedInput
createdAt?: art_DateTimeFieldUpdateOperationsInput
provider?: art_StringFieldUpdateOperationsInput
}

export interface art_AppUserRelationFilter {
is?: art_AppUserWhereInput
isNot?: art_AppUserWhereInput
}

export interface art_PointRecordUpdateManyWithWhereWithoutAppUserInput {
data?: art_PointRecordUpdateManyMutationInput
where?: art_PointRecordScalarWhereInput
}

export interface art_CreationScalarWhereInput {
AND?: art_CreationScalarWhereInput
NOT?: art_CreationScalarWhereInput
OR?: art_CreationScalarWhereInput[],args?: art_StringFilter
authorId?: art_IntFilter
createdAt?: art_DateTimeFilter
id?: art_IntFilter
}

export interface art_AppUserUpdateOneRequiredWithoutCreationNestedInput {
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutCreationInput
create?: art_AppUserCreateWithoutCreationInput
update?: art_AppUserUpdateWithoutCreationInput
upsert?: art_AppUserUpsertWithoutCreationInput
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

export interface art_NestedDateTimeNullableFilter {
not?: art_NestedDateTimeNullableFilter
notIn?: string[],equals?: string
gt?: string
gte?: string
in?: string[],lt?: string
lte?: string
}

export interface art_LikeRecordWhereInput {
AND?: art_LikeRecordWhereInput
AppUser?: art_AppUserRelationFilter
OR?: art_LikeRecordWhereInput[],userId?: art_IntFilter
ArtWork?: art_ArtWorkRelationFilter
NOT?: art_LikeRecordWhereInput
artWorkId?: art_IntFilter
createdAt?: art_DateTimeFilter
id?: art_IntFilter
}

export interface art_LikeRecordUpdateManyWithWhereWithoutArtWorkInput {
where?: art_LikeRecordScalarWhereInput
data?: art_LikeRecordUpdateManyMutationInput
}

export interface art_ArtWorkUpdateWithWhereUniqueWithoutCreationInput {
where?: art_ArtWorkWhereUniqueInput
data?: art_ArtWorkUpdateWithoutCreationInput
}

export interface art_PointRecordUpdateWithWhereUniqueWithoutAppUserInput {
data?: art_PointRecordUpdateWithoutAppUserInput
where?: art_PointRecordWhereUniqueInput
}

export interface art_LikeRecordUpdateManyWithWhereWithoutAppUserInput {
data?: art_LikeRecordUpdateManyMutationInput
where?: art_LikeRecordScalarWhereInput
}

export interface art_NestedStringNullableFilter {
equals?: string
gte?: string
lt?: string
not?: art_NestedStringNullableFilter
startsWith?: string
contains?: string
endsWith?: string
gt?: string
in?: string[],lte?: string
notIn?: string[],}

export interface art_CreationUpdateWithWhereUniqueWithoutAppUserInput {
data?: art_CreationUpdateWithoutAppUserInput
where?: art_CreationWhereUniqueInput
}

export interface art_PointRecordScalarWhereInput {
AND?: art_PointRecordScalarWhereInput
NOT?: art_PointRecordScalarWhereInput
OR?: art_PointRecordScalarWhereInput[],createdAt?: art_DateTimeFilter
id?: art_IntFilter
point?: art_IntFilter
userId?: art_IntFilter
way?: art_EnumPointRecord_wayFilter
}

export interface art_ArtWorkUpsertWithoutLikeRecordInput {
create?: art_ArtWorkCreateWithoutLikeRecordInput
update?: art_ArtWorkUpdateWithoutLikeRecordInput
}

export interface art_AppUserUpsertWithoutOther_AppUserInput {
create?: art_AppUserCreateWithoutOther_AppUserInput
update?: art_AppUserUpdateWithoutOther_AppUserInput
}

export interface art_EnumPointRecord_wayFilter {
equals?: string
in?: string[],not?: string
notIn?: string[],}

export interface art_LikeRecordUpsertWithWhereUniqueWithoutAppUserInput {
create?: art_LikeRecordCreateWithoutAppUserInput
update?: art_LikeRecordUpdateWithoutAppUserInput
where?: art_LikeRecordWhereUniqueInput
}

export interface art_LikeRecordCreateOrConnectWithoutArtWorkInput {
create?: art_LikeRecordCreateWithoutArtWorkInput
where?: art_LikeRecordWhereUniqueInput
}

export interface art_NestedBoolFilter {
equals?: boolean
not?: art_NestedBoolFilter
}

export interface art_ArtWorkOrderByWithRelationInput {
Creation?: art_CreationOrderByWithRelationInput
id?: string
isDraft?: string
sharedCount?: string
published?: string
recommendRate?: string
url?: string
LikeRecord?: art_LikeRecordOrderByRelationAggregateInput
creationId?: string
likeCount?: string
publishAt?: string
}

export interface art_CreationUpdateWithoutAppUserInput {
ArtWork?: art_ArtWorkUpdateManyWithoutCreationNestedInput
args?: art_StringFieldUpdateOperationsInput
createdAt?: art_DateTimeFieldUpdateOperationsInput
}

export interface art_AppUserCreateOrConnectWithoutLikeRecordInput {
create?: art_AppUserCreateWithoutLikeRecordInput
where?: art_AppUserWhereUniqueInput
}

export interface art_CreationCreateNestedManyWithoutAppUserInput {
create?: art_CreationCreateWithoutAppUserInput
createMany?: art_CreationCreateManyAppUserInputEnvelope
connect?: art_CreationWhereUniqueInput
connectOrCreate?: art_CreationCreateOrConnectWithoutAppUserInput
}

export interface art_AppUserListRelationFilter {
every?: art_AppUserWhereInput
none?: art_AppUserWhereInput
some?: art_AppUserWhereInput
}

export interface art_LikeRecordUpsertWithWhereUniqueWithoutArtWorkInput {
create?: art_LikeRecordCreateWithoutArtWorkInput
update?: art_LikeRecordUpdateWithoutArtWorkInput
where?: art_LikeRecordWhereUniqueInput
}

export interface art_ArtWorkUpdateOneRequiredWithoutLikeRecordNestedInput {
connect?: art_ArtWorkWhereUniqueInput
connectOrCreate?: art_ArtWorkCreateOrConnectWithoutLikeRecordInput
create?: art_ArtWorkCreateWithoutLikeRecordInput
update?: art_ArtWorkUpdateWithoutLikeRecordInput
upsert?: art_ArtWorkUpsertWithoutLikeRecordInput
}

export interface art_AppUserCreateManyAppUserInput {
createdAt?: string
id?: number
phone?: string
provider?: string
providerId?: string
avatar?: string
nickname?: string
points?: number
providerUserId?: string
}

export interface art_LikeRecordUpdateWithoutArtWorkInput {
createdAt?: art_DateTimeFieldUpdateOperationsInput
AppUser?: art_AppUserUpdateOneRequiredWithoutLikeRecordNestedInput
}

export interface art_ArtWorkCreateNestedManyWithoutCreationInput {
connectOrCreate?: art_ArtWorkCreateOrConnectWithoutCreationInput
create?: art_ArtWorkCreateWithoutCreationInput
createMany?: art_ArtWorkCreateManyCreationInputEnvelope
connect?: art_ArtWorkWhereUniqueInput
}

export interface art_CreationCreateWithoutArtWorkInput {
AppUser?: art_AppUserCreateNestedOneWithoutCreationInput
args?: string
createdAt?: string
}

export interface art_NestedIntFilter {
lte?: number
not?: art_NestedIntFilter
notIn?: number[],equals?: number
gt?: number
gte?: number
in?: number[],lt?: number
}

export interface art_DateTimeFieldUpdateOperationsInput {
set?: string
}

export interface art_CreationCreateManyAppUserInputEnvelope {
data?: art_CreationCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_CreationCreateNestedOneWithoutArtWorkInput {
connect?: art_CreationWhereUniqueInput
connectOrCreate?: art_CreationCreateOrConnectWithoutArtWorkInput
create?: art_CreationCreateWithoutArtWorkInput
}

export interface art_PointRecordCreateNestedManyWithoutAppUserInput {
createMany?: art_PointRecordCreateManyAppUserInputEnvelope
connect?: art_PointRecordWhereUniqueInput
connectOrCreate?: art_PointRecordCreateOrConnectWithoutAppUserInput
create?: art_PointRecordCreateWithoutAppUserInput
}

export interface art_LikeRecordCreateManyAppUserInput {
artWorkId?: number
createdAt?: string
id?: number
}

export interface art_ArtWorkScalarWhereInput {
creationId?: art_IntFilter
isDraft?: art_BoolFilter
likeCount?: art_IntFilter
publishAt?: art_DateTimeNullableFilter
published?: art_BoolFilter
sharedCount?: art_IntFilter
AND?: art_ArtWorkScalarWhereInput
OR?: art_ArtWorkScalarWhereInput[],url?: art_StringFilter
recommendRate?: art_IntFilter
NOT?: art_ArtWorkScalarWhereInput
id?: art_IntFilter
}

export interface art_AppUserCreateWithoutAppUserInput {
points?: number
provider?: string
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
avatar?: string
createdAt?: string
nickname?: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
phone?: string
providerUserId?: string
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
providerId?: string
}

export interface art_PointRecordUpdateManyMutationInput {
createdAt?: art_DateTimeFieldUpdateOperationsInput
point?: art_IntFieldUpdateOperationsInput
way?: string
}

export interface art_CreationWhereUniqueInput {
id?: number
}

export interface art_NestedIntNullableFilter {
in?: number[],lt?: number
lte?: number
not?: art_NestedIntNullableFilter
notIn?: number[],equals?: number
gt?: number
gte?: number
}

export interface art_StringNullableFilter {
endsWith?: string
gte?: string
lte?: string
not?: art_NestedStringNullableFilter
contains?: string
gt?: string
in?: string[],lt?: string
notIn?: string[],startsWith?: string
equals?: string
}

export interface art_PointRecordWhereInput {
AND?: art_PointRecordWhereInput
NOT?: art_PointRecordWhereInput
id?: art_IntFilter
userId?: art_IntFilter
way?: art_EnumPointRecord_wayFilter
AppUser?: art_AppUserRelationFilter
OR?: art_PointRecordWhereInput[],createdAt?: art_DateTimeFilter
point?: art_IntFilter
}

export interface art_CreationUpdateManyWithWhereWithoutAppUserInput {
data?: art_CreationUpdateManyMutationInput
where?: art_CreationScalarWhereInput
}

export interface art_CreationCreateOrConnectWithoutArtWorkInput {
create?: art_CreationCreateWithoutArtWorkInput
where?: art_CreationWhereUniqueInput
}

export interface art_ArtWorkUpdateWithoutCreationInput {
published?: art_BoolFieldUpdateOperationsInput
recommendRate?: art_IntFieldUpdateOperationsInput
sharedCount?: art_IntFieldUpdateOperationsInput
url?: art_StringFieldUpdateOperationsInput
LikeRecord?: art_LikeRecordUpdateManyWithoutArtWorkNestedInput
isDraft?: art_BoolFieldUpdateOperationsInput
likeCount?: art_IntFieldUpdateOperationsInput
publishAt?: art_NullableDateTimeFieldUpdateOperationsInput
}

export interface art_AppUserCreateWithoutLikeRecordInput {
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
createdAt?: string
nickname?: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
providerUserId?: string
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
avatar?: string
phone?: string
points?: number
provider?: string
providerId?: string
}

export interface art_StringFieldUpdateOperationsInput {
set?: string
}

export interface art_CreationUpdateManyWithoutAppUserNestedInput {
create?: art_CreationCreateWithoutAppUserInput
delete?: art_CreationWhereUniqueInput
deleteMany?: art_CreationScalarWhereInput
disconnect?: art_CreationWhereUniqueInput
update?: art_CreationUpdateWithWhereUniqueWithoutAppUserInput
upsert?: art_CreationUpsertWithWhereUniqueWithoutAppUserInput
connect?: art_CreationWhereUniqueInput
connectOrCreate?: art_CreationCreateOrConnectWithoutAppUserInput
createMany?: art_CreationCreateManyAppUserInputEnvelope
set?: art_CreationWhereUniqueInput
updateMany?: art_CreationUpdateManyWithWhereWithoutAppUserInput
}

export interface art_LikeRecordOrderByRelationAggregateInput {
_count?: string
}

export interface art_AppUserOrderByWithRelationInput {
nickname?: string
points?: string
providerId?: string
LikeRecord?: art_LikeRecordOrderByRelationAggregateInput
other_AppUser?: art_AppUserOrderByRelationAggregateInput
phone?: string
providerUserId?: string
PointRecord?: art_PointRecordOrderByRelationAggregateInput
avatar?: string
inviteById?: string
provider?: string
AppUser?: art_AppUserOrderByWithRelationInput
Creation?: art_CreationOrderByRelationAggregateInput
createdAt?: string
id?: string
}

export interface art_ArtWorkCreateOrConnectWithoutLikeRecordInput {
create?: art_ArtWorkCreateWithoutLikeRecordInput
where?: art_ArtWorkWhereUniqueInput
}

export interface art_LikeRecordUpdateManyWithoutArtWorkNestedInput {
connect?: art_LikeRecordWhereUniqueInput
create?: art_LikeRecordCreateWithoutArtWorkInput
upsert?: art_LikeRecordUpsertWithWhereUniqueWithoutArtWorkInput
set?: art_LikeRecordWhereUniqueInput
update?: art_LikeRecordUpdateWithWhereUniqueWithoutArtWorkInput
updateMany?: art_LikeRecordUpdateManyWithWhereWithoutArtWorkInput
connectOrCreate?: art_LikeRecordCreateOrConnectWithoutArtWorkInput
createMany?: art_LikeRecordCreateManyArtWorkInputEnvelope
delete?: art_LikeRecordWhereUniqueInput
deleteMany?: art_LikeRecordScalarWhereInput
disconnect?: art_LikeRecordWhereUniqueInput
}

export interface art_NullableStringFieldUpdateOperationsInput {
set?: string
}

export interface art_LikeRecordWhereUniqueInput {
id?: number
}

export interface art_AppUserUpdateManyWithoutAppUserNestedInput {
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutAppUserInput
delete?: art_AppUserWhereUniqueInput
disconnect?: art_AppUserWhereUniqueInput
set?: art_AppUserWhereUniqueInput
update?: art_AppUserUpdateWithWhereUniqueWithoutAppUserInput
updateMany?: art_AppUserUpdateManyWithWhereWithoutAppUserInput
upsert?: art_AppUserUpsertWithWhereUniqueWithoutAppUserInput
create?: art_AppUserCreateWithoutAppUserInput
createMany?: art_AppUserCreateManyAppUserInputEnvelope
deleteMany?: art_AppUserScalarWhereInput
}

export interface art_ArtWorkRelationFilter {
is?: art_ArtWorkWhereInput
isNot?: art_ArtWorkWhereInput
}

export interface art_CreationListRelationFilter {
none?: art_CreationWhereInput
some?: art_CreationWhereInput
every?: art_CreationWhereInput
}

export interface art_NestedStringFilter {
not?: art_NestedStringFilter
endsWith?: string
in?: string[],lt?: string
gte?: string
lte?: string
notIn?: string[],startsWith?: string
contains?: string
equals?: string
gt?: string
}

export interface art_AppUserCreateNestedManyWithoutAppUserInput {
create?: art_AppUserCreateWithoutAppUserInput
createMany?: art_AppUserCreateManyAppUserInputEnvelope
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutAppUserInput
}

export interface art_AppUserUpdateManyWithWhereWithoutAppUserInput {
data?: art_AppUserUpdateManyMutationInput
where?: art_AppUserScalarWhereInput
}

export interface art_ArtWorkCreateManyCreationInputEnvelope {
skipDuplicates?: boolean
data?: art_ArtWorkCreateManyCreationInput[],}

export interface art_ArtWorkUpdateManyMutationInput {
isDraft?: art_BoolFieldUpdateOperationsInput
likeCount?: art_IntFieldUpdateOperationsInput
publishAt?: art_NullableDateTimeFieldUpdateOperationsInput
published?: art_BoolFieldUpdateOperationsInput
recommendRate?: art_IntFieldUpdateOperationsInput
sharedCount?: art_IntFieldUpdateOperationsInput
url?: art_StringFieldUpdateOperationsInput
}

export interface art_PointRecordCreateWithoutAppUserInput {
createdAt?: string
point?: number
way?: string
}

export interface art_AppUserUpdateOneRequiredWithoutLikeRecordNestedInput {
upsert?: art_AppUserUpsertWithoutLikeRecordInput
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutLikeRecordInput
create?: art_AppUserCreateWithoutLikeRecordInput
update?: art_AppUserUpdateWithoutLikeRecordInput
}

export interface art_AppUserUpdateWithoutCreationInput {
PointRecord?: art_PointRecordUpdateManyWithoutAppUserNestedInput
createdAt?: art_DateTimeFieldUpdateOperationsInput
other_AppUser?: art_AppUserUpdateManyWithoutAppUserNestedInput
phone?: art_NullableStringFieldUpdateOperationsInput
points?: art_IntFieldUpdateOperationsInput
provider?: art_StringFieldUpdateOperationsInput
providerId?: art_StringFieldUpdateOperationsInput
LikeRecord?: art_LikeRecordUpdateManyWithoutAppUserNestedInput
avatar?: art_StringFieldUpdateOperationsInput
nickname?: art_StringFieldUpdateOperationsInput
providerUserId?: art_StringFieldUpdateOperationsInput
AppUser?: art_AppUserUpdateOneWithoutOther_AppUserNestedInput
}

export interface art_LikeRecordUpdateWithWhereUniqueWithoutAppUserInput {
where?: art_LikeRecordWhereUniqueInput
data?: art_LikeRecordUpdateWithoutAppUserInput
}

export interface art_NullableDateTimeFieldUpdateOperationsInput {
set?: string
}

export interface art_AppUserCreateManyAppUserInputEnvelope {
data?: art_AppUserCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_LikeRecordUpdateWithWhereUniqueWithoutArtWorkInput {
data?: art_LikeRecordUpdateWithoutArtWorkInput
where?: art_LikeRecordWhereUniqueInput
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

export interface art_CreationUpsertWithWhereUniqueWithoutAppUserInput {
create?: art_CreationCreateWithoutAppUserInput
update?: art_CreationUpdateWithoutAppUserInput
where?: art_CreationWhereUniqueInput
}

export interface art_PointRecordUpdateManyWithoutAppUserNestedInput {
connect?: art_PointRecordWhereUniqueInput
create?: art_PointRecordCreateWithoutAppUserInput
createMany?: art_PointRecordCreateManyAppUserInputEnvelope
delete?: art_PointRecordWhereUniqueInput
deleteMany?: art_PointRecordScalarWhereInput
set?: art_PointRecordWhereUniqueInput
connectOrCreate?: art_PointRecordCreateOrConnectWithoutAppUserInput
disconnect?: art_PointRecordWhereUniqueInput
update?: art_PointRecordUpdateWithWhereUniqueWithoutAppUserInput
updateMany?: art_PointRecordUpdateManyWithWhereWithoutAppUserInput
upsert?: art_PointRecordUpsertWithWhereUniqueWithoutAppUserInput
}

export interface art_ArtWorkUpdateManyWithoutCreationNestedInput {
connectOrCreate?: art_ArtWorkCreateOrConnectWithoutCreationInput
createMany?: art_ArtWorkCreateManyCreationInputEnvelope
delete?: art_ArtWorkWhereUniqueInput
deleteMany?: art_ArtWorkScalarWhereInput
disconnect?: art_ArtWorkWhereUniqueInput
connect?: art_ArtWorkWhereUniqueInput
set?: art_ArtWorkWhereUniqueInput
update?: art_ArtWorkUpdateWithWhereUniqueWithoutCreationInput
updateMany?: art_ArtWorkUpdateManyWithWhereWithoutCreationInput
upsert?: art_ArtWorkUpsertWithWhereUniqueWithoutCreationInput
create?: art_ArtWorkCreateWithoutCreationInput
}

export interface art_CreationOrderByRelationAggregateInput {
_count?: string
}

export interface art_AppUserWhereUniqueInput {
id?: number
}

export interface art_PointRecordUpdateWithoutAppUserInput {
createdAt?: art_DateTimeFieldUpdateOperationsInput
point?: art_IntFieldUpdateOperationsInput
way?: string
}

export interface art_LikeRecordCreateManyArtWorkInput {
createdAt?: string
id?: number
userId?: number
}

export interface art_PointRecordUpsertWithWhereUniqueWithoutAppUserInput {
create?: art_PointRecordCreateWithoutAppUserInput
update?: art_PointRecordUpdateWithoutAppUserInput
where?: art_PointRecordWhereUniqueInput
}

export interface art_ArtWorkUpsertWithWhereUniqueWithoutCreationInput {
update?: art_ArtWorkUpdateWithoutCreationInput
where?: art_ArtWorkWhereUniqueInput
create?: art_ArtWorkCreateWithoutCreationInput
}

export interface art_AppUserWhereInput {
OR?: art_AppUserWhereInput[],PointRecord?: art_PointRecordListRelationFilter
avatar?: art_StringFilter
inviteById?: art_IntNullableFilter
points?: art_IntFilter
providerUserId?: art_StringFilter
LikeRecord?: art_LikeRecordListRelationFilter
NOT?: art_AppUserWhereInput
createdAt?: art_DateTimeFilter
other_AppUser?: art_AppUserListRelationFilter
phone?: art_StringNullableFilter
provider?: art_StringFilter
AppUser?: art_AppUserRelationFilter
nickname?: art_StringFilter
AND?: art_AppUserWhereInput
Creation?: art_CreationListRelationFilter
id?: art_IntFilter
providerId?: art_StringFilter
}

export interface art_CreationWhereInput {
NOT?: art_CreationWhereInput
OR?: art_CreationWhereInput[],args?: art_StringFilter
authorId?: art_IntFilter
createdAt?: art_DateTimeFilter
AppUser?: art_AppUserRelationFilter
ArtWork?: art_ArtWorkListRelationFilter
AND?: art_CreationWhereInput
id?: art_IntFilter
}

export interface art_ArtWorkUpdateManyWithWhereWithoutCreationInput {
data?: art_ArtWorkUpdateManyMutationInput
where?: art_ArtWorkScalarWhereInput
}

export interface art_AppUserUpdateWithoutAppUserInput {
providerId?: art_StringFieldUpdateOperationsInput
providerUserId?: art_StringFieldUpdateOperationsInput
LikeRecord?: art_LikeRecordUpdateManyWithoutAppUserNestedInput
PointRecord?: art_PointRecordUpdateManyWithoutAppUserNestedInput
createdAt?: art_DateTimeFieldUpdateOperationsInput
phone?: art_NullableStringFieldUpdateOperationsInput
provider?: art_StringFieldUpdateOperationsInput
Creation?: art_CreationUpdateManyWithoutAppUserNestedInput
avatar?: art_StringFieldUpdateOperationsInput
nickname?: art_StringFieldUpdateOperationsInput
other_AppUser?: art_AppUserUpdateManyWithoutAppUserNestedInput
points?: art_IntFieldUpdateOperationsInput
}

export interface art_IntFieldUpdateOperationsInput {
divide?: number
increment?: number
multiply?: number
set?: number
decrement?: number
}

export interface art_PointRecordListRelationFilter {
none?: art_PointRecordWhereInput
some?: art_PointRecordWhereInput
every?: art_PointRecordWhereInput
}

export interface art_BoolFieldUpdateOperationsInput {
set?: boolean
}

export interface art_AppUserCreateWithoutOther_AppUserInput {
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
createdAt?: string
phone?: string
points?: number
provider?: string
providerUserId?: string
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
avatar?: string
nickname?: string
providerId?: string
}

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
    message: string;
    path?: ReadonlyArray<string | number>;
}


