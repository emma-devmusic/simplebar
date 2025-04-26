export interface ResponseApiDing<T> {
    error: boolean;
    code: string;
    message: string;
    data: T;
}

export type FetchMethod = 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH';

export interface Access {
    accessToken: string;
    refreshToken: string;
    conn: string;
}

export interface DataErrorResponse {
    timestamp: Date;
    path: string;
    error: boolean;
    status: number;
    code: string;
    message: string;
    type_error: string;
}

export interface ResponseBranchData {
    data_created: Date;
    data_modified: Date;
    id: number;
    name: string;
    description: string;
    type: string;
    code: string;
    address: string;
    phone: string;
    email: string;
    cuit: string;
    url: null;
}

export interface MetaDataSearchResponse {
    currentPage: number;
    nextPage: null;
    totalRecords: number;
    recordsPerPage: number;
    totalPages: number;
}