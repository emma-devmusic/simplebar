import { useState, ChangeEvent } from "react";

// Definir un tipo genérico <T> para que sea reutilizable con cualquier formulario
export const useForm = <T extends Record<string, any>>(initialState: T) => {
    const [values, setValues] = useState<T>(initialState);

    const reset = (st: T) => {
        setValues(st);
    };

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, type } = e.target;
        const value = type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;

        setValues({
            ...values,
            [name]: value,
        });
    };

    return [values, handleInputChange, reset] as const;
};