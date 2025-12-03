// Import Logo directly to avoid pulling the full components barrel during SSR prerender
import { Logo } from '../../../components/Logo';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const [onDarkTheme, setOnDarkTheme] = useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            setOnDarkTheme(e.matches);
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [onDarkTheme]);

    const handleSmoothScroll = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        href: string
    ) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);

        if (targetElement) {
            const elementPosition =
                targetElement.getBoundingClientRect().top + window.scrollY;
            const offset = 7 * 16;
            const finalPosition = elementPosition - offset;

            window.scrollTo({
                top: finalPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <header
            className={`${isScrolled ? 'sticky translate-y-0 transform opacity-100' : 'relative translate-y-0 transform opacity-100'} top-0 z-40 w-full border-b border-neutral-200/70 bg-white/80 backdrop-blur transition-all duration-1000 ease-out dark:border-neutral-800/70 dark:bg-neutral-950/80`}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <a
                    href="#"
                    className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-neutral-100"
                >
                    <Logo />
                </a>
                <nav className="hidden items-center gap-6 text-sm md:flex">
                    <a
                        href="#features"
                        className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                        onClick={(e) => handleSmoothScroll(e, '#features')}
                    >
                        Funciones
                    </a>
                    <a
                        href="#precios"
                        className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                        onClick={(e) => handleSmoothScroll(e, '#precios')}
                    >
                        Precios
                    </a>
                    <a
                        href="#testimonios"
                        className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                        onClick={(e) => handleSmoothScroll(e, '#testimonios')}
                    >
                        Clientes
                    </a>
                    <a
                        href="#contacto"
                        className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                        onClick={(e) => handleSmoothScroll(e, '#contacto')}
                    >
                        Contacto
                    </a>
                </nav>
                <div className="hidden items-center gap-3 md:flex">
                    {/* <ThemeToggle /> */}
                    <a
                        href="https://admin.simplebar.net/login"
                        className="rounded-md border border-neutral-300 px-4 py-2 text-sm text-neutral-700 hover:border-neutral-400 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-500"
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        Ingresar
                    </a>
                    <a
                        href="#cta"
                        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:brightness-110"
                        onClick={(e) => handleSmoothScroll(e, '#cta')}
                    >
                        Probar gratis
                    </a>
                </div>
                <button
                    className="rounded border border-neutral-300 p-2 text-neutral-700 md:hidden dark:border-neutral-700 dark:text-neutral-300"
                    aria-label="Abrir menú"
                >
                    <Menu className="h-5 w-5" />
                </button>
            </div>
        </header>
    );
};

export default Navbar;
