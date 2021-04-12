export interface BasicResponse {
    success: boolean
    message: string
}

export interface AuthenticationResponse extends BasicResponse {
    token?: string
}

export interface UserOrganizationResponse extends BasicResponse {
    orgs: OrganizationModel[]
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

export interface ItemUpdatePayload {
    name?: string
    amount?: number
    category?: string
}

