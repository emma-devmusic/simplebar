import { Permission } from "../../types/user";

export const objPermissions = (data: Permission[]) => {

    const objModules: any = {}
    data?.forEach(e => {
        if (objModules[e.auth_module_id]) {
            objModules[e.auth_module_id] = {
                module_description: e.module_description,
                module_endpoint: e.module_endpoint,
                permission: [
                    ...objModules[e.auth_module_id]['permission'],
                    {
                        action_method: e.action_method,
                        action_description: e.action_description
                    }
                ]
            };
        } else {
            objModules[e.auth_module_id] = {
                module_description: e.module_description,
                module_endpoint: e.module_endpoint,
                permission: [{
                    action_method: e.action_method,
                    action_description: e.action_description
                }]
            };
        }
    })
    return objModules
}

export const objPermissionsId = (data: Permission[]) => {
    const objModules: any = {}
    data?.forEach(e => {
        objModules[e.module_endpoint] = e.auth_module_id
    })
    return objModules
}





