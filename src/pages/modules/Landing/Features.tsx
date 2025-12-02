import { motion } from 'framer-motion';

export const Features = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section id="features" className="py-20 border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold">Todo en <span className="text-primary">un solo</span> lugar</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">Centralizá operaciones y reducí errores y tiempos muertos.</p>
        </motion.div>

        <motion.div 
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Mapa del bar */}
          <motion.article 
            className="rounded-xl border border-neutral-300 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-900/60 backdrop-blur"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM17 14v7M14 17h7"/>
              </svg>
            </div>
            <h3 className="font-semibold">Mapa del bar</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 text-sm">Gestioná las mesas de tu local, asigná pedidos y controlá el estado de cada una.</p>
          </motion.article>

          {/* Multi sucursales */}
          <motion.article 
            className="rounded-xl border border-neutral-300 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-900/60 backdrop-blur"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 9h.01M15 9h.01M9 13h.01M15 13h.01"/>
              </svg>
            </div>
            <h3 className="font-semibold">Multi sucursales</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 text-sm">Gestioná todas tus sucursales desde un solo lugar con reportes consolidados.</p>
          </motion.article>

          {/* Menú QR */}
          <motion.article 
            className="rounded-xl border border-neutral-300 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-900/60 backdrop-blur"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="3" width="7" height="7" strokeWidth="2"/><rect x="14" y="3" width="7" height="7" strokeWidth="2"/>
                <rect x="3" y="14" width="7" height="7" strokeWidth="2"/><path strokeWidth="2" d="M14 14h7v7h-7z"/>
              </svg>
            </div>
            <h3 className="font-semibold">Menú QR</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 text-sm">Compartí el link de tu bar y recibí pedidos desde cualquier lugar. Fotos, descripciones y precios actualizados.</p>
          </motion.article>

          {/* Pedidos desde Menú QR */}
          <motion.article 
            className="rounded-xl border border-neutral-300 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-900/60 backdrop-blur"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 5h6M9 12h6M9 16h6"/>
              </svg>
            </div>
            <h3 className="font-semibold">Pedidos a través del Menú QR</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 text-sm">Tus clientes hacen pedidos directo desde el celular. Sin esperas, sin errores.</p>
          </motion.article>

          {/* Gestión de Usuarios */}
          <motion.article 
            className="rounded-xl border border-neutral-300 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-900/60 backdrop-blur"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 className="font-semibold">Gestión de Usuarios</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 text-sm">Creá usuarios con roles y permisos. Controlá quién accede a qué información.</p>
          </motion.article>

          {/* Gestión de Pedidos */}
          <motion.article 
            className="rounded-xl border border-neutral-300 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-900/60 backdrop-blur"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" d="M12 8v4l3 3M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z"/>
              </svg>
            </div>
            <h3 className="font-semibold">Gestión de Pedidos</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 text-sm">Visualizá y gestioná todos los pedidos en tiempo real. Estados, tiempos y prioridades.</p>
          </motion.article>

          {/* Gestión de Caja */}
          <motion.article 
            className="rounded-xl border border-neutral-300 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-900/60 backdrop-blur"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <h3 className="font-semibold">Gestión de Caja</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 text-sm">Apertura, cierre y arqueo de caja. Control total de ingresos y egresos.</p>
          </motion.article>

          {/* Gestión de Productos */}
          <motion.article 
            className="rounded-xl border border-neutral-300 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-900/60 backdrop-blur"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
            </div>
            <h3 className="font-semibold">Gestión de Productos</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 text-sm">Cargá productos con fotos, precios, variantes y modificadores. Actualizá en segundos.</p>
          </motion.article>

          {/* Gestión de Categorías */}
          <motion.article 
            className="rounded-xl border border-neutral-300 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-900/60 backdrop-blur"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/>
              </svg>
            </div>
            <h3 className="font-semibold">Gestión de Categorías</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 text-sm">Organizá tu menú con categorías y subcategorías. Ordená y mostrá lo que querés.</p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};
