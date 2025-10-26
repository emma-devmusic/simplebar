export const Dashboard = () => {
  return (
    <section className="py-20 border-t bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold">Un <span className="text-primary">dashboard</span> que muestra lo importante</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">KPIs diarios, estado de mesas, pedidos en cola y alertas de stock. Todo en un solo vistazo.</p>
          <ul className="mt-6 space-y-3 text-neutral-600 dark:text-neutral-300">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span> Ventas hoy: <strong>$245.300</strong> (ejemplo)
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span> Mesas activas: <strong>12/18</strong> (ejemplo)
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span> Tiempo promedio por mesa: <strong>52 min</strong> (ejemplo)
            </li>
          </ul>
          <div className="mt-8 flex gap-3">
            <a href="#demo" className="px-5 py-3 rounded-md border border-neutral-700 hover:border-neutral-500">Ver demo</a>
            <a href="#cta" className="px-5 py-3 rounded-md bg-primary text-neutral-900 font-medium hover:brightness-110">Crear cuenta</a>
          </div>
        </div>
        <div className="rounded-2xl  border-neutral-300 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
          <div className="aspect-[16/10] rounded-lg border border-neutral-800 bg-neutral-900 p-4 grid grid-cols-12 gap-3">
            <div className="col-span-12 md:col-span-7 space-y-3">
              <div className="h-40 rounded-md bg-neutral-800/80"></div>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-24 rounded-md bg-neutral-800/60"></div>
                <div className="h-24 rounded-md bg-neutral-800/60"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 space-y-3">
              <div className="h-24 rounded-md bg-neutral-800/60"></div>
              <div className="h-24 rounded-md bg-neutral-800/60"></div>
              <div className="h-24 rounded-md bg-neutral-800/60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};