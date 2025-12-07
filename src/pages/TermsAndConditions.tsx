import { Logo } from '../components/Logo';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from './modules/Landing/Footer';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export const TermsAndConditions = () => {
    return (
        <>
            <Helmet>
                <title>Términos y Condiciones - Simple Bar</title>
                <meta
                    name="description"
                    content="Términos y condiciones de uso de Simple Bar, plataforma de gestión de negocios para restaurantes y comercios. Conoce tus derechos y responsabilidades."
                />
                <meta name="robots" content="index, follow" />
                <link
                    rel="canonical"
                    href="https://simplebar.net/terms-and-conditions"
                />
                <meta
                    property="og:title"
                    content="Términos y Condiciones - Simple Bar"
                />
                <meta
                    property="og:description"
                    content="Términos y condiciones de uso de Simple Bar, plataforma de gestión de negocios para restaurantes y comercios."
                />
                <meta property="og:type" content="website" />
            </Helmet>
            <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
                {/* Header */}
                <header
                    className="sticky top-0 z-40 w-full border-b border-neutral-200/70 bg-white/80 backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-950/80"
                    role="banner"
                >
                    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                        <Link
                            to="/"
                            className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-neutral-100"
                        >
                            <Logo />
                        </Link>
                        <Link
                            to="/"
                            className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                            aria-label="Volver a la página de inicio"
                        >
                            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                            Volver al inicio
                        </Link>
                    </div>
                </header>

                {/* Content */}
                <motion.main
                    className="relative z-0 mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8"
                    role="main"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <div
                        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(14,111,255,0.1),transparent_60%)] dark:bg-[radial-gradient(60%_60%_at_50%_0%,rgba(14,111,255,0.15),transparent_60%)]"
                        aria-hidden="true"
                    ></div>
                    <motion.article
                        className="relative z-20 rounded-lg border border-neutral-200 bg-white p-8 shadow-sm sm:p-12 dark:border-neutral-800 dark:bg-neutral-900"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.1,
                            ease: 'easeOut',
                        }}
                    >
                        <h1 className="mb-2 text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-neutral-100">
                            Términos y Condiciones
                        </h1>
                        <p className="mb-8 text-sm text-neutral-500 dark:text-neutral-400">
                            Última actualización:{' '}
                            {new Date().toLocaleDateString('es-ES', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </p>

                        <nav aria-label="Tabla de contenidos" className="mb-6">
                            <h2 className="sr-only">
                                Contenidos de esta página
                            </h2>
                        </nav>

                        <div className="prose prose-neutral dark:prose-invert max-w-none">
                            <section className="mb-8">
                                <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                    1. Introducción
                                </h2>
                                <p className="text-neutral-700 dark:text-neutral-300">
                                    Bienvenido a Simple Bar. Estos términos y
                                    condiciones ("Términos") rigen el uso de
                                    nuestra plataforma de gestión de negocios
                                    para restaurantes y comercios. Al acceder o
                                    utilizar nuestros servicios, usted acepta
                                    estar sujeto a estos Términos.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                    2. Descripción del Servicio
                                </h2>
                                <p className="mb-3 text-neutral-700 dark:text-neutral-300">
                                    Simple Bar es una plataforma tecnológica que
                                    ofrece:
                                </p>
                                <ul className="list-inside list-disc space-y-2 text-neutral-700 dark:text-neutral-300">
                                    <li>
                                        Gestión integral de productos y
                                        categorías
                                    </li>
                                    <li>
                                        Administración de sucursales múltiples
                                    </li>
                                    <li>
                                        Sistema de órdenes de compra y ventas
                                    </li>
                                    <li>
                                        Gestión de usuarios y permisos por roles
                                    </li>
                                    <li>
                                        Cartas digitales personalizables por
                                        negocio
                                    </li>
                                    <li>Reportes y análisis de operaciones</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                    3. Registro de Cuenta
                                </h2>
                                <p className="text-neutral-700 dark:text-neutral-300">
                                    Para utilizar nuestros servicios, debe crear
                                    una cuenta proporcionando información
                                    precisa y completa. Es responsable de
                                    mantener la confidencialidad de sus
                                    credenciales de acceso y de todas las
                                    actividades que ocurran bajo su cuenta.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                    4. Responsabilidades del Usuario
                                </h2>
                                <p className="mb-3 text-neutral-700 dark:text-neutral-300">
                                    Como usuario de Simple Bar, usted se
                                    compromete a:
                                </p>
                                <ul className="list-inside list-disc space-y-2 text-neutral-700 dark:text-neutral-300">
                                    <li>
                                        Proporcionar información veraz y
                                        actualizada
                                    </li>
                                    <li>
                                        Mantener la seguridad de sus
                                        credenciales de acceso
                                    </li>
                                    <li>
                                        Usar la plataforma de manera responsable
                                        y legal
                                    </li>
                                    <li>
                                        No compartir su cuenta con terceros no
                                        autorizados
                                    </li>
                                    <li>
                                        Cumplir con todas las leyes y
                                        regulaciones aplicables
                                    </li>
                                    <li>
                                        No utilizar el servicio para actividades
                                        fraudulentas o ilícitas
                                    </li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                    5. Datos y Privacidad
                                </h2>
                                <p className="text-neutral-700 dark:text-neutral-300">
                                    El manejo de sus datos personales se rige
                                    por nuestra{' '}
                                    <Link
                                        to="/privacy-policy"
                                        className="font-medium text-primary hover:underline"
                                    >
                                        Política de Privacidad
                                    </Link>
                                    . Nos comprometemos a proteger su
                                    información y utilizarla únicamente para
                                    brindarle el mejor servicio posible.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                    6. Disponibilidad del Servicio
                                </h2>
                                <p className="text-neutral-700 dark:text-neutral-300">
                                    Nos esforzamos por mantener nuestros
                                    servicios disponibles las 24 horas del día,
                                    los 7 días de la semana. Sin embargo,
                                    podemos realizar mantenimientos programados
                                    o enfrentar interrupciones imprevistas. No
                                    garantizamos una disponibilidad del 100%.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                    7. Limitación de Responsabilidad
                                </h2>
                                <p className="text-neutral-700 dark:text-neutral-300">
                                    Simple Bar no será responsable por daños
                                    indirectos, incidentales, especiales o
                                    consecuentes que resulten del uso o la
                                    imposibilidad de usar nuestros servicios,
                                    excepto donde la ley lo prohíba.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                    8. Propiedad Intelectual
                                </h2>
                                <p className="text-neutral-700 dark:text-neutral-300">
                                    Todos los derechos de propiedad intelectual
                                    relacionados con Simple Bar, incluidos el
                                    diseño, código, contenido y marcas
                                    comerciales, son propiedad exclusiva de
                                    Simple Bar y sus licenciantes. Está
                                    prohibida cualquier reproducción,
                                    distribución o uso no autorizado.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                    9. Modificaciones
                                </h2>
                                <p className="text-neutral-700 dark:text-neutral-300">
                                    Nos reservamos el derecho de modificar estos
                                    Términos en cualquier momento. Las
                                    modificaciones entrarán en vigor al ser
                                    publicadas en nuestra plataforma. Le
                                    notificaremos sobre cambios importantes a
                                    través de su correo electrónico registrado.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                    10. Terminación
                                </h2>
                                <p className="text-neutral-700 dark:text-neutral-300">
                                    Podemos suspender o cancelar su acceso a los
                                    servicios en cualquier momento si viola
                                    estos Términos o por cualquier otra razón
                                    que consideremos necesaria. Usted también
                                    puede cancelar su cuenta en cualquier
                                    momento desde la configuración de su perfil.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                    11. Contacto
                                </h2>
                                <p className="text-neutral-700 dark:text-neutral-300">
                                    Si tiene preguntas sobre estos Términos y
                                    Condiciones, puede contactarnos a través de
                                    los canales de soporte disponibles en
                                    nuestra plataforma o mediante el formulario
                                    de contacto en la página principal.
                                </p>
                            </section>
                        </div>
                    </motion.article>
                </motion.main>
                <Footer />
            </div>
        </>
    );
};
