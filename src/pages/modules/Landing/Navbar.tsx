import { Menu } from 'lucide-react';
import { ThemeToggle } from '../../../components/theme/ThemeToggle';

const Navbar = () => {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);

        if (targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offset = 7 * 16;
            const finalPosition = elementPosition - offset;

            window.scrollTo({
                top: finalPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <header className="sticky top-0 z-40 border-b border-neutral-200/70 dark:border-neutral-800/70 bg-white/80 dark:bg-neutral-950/80 backdrop-blur">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                <a href="#" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-neutral-100">
                    <span className="inline-block h-8 w-8 rounded-lg bg-primary"></span>
                    <span className="text-lg">Simplebar</span>
                </a>
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    <a href="#features" className="text-neutral-600 dark:text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white" onClick={(e) => handleSmoothScroll(e, "#features")}>Funciones</a>
                    <a href="#precios" className="text-neutral-600 dark:text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white" onClick={(e) => handleSmoothScroll(e, "#precios")}>Precios</a>
                    <a href="#testimonios" className="text-neutral-600 dark:text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white" onClick={(e) => handleSmoothScroll(e, "#testimonios")}>Clientes</a>
                    <a href="#contacto" className="text-neutral-600 dark:text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white" onClick={(e) => handleSmoothScroll(e, "#contacto")}>Contacto</a>
                </nav>
                <div className="hidden md:flex items-center gap-3">
                    <ThemeToggle />
                    <a href="#" className="px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 text-sm text-neutral-700 dark:text-neutral-600 dark:text-neutral-300">Ingresar</a>
                    <a href="#cta" className="px-4 py-2 rounded-md bg-primary text-white font-medium text-sm hover:brightness-110" onClick={(e) => handleSmoothScroll(e, "#cta")}>Probar gratis</a>
                </div>
                <button className="md:hidden p-2 rounded border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-600 dark:text-neutral-300" aria-label="Abrir menú">
                    <Menu className="h-5 w-5" />
                </button>
            </div>
        </header>
    );
};

export default Navbar;
