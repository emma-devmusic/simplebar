import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { MenuFooter } from '../components/layout/MenuFooter';
import { Navbar } from '../components/layout';
import { Modal } from '../components/modal/Modal';
import { useEffect, useState } from 'react';
import { Drawer } from '../components';

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
                    <div className="mx-auto flex h-full w-full flex-col justify-between xl:max-w-[1280px] 2xl:max-w-[1536px]">
                        <Outlet />

                        <MenuFooter />
                    </div>
                </div>
            </div>

            <Modal />
            <Drawer />
        </div>
    );
};
