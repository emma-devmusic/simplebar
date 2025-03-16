import { Content, Navbar } from '../components/layout';
import { Modal } from '../components/modal/Modal';

export const MenuWelcome = () => {
    return (
        <div className='h-full w-full text-gray-700'>
            <Navbar />
            <div className='flex h-[calc(100vh-83px)] w-full bg-gray-100 bg-radial-[at_10%_0%] from-gray-50 from-65% to-gray-300 to-100%'>
                <div className='w-full overflow-y-auto'>
                    <div className='mx-auto w-full sm:max-w-[480px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]'>
                        <Content />
                    </div>
                </div>
            </div>
            <Modal />
        </div>
    );
};
