import { ResponseApiDing } from "./api";

export interface ProfileImage {
    id: number;
    image_url: string;
    original_name: string;
    file_name: string;
    type_image: string;
    default: boolean;
}

export interface UserDetailsData {
    user_id: number;
    user_name: string;
    user_last_name: string;
    user_email: string;
    user_phone: string;
    cell_phone_secondary: string | null;
    role_id: number;
    role_description: string;
    user_active: boolean;
    user_date_created: string;
    user_address: string;
    floor: string | null;
    email_verified: boolean;
    user_dni: string;
    account_verified: boolean;
    user_gender: string;
    default_image_profile: ProfileImage[];
}

export interface UserSearchResponse extends ResponseApiDing<DataSearchResponse>{
    data:    DataSearchResponse;
}

export interface DataSearchResponse {
    items: ItemUserSearchResponse[];
    meta:  MetaDataSearchResponse;
}

export interface ItemUserSearchResponse {
    user_id:          number;
    user_name:        string;
    user_last_name:   string;
    user_email:       string;
    user_phone:       string;
    role_id:          number;
    role_description: RoleDescription;
    user_active:      boolean;
    branch_id:        number;
    branch_name:      BranchName;
}

export enum BranchName {
    Test = "test",
}

export enum RoleDescription {
    Administrator = "Administrator",
    Client = "Client",
    Employee = "Employee",
}

export interface MetaDataSearchResponse {
    totalItems:   number;
    itemsCount:   number;
    itemsPerPage: number;
    totalPages:   number;
    currentPage:  number;
}






// import { Access } from "./api";


// export interface UserLoginResponse {
//     error:   boolean;
//     code:    number;
//     message: string;
//     data:    DataUserLoginResponse;
// }

// export interface DataUserLoginResponse {
//     two_factor:  boolean;
//     access:      Access;
//     permissions: string;
// }


// export interface AuthRole {
//     id: number;
//     description: string;
// }

// export interface AuthUserProfileImage {
//     data_created: Date;
//     id: number;
//     image_url: string;
//     type_image: string;
//     content_type_image: string;
// }

// export interface UserPermission {
//     id: number;
//     auth_module_id?: number;
//     module_description?: string;
//     module_endpoint?: string;
//     auth_actions_id?: number;
//     action_description?: string;
//     action_method?: string;
// }

// export interface PermissionCompressed {
//     action_description: string;
//     action_method: string;
// }

// export interface ModulesPermissions {
//     module_description: string;
//     module_endpoint: string;
//     permission: PermissionCompressed[]
// }

// export interface User {
//     role_id:    number;
//     basic_data: BasicData;
//     permission: Permission[];
// }


// export interface Permission {
//     id:                 number;
//     auth_module_id:     number;
//     module_description: string;
//     module_endpoint:    string;
//     auth_actions_id:    number;
//     action_description: string;
//     action_method:      string;
// }

// export interface AuthUser {
//     id: number;
//     email: string;
//     name: string;
//     last_name: string;
//     enable: boolean;
//     two_factor_enabled: boolean;
//     auth_role: AuthRole;
//     image_profiles: AuthUserProfileImage[];
// }

// export interface UserPermissions {
//     user_data: AuthUser;
//     user_permissions: UserPermission[];
// }




// export interface BasicData {
//     account_verified: boolean;
//     email: string;
//     email_verified: boolean;
//     last_name: string;
//     name: string;
// }

// export interface UserPermissionsDecrypted {
//     role_id: number;
//     basic_data: BasicData;
//     permission: UserPermission[]
// }



// export interface GetUserProfile {
//     error:   boolean;
//     code:    number;
//     message: string;
//     data:    DataUserProfile;
// }

// export interface DataUserProfile {
//     auth_user_audits_status_id:          number;
//     auth_user_audits_status_description: string;
//     auth_user_audits_status_date:        Date;
//     data_created:                        Date;
//     data_modified:                       Date;
//     id:                                  number;
//     email:                               string;
//     name:                                string;
//     last_name:                           string;
//     dni:                                 string;
//     cell_phone:                          string;
//     cell_phone_secondary:                null;
//     address:                             string;
//     floor:                               null;
//     description:                         null;
//     age:                                 string;
//     enable:                              boolean;
//     two_factor_enabled:                  boolean;
//     account_verified:                    boolean;
//     email_verified:                      boolean;
//     image_profiles:                      ImageProfile[];
// }

// export interface ImageProfile {
//     id:            number;
//     data_created:  Date;
//     image_url:     string;
//     original_name: string;
//     default:       boolean;
// }


