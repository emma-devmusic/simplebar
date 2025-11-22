import logo from '../../../assets/img/simplebar.png';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { uiModal } from '../../../redux/slices/uiSlice';

export const Navbar = () => {
    const { cartProducts } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();

    return (
        <header className="bg-white shadow-md" id='navbar'>
            <div className="mx-auto flex h-16 items-center px-4 sm:px-6 lg:px-8">
                <div className="flex w-full items-center justify-between gap-4">
                    <div>
                        <img
                            src={logo}
                            alt="Simplebar Logo"
                            className="h-7 lg:h-10"
                        />
                    </div>

                    {cartProducts.length > 0 && (
                        <div
                            className="relative flex items-center gap-4 p-2 lg:hidden"
                            onClick={() => {
                                dispatch(
                                    uiModal({
                                        modalFor: 'cart',
                                        modalTitle: 'Mi Pedido',
                                    })
                                );
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-7.5"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    className="text-gray-400"
                                    fill="currentColor"
                                    d="M6 13h9c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1V4H2c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1v2h13l-4 7H6zm-.5 3c.83 0 1.5.67 1.5 1.5S6.33 19 5.5 19S4 18.33 4 17.5S4.67 16 5.5 16m9 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5"
                                ></path>
                            </svg>
                            <span className="absolute top-0 right-0 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-danger text-xs font-bold text-white">
                                {cartProducts.length}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};
