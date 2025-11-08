import {
    FiledsForm,
    FormNewPassword,
    FormsInputs,
    ObjectErrorsMessages,
    ObjectPasswordChecks,
} from '../../types/form';

export const OBJECT_LABELS_FIELDS: Record<FiledsForm, string> = {
    name: 'Nombre',
    last_name: 'Apellido',
    email: 'Correo Electrónico',
    password: 'Contraseña',
    password2: 'Confirmar Contraseña',
    dni: 'DNI',
    cell_phone: 'Teléfono',
    address: 'Dirección',
    age: 'Edad',
    gender_type: 'Género',
    two_factor_enabled: 'Autenticación en Dos Pasos',
    cuil: 'CUIL',
    cuit: 'CUIT',
    name_bussines: 'Nombre de la Empresa',
    cell_phone_bussines: 'Teléfono de la Empresa',
    address_bussines: 'Dirección de la Empresa',
    cell_phone_secondary: 'Teléfono Secundario',
    role_id: 'Tipo de Usuario',
    phone: 'Teléfono',
    fullname: 'Nombre Completo',
    destination_address: 'Dirección de Envío',
};

export const OBJECT_PLACEHOLDERS_FIELDS: Record<FiledsForm, string> = {
    name: 'Ingresa tu nombre',
    last_name: 'Ingresa tu apellido',
    email: 'Ingresa tu correo electrónico',
    password: 'Ingresa tu contraseña',
    password2: 'Confirma tu contraseña',
    dni: 'Ingresa tu DNI',
    cell_phone: 'Ingresa tu número de teléfono',
    address: 'Ingresa tu dirección',
    age: 'Ingresa tu edad',
    gender_type: 'Selecciona tu género',
    two_factor_enabled: 'Habilitar autenticación en dos pasos',
    cuil: 'Ingresa tu CUIL',
    cuit: 'Ingresa tu CUIT',
    name_bussines: 'Ingresa el nombre de tu empresa',
    cell_phone_bussines: 'Ingresa el teléfono de la empresa',
    address_bussines: 'Ingresa la dirección de la empresa',
    cell_phone_secondary: 'Ingresa un teléfono secundario',
    role_id: 'Selecciona un tipo de usuario',
    fullname: 'Ingresa tu nombre completo',
    phone: 'Ingresa tu número de teléfono',
    destination_address: 'Ingresa la dirección de envío',
};

const initialErrorsObject = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    password2: '',
    dni: '',
    phone: '',
    address: '',
    age: '',
    gender_type: '',
    two_factor_enabled: false,
    cuil: '',
    cuit: '',
    name_bussines: '',
    phone_bussines: '',
    address_bussines: '',
    fullname: '',
    destination_address: '',
};
const fields = [''];

export const formValidate = (
    formData: FormsInputs = initialErrorsObject,
    requiredFields: string[] = fields
): ObjectErrorsMessages => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex =
        /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/;
    const lastNameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/;
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const dniRegex = /^\d{8,10}$/;
    const addressRegex = /^[a-zA-Z0-9\s,.'-]{5,}$/;
    const ageRegex = /^\d{1,2}$/;
    const cuilCuitRegex = /^\d{11}$/; // CUIL y CUIT: 11 dígitos exactos

    const errors: ObjectErrorsMessages = {
        name: '',
        last_name: '',
        email: '',
        password: '',
        password2: '',
        dni: '',
        cell_phone: '',
        address: '',
        age: '',
        gender_type: '',
        two_factor_enabled: '',
        cuil: '',
        cuit: '',
        name_bussines: '',
        cell_phone_bussines: '',
        address_bussines: '',
        phone: '',
        fullname: '',
        destination_address: '',
    };

    // Validar cada campo
    if (requiredFields.includes('name') && !formData.name) {
        errors.name = 'El nombre es obligatorio';
    } else if (formData.name && !nameRegex.test(formData.name)) {
        errors.name = 'Nombre Inválido';
    }

    if (requiredFields.includes('last_name') && !formData.last_name) {
        errors.last_name = 'El apellido es obligatorio';
    } else if (formData.last_name && !lastNameRegex.test(formData.last_name)) {
        errors.last_name = 'Apellido Inválido';
    }

    if (requiredFields.includes('email') && !formData.email) {
        errors.email = 'El email es obligatorio';
    } else if (formData.email && !emailRegex.test(formData.email)) {
        errors.email = 'Email Inválido';
    }

    if (requiredFields.includes('password') && !formData.password) {
        errors.password = 'La contraseña es obligatoria';
    } else if (formData.password && !passwordRegex.test(formData.password)) {
        errors.password =
            'La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial.';
    }

    if (requiredFields.includes('password2') && !formData.password2) {
        errors.password2 = 'Debes confirmar tu contraseña';
    } else if (formData.password2 && formData.password !== formData.password2) {
        errors.password2 = 'Las contraseñas no coinciden';
    }

    if (requiredFields.includes('dni') && !formData.dni) {
        errors.dni = 'El DNI es obligatorio';
    } else if (formData.dni && !dniRegex.test(formData.dni)) {
        errors.dni = 'DNI Inválido';
    }

    if (requiredFields.includes('cell_phone') && !formData.cell_phone) {
        errors.cell_phone = 'El teléfono es obligatorio';
    } else if (formData.cell_phone && !phoneRegex.test(formData.cell_phone)) {
        errors.cell_phone = 'Número Inválido';
    }

    if (requiredFields.includes('address') && !formData.address) {
        errors.address = 'La dirección es obligatoria';
    } else if (formData.address && !addressRegex.test(formData.address)) {
        errors.address = 'Dirección Inválida';
    }

    if (requiredFields.includes('age') && !formData.age) {
        errors.age = 'La edad es obligatoria';
    } else if (formData.age && !ageRegex.test(formData.age)) {
        errors.age = 'Edad Inválida';
    }

    if (requiredFields.includes('gender_type') && !formData.gender_type) {
        errors.gender_type = 'Debes seleccionar alguna opción';
    }

    if (
        requiredFields.includes('two_factor_enabled') &&
        !formData.two_factor_enabled
    ) {
        errors.two_factor_enabled =
            'Debes habilitar la autenticación en dos pasos';
    }

    if (requiredFields.includes('cuil') && !formData.cuil) {
        errors.cuil = 'El CUIL es obligatorio';
    } else if (formData.cuil && !cuilCuitRegex.test(formData.cuil)) {
        errors.cuil = 'El CUIL debe tener 11 dígitos';
    }

    if (requiredFields.includes('cuit') && !formData.cuit) {
        errors.cuit = 'El CUIT es obligatorio';
    } else if (formData.cuit && !cuilCuitRegex.test(formData.cuit)) {
        errors.cuit = 'El CUIT debe tener 11 dígitos';
    }

    if (requiredFields.includes('name_bussines') && !formData.name_bussines) {
        errors.name_bussines = 'El nombre de la empresa es obligatorio';
    } else if (
        formData.name_bussines &&
        !nameRegex.test(formData.name_bussines)
    ) {
        errors.name_bussines = 'Nombre de empresa inválido';
    }

    if (
        requiredFields.includes('cell_phone_bussines') &&
        !formData.cell_phone_bussines
    ) {
        errors.cell_phone_bussines = 'El teléfono de la empresa es obligatorio';
    } else if (
        formData.cell_phone_bussines &&
        !phoneRegex.test(formData.cell_phone_bussines)
    ) {
        errors.cell_phone_bussines = 'Número de empresa inválido';
    }

    if (
        requiredFields.includes('address_bussines') &&
        !formData.address_bussines
    ) {
        errors.address_bussines = 'La dirección de la empresa es obligatoria';
    } else if (
        formData.address_bussines &&
        !addressRegex.test(formData.address_bussines)
    ) {
        errors.address_bussines = 'Dirección de empresa inválida';
    }

    if (requiredFields.includes('fullname') && !formData.fullname) {
        errors.fullname = 'El nombre es obligatorio';
    } else if (formData.fullname && !nameRegex.test(formData.fullname)) {
        errors.fullname = 'Nombre Inválido';
    }

    if (requiredFields.includes('phone') && !formData.phone) {
        errors.phone = 'El teléfono es obligatorio';
    } else if (formData.phone && !phoneRegex.test(formData.phone)) {
        errors.phone = 'Número Inválido';
    }

    if (
        requiredFields.includes('destination_address') &&
        !formData.destination_address
    ) {
        errors.destination_address = 'La dirección es obligatoria';
    } else if (
        formData.destination_address &&
        !addressRegex.test(formData.destination_address)
    ) {
        errors.destination_address = 'Dirección Inválida';
    }

    // Contar errores
    let numbErrors = 0;
    Object.entries(errors).forEach((e) => {
        if (e[1]) numbErrors++;
    });

    return {
        ...errors,
        hasErrors: !!numbErrors,
    };
};

// VALIDA LOS PASSWORD PARA EL CAMBIO DE CONTRASEÑA
export const validateNewPassword = (passwordForm: FormNewPassword) => {
    let flag = false;
    const { old_password, new_password, new_password_2 } = passwordForm;

    const errors: ObjectPasswordChecks = {
        pass_length: new_password.length >= 8,
        pass_uppercase: /[A-Z]/.test(new_password),
        pass_lowercase: /[a-z]/.test(new_password),
        pass_specialCaracter: /[!@#$%^&*(),.?":{}|<>]/.test(new_password),
        pass_number: /[0-9]/.test(new_password),
        pass_2: new_password === new_password_2 && new_password.length > 0,
        pass_new_old: new_password !== old_password,
    };

    if (
        errors.pass_length &&
        errors.pass_lowercase &&
        errors.pass_uppercase &&
        errors.pass_number &&
        errors.pass_specialCaracter &&
        new_password === new_password_2 &&
        new_password !== old_password &&
        old_password.length > 5
    ) {
        flag = true;
    }
    return {
        errors,
        flag,
    };
};
