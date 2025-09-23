import logo from "../../../assets/img/isologo-ding-degraded.png";
import { /*Github, */ Menu } from 'lucide-react';
import { Sidebar } from "../../../components/layout";
import { SidebarLinks, sidebarLinks } from "../../../common/definitions/constants";
import OffsetCanvas from "../../../components/offser-canvas/OffsetCanvas";
import { RootState, useAppDispatch, useAppSelector } from "../../../redux/store";
import { toggleSidebar } from "../../../redux/slices/uiSlice";
import { useEffect, useState } from "react";

const Navbar = () => {
    const { sidebarOpen } = useAppSelector((state: RootState) => state.ui);
    const dispatch = useAppDispatch();

    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY === 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);

        if (targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offset = 7 * 16;
            const finalPosition = elementPosition - offset;

            window.scrollTo({
                top: finalPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <header
            className={`fixed transition-colors duration-500 top-0 z-40 w-full ${
                isTop
                    ? "bg-transparent border-transparent text-white"
                    : "bg-white shadow-md py-2 border-gray-200 border-b-[0.5px]"
            }`}
        >
            {sidebarOpen && (
                <OffsetCanvas>
                    <Sidebar />
                </OffsetCanvas>
            )}
            <nav className="relative z-10 flex max-w-max flex-1 items-center justify-center mx-auto">
                <div className="group flex-1 list-none items-center space-x-1 container h-14 px-4 w-screen flex justify-between">
                    <a rel="noreferrer noopener" href="/" className="font-bold flex items-center">
                        <img src={logo} alt="Logo Ding" className="h-8" />
                        <p className="ml-2 font-bold text-xl flex">Ding</p>
                    </a>

                    <span className="flex md:hidden">
                        <Menu className="cursor-pointer" onClick={() => dispatch(toggleSidebar())} />
                    </span>

                    {/* desktop */}
                    <ul className="hidden md:flex gap-3">
                        {sidebarLinks.map((route: SidebarLinks) => (
                            <li key={route.href}>
                                <a
                                    rel="noreferrer noopener"
                                    href={route.href}
                                    onClick={(e) => handleSmoothScroll(e, route.href)}
                                    className={`text-base font-semibold rounded-lg p-2 hover:bg-[#e9e9f5] hover:text-[#18181a]`}
                                >
                                    {route.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
