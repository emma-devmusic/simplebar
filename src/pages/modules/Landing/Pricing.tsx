export const Pricing = () => {
    return (
        <section id="precios" className="py-20 border-t bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-semibold">Planes y <span className="text-primary">precios</span></h2>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-300">Elegí el plan que mejor se adapte a tu operación. Sin costos ocultos.</p>
                </div>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Básico */}
                    <div className="rounded-2xl border border-neutral-800 p-6 bg-neutral-900/60 backdrop-blur flex flex-col">
                        <h3 className="font-semibold">Básico</h3>
                        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Ideal para cafeterías y food trucks.</p>
                        <div className="mt-6 text-3xl font-bold">$14.900 <span className="text-base font-medium text-neutral-400">/mes</span></div>
                        <ul className="mt-6 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                            <li>POS + Menú QR</li>
                            <li>1 sucursal</li>
                            <li>Soporte por chat</li>
                        </ul>
                        <a href="#cta" className="mt-6 inline-block text-center px-4 py-2 rounded-md border border-neutral-700 hover:border-neutral-500">Elegir plan</a>
                    </div>
                    {/* Pro */}
                    <div className="rounded-2xl border border-primary p-6 bg-primary/10 flex flex-col">
                        <div className="self-start text-xs font-semibold bg-primary text-neutral-900 rounded px-2 py-0.5">Recomendado</div>
                        <h3 className="mt-2 font-semibold">Pro</h3>
                        <p className="mt-2 text-sm text-neutral-200">Para restaurantes con salón y delivery.</p>
                        <div className="mt-6 text-3xl font-bold">$29.900 <span className="text-base font-medium text-neutral-600 dark:text-neutral-300">/mes</span></div>
                        <ul className="mt-6 space-y-2 text-sm text-neutral-200">
                            <li>Todo del Básico</li>
                            <li>Reservas & Gestión de sala</li>
                            <li>Reportes en tiempo real</li>
                            <li>Integración con delivery</li>
                        </ul>
                        <a href="#cta" className="mt-6 inline-block text-center px-4 py-2 rounded-md bg-primary text-neutral-900 font-medium hover:brightness-110">Elegir plan</a>
                    </div>
                    {/* Multi */}
                    <div className="rounded-2xl border border-neutral-800 p-6 bg-neutral-900/60 backdrop-blur flex flex-col">
                        <h3 className="font-semibold">Multi-sucursal</h3>
                        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Para cadenas y franquicias.</p>
                        <div className="mt-6 text-3xl font-bold">A medida</div>
                        <ul className="mt-6 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                            <li>Usuarios y roles avanzados</li>
                            <li>Reportes consolidados</li>
                            <li>SLAs y soporte dedicado</li>
                        </ul>
                        <a href="#demo" className="mt-6 inline-block text-center px-4 py-2 rounded-md border border-neutral-700 hover:border-neutral-500">Solicitar cotización</a>
                    </div>
                </div>
            </div>
        </section>
    );
};
