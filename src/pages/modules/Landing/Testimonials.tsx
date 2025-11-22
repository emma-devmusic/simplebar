import { motion } from 'framer-motion';

export const Testimonials = () => {
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
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="testimonios" className="py-20 border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-semibold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Lo que dicen <span className="text-primary">nuestros clientes</span>
        </motion.h2>
        <motion.div 
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
            {/* Cards */}
            <motion.figure 
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/80 dark:bg-neutral-900/60 backdrop-blur shadow-sm dark:shadow-none"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <blockquote className="text-neutral-700 dark:text-neutral-200">"Reducimos demoras en salón y delivery en un 22%."</blockquote>
              <figcaption className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">— Bar La Esquina</figcaption>
            </motion.figure>
            <motion.figure 
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/80 dark:bg-neutral-900/60 backdrop-blur shadow-sm dark:shadow-none"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <blockquote className="text-neutral-700 dark:text-neutral-200">"El menú QR con stock en tiempo real nos salvó los fines de semana."</blockquote>
              <figcaption className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">— Pizzería Centro</figcaption>
            </motion.figure>
            <motion.figure 
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/80 dark:bg-neutral-900/60 backdrop-blur shadow-sm dark:shadow-none"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <blockquote className="text-neutral-700 dark:text-neutral-200">"Reportes claros para decidir compras y turnos."</blockquote>
              <figcaption className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">— Café Del Sol</figcaption>
            </motion.figure>
        </motion.div>
      </div>
    </section>
  );
};
