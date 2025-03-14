import logo from '../assets/img/logo-ding.png'

export const WelcomePage = () => {
    return (
        <section className="[background-image:url(/assets/img/bg-welcome.jpg)] h-screen">
            <div className="mx-auto max-w-screen px-4 py-32 lg:flex lg:h-screen lg:items-center backdrop-blur-sm">
                <div className="mx-auto max-w-[400px] sm:max-w-xl text-center flex flex-col justify-center items-center">
                    <img src={logo} alt="Logo Ding" className='mb-16 w-40'/>
                    <h1 className="text-3xl font-semibold sm:text-5xl text-gray-800">
                        Bienvenido a <span className="text-primary-hover font-extrabold">DingBar</span>
                        <hr  className="my-4 sm:mb-0 border-gray-400"/>
                        <strong className="font-extrabold text-primary-hover sm:flex items-center justify-center w-full mt-4">
                            {' '}
                            <span><span className='text-gray-800'>Menú</span> Online</span>{' '}
                        </strong>
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed">
                        Menú online para tu bar ;)
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded-sm bg-primary-hover px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-primary focus:ring-3 focus:outline-hidden sm:w-auto"
                            href="https://ding.com.ar/"
                            target='_blank'
                        >
                            Ingresar
                        </a>

                        <a
                            className="block w-full backdrop-blur-2xl rounded-sm px-12 py-3 text-sm font-medium text-primary-hover shadow-sm hover:text-primary focus:ring-3 focus:outline-hidden sm:w-auto"
                            href="https://ding.com.ar/"
                            target='_blank'
                        >
                            Explorar
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
