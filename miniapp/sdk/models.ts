
export interface ConnectOneRoleMenuInput {
menuId: number
roleCode: string
}

export interface ConnectOneUserRoleInput {
roleCode: string
userId: number
}

export interface CreateOneMenuInput {
label: string
level?: number
path: string
sort?: number
}

export interface CreateOneUserInput {
data: art_UserCreateInput
}

export interface DeleteOneMenuInput {
id?: number
}

export interface DisconnectOneRoleMenuInput {
menuId: number
roleCode: string
}

export interface DisconnectOneUserRoleInput {
roleCode: string
userId: number
}

export interface GetOneMenuInput {
id: number
}

export interface GetOneUserInput {
providerId: string
providerUserId: string
}

export interface GetRoleMenusInput {
roleCode: string
}

export interface GetRoleUsersInput {
roleCode: string
}

export interface GetUserListInput {
orderBy?: art_UserOrderByWithRelationInput[],query?: art_UserWhereInput
skip?: number
take?: number
}

export interface GetUserRoleMenuInput {
providerId: string
providerUserId: string
}

export interface GetUserRolesInput {
userId: number
}

export interface GetUsersWithoutRoleInput {
roleCode: string
skip?: number
take?: number
}

export interface UpdateOneMenuInput {
path?: string
sort?: number
icon?: string
id: number
label?: string
level?: number
}



export interface InternalConnectOneRoleMenuInput {
menuId: number
roleCode: string
}

export interface InternalConnectOneUserRoleInput {
userId: number
roleCode: string
}

export interface InternalCreateOneMenuInput {
label: string
level?: number
path: string
sort?: number
}

export interface InternalCreateOneUserInput {
data: art_UserCreateInput
}

export interface InternalDeleteOneMenuInput {
id?: number
}

export interface InternalDisconnectOneRoleMenuInput {
menuId: number
roleCode: string
}

export interface InternalDisconnectOneUserRoleInput {
roleCode: string
userId: number
}

export interface InternalGetOneMenuInput {
id: number
}

export interface InternalGetOneUserInput {
providerId: string
providerUserId: string
}

export interface InternalGetRoleMenusInput {
roleCode: string
}

export interface InternalGetRoleUsersInput {
roleCode: string
}

export interface InternalGetUserListInput {
take?: number
orderBy?: art_UserOrderByWithRelationInput[],query?: art_UserWhereInput
skip?: number
}

export interface InternalGetUserRoleMenuInput {
providerUserId: string
providerId: string
}

export interface InternalGetUserRolesInput {
userId: number
}

export interface InternalGetUsersWithoutRoleInput {
roleCode: string
skip?: number
take?: number
}

export interface InternalUpdateOneMenuInput {
icon?: string
id: number
label?: string
level?: number
path?: string
sort?: number
}



export interface InjectedConnectOneRoleMenuInput {
menuId: number
roleCode: string
}

export interface InjectedConnectOneUserRoleInput {
roleCode: string
userId: number
}

export interface InjectedCreateOneMenuInput {
level?: number
path: string
sort?: number
label: string
}

export interface InjectedCreateOneUserInput {
data: art_UserCreateInput
}

export interface InjectedDeleteOneMenuInput {
id?: number
}

export interface InjectedDisconnectOneRoleMenuInput {
menuId: number
roleCode: string
}

export interface InjectedDisconnectOneUserRoleInput {
roleCode: string
userId: number
}

export interface InjectedGetOneMenuInput {
id: number
}

export interface InjectedGetOneUserInput {
providerId: string
providerUserId: string
}

export interface InjectedGetRoleMenusInput {
roleCode: string
}

export interface InjectedGetRoleUsersInput {
roleCode: string
}

export interface InjectedGetUserListInput {
take?: number
orderBy?: art_UserOrderByWithRelationInput[],query?: art_UserWhereInput
skip?: number
}

export interface InjectedGetUserRoleMenuInput {
providerUserId: string
providerId: string
}

export interface InjectedGetUserRolesInput {
userId: number
}

export interface InjectedGetUsersWithoutRoleInput {
roleCode: string
skip?: number
take?: number
}

export interface InjectedUpdateOneMenuInput {
icon?: string
id: number
label?: string
level?: number
path?: string
sort?: number
}



export interface ConnectOneRoleMenuResponse {
data?: ConnectOneRoleMenuResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface ConnectOneUserRoleResponse {
data?: ConnectOneUserRoleResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface CreateOneMenuResponse {
data?: CreateOneMenuResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface CreateOneUserResponse {
data?: CreateOneUserResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface DeleteOneMenuResponse {
data?: DeleteOneMenuResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface DisconnectOneRoleMenuResponse {
data?: DisconnectOneRoleMenuResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface DisconnectOneUserRoleResponse {
data?: DisconnectOneUserRoleResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetMenuListResponse {
data?: GetMenuListResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetOneMenuResponse {
data?: GetOneMenuResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetOneUserResponse {
data?: GetOneUserResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetRoleListResponse {
data?: GetRoleListResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetRoleMenusResponse {
data?: GetRoleMenusResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetRoleUsersResponse {
data?: GetRoleUsersResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetUserListResponse {
data?: GetUserListResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetUserRoleMenuResponse {
data?: GetUserRoleMenuResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetUserRolesResponse {
data?: GetUserRolesResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface GetUsersWithoutRoleResponse {
data?: GetUsersWithoutRoleResponseData
errors?: ReadonlyArray<GraphQLError>;
}

export interface UpdateOneMenuResponse {
data?: UpdateOneMenuResponseData
errors?: ReadonlyArray<GraphQLError>;
}



export interface ConnectOneRoleMenuResponseData {
data?: {
id: number
},
}

export interface ConnectOneUserRoleResponseData {
data?: {
id: number
},
}

export interface CreateOneMenuResponseData {
data?: {
id: number
},
}

export interface CreateOneUserResponseData {
art_createOneUser?: {
id: number
},
}

export interface DeleteOneMenuResponseData {
data?: {
id: number
},
}

export interface DisconnectOneRoleMenuResponseData {
data?: {
id: number
},
}

export interface DisconnectOneUserRoleResponseData {
data?: {
id: number
},
}

export interface GetMenuListResponseData {
data: {
id: number
label: string
parentId?: number
path: string
sort: number
}[],}

export interface GetOneMenuResponseData {
data?: {
parentId?: number
path: string
sort: number
icon?: string
id: number
label: string
level: number
},
}

export interface GetOneUserResponseData {
data?: {
id: number
name: string
},
}

export interface GetRoleListResponseData {
data: {
id: number
code: string
desc?: string
}[],}

export interface GetRoleMenusResponseData {
data?: {
path: string
sort: number
icon?: string
id: number
label: string
level: number
parentId?: number
}[],}

export interface GetRoleUsersResponseData {
data?: {
providerUserId: string
avatarUrl?: string
createdAt: string
id: number
name: string
provider: string
providerId: string
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

export interface GetUserRoleMenuResponseData {
data?: {
avatarUrl?: string
id: number
name: string
roles?: {
code: string
desc?: string
id: number
menus?: {
parentId?: number
path: string
sort: number
icon?: string
id: number
label: string
level: number
}[],}[],},
}

export interface GetUserRolesResponseData {
data?: {
id: number
code: string
desc?: string
}[],}

export interface GetUsersWithoutRoleResponseData {
data: {
avatarUrl?: string
createdAt: string
id: number
name: string
provider: string
providerId: string
providerUserId: string
}[],total: number
}

export interface UpdateOneMenuResponseData {
data?: {
id: number
},
}





export interface art_NestedIntNullableFilter {
notIn?: number[],equals?: number
gt?: number
gte?: number
in?: number[],lt?: number
lte?: number
not?: art_NestedIntNullableFilter
}

export interface art_MenuListRelationFilter {
none?: art_MenuWhereInput
some?: art_MenuWhereInput
every?: art_MenuWhereInput
}

export interface art_DateTimeFilter {
notIn?: string[],equals?: string
gt?: string
gte?: string
in?: string[],lt?: string
lte?: string
not?: art_NestedDateTimeFilter
}

export interface art_MenuCreateWithoutOther_MenuInput {
level?: number
path?: string
sort?: number
MenuMenuToMenu?: art_MenuCreateNestedOneWithoutOther_MenuInput
Role?: art_RoleCreateNestedManyWithoutMenuInput
icon?: string
label?: string
}

export interface art_RoleListRelationFilter {
some?: art_RoleWhereInput
every?: art_RoleWhereInput
none?: art_RoleWhereInput
}

export interface art_RoleCreateOrConnectWithoutMenuInput {
create?: art_RoleCreateWithoutMenuInput
where?: art_RoleWhereUniqueInput
}

export interface art_RoleWhereUniqueInput {
code?: string
id?: number
}

export interface art_MenuCreateNestedManyWithoutRoleInput {
connect?: art_MenuWhereUniqueInput
connectOrCreate?: art_MenuCreateOrConnectWithoutRoleInput
create?: art_MenuCreateWithoutRoleInput
}

export interface art_NestedStringFilter {
gt?: string
in?: string[],lt?: string
lte?: string
not?: art_NestedStringFilter
contains?: string
endsWith?: string
equals?: string
notIn?: string[],gte?: string
startsWith?: string
}

export interface art_NestedDateTimeFilter {
gt?: string
gte?: string
in?: string[],lt?: string
lte?: string
not?: art_NestedDateTimeFilter
notIn?: string[],equals?: string
}

export interface art_NestedStringNullableFilter {
in?: string[],lte?: string
notIn?: string[],gt?: string
endsWith?: string
equals?: string
gte?: string
lt?: string
not?: art_NestedStringNullableFilter
startsWith?: string
contains?: string
}

export interface art_StringNullableFilter {
lt?: string
startsWith?: string
in?: string[],lte?: string
not?: art_NestedStringNullableFilter
contains?: string
endsWith?: string
equals?: string
gt?: string
gte?: string
notIn?: string[],}

export interface art_UserListRelationFilter {
none?: art_UserWhereInput
some?: art_UserWhereInput
every?: art_UserWhereInput
}

export interface art_RoleCreateNestedManyWithoutMenuInput {
connect?: art_RoleWhereUniqueInput
connectOrCreate?: art_RoleCreateOrConnectWithoutMenuInput
create?: art_RoleCreateWithoutMenuInput
}

export interface art_MenuCreateNestedOneWithoutOther_MenuInput {
connect?: art_MenuWhereUniqueInput
connectOrCreate?: art_MenuCreateOrConnectWithoutOther_MenuInput
create?: art_MenuCreateWithoutOther_MenuInput
}

export interface art_RoleCreateWithoutMenuInput {
User?: art_UserCreateNestedManyWithoutRoleInput
code?: string
desc?: string
}

export interface art_MenuRelationFilter {
isNot?: art_MenuWhereInput
is?: art_MenuWhereInput
}

export interface art_RoleCreateNestedManyWithoutUserInput {
connect?: art_RoleWhereUniqueInput
connectOrCreate?: art_RoleCreateOrConnectWithoutUserInput
create?: art_RoleCreateWithoutUserInput
}

export interface art_IntNullableFilter {
notIn?: number[],equals?: number
gt?: number
gte?: number
in?: number[],lt?: number
lte?: number
not?: art_NestedIntNullableFilter
}

export interface art_NestedIntFilter {
lt?: number
lte?: number
not?: art_NestedIntFilter
notIn?: number[],equals?: number
gt?: number
gte?: number
in?: number[],}

export interface art_RoleWhereInput {
OR?: art_RoleWhereInput[],User?: art_UserListRelationFilter
code?: art_StringFilter
desc?: art_StringNullableFilter
id?: art_IntFilter
AND?: art_RoleWhereInput
Menu?: art_MenuListRelationFilter
NOT?: art_RoleWhereInput
}

export interface art_MenuWhereUniqueInput {
id?: number
}

export interface art_UserCreateOrConnectWithoutRoleInput {
where?: art_UserWhereUniqueInput
create?: art_UserCreateWithoutRoleInput
}

export interface art_MenuCreateOrConnectWithoutRoleInput {
where?: art_MenuWhereUniqueInput
create?: art_MenuCreateWithoutRoleInput
}

export interface art_UserOrderByWithRelationInput {
provider?: string
providerId?: string
providerUserId?: string
Role?: art_RoleOrderByRelationAggregateInput
avatarUrl?: string
createdAt?: string
id?: string
name?: string
}

export interface art_RoleOrderByRelationAggregateInput {
_count?: string
}

export interface art_RoleCreateWithoutUserInput {
desc?: string
Menu?: art_MenuCreateNestedManyWithoutRoleInput
code?: string
}

export interface art_MenuCreateManyMenuMenuToMenuInput {
level?: number
path?: string
sort?: number
icon?: string
id?: number
label?: string
}

export interface art_MenuCreateNestedManyWithoutMenuMenuToMenuInput {
connect?: art_MenuWhereUniqueInput
connectOrCreate?: art_MenuCreateOrConnectWithoutMenuMenuToMenuInput
create?: art_MenuCreateWithoutMenuMenuToMenuInput
createMany?: art_MenuCreateManyMenuMenuToMenuInputEnvelope
}

export interface art_MenuCreateManyMenuMenuToMenuInputEnvelope {
skipDuplicates?: boolean
data?: art_MenuCreateManyMenuMenuToMenuInput[],}

export interface art_MenuCreateOrConnectWithoutMenuMenuToMenuInput {
create?: art_MenuCreateWithoutMenuMenuToMenuInput
where?: art_MenuWhereUniqueInput
}

export interface art_UserCreateWithoutRoleInput {
providerId?: string
providerUserId?: string
avatarUrl?: string
createdAt?: string
name?: string
provider?: string
}

export interface art_MenuCreateWithoutMenuMenuToMenuInput {
other_Menu?: art_MenuCreateNestedManyWithoutMenuMenuToMenuInput
path?: string
sort?: number
Role?: art_RoleCreateNestedManyWithoutMenuInput
icon?: string
label?: string
level?: number
}

export interface art_MenuCreateWithoutRoleInput {
sort?: number
MenuMenuToMenu?: art_MenuCreateNestedOneWithoutOther_MenuInput
icon?: string
label?: string
level?: number
other_Menu?: art_MenuCreateNestedManyWithoutMenuMenuToMenuInput
path?: string
}

export interface art_RoleCreateOrConnectWithoutUserInput {
create?: art_RoleCreateWithoutUserInput
where?: art_RoleWhereUniqueInput
}

export interface art_StringFilter {
gt?: string
gte?: string
lt?: string
notIn?: string[],startsWith?: string
contains?: string
endsWith?: string
equals?: string
in?: string[],lte?: string
not?: art_NestedStringFilter
}

export interface art_UserCreateNestedManyWithoutRoleInput {
connect?: art_UserWhereUniqueInput
connectOrCreate?: art_UserCreateOrConnectWithoutRoleInput
create?: art_UserCreateWithoutRoleInput
}

export interface art_UserCreateInput {
Role?: art_RoleCreateNestedManyWithoutUserInput
avatarUrl?: string
createdAt?: string
name: string
provider: string
providerId: string
providerUserId: string
}

export interface art_UserWhereUniqueInput {
id?: number
}

export interface art_IntFilter {
lt?: number
lte?: number
not?: art_NestedIntFilter
notIn?: number[],equals?: number
gt?: number
gte?: number
in?: number[],}

export interface art_MenuCreateOrConnectWithoutOther_MenuInput {
create?: art_MenuCreateWithoutOther_MenuInput
where?: art_MenuWhereUniqueInput
}

export interface art_MenuWhereInput {
AND?: art_MenuWhereInput
OR?: art_MenuWhereInput[],icon?: art_StringNullableFilter
parentId?: art_IntNullableFilter
path?: art_StringFilter
sort?: art_IntFilter
MenuMenuToMenu?: art_MenuRelationFilter
NOT?: art_MenuWhereInput
Role?: art_RoleListRelationFilter
id?: art_IntFilter
label?: art_StringFilter
level?: art_IntFilter
other_Menu?: art_MenuListRelationFilter
}

export interface art_UserWhereInput {
NOT?: art_UserWhereInput
createdAt?: art_DateTimeFilter
name?: art_StringFilter
provider?: art_StringFilter
AND?: art_UserWhereInput
OR?: art_UserWhereInput[],Role?: art_RoleListRelationFilter
avatarUrl?: art_StringNullableFilter
id?: art_IntFilter
providerId?: art_StringFilter
providerUserId?: art_StringFilter
}

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
    message: string;
    path?: ReadonlyArray<string | number>;
}


