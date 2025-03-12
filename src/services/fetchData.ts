
import Swal from "sweetalert2";
import { access_key_id, base_url } from "../common/definitions/env";
import { errorMsg } from "../mocks/errors";

export const fetchData = async (
    path: string,
    method: 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH',
    body: object | null,
    authorization?: string, // Hacer que authorization sea opcional
    header?: { [key:string]: string; }
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

    try {
        response = await fetch(`${base_url}${path}`, {
            method,
            headers,
            ...(body && { body: JSON.stringify(body) }),
        });

        if (!response.ok) {
            Swal.fire('Ups!',`${errorMsg[response.status]}`, 'error' )
            throw new Error(`${errorMsg[response.status]} | fetchData`);
        }

        return await response.json();

    } catch (error) {
        console.error(error, 'nivel 0')
    }
};