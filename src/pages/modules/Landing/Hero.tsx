import dashboardDesktop from '../../../assets/img/dashboard-0.png';
import dashboardMobile from '../../../assets/img/dashboard-1.png';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FloatingElements } from '../../../components/animations/FloatingElements';

const features = [
    'POS',
    'Multi sucursales',
    'Menú QR',
    'Pedidos a través del Menú QR',
    'Gestión de Usuarios',
    'Gestión de Pedidos',
    'Gestión de Caja',
    'Gestión de Productos',
    'Gestión de Categorías',
];

export const Hero = () => {
    const [currentFeature, setCurrentFeature] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFeature((prev) => (prev + 1) % features.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="hero"
            className="relative overflow-hidden bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100"
        >
            <FloatingElements count={5}/>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(14,111,255,0.1),transparent_60%)] dark:bg-[radial-gradient(60%_60%_at_50%_0%,rgba(14,111,255,0.15),transparent_60%)]"></div>
            <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.2,
                                },
                            },
                        }}
                    >
                        <motion.span
                            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.6 },
                                },
                            }}
                        >
                            Nuevo · Gestión integral
                        </motion.span>
                        <motion.h1
                            className="text-4xl leading-tight font-semibold sm:text-5xl"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.8 },
                                },
                            }}
                        >
                            Gestión <span className="text-primary">simple</span>{' '}
                            para bares y restaurantes
                        </motion.h1>
                        <motion.p
                            className="mt-4 max-w-xl text-neutral-600 dark:text-neutral-300 leading-relaxed md:text-lg"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.6 },
                                },
                            }}
                        >
                            Tomá pedidos desde el Menú QR y compartí el link de
                            tu bar para recibir órdenes desde cualquier lugar.{' '}
                            Unificá{' '}
                            <strong>
                                POS, Menú QR, Pedidos, Usuarios, Caja, Productos y más
                            </strong>{' '}
                            en un solo sistema. Interfaz intuitiva, soporte en
                            español y onboarding en minutos.
                        </motion.p>
                        
                        {/* Features animadas */}
                        <motion.div
                            className="h-12 overflow-hidden flex items-center justify-center"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { duration: 0.6, delay: 0.3 },
                                },
                            }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentFeature}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="inline-flex items-center gap-2 text-lg lg:text-2xl font-semibold text-orange-500 border border-orange-500 rounded-md px-3 py-1"
                                >
                                    <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse hidden lg:block" />
                                    {features[currentFeature]}
                                </motion.span>
                            </AnimatePresence>
                        </motion.div>

                        <motion.div
                            className="mt-10 flex flex-wrap gap-3"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.6 },
                                },
                            }}
                        >
                            <motion.a
                                href="#cta"
                                className="rounded-md bg-primary px-5 py-3 font-medium text-neutral-900 hover:brightness-110"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Probar gratis 14 días
                            </motion.a>
                            {/* <motion.a
                                href="#demo"
                                className="rounded-md border border-neutral-300 px-5 py-3 hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-500"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Solicitar demo
                            </motion.a> */}
                        </motion.div>
                        <motion.p
                            className="mt-3 text-xs text-neutral-500 dark:text-neutral-400"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { duration: 0.8, delay: 0.2 },
                                },
                            }}
                        >
                            Sin tarjeta · Cancelás cuando quieras
                        </motion.p>
                    </motion.div>

                    {/* Mockup / Placeholder */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.3,
                            ease: 'easeOut',
                        }}
                    >
                        <div className="rounded-2xl border border-neutral-300 bg-white/60 p-4 shadow-xl backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60">
                            <div className="aspect-[16/9] overflow-hidden rounded-lg border border-neutral-300 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
                                {/* Dashboard placeholder */}
                                <img
                                    src={dashboardDesktop}
                                    alt=""
                                    className="aspect-video w-full h-full object-cover"
                                />
                            </div>
                            {/* phone */}
                            <div className="absolute -right-4 -bottom-6 w-40 rotate-6">
                                <div className="rounded-2xl border border-neutral-300 bg-white p-3 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900">
                                    <div className="aspect-[9/19] rounded-xl border border-neutral-300 bg-neutral-200/70 dark:border-neutral-800 dark:bg-neutral-800/70 overflow-hidden">
                                        <img
                                            src={dashboardMobile}
                                            alt=""
                                            className="h-full w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* badge */}
                            <div className="absolute -top-3 -left-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow dark:text-neutral-100">
                                Demo UI
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
