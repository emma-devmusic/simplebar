import { sidebarLinks } from "../../../common/definitions/constants";
import { LinkItem } from "../../shared/LinkItem";
import logo from "../../../assets/img/isologo-ding-degraded.png"

export const Sidebar = () => {

    return (
        <div className={`absolute z-20 h-full md:relative left-0 top-0 flex md:hidden flex-col justify-between bg-white shadow-md transition-all w-64 min-w-64`}>
            <div className={`py-6 px-2 flex flex-col gap-5`}>
                <a
                    rel="noreferrer noopener"
                    href="/"
                    className="font-bold flex items-center justify-center">
                    <img src={logo} alt="Logo Ding" className='h-8' />
                    <p
                        className="ml-2 font-bold text-xl flex"
                    >
                        Ding
                    </p>
                </a>
                <ul className="flex flex-col gap-1.5">
                    {
                        sidebarLinks.map((link) => (
                            <li key={link.href}>
                                <LinkItem
                                    to={link.href}
                                    childs={link.childs}
                                    icon={link.icon}
                                    variant="sidebar"
                                    className={`transition-all h-9 [&_span]:justify-start [&_span]:animate-slideRight hover:bg-[#e9e9f5] hover:text-[#18181a]`}
                                >
                                    {link.label}
                                </LinkItem>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};
