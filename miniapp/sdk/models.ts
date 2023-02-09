
export interface InjectedCreateOneAppUserInput {
data: art_AppUserCreateInput
}

export interface InjectedFindOneAppUserInput {
equals: string
}

export interface InjectedGetUserinfoInput {
userId?: string
}



export interface CreateOneAppUserResponse {
data?: CreateOneAppUserResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface FindOneAppUserResponse {
data?: FindOneAppUserResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetUserinfoResponse {
data?: GetUserinfoResponseData
errors?: ReadonlyArray<GraphQLError>;
}



export interface CreateOneAppUserResponseData {
data?: {
id: string
},
}

export interface FindOneAppUserResponseData {
art_findFirstAppUser?: {
phone?: string
points: number
provider: string
avatar: string
createdAt: string
id: string
nickname: string
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





export interface art_AppUserCreateOrConnectWithoutLikeRecordInput {
create?: art_AppUserCreateWithoutLikeRecordInput
where?: art_AppUserWhereUniqueInput
}

export interface art_CreationCreateOrConnectWithoutArtWorkInput {
create?: art_CreationCreateWithoutArtWorkInput
where?: art_CreationWhereUniqueInput
}

export interface art_AppUserCreateManyAppUserInputEnvelope {
data?: art_AppUserCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_AppUserCreateNestedOneWithoutLikeRecordInput {
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutLikeRecordInput
create?: art_AppUserCreateWithoutLikeRecordInput
}

export interface art_AppUserCreateOrConnectWithoutAppUserInput {
create?: art_AppUserCreateWithoutAppUserInput
where?: art_AppUserWhereUniqueInput
}

export interface art_AppUserCreateWithoutLikeRecordInput {
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
avatar?: string
id?: string
provider?: string
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
createdAt?: string
nickname?: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
phone?: string
points?: number
providerId?: string
}

export interface art_LikeRecordCreateOrConnectWithoutAppUserInput {
create?: art_LikeRecordCreateWithoutAppUserInput
where?: art_LikeRecordWhereUniqueInput
}

export interface art_PointRecordCreateOrConnectWithoutAppUserInput {
create?: art_PointRecordCreateWithoutAppUserInput
where?: art_PointRecordWhereUniqueInput
}

export interface art_AppUserCreateOrConnectWithoutOther_AppUserInput {
create?: art_AppUserCreateWithoutOther_AppUserInput
where?: art_AppUserWhereUniqueInput
}

export interface art_ArtWorkCreateOrConnectWithoutCreationInput {
create?: art_ArtWorkCreateWithoutCreationInput
where?: art_ArtWorkWhereUniqueInput
}

export interface art_CreationCreateOrConnectWithoutAppUserInput {
create?: art_CreationCreateWithoutAppUserInput
where?: art_CreationWhereUniqueInput
}

export interface art_LikeRecordCreateNestedManyWithoutAppUserInput {
connect?: art_LikeRecordWhereUniqueInput
connectOrCreate?: art_LikeRecordCreateOrConnectWithoutAppUserInput
create?: art_LikeRecordCreateWithoutAppUserInput
createMany?: art_LikeRecordCreateManyAppUserInputEnvelope
}

export interface art_AppUserCreateNestedOneWithoutOther_AppUserInput {
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutOther_AppUserInput
create?: art_AppUserCreateWithoutOther_AppUserInput
}

export interface art_CreationCreateNestedOneWithoutArtWorkInput {
connect?: art_CreationWhereUniqueInput
connectOrCreate?: art_CreationCreateOrConnectWithoutArtWorkInput
create?: art_CreationCreateWithoutArtWorkInput
}

export interface art_LikeRecordCreateWithoutArtWorkInput {
AppUser?: art_AppUserCreateNestedOneWithoutLikeRecordInput
createdAt?: string
}

export interface art_CreationCreateWithoutArtWorkInput {
createdAt?: string
AppUser?: art_AppUserCreateNestedOneWithoutCreationInput
args?: string
}

export interface art_AppUserCreateWithoutOther_AppUserInput {
createdAt?: string
points?: number
provider?: string
nickname?: string
phone?: string
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
avatar?: string
id?: string
providerId?: string
}

export interface art_CreationCreateManyAppUserInput {
args?: string
createdAt?: string
id?: number
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

export interface art_AppUserCreateInput {
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
avatar: string
createdAt?: string
id: string
nickname: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
provider: string
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
phone?: string
points?: number
providerId: string
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
}

export interface art_AppUserCreateNestedOneWithoutCreationInput {
connect?: art_AppUserWhereUniqueInput
connectOrCreate?: art_AppUserCreateOrConnectWithoutCreationInput
create?: art_AppUserCreateWithoutCreationInput
}

export interface art_LikeRecordCreateManyAppUserInputEnvelope {
data?: art_LikeRecordCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_PointRecordWhereUniqueInput {
id?: number
}

export interface art_ArtWorkCreateWithoutCreationInput {
sharedCount?: number
url?: string
LikeRecord?: art_LikeRecordCreateNestedManyWithoutArtWorkInput
isDraft?: boolean
likeCount?: number
publishAt?: string
published?: boolean
recommendRate?: number
}

export interface art_LikeRecordCreateNestedManyWithoutArtWorkInput {
connect?: art_LikeRecordWhereUniqueInput
connectOrCreate?: art_LikeRecordCreateOrConnectWithoutArtWorkInput
create?: art_LikeRecordCreateWithoutArtWorkInput
createMany?: art_LikeRecordCreateManyArtWorkInputEnvelope
}

export interface art_AppUserCreateWithoutCreationInput {
AppUser?: art_AppUserCreateNestedOneWithoutOther_AppUserInput
id?: string
nickname?: string
phone?: string
providerId?: string
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
avatar?: string
createdAt?: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
points?: number
provider?: string
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

export interface art_LikeRecordCreateWithoutAppUserInput {
ArtWork?: art_ArtWorkCreateNestedOneWithoutLikeRecordInput
createdAt?: string
}

export interface art_CreationCreateNestedManyWithoutAppUserInput {
create?: art_CreationCreateWithoutAppUserInput
createMany?: art_CreationCreateManyAppUserInputEnvelope
connect?: art_CreationWhereUniqueInput
connectOrCreate?: art_CreationCreateOrConnectWithoutAppUserInput
}

export interface art_CreationCreateManyAppUserInputEnvelope {
data?: art_CreationCreateManyAppUserInput[],skipDuplicates?: boolean
}

export interface art_LikeRecordCreateManyArtWorkInputEnvelope {
data?: art_LikeRecordCreateManyArtWorkInput[],skipDuplicates?: boolean
}

export interface art_AppUserCreateWithoutAppUserInput {
phone?: string
points?: number
Creation?: art_CreationCreateNestedManyWithoutAppUserInput
avatar?: string
createdAt?: string
id?: string
other_AppUser?: art_AppUserCreateNestedManyWithoutAppUserInput
LikeRecord?: art_LikeRecordCreateNestedManyWithoutAppUserInput
PointRecord?: art_PointRecordCreateNestedManyWithoutAppUserInput
nickname?: string
provider?: string
providerId?: string
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

export interface art_PointRecordCreateNestedManyWithoutAppUserInput {
createMany?: art_PointRecordCreateManyAppUserInputEnvelope
connect?: art_PointRecordWhereUniqueInput
connectOrCreate?: art_PointRecordCreateOrConnectWithoutAppUserInput
create?: art_PointRecordCreateWithoutAppUserInput
}

export interface art_LikeRecordCreateOrConnectWithoutArtWorkInput {
create?: art_LikeRecordCreateWithoutArtWorkInput
where?: art_LikeRecordWhereUniqueInput
}

export interface art_PointRecordCreateWithoutAppUserInput {
way?: string
createdAt?: string
point?: number
}

export interface art_CreationCreateWithoutAppUserInput {
args?: string
createdAt?: string
ArtWork?: art_ArtWorkCreateNestedManyWithoutCreationInput
}

export interface art_LikeRecordWhereUniqueInput {
id?: number
}

export interface art_LikeRecordCreateManyArtWorkInput {
createdAt?: string
id?: number
userId?: string
}

export interface art_AppUserCreateOrConnectWithoutCreationInput {
create?: art_AppUserCreateWithoutCreationInput
where?: art_AppUserWhereUniqueInput
}

export interface art_ArtWorkCreateManyCreationInputEnvelope {
data?: art_ArtWorkCreateManyCreationInput[],skipDuplicates?: boolean
}

export interface art_ArtWorkCreateNestedManyWithoutCreationInput {
connectOrCreate?: art_ArtWorkCreateOrConnectWithoutCreationInput
create?: art_ArtWorkCreateWithoutCreationInput
createMany?: art_ArtWorkCreateManyCreationInputEnvelope
connect?: art_ArtWorkWhereUniqueInput
}

export interface art_ArtWorkCreateNestedOneWithoutLikeRecordInput {
connect?: art_ArtWorkWhereUniqueInput
connectOrCreate?: art_ArtWorkCreateOrConnectWithoutLikeRecordInput
create?: art_ArtWorkCreateWithoutLikeRecordInput
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

export interface art_CreationWhereUniqueInput {
id?: number
}

export interface art_ArtWorkWhereUniqueInput {
id?: number
}

export interface art_ArtWorkCreateOrConnectWithoutLikeRecordInput {
create?: art_ArtWorkCreateWithoutLikeRecordInput
where?: art_ArtWorkWhereUniqueInput
}

export interface art_LikeRecordCreateManyAppUserInput {
artWorkId?: number
createdAt?: string
id?: number
}

export interface art_AppUserWhereUniqueInput {
id?: string
}

export interface art_PointRecordCreateManyAppUserInput {
createdAt?: string
id?: number
point?: number
way?: string
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

export interface FindOneAppUserInput {
equals: string
}



export interface InternalCreateOneAppUserInput {
data: art_AppUserCreateInput
}

export interface InternalFindOneAppUserInput {
equals: string
}


