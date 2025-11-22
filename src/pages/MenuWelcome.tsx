import { useNavigate, useParams } from 'react-router-dom';
import { Content, Navbar } from '../components/layout';
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
        <div className="h-full min-h-screen w-full bg-gray-100 bg-radial-[at_10%_0%] from-gray-50 from-65% to-gray-300 to-100% text-gray-700">
            <Navbar />
            <div
                className="flex w-full"
                style={{ height: `calc(100vh - ${navbarHeight}px)` }}
            >
                <div className="w-full overflow-y-auto">
                    <div className="mx-auto flex h-full w-full flex-col justify-between sm:max-w-[480px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
                        <Content />

                        <footer className="mt-2 flex w-full items-center justify-center gap-2 place-self-end py-2 text-sm text-gray-700 xl:text-base 2xl:text-lg">
                            <img
                                alt="Foto de perfil"
                                src={
                                    '/src/assets/img/isologo-ding-degraded.png'
                                }
                                className="size-3.5 rounded-full object-cover lg:size-5 xl:size-6 2xl:size-7"
                            />
                            <p>Powered by Ding</p>
                        </footer>
                    </div>
                </div>
            </div>

            <Modal />
        </div>
    );
};
