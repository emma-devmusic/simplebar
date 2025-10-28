export const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-900 py-10 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-block h-7 w-7 rounded bg-primary"></span>
          <span className="text-sm text-neutral-500 dark:text-neutral-400">© {new Date().getFullYear()} Simplebar</span>
        </div>
        <nav className="flex gap-4 text-sm text-neutral-500 dark:text-neutral-400">
          <a href="#" className="hover:text-neutral-800 dark:hover:text-neutral-200">Privacidad</a>
          <a href="#" className="hover:text-neutral-800 dark:hover:text-neutral-200">Términos</a>
          <a href="#" className="hover:text-neutral-800 dark:hover:text-neutral-200">Contacto</a>
        </nav>
      </div>
    </footer>
  );
};
