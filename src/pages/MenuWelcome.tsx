import { Outlet, useNavigate, useParams } from 'react-router-dom';
import logo from '../assets/img/isologo-ding-degraded.png';
import { Navbar } from '../components/layout';
import { Modal } from '../components/modal/Modal';
import { useEffect, useState } from 'react';

export const MenuWelcome = () => {
    const { tenant_path, branch_path } = useParams();
    const navigate = useNavigate();
    const [navbarHeight, setNavbarHeight] = useState(0);

    useEffect(() => {
        if (!branch_path) {
            const branchInStorage = localStorage.getItem('branch_path');
            if (branchInStorage) {
                navigate(`/${tenant_path}/${branchInStorage}`);
            } else {
                navigate('/');
            }
        }
    }, [branch_path, navigate, tenant_path]);

    useEffect(() => {
        const updateNavbarHeight = () => {
            const navbar = document.getElementById('navbar');
            if (navbar) {
                setNavbarHeight(navbar.offsetHeight);
            }
        };

        updateNavbarHeight();
        window.addEventListener('resize', updateNavbarHeight);

        return () => {
            window.removeEventListener('resize', updateNavbarHeight);
        };
    }, []);

    return (
        <div className="h-full min-h-screen w-full bg-gray-100 bg-radial-[at_10%_0%] from-gray-50 from-65% to-gray-300 to-100% text-gray-700 dark:bg-neutral-950 dark:from-neutral-900 dark:to-neutral-800 dark:text-gray-200">
            <Navbar />
            <div
                className="flex w-full"
                style={{ height: `calc(100vh - ${navbarHeight}px)` }}
            >
                <div className="w-full overflow-y-auto">
                    <div className="mx-auto flex h-full w-full flex-col justify-between sm:max-w-[480px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
                        <Outlet />

                        <footer className="mt-2 flex w-full items-center justify-center gap-2 place-self-end py-2 text-sm text-gray-700 xl:text-base 2xl:text-lg dark:text-gray-400">
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
                        </footer>
                    </div>
                </div>
            </div>

            <Modal />
        </div>
    );
};
