export interface BasicResponse {
    success: boolean
    message: string
}

export interface LoginResponse extends BasicResponse {
    token?: string
}

export interface RegistrationResponse extends LoginResponse {
}

export interface OrganizationData {
    id: string
    name: string
}

export interface UserModel {
    id: string
    name: string
    email: string
}

export interface OrganizationModel {
    id: string
    name: string
    owner: UserModel
    members: UserModel[]
}

export interface UserOrganizationResponse extends BasicResponse {
    orgs: OrganizationModel[]
}


