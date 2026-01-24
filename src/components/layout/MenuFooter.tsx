import logo from '../../assets/img/isologo-ding-degraded.png';

export const MenuFooter = () => (
    <footer className="mt-4 flex w-full flex-row-reverse items-center justify-between gap-2 place-self-end border-t border-gray-300 py-5 text-sm text-gray-700 xl:text-base 2xl:text-lg dark:border-gray-700 dark:text-gray-400 px-4">
        <div className="flex items-center justify-center gap-2 text-sm md:text-base">
            <img
                alt="Foto de perfil"
                src={logo}
                className="size-3.5 rounded-full object-cover lg:size-5 xl:size-6 2xl:size-7"
            />
            <p>
                Powered by{' '}
                <a
                    href="https://ding.com.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    Ding
                </a>{' '}
            </p>
        </div>
        <div className="flex items-center justify-center gap-1 text-sm md:text-base">
            <a
                href="https://simplebar.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
            >
                SimpleBar
            </a>
            <span>© {new Date().getFullYear()}</span>
        </div>
    </footer>
);
