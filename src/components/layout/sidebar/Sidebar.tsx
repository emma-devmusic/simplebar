import { sidebarLinks } from "../../../common/definitions/constants";
import logo from "../../../assets/img/isologo-ding-degraded.png"
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../redux/store";
import { toggleSidebar } from "../../../redux/slices/uiSlice";

export const Sidebar = () => {

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

    const dispatch = useAppDispatch();
    
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        dispatch(toggleSidebar())
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
        <div className={`absolute z-20 h-full md:relative left-0 top-0 flex md:hidden flex-col justify-between bg-white shadow-md transition-all w-64 min-w-64`}>
            <div className={`py-6 px-2 flex flex-col gap-5`}>
                <a
                    rel="noreferrer noopener"
                    href="/"
                    className="font-bold flex items-center justify-center">
                    <img src={logo} alt="Logo Ding" className='h-8' />
                    <p
                        className={`ml-2 font-bold text-xl flex ${isTop && "text-black"}`}
                    >
                        Ding
                    </p>
                </a>
                <ul className="flex flex-col gap-1.5">
                    {
                        sidebarLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleSmoothScroll(e, link.href)}
                                    className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 transition-all h-9 [&_span]:justify-start [&_span]:animate-slideRight hover:bg-[#e9e9f5] hover:text-[#18181a]`}
                                >
                                <span className="flex items-center gap-2">
                                    {link.icon} <span className="text-nowrap">{link.label}</span>
                                </span>
                                    
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};
