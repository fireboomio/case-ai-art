
export interface InternalGetPetListInput {
query?: local_my_PetWhereInput
skip?: number
take?: number
orderBy?: local_my_PetOrderByWithRelationInput[],}

export interface InternalGetUserListInput {
orderBy?: local_my_UserOrderByWithRelationInput[],query?: local_my_UserWhereInput
skip?: number
take?: number
}

export interface InternalGetUserRolesInput {
userId: number
}



export interface InjectedGetPetListInput {
skip?: number
take?: number
orderBy?: local_my_PetOrderByWithRelationInput[],query?: local_my_PetWhereInput
}

export interface InjectedGetUserListInput {
orderBy?: local_my_UserOrderByWithRelationInput[],query?: local_my_UserWhereInput
skip?: number
take?: number
}

export interface InjectedGetUserRolesInput {
userId: number
}



export interface GetMenuListResponse {
data?: GetMenuListResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetPetListResponse {
data?: GetPetListResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetRoleListResponse {
data?: GetRoleListResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetUserListResponse {
data?: GetUserListResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetUserRolesResponse {
data?: GetUserRolesResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface LoopTest1Response {
data?: LoopTest1ResponseData
errors?: ReadonlyArray<GraphQLError>;
}



export interface GetMenuListResponseData {
data: {
label: string
parentId?: number
path: string
sort: number
id: number
}[],}

export interface GetPetListResponseData {
data: {
age: number
createdAt: string
id: number
name: string
sex: number
}[],total: number
}

export interface GetRoleListResponseData {
data: {
id: number
code: string
desc?: string
}[],}

export interface GetUserListResponseData {
data: {
providerUserId: string
avatarUrl?: string
createdAt: string
id: number
name: string
provider: string
providerId: string
}[],total: number
}

export interface GetUserRolesResponseData {
data?: {
desc?: string
id: number
code: string
}[],}

export interface LoopTest1ResponseData {
local_my_findManyPet: {
id: number
age: number
}[],}





export interface local_my_DateTimeFilter {
in?: string[],lt?: string
lte?: string
not?: local_my_NestedDateTimeFilter
notIn?: string[],equals?: string
gt?: string
gte?: string
}

export interface local_my_MenuListRelationFilter {
every?: local_my_MenuWhereInput
none?: local_my_MenuWhereInput
some?: local_my_MenuWhereInput
}

export interface local_my_todoWhereInput {
OR?: local_my_todoWhereInput[],User?: local_my_UserRelationFilter
created_at?: local_my_DateTimeNullableFilter
is_completed?: local_my_BoolFilter
is_public?: local_my_BoolFilter
title?: local_my_StringFilter
AND?: local_my_todoWhereInput
NOT?: local_my_todoWhereInput
id?: local_my_IntFilter
user_id?: local_my_IntFilter
}

export interface local_my_UserOrderByWithRelationInput {
id?: string
provider?: string
providerId?: string
providerUserId?: string
todo?: local_my_todoOrderByRelationAggregateInput
Role?: local_my_RoleOrderByRelationAggregateInput
avatarUrl?: string
createdAt?: string
name?: string
}

export interface local_my_UserListRelationFilter {
none?: local_my_UserWhereInput
some?: local_my_UserWhereInput
every?: local_my_UserWhereInput
}

export interface local_my_todoOrderByRelationAggregateInput {
_count?: string
}

export interface local_my_DateTimeNullableFilter {
in?: string[],lt?: string
lte?: string
not?: local_my_NestedDateTimeNullableFilter
notIn?: string[],equals?: string
gt?: string
gte?: string
}

export interface local_my_RoleListRelationFilter {
every?: local_my_RoleWhereInput
none?: local_my_RoleWhereInput
some?: local_my_RoleWhereInput
}

export interface local_my_NestedDateTimeFilter {
lte?: string
not?: local_my_NestedDateTimeFilter
notIn?: string[],equals?: string
gt?: string
gte?: string
in?: string[],lt?: string
}

export interface local_my_PetOrderByWithRelationInput {
age?: string
createdAt?: string
id?: string
name?: string
sex?: string
}

export interface local_my_IntFilter {
not?: local_my_NestedIntFilter
notIn?: number[],equals?: number
gt?: number
gte?: number
in?: number[],lt?: number
lte?: number
}

export interface local_my_MenuWhereInput {
sort?: local_my_IntFilter
AND?: local_my_MenuWhereInput
MenuMenuToMenu?: local_my_MenuRelationFilter
NOT?: local_my_MenuWhereInput
Role?: local_my_RoleListRelationFilter
label?: local_my_StringFilter
other_Menu?: local_my_MenuListRelationFilter
parentId?: local_my_IntNullableFilter
OR?: local_my_MenuWhereInput[],icon?: local_my_StringNullableFilter
id?: local_my_IntFilter
level?: local_my_IntFilter
path?: local_my_StringFilter
}

export interface local_my_NestedStringNullableFilter {
lte?: string
not?: local_my_NestedStringNullableFilter
notIn?: string[],lt?: string
endsWith?: string
equals?: string
gt?: string
gte?: string
in?: string[],startsWith?: string
contains?: string
}

export interface local_my_UserWhereInput {
avatarUrl?: local_my_StringNullableFilter
id?: local_my_IntFilter
OR?: local_my_UserWhereInput[],Role?: local_my_RoleListRelationFilter
createdAt?: local_my_DateTimeFilter
name?: local_my_StringFilter
provider?: local_my_StringFilter
providerId?: local_my_StringFilter
AND?: local_my_UserWhereInput
NOT?: local_my_UserWhereInput
providerUserId?: local_my_StringFilter
todo?: local_my_TodoListRelationFilter
}

export interface local_my_RoleWhereInput {
code?: local_my_StringFilter
desc?: local_my_StringNullableFilter
id?: local_my_IntFilter
AND?: local_my_RoleWhereInput
Menu?: local_my_MenuListRelationFilter
NOT?: local_my_RoleWhereInput
OR?: local_my_RoleWhereInput[],User?: local_my_UserListRelationFilter
}

export interface local_my_TodoListRelationFilter {
every?: local_my_todoWhereInput
none?: local_my_todoWhereInput
some?: local_my_todoWhereInput
}

export interface local_my_StringFilter {
endsWith?: string
gte?: string
in?: string[],lt?: string
not?: local_my_NestedStringFilter
contains?: string
equals?: string
gt?: string
lte?: string
notIn?: string[],startsWith?: string
}

export interface local_my_PetWhereInput {
AND?: local_my_PetWhereInput
NOT?: local_my_PetWhereInput
OR?: local_my_PetWhereInput[],age?: local_my_IntFilter
createdAt?: local_my_DateTimeFilter
id?: local_my_IntFilter
name?: local_my_StringFilter
sex?: local_my_IntFilter
}

export interface local_my_RoleOrderByRelationAggregateInput {
_count?: string
}

export interface local_my_UserRelationFilter {
is?: local_my_UserWhereInput
isNot?: local_my_UserWhereInput
}

export interface local_my_NestedIntNullableFilter {
lt?: number
lte?: number
not?: local_my_NestedIntNullableFilter
notIn?: number[],equals?: number
gt?: number
gte?: number
in?: number[],}

export interface local_my_NestedIntFilter {
gte?: number
in?: number[],lt?: number
lte?: number
not?: local_my_NestedIntFilter
notIn?: number[],equals?: number
gt?: number
}

export interface local_my_NestedDateTimeNullableFilter {
lt?: string
lte?: string
not?: local_my_NestedDateTimeNullableFilter
notIn?: string[],equals?: string
gt?: string
gte?: string
in?: string[],}

export interface local_my_NestedBoolFilter {
not?: local_my_NestedBoolFilter
equals?: boolean
}

export interface local_my_StringNullableFilter {
contains?: string
equals?: string
gte?: string
in?: string[],lte?: string
endsWith?: string
gt?: string
lt?: string
not?: local_my_NestedStringNullableFilter
notIn?: string[],startsWith?: string
}

export interface local_my_NestedStringFilter {
lte?: string
not?: local_my_NestedStringFilter
in?: string[],endsWith?: string
equals?: string
gt?: string
gte?: string
lt?: string
notIn?: string[],startsWith?: string
contains?: string
}

export interface local_my_BoolFilter {
equals?: boolean
not?: local_my_NestedBoolFilter
}

export interface local_my_IntNullableFilter {
not?: local_my_NestedIntNullableFilter
notIn?: number[],equals?: number
gt?: number
gte?: number
in?: number[],lt?: number
lte?: number
}

export interface local_my_MenuRelationFilter {
is?: local_my_MenuWhereInput
isNot?: local_my_MenuWhereInput
}

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
    message: string;
    path?: ReadonlyArray<string | number>;
}



export interface GetPetListInput {
orderBy?: local_my_PetOrderByWithRelationInput[],query?: local_my_PetWhereInput
skip?: number
take?: number
}

export interface GetUserListInput {
skip?: number
take?: number
orderBy?: local_my_UserOrderByWithRelationInput[],query?: local_my_UserWhereInput
}

export interface GetUserRolesInput {
userId: number
}


