import logo from "../../../assets/img/isologo-ding-degraded.png"
import { /*Github, */Menu } from 'lucide-react';
import { Sidebar } from "../../../components/layout";
import { SidebarLinks, sidebarLinks } from "../../../common/definitions/constants";
import OffsetCanvas from "../../../components/offser-canvas/OffsetCanvas";
import { RootState, useAppDispatch, useAppSelector } from "../../../redux/store";
import { toggleSidebar } from "../../../redux/slices/uiSlice";



const Navbar = () => {

    const { sidebarOpen } = useAppSelector((state: RootState) => state.ui)
    const dispatch = useAppDispatch()

    return (
        <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white">
            {sidebarOpen && <OffsetCanvas><Sidebar /></OffsetCanvas>}
            <nav className="relative z-10 flex max-w-max flex-1 items-center justify-center mx-auto">
                <div className="group flex-1 list-none items-center space-x-1 container h-14 px-4 w-screen flex justify-between">
                    <a
                        rel="noreferrer noopener"
                        href="/" className="font-bold flex items-center">
                        <img src={logo} alt="Logo Ding" className='h-8' />
                        <p
                            className="ml-2 font-bold text-xl flex"
                        >
                            Ding
                        </p>
                    </a>


                    <span className="flex md:hidden">
                        <Menu className="cursor-pointer" onClick={() => dispatch(toggleSidebar())} />
                    </span>

                    {/* desktop */}
                    <ul className="hidden md:flex gap-3">
                        {sidebarLinks.map((route: SidebarLinks, i) => (
                            <li>
                                <a
                                    rel="noreferrer noopener"
                                    href={route.href}
                                    key={i}
                                    className={`text-base font-semibold rounded-lg p-2 hover:bg-[#e9e9f5] hover:text-[#18181a]`}
                                >
                                    {route.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* <div className="hidden md:flex gap-2">
                        <a
                            rel="noreferrer noopener"
                            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
                            target="_blank"
                            className={`border `}
                        >
                            <Github className="mr-2 w-5 h-5" />
                            Github
                        </a>
                    </div> */}
                </div>
            </nav>
        </header>
    )
}

export default Navbar