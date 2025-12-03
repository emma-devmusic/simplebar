import dashImg from '../../../assets/img/dashboard-simplebar.png';

export const Dashboard = () => {
    return (
        <section className="border-t border-neutral-200 bg-white py-20 text-neutral-900 dark:border-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-semibold">
                        Un <span className="text-primary">dashboard</span> que
                        muestra lo importante
                    </h2>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                        KPIs diarios, estado de mesas, pedidos en cola y notificaciones de pedidos. Todo en un solo vistazo.
                    </p>
                    {/* <ul className="mt-6 space-y-3 text-neutral-600 dark:text-neutral-300">
                        <li className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>{' '}
                            Ventas hoy: <strong>$245.300</strong> (ejemplo)
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>{' '}
                            Mesas activas: <strong>12/18</strong> (ejemplo)
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>{' '}
                            Tiempo promedio por mesa: <strong>52 min</strong>{' '}
                            (ejemplo)
                        </li>
                    </ul> */}
                    <div className="mt-8 flex gap-3">
                        {/* <a
                            href="#demo"
                            className="rounded-md border border-neutral-700 px-5 py-3 hover:border-neutral-500"
                        >
                            Ver demo
                        </a> */}
                        <a
                            href="#cta"
                            className="rounded-md bg-primary px-5 py-3 font-medium text-white hover:brightness-110 dark:text-neutral-900"
                        >
                            Crear cuenta
                        </a>
                    </div>
                </div>
                <div className="rounded-2xl border border-neutral-300 bg-white/60 p-6 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60">
                    <div className="aspect-[16/10] overflow-hidden rounded-lg border border-neutral-300 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
                        <img
                            src={dashImg}
                            alt="Dashboard SimpleBar - Vista de caja y gestión"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
