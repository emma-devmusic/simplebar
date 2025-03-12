export const WelcomePage = () => {
    return (
        <section className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Voy a ser una App
                        <strong className="font-extrabold text-red-700 sm:block">
                            {' '}
                            Zarpada.{' '}
                        </strong>
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed">
                        Esto es una pantalla de bienvenida de prueba
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded-sm bg-red-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:ring-3 focus:outline-hidden sm:w-auto"
                            href="#"
                        >
                            Empezar
                        </a>

                        <a
                            className="block w-full rounded-sm px-12 py-3 text-sm font-medium text-red-600 shadow-sm hover:text-red-700 focus:ring-3 focus:outline-hidden sm:w-auto"
                            href="#"
                        >
                            A Codear
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
