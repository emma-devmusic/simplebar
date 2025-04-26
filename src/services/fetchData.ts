
import { access_key_id, base_url } from "../common/definitions/env";
import { DataErrorResponse, FetchMethod } from "../types/api";

export const fetchData = async (
    path: string,
    method: FetchMethod,
    body: object | null,
    authorization?: string | null, // Hacer que authorization sea opcional
    signalController?: any,
    header?: { [key:string]: string; },
) => {

    const headers: Record<string, string> = {
        "Content-Type": "application/json",
        "access": `${access_key_id}`,
        ...(header && header)
    };

    if (authorization) {
        headers["Authorization"] = `Bearer ${authorization}`;
    }

    let response = null;
    console.log(base_url)
    try {
        response = await fetch(`${base_url}${path}`, {
            method,
            headers,
            ...(body && { body: JSON.stringify(body) }),
            signal: signalController
        });

        if (!response.ok) {
            const error:DataErrorResponse = await response.json();
            throw error;
        }

        return await response.json();

    } catch (error) {
        console.error(error, 'nivel 0')
    }
};