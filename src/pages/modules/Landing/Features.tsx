export const Features = () => {
  return (
    <section id="features" className="py-20 border-t border-neutral-900 bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold">Todo en <span className="text-[#C7A24D]">un solo</span> lugar</h2>
          <p className="mt-3 text-neutral-300">Centralizá operaciones y reducí errores y tiempos muertos.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* POS */}
          <article className="rounded-xl border border-neutral-800 p-6 bg-neutral-900/60 backdrop-blur">
            <div className="h-10 w-10 rounded-lg bg-[#C7A24D]/20 flex items-center justify-center mb-4">
              <svg className="h-5 w-5 text-[#C7A24D]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" d="M4 7h16M6 11h12M8 15h8M10 19h4"/>
              </svg>
            </div>
            <h3 className="font-semibold">POS ultra ágil</h3>
            <p className="mt-2 text-neutral-300 text-sm">Búsqueda por texto/QR, modificadores, dividir cuenta, propinas y tickets fiscales.</p>
          </article>

          {/* Menú QR */}
          <article className="rounded-xl border border-neutral-800 p-6 bg-neutral-900/60 backdrop-blur">
            <div className="h-10 w-10 rounded-lg bg-[#C7A24D]/20 flex items-center justify-center mb-4">
              <svg className="h-5 w-5 text-[#C7A24D]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="3" width="7" height="7" strokeWidth="2"/><rect x="14" y="3" width="7" height="7" strokeWidth="2"/>
                <rect x="3" y="14" width="7" height="7" strokeWidth="2"/><path strokeWidth="2" d="M14 14h7v7h-7z"/>
              </svg>
            </div>
            <h3 className="font-semibold">Menú digital con QR</h3>
            <p className="mt-2 text-neutral-300 text-sm">Fotos y alérgenos, stock en tiempo real, multi-idioma y "añadir al pedido".</p>
          </article>

          {/* Reservas */}
          <article className="rounded-xl border border-neutral-800 p-6 bg-neutral-900/60 backdrop-blur">
            <div className="h-10 w-10 rounded-lg bg-[#C7A24D]/20 flex items-center justify-center mb-4">
              <svg className="h-5 w-5 text-[#C7A24D]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2"/><path strokeWidth="2" d="M16 2v4M8 2v4M3 10h18"/>
              </svg>
            </div>
            <h3 className="font-semibold">Reservas y sala</h3>
            <p className="mt-2 text-neutral-300 text-sm">Plano de salón, turnos, lista de espera y confirmaciones por WhatsApp.</p>
          </article>

          {/* Delivery */}
          <article className="rounded-xl border border-neutral-800 p-6 bg-neutral-900/60 backdrop-blur">
            <div className="h-10 w-10 rounded-lg bg-[#C7A24D]/20 flex items-center justify-center mb-4">
              <svg className="h-5 w-5 text-[#C7A24D]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" d="M3 7h11l4 5h3v5h-2M3 7v10h11M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
              </svg>
            </div>
            <h3 className="font-semibold">Delivery integrado</h3>
            <p className="mt-2 text-neutral-300 text-sm">Integraciones con apps, repartidores propios, seguimiento y promos.</p>
          </article>

          {/* Reportes */}
          <article className="rounded-xl border border-neutral-800 p-6 bg-neutral-900/60 backdrop-blur">
            <div className="h-10 w-10 rounded-lg bg-[#C7A24D]/20 flex items-center justify-center mb-4">
              <svg className="h-5 w-5 text-[#C7A24D]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" d="M4 19h16M7 16V5m5 11V8m5 8V3"/>
              </svg>
            </div>
            <h3 className="font-semibold">Reportes en tiempo real</h3>
            <p className="mt-2 text-neutral-300 text-sm">Ventas, ticket promedio, rotación de mesas y alertas de stock.</p>
          </article>

          {/* Soporte */}
          <article className="rounded-xl border border-neutral-800 p-6 bg-neutral-900/60 backdrop-blur">
            <div className="h-10 w-10 rounded-lg bg-[#C7A24D]/20 flex items-center justify-center mb-4">
              <svg className="h-5 w-5 text-[#C7A24D]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" d="M12 1v3M4.2 4.2l2.1 2.1M1 12h3m13.7-5.7l2.1-2.1M20 12h3M4.2 19.8l2.1-2.1M12 20v3m7.7-3.8-2.1-2.1"/>
              </svg>
            </div>
            <h3 className="font-semibold">Soporte cercano</h3>
            <p className="mt-2 text-neutral-300 text-sm">Equipo en español, onboarding guiado y recursos de capacitación.</p>
          </article>
        </div>
      </div>
    </section>
  );
};
