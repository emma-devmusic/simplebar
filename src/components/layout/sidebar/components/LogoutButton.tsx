import { LogOut } from "lucide-react"
import { Avatar } from "../../../shared/Avatar"
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../redux/store";
import { logout } from "../../../../redux/slices/authSlice";

export const LogoutButton = ({expanded, profileImg}: {expanded:boolean; profileImg: string}) => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const handleLogout = () => {
        dispatch(logout({navigate}))
    }

    return (
        <div
            className="inset-x-0 bottom-0 border-t border-gray-200 flex items-center justify-between hover:bg-gray-100 hover:cursor-pointer h-16"
            onClick={handleLogout}
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
