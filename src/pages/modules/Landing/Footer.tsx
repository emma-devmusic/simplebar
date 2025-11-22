import { Logo } from "../../../components";

export const Footer = () => {
    return (
        <footer className="border-t border-neutral-200 bg-white py-10 dark:border-neutral-900 dark:bg-neutral-950">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        © {new Date().getFullYear()}
                    </span>
                    <Logo className="h-5" />
                </div>
                <nav className="flex gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                    <a
                        href="#"
                        className="hover:text-neutral-800 dark:hover:text-neutral-200"
                    >
                        Privacidad
                    </a>
                    <a
                        href="#"
                        className="hover:text-neutral-800 dark:hover:text-neutral-200"
                    >
                        Términos
                    </a>
                    <a
                        href="#"
                        className="hover:text-neutral-800 dark:hover:text-neutral-200"
                    >
                        Contacto
                    </a>
                </nav>
            </div>
        </footer>
    );
};
