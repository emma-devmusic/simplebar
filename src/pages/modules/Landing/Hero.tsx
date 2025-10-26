import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section id="hero" className="relative overflow-hidden bg-neutral-950 text-neutral-100">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(199,162,77,0.15),transparent_60%)]"></div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#C7A24D]/30 bg-[#C7A24D]/10 px-3 py-1 text-xs font-medium text-[#C7A24D] mb-4">
                            Nuevo · Gestión integral
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
                            Gestión <span className="text-[#C7A24D]">simple</span> para bares y restaurantes
                        </h1>
                        <p className="mt-4 text-neutral-300 max-w-xl">
                            Unificá <strong>POS, Menú QR, Reservas, Delivery y Reportes</strong> en un solo sistema. Interfaz intuitiva, soporte en español y onboarding en minutos.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a href="#cta" className="px-5 py-3 rounded-md bg-[#C7A24D] text-neutral-900 font-medium hover:brightness-110">
                                Probar gratis 14 días
                            </a>
                            <a href="#demo" className="px-5 py-3 rounded-md border border-neutral-700 hover:border-neutral-500">
                                Solicitar demo
                            </a>
                        </div>
                        <p className="mt-3 text-xs text-neutral-400">Sin tarjeta · Cancelás cuando quieras</p>
                    </motion.div>

                    {/* Mockup / Placeholder */}
                    <motion.div 
                        className="relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                    >
                        <div className="rounded-2xl border border-neutral-800 p-4 shadow-xl bg-neutral-900/60 backdrop-blur">
                            <div className="aspect-[16/10] rounded-lg border border-neutral-800 bg-neutral-900 p-4">
                                {/* Dashboard placeholder */}
                                <div className="grid grid-cols-12 gap-3 h-full">
                                    <div className="col-span-12 md:col-span-8 space-y-3">
                                        <div className="h-36 rounded-md bg-neutral-800/80"></div>
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="h-24 rounded-md bg-neutral-800/60"></div>
                                            <div className="h-24 rounded-md bg-neutral-800/60"></div>
                                            <div className="h-24 rounded-md bg-neutral-800/60"></div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-4 space-y-3">
                                        <div className="h-24 rounded-md bg-neutral-800/60"></div>
                                        <div className="h-24 rounded-md bg-neutral-800/60"></div>
                                        <div className="h-24 rounded-md bg-neutral-800/60"></div>
                                    </div>
                                </div>
                            </div>
                            {/* phone */}
                            <div className="absolute -bottom-6 -right-4 w-40 rotate-6">
                                <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-3 shadow-2xl">
                                    <div className="aspect-[9/19] rounded-xl bg-neutral-800/70 p-2">
                                        <div className="h-8 w-24 mx-auto mt-2 rounded bg-[#C7A24D]/40"></div>
                                        <div className="mt-3 space-y-2 px-2">
                                            <div className="h-4 rounded bg-neutral-700/80"></div>
                                            <div className="h-4 rounded bg-neutral-700/60 w-10/12"></div>
                                            <div className="h-24 rounded bg-neutral-700/40"></div>
                                            <div className="h-4 rounded bg-neutral-700/60 w-8/12"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* badge */}
                            <div className="absolute -top-3 -left-3 rounded-full bg-[#C7A24D] text-neutral-900 text-xs font-semibold px-3 py-1 shadow">
                                Demo UI
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
