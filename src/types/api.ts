
export interface ApiDingResponse {
    error: boolean;
    code: number;
    message: string;
    data?: unknown;
}

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
