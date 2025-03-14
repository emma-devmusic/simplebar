import { LogOut } from "lucide-react"
import { Avatar } from "../../../shared/Avatar"

export const LogoutButton = ({expanded, profileImg}: {expanded:boolean; profileImg: string}) => {


    return (
        <div
            className="inset-x-0 bottom-0 border-t border-gray-200 flex items-center justify-between hover:bg-gray-100 hover:cursor-pointer h-16"
        >
            {
                expanded &&
                <Avatar
                    img={profileImg}
                    title='Cerrar Sesión'
                />
            }
            <div className="">
                <LogOut size={20} className={expanded ? 'mr-6' : 'm-5.5'} />
            </div>
        </div>
    )
}
