export const ContactCTA = () => {
  return (
    <section id="cta" className="py-20 border-t bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold">Probá <span className="text-primary">Simplebar</span> hoy</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">14 días gratis · Sin tarjeta · Soporte de onboarding.</p>
          <ul className="mt-6 space-y-2 text-neutral-600 dark:text-neutral-300 text-sm">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary"></span> Setup en minutos</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary"></span> Importación de productos</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary"></span> Capacitación inicial</li>
          </ul>
        </div>
        <form id="contacto" className="rounded-2xl border border-neutral-800 p-6 space-y-4 bg-neutral-900/60 backdrop-blur">
          <div>
            <label htmlFor="nombre" className="block text-sm text-neutral-600 dark:text-neutral-300 mb-1">Nombre</label>
            <input id="nombre" type="text" className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 outline-none focus:border-primary" placeholder="Tu nombre" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm text-neutral-600 dark:text-neutral-300 mb-1">Email</label>
              <input id="email" type="email" className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 outline-none focus:border-primary" placeholder="tu@correo.com" />
            </div>
            <div>
              <label htmlFor="tel" className="block text-sm text-neutral-600 dark:text-neutral-300 mb-1">Teléfono</label>
              <input id="tel" type="tel" className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 outline-none focus:border-primary" placeholder="+54 9 ..." />
            </div>
          </div>
          <div>
            <label htmlFor="ciudad" className="block text-sm text-neutral-600 dark:text-neutral-300 mb-1">Ciudad</label>
            <input id="ciudad" type="text" className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 outline-none focus:border-primary" placeholder="Resistencia, Chaco" />
          </div>
          <button className="w-full mt-2 px-4 py-3 rounded-md bg-primary text-neutral-900 font-medium hover:brightness-110">
            Crear mi cuenta
          </button>
          <p className="text-xs text-neutral-400">Al continuar aceptás nuestros Términos y Política de Privacidad.</p>
        </form>
      </div>
    </section>
  );
};