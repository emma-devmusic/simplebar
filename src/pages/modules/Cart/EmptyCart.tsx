export const EmptyCart = () => {
    return (
        <div className="flex h-24 w-full flex-col items-center justify-center rounded-e-lg py-2 text-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 23 24"
                className="h-24 text-gray-300"
            >
                <path
                    fill="currentColor"
                    d="M18.06 23h1.66c.84 0 1.53-.65 1.63-1.47L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26c1.44 1.42 2.43 2.89 2.43 5.29zM1 22v-1h15.03v1c0 .54-.45 1-1.03 1H2c-.55 0-1-.46-1-1m15.03-7C16.03 7 1 7 1 15zM1 17h15v2H1z"
                ></path>
            </svg>
            <p className="text-sm">Pedido vacío</p>
        </div>
    );
};
