import { Logo } from '../components/Logo';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from './modules/Landing/Footer';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export const PrivacyPolicy = () => {
    return (
        <>
            <Helmet>
                <title>Política de Privacidad - Simple Bar</title>
                <meta
                    name="description"
                    content="Política de privacidad de Simple Bar. Conoce cómo recopilamos, usamos y protegemos tu información personal en nuestra plataforma de gestión de negocios."
                />
                <meta name="robots" content="index, follow" />
                <link
                    rel="canonical"
                    href="https://simplebar.net/privacy-policy"
                />
                <meta
                    property="og:title"
                    content="Política de Privacidad - Simple Bar"
                />
                <meta
                    property="og:description"
                    content="Política de privacidad de Simple Bar. Conoce cómo protegemos tu información personal."
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
                            Política de Privacidad
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
                                    En Simple Bar, valoramos y respetamos su
                                    privacidad. Esta Política de Privacidad
                                    explica cómo recopilamos, usamos, divulgamos
                                    y protegemos su información personal cuando
                                    utiliza nuestra plataforma de gestión de
                                    negocios para restaurantes y comercios.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                    2. Información que Recopilamos
                                </h2>
                                <p className="mb-3 text-neutral-700 dark:text-neutral-300">
                                    Recopilamos diferentes tipos de información
                                    para brindarle nuestros servicios de manera
                                    efectiva:
                                </p>

                                <h3 className="mt-6 mb-3 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                                    Información Personal
                                </h3>
                                <ul className="list-inside list-disc space-y-2 text-neutral-700 dark:text-neutral-300">
                                    <li>Nombre completo y apellidos</li>
                                    <li>Dirección de correo electrónico</li>
                                    <li>Información de contacto</li>
                                    <li>
                                        Datos de autenticación (contraseñas
                                        encriptadas)
                                    </li>
                                    <li>
                                        Información del negocio, restaurante o
                                        comercio
                                    </li>
                                </ul>

                                <h3 className="mt-6 mb-3 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                                    Información de Uso
                                </h3>
                                <ul className="list-inside list-disc space-y-2 text-neutral-700 dark:text-neutral-300">
                                    <li>
                                        Datos de navegación y actividad en la
                                        plataforma
                                    </li>
                                    <li>
                                        Registros de transacciones y gestión de
                                        productos
                                    </li>
                                    <li>Preferencias de configuración</li>
                                    <li>
                                        Información de dispositivos y conexión
                                    </li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                    3. Cómo Utilizamos su Información
                                </h2>
                                <p className="mb-3 text-neutral-700 dark:text-neutral-300">
                                    Utilizamos la información recopilada para
                                    los siguientes propósitos:
                                </p>
                                <ul className="list-inside list-disc space-y-2 text-neutral-700 dark:text-neutral-300">
                                    <li>
                                        Proporcionar y mantener nuestros
                                        servicios
                                    </li>
                                    <li>
                                        Procesar transacciones y gestionar
                                        operaciones
                                    </li>
                                    <li>
                                        Comunicarnos con usted sobre su cuenta y
                                        servicios
                                    </li>
                                    <li>
                                        Mejorar y personalizar su experiencia de
                                        usuario
                                    </li>
                                    <li>
                                        Garantizar la seguridad y prevenir
                                        fraudes
                                    </li>
                                    <li>
                                        Cumplir con obligaciones legales y
                                        regulatorias
                                    </li>
                                    <li>
                                        Enviar notificaciones importantes sobre
                                        el servicio
                                    </li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                    4. Protección de Datos
                                </h2>
                                <p className="mb-3 text-neutral-700 dark:text-neutral-300">
                                    Implementamos medidas de seguridad técnicas
                                    y organizativas para proteger su información
                                    personal:
                                </p>
                                <ul className="list-inside list-disc space-y-2 text-neutral-700 dark:text-neutral-300">
                                    <li>
                                        Encriptación de datos sensibles en
                                        tránsito y en reposo
                                    </li>
                                    <li>
                                        Autenticación multifactor disponible
                                    </li>
                                    <li>
                                        Controles de acceso estrictos basados en
                                        roles
                                    </li>
                                    <li>Monitoreo continuo de seguridad</li>
                                    <li>
                                        Copias de seguridad regulares y seguras
                                    </li>
                                    <li>Auditorías de seguridad periódicas</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                    5. Compartir Información
                                </h2>
                                <p className="text-neutral-700 dark:text-neutral-300">
                                    No vendemos, alquilamos ni compartimos su
                                    información personal con terceros, excepto
                                    en las siguientes circunstancias limitadas:
                                    cuando sea requerido por ley, para proteger
                                    nuestros derechos legales, o con proveedores
                                    de servicios que nos ayudan a operar la
                                    plataforma bajo estrictos acuerdos de
                                    confidencialidad.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                    6. Retención de Datos
                                </h2>
                                <p className="text-neutral-700 dark:text-neutral-300">
                                    Conservamos su información personal solo
                                    durante el tiempo necesario para cumplir con
                                    los propósitos para los cuales fue
                                    recopilada, incluyendo cualquier requisito
                                    legal, contable o de informes. Cuando ya no
                                    necesitemos sus datos, los eliminaremos o
                                    anonimizaremos de forma segura.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                    7. Sus Derechos
                                </h2>
                                <p className="mb-3 text-neutral-700 dark:text-neutral-300">
                                    Usted tiene los siguientes derechos respecto
                                    a su información personal:
                                </p>
                                <ul className="list-inside list-disc space-y-2 text-neutral-700 dark:text-neutral-300">
                                    <li>
                                        Acceder a su información personal que
                                        tenemos
                                    </li>
                                    <li>
                                        Corregir información inexacta o
                                        incompleta
                                    </li>
                                    <li>
                                        Solicitar la eliminación de sus datos
                                        personales
                                    </li>
                                    <li>
                                        Limitar el procesamiento de su
                                        información
                                    </li>
                                    <li>Portabilidad de sus datos</li>
                                    <li>
                                        Oponerse al procesamiento de sus datos
                                    </li>
                                    <li>
                                        Retirar el consentimiento en cualquier
                                        momento
                                    </li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                    8. Cookies y Tecnologías Similares
                                </h2>
                                <p className="text-neutral-700 dark:text-neutral-300">
                                    Utilizamos cookies y tecnologías similares
                                    para mejorar su experiencia, recordar sus
                                    preferencias y analizar el uso de nuestra
                                    plataforma. Puede configurar su navegador
                                    para rechazar cookies, aunque esto puede
                                    afectar la funcionalidad de algunos
                                    servicios.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                    9. Transferencias Internacionales
                                </h2>
                                <p className="text-neutral-700 dark:text-neutral-300">
                                    Sus datos pueden ser transferidos y
                                    procesados en servidores ubicados fuera de
                                    su país de residencia. Garantizamos que
                                    estas transferencias cumplan con las leyes
                                    de protección de datos aplicables y que sus
                                    datos estén protegidos con el mismo nivel de
                                    seguridad.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                    10. Cambios a esta Política
                                </h2>
                                <p className="text-neutral-700 dark:text-neutral-300">
                                    Podemos actualizar esta Política de
                                    Privacidad ocasionalmente. Le notificaremos
                                    sobre cambios importantes a través de su
                                    correo electrónico o mediante un aviso
                                    prominente en nuestra plataforma. Le
                                    recomendamos revisar esta política
                                    periódicamente.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                    11. Contacto
                                </h2>
                                <p className="text-neutral-700 dark:text-neutral-300">
                                    Si tiene preguntas sobre esta Política de
                                    Privacidad o desea ejercer sus derechos,
                                    puede contactarnos a través de los canales
                                    de soporte disponibles en nuestra plataforma
                                    o mediante el formulario de contacto en la
                                    página principal.
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
