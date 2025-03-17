
import Swal from "sweetalert2";
import { access_key_id, base_url } from "../common/definitions/env";
import { errorMsg } from "../mocks/errors";
import { FetchMethod } from "../types/api";

export const fetchData = async (
    path: string,
    method: FetchMethod,
    body: object | null,
    header?: { [key:string]: string; },
    signal?: AbortSignal,
    authorization?: string,
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
        response = await fetch(`${/*base_url*/''}${path}`, {
            method,
            headers,
            signal,
            ...(body && { body: JSON.stringify(body) }),
        });

        if (!response.ok) {
            Swal.fire({
                title: '<strong>¡Ups! Algo salió mal</strong>',
                html: `<p style="font-size: 16px; color: #555;">${errorMsg[response.status]}</p>`,
                icon: 'error',
                iconColor: '#d33',
                confirmButtonText: 'Entendido',
                confirmButtonColor: '#3085d6',
                customClass: {
                    popup: 'swal2-popup-custom',
                    title: 'swal2-title-custom',
                    confirmButton: 'swal2-confirm-custom',
                },
            });
            throw new Error(`${errorMsg[response.status]} | fetchData`);
        }

        return await response.json();

    } catch (error) {
        console.error(error, 'nivel 0')
    }
};