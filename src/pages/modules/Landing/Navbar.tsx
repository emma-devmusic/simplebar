import { Menu } from 'lucide-react';

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
        <header className="sticky top-0 z-40 border-b border-neutral-800/70 bg-neutral-950/80 backdrop-blur">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                <a href="#" className="flex items-center gap-2 font-semibold text-neutral-100">
                    <span className="inline-block h-8 w-8 rounded-lg bg-[#C7A24D]"></span>
                    <span className="text-lg">Simplebar</span>
                </a>
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    <a href="#features" className="text-neutral-300 hover:text-white" onClick={(e) => handleSmoothScroll(e, "#features")}>Funciones</a>
                    <a href="#precios" className="text-neutral-300 hover:text-white" onClick={(e) => handleSmoothScroll(e, "#precios")}>Precios</a>
                    <a href="#testimonios" className="text-neutral-300 hover:text-white" onClick={(e) => handleSmoothScroll(e, "#testimonios")}>Clientes</a>
                    <a href="#contacto" className="text-neutral-300 hover:text-white" onClick={(e) => handleSmoothScroll(e, "#contacto")}>Contacto</a>
                </nav>
                <div className="hidden md:flex items-center gap-3">
                    <a href="#" className="px-4 py-2 rounded-md border border-neutral-700 hover:border-neutral-500 text-sm text-neutral-300">Ingresar</a>
                    <a href="#cta" className="px-4 py-2 rounded-md bg-[#C7A24D] text-neutral-900 font-medium text-sm hover:brightness-110" onClick={(e) => handleSmoothScroll(e, "#cta")}>Probar gratis</a>
                </div>
                <button className="md:hidden p-2 rounded border border-neutral-700 text-neutral-300" aria-label="Abrir menú">
                    <Menu className="h-5 w-5" />
                </button>
            </div>
        </header>
    );
};

export default Navbar;
