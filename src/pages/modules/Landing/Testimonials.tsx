export const Testimonials = () => {
  return (
    <section id="testimonios" className="py-20 border-t bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center">Lo que dicen <span className="text-primary">nuestros clientes</span></h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Cards */}
          <figure className="rounded-xl border border-neutral-800 p-6 bg-neutral-900/60 backdrop-blur">
            <blockquote className="text-neutral-200">"Reducimos demoras en salón y delivery en un 22%."</blockquote>
            <figcaption className="mt-4 text-sm text-neutral-400">— Bar La Esquina</figcaption>
          </figure>
          <figure className="rounded-xl border border-neutral-800 p-6 bg-neutral-900/60 backdrop-blur">
            <blockquote className="text-neutral-200">"El menú QR con stock en tiempo real nos salvó los fines de semana."</blockquote>
            <figcaption className="mt-4 text-sm text-neutral-400">— Pizzería Centro</figcaption>
          </figure>
          <figure className="rounded-xl border border-neutral-800 p-6 bg-neutral-900/60 backdrop-blur">
            <blockquote className="text-neutral-200">"Reportes claros para decidir compras y turnos."</blockquote>
            <figcaption className="mt-4 text-sm text-neutral-400">— Café Del Sol</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
