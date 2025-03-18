import { useNavigate, useParams } from 'react-router-dom';
import { Content, Navbar } from '../components/layout';
import { Modal } from '../components/modal/Modal';
import { useEffect } from 'react';

export const MenuWelcome = () => {
    const { tenant_path, branch_path } = useParams();
    const navigate = useNavigate();

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

    return (
        <div className="h-full min-h-screen w-full bg-gray-100 bg-radial-[at_10%_0%] from-gray-50 from-65% to-gray-300 to-100% text-gray-700">
            <Navbar />
            <div className="flex h-[calc(100vh-95px)] w-full md:h-[calc(100vh-103px)] lg:h-[calc(100vh-130px)] xl:h-[calc(100vh-140px)]">
                <div className="w-full overflow-y-auto">
                    <div className="mx-auto w-full sm:max-w-[480px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
                        <Content />
                    </div>
                </div>
            </div>
            <div className="lg:text-md w-full fixed bottom-0 flex items-center justify-center gap-2 py-2 text-sm text-gray-700 xl:text-lg 2xl:text-xl">
                <img
                    alt="Foto de perfil"
                    src={'/src/assets/img/isologo-ding-degraded.png'}
                    className="size-4 rounded-full object-cover lg:size-7 xl:size-8 2xl:size-9"
                />
                <p>Powered by Ding</p>
            </div>
            <Modal />
        </div>
    );
};
