import { useForm } from '../../../hooks/useForm';
import { Input } from '../../../components/form/Input';
import { Button } from '../../../components';
export const ContactCTA = () => {
    const [formValues, handleInputChange] = useForm({
        nombre: '',
        email: '',
        tel: '',
        ciudad: '',
    });
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            // Aquí puedes enviar los datos, mostrar un mensaje, etc.
            console.log("Datos enviados:", formValues);
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
                        label="Nombre"
                        type="text"
                        placeholder="Tu nombre"
                        className="w-full"
                        // inputClass="rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 outline-none focus:border-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
                        // labelClass="mb-1 block text-sm text-neutral-700 dark:text-neutral-300"
                        value={formValues.nombre}
                        onChange={handleInputChange}
                    />
                    <div className="grid gap-4 sm:grid-cols-2">
                        <Input
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            placeholder="tu@correo.com"
                            className="w-full"
                            // inputClass="rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 outline-none focus:border-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
                            // labelClass="mb-1 block text-sm text-neutral-700 dark:text-neutral-300"
                            value={formValues.email}
                            onChange={handleInputChange}
                        />
                        <Input
                            id="tel"
                            name="tel"
                            label="Teléfono"
                            type="tel"
                            placeholder="+54 9 ..."
                            className="w-full"
                            // inputClass="rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 outline-none focus:border-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
                            // labelClass="mb-1 block text-sm text-neutral-700 dark:text-neutral-300"
                            value={formValues.tel}
                            onChange={handleInputChange}
                        />
                    </div>
                    <Input
                        id="ciudad"
                        name="ciudad"
                        label="Ciudad"
                        type="text"
                        placeholder="Resistencia, Chaco"
                        className="w-full"
                        // inputClass="rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 outline-none focus:border-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
                        // labelClass="mb-1 block text-sm text-neutral-700 dark:text-neutral-300"
                        value={formValues.ciudad}
                        onChange={handleInputChange}
                    />
                    {/* <button className="mt-2 w-full rounded-md bg-primary px-4 py-3 font-medium text-neutral-900 hover:brightness-110 dark:text-neutral-900">
                        Crear mi cuenta
                    </button> */}
                    <Button
                        label="Crear mi cuenta"
                        type="submit"
                        action={() => {}}
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
