import { DingPayload } from './product';

export interface GetTenantPayload extends DingPayload {
    branch: string;
    tenant: string;
}

export interface DataTenantSearchResponse {
    tenant_name: string;
    branch_name: string;
}
