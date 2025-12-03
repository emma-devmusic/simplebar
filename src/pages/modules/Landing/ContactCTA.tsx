import { useForm } from '../../../hooks/useForm';
import { Input } from '../../../components/form/Input';
import { Button } from '../../../components';
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../../redux/store';
import { uiModal } from '../../../redux/slices/uiSlice';
import { formValidate } from '../../../common/helpers';
import { FormsInputs, ObjectErrorsMessages } from '../../../types/form';

// URL del Google Apps Script Web App (la configuraremos después)
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

const initialState = {
    nombre: '',
    email: '',
    tel: '',
    ciudad: '',
};

export const ContactCTA = () => {
    const [formValues, handleInputChange, reset] = useForm(initialState);
    const [isLoading, setIsLoading] = useState(false);
    const [flag, setFlag] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState({} as ObjectErrorsMessages);
    const dispatch = useAppDispatch();

    useEffect(() => {
        // Mapear los campos del formulario a los campos esperados por formValidate
        const mappedValues = {
            fullname: formValues.nombre,
            email: formValues.email,
            phone: formValues.tel,
            address: formValues.ciudad,
        } as FormsInputs;

        const msgs = formValidate(mappedValues, [
            'fullname',
            'email',
            'phone',
            'address',
        ]);

        // Re-mapear los errores a los nombres originales, preservando hasErrors
        setErrorMsg({
            fullname: msgs.fullname,
            email: msgs.email,
            phone: msgs.phone,
            address: msgs.address,
            hasErrors: msgs.hasErrors,
        } as ObjectErrorsMessages);
    }, [formValues]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFlag(true);

        // Validar que no haya errores
        if (errorMsg.hasErrors) {
            dispatch(
                uiModal({
                    modalFor: 'message',
                    typeMsg: 'error',
                    msg: 'Por favor completá todos los campos correctamente',
                })
            );
            return;
        }

        setIsLoading(true);

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Google Apps Script requiere no-cors
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre: formValues.nombre,
                    email: formValues.email,
                    telefono: formValues.tel,
                    ciudad: formValues.ciudad,
                    fecha: new Date().toISOString(),
                }),
            });

            // Con no-cors no podemos leer la respuesta, asumimos éxito si no hay error
            dispatch(
                uiModal({
                    modalFor: 'message',
                    typeMsg: 'success',
                    msg: '¡Recibimos tu solicitud correctamente! Nuestro equipo se pondrá en contacto con vos en las próximas horas para ayudarte a comenzar.',
                    msgTitle: '¡Gracias por confiar en SimpleBar!',
                })
            );

            reset(initialState);
            setFlag(false);
        } catch (error) {
            console.error('Error al enviar formulario:', error);
            dispatch(
                uiModal({
                    modalFor: 'message',
                    typeMsg: 'error',
                    msg: 'Hubo un error al enviar el formulario. Intentá nuevamente.',
                    msgTitle: 'Error',
                })
            );
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <section
            id="cta"
            className="border-t border-neutral-200 bg-white py-20 text-neutral-900 dark:border-neutral-900 dark:bg-neutral-950 dark:text-neutral-100"
        >
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-semibold">
                        Probá <span className="text-primary">Simplebar</span>{' '}
                        hoy
                    </h2>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                        14 días gratis · Sin tarjeta · Soporte de onboarding.
                    </p>
                    <ul className="mt-6 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                        <li className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>{' '}
                            Setup en minutos
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>{' '}
                            Importación de productos
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>{' '}
                            Capacitación inicial
                        </li>
                    </ul>
                </div>
                <form
                    id="contacto"
                    className="space-y-4 rounded-2xl border border-neutral-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60 dark:shadow-none"
                    onSubmit={handleSubmit}
                >
                    <Input
                        id="nombre"
                        name="nombre"
                        label="Nombre y Apellido"
                        type="text"
                        placeholder="Tu nombre"
                        className="w-full"
                        value={formValues.nombre}
                        onChange={handleInputChange}
                        errorMsg={flag ? errorMsg.fullname : ''}
                        required
                        disabled={isLoading}
                    />
                    <div className="grid gap-4 sm:grid-cols-2">
                        <Input
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            placeholder="tu@correo.com"
                            className="w-full"
                            value={formValues.email}
                            onChange={handleInputChange}
                            errorMsg={flag ? errorMsg.email : ''}
                            required
                            disabled={isLoading}
                        />
                        <Input
                            id="tel"
                            name="tel"
                            label="Teléfono"
                            type="tel"
                            placeholder="+54 9 ..."
                            className="w-full"
                            value={formValues.tel}
                            onChange={handleInputChange}
                            errorMsg={flag ? errorMsg.phone : ''}
                            required
                            disabled={isLoading}
                        />
                    </div>
                    <Input
                        id="ciudad"
                        name="ciudad"
                        label="Ciudad"
                        type="text"
                        placeholder="Resistencia, Chaco"
                        className="w-full"
                        value={formValues.ciudad}
                        onChange={handleInputChange}
                        errorMsg={flag ? errorMsg.address : ''}
                        required
                        disabled={isLoading}
                    />
                    <Button
                        label={isLoading ? 'Enviando...' : 'Crear mi cuenta'}
                        type="submit"
                        action={() => {}}
                        isLoading={isLoading}
                        disabled={isLoading}
                    />
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        Al continuar aceptás nuestros Términos y Política de
                        Privacidad.
                    </p>
                </form>
            </div>
        </section>
    );
};
