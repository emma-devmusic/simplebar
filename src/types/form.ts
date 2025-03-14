import { ButtonProps } from "../components/buttons/Button";

export interface FormsInputs {
    name?: string,
    last_name?: string,
    email?: string,
    password?: string,
    password2?: string,
    dni?: string,
    cell_phone?: string,
    address?: string,
    age?: string,
    gender_type?: string,
    two_factor_enabled?: boolean,
    role_id?: boolean,
    cuil?: string;
    cuit?: string;
    name_bussines?: string;
    cell_phone_bussines?: string;
    address_bussines?: string;
}

export interface ObjectErrorsMessages {
    name?: string,
    last_name?: string,
    email?: string,
    password?: string,
    password2?: string,
    dni?: string,
    cell_phone?: string,
    cell_phone_secondary?: string,
    address?: string,
    age?: string,
    gender_type?: string,
    two_factor_enabled?: string,
    role_id?: string,
    cuil?: string;
    cuit?: string;
    name_bussines?: string;
    cell_phone_bussines?: string;
    address_bussines?: string;
    hasErrors?: boolean;
}

export type FiledsForm =
    | 'name'
    | 'last_name'
    | 'email'
    | 'password'
    | 'password2'
    | 'dni'
    | 'cell_phone'
    | 'cell_phone_secondary'
    | 'address'
    | 'age'
    | 'gender_type'
    | 'two_factor_enabled'
    | 'role_id'
    | 'cuil'
    | 'cuit'
    | 'name_bussines'
    | 'cell_phone_bussines'
    | 'address_bussines'

export interface FormNewPassword {
    old_password: string;
    new_password: string;
    new_password_2: string;
}

export interface ObjectPasswordChecks {
    pass_length: boolean;
    pass_uppercase: boolean;
    pass_lowercase: boolean;
    pass_specialCaracter: boolean;
    pass_number: boolean;
    pass_2: boolean;
    pass_new_old: boolean;
}

export type ActionButton = ButtonProps