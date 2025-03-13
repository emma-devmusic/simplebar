import { Avatar } from "../../shared/Avatar";
import logo from '../../../assets/img/isologo-ding-degraded.png'
import { Button } from "../../buttons/Button";
export const Navbar = () => {
    return (
        <header className="bg-white border-[1px] border-gray-200">
            <div className="h-20 flex items-center mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 justify-between w-full">
                    <div>
                        <Avatar
                            img={logo}
                            title="Ding"
                            subTitle="food"
                            className="text-gray-700"
                            titleClass="relative text-2xl top-1"
                            subTitleClass="relative -top-1 left-[3px]"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <Button
                            label="Nueva Venta"
                            action={() => console.log('Nueva Venta')}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};
