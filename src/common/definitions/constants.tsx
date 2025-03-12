
import { LayoutDashboard, List, Package, Settings, UserCircleIcon, UsersIcon } from "lucide-react";
import { ReactNode } from "react";
import { tdKey } from "../../types/table";

export interface SidebarLinks {
    label: string;
    icon?: ReactNode;
    href: string;
    childs?: SidebarLinks[]
}

const sizeIconsSidebar = 18

export const sidebarLinks: SidebarLinks[] = [
    {
        label: 'Pedidos',
        icon: <List size={sizeIconsSidebar} className="min-w-[18px]" />,
        href: '/orders'
    },
    {
        label: 'Tablero',
        icon: <LayoutDashboard size={sizeIconsSidebar} className="min-w-[18px]" />,
        href: "/",
    },
    {
        label: 'Productos',
        icon: <Package size={sizeIconsSidebar} className="min-w-[18px]" />,
        href: "/products",
    },
    {
        label: 'Usuarios',
        icon: <UsersIcon size={sizeIconsSidebar} className="min-w-[18px]" />,
        href: "/users",
    },
    {
        label: 'Mi Perfil',
        icon: <UserCircleIcon size={sizeIconsSidebar} className="min-w-[18px]" />,
        href: "/profile",
    },
    {
        label: 'Configuraciones',
        icon: <Settings size={sizeIconsSidebar} className="min-w-[18px]" />,
        href: "/settings",
    }
]

export const headerMapping: Record<tdKey, string> = {
    id: 'ID',
    name: 'Nombre',
    username: 'Usuario',
    last_name: 'Apellido',
    first_name: 'Primer Nombre',
    role: 'Rol',
    type: 'Tipo',
    email: 'Correo',
    phone: 'Teléfono',
    address: 'Dirección',
    price: 'Precio',
    stock: 'Stock',
    category: 'Categoría',
    sub_category: 'Sub Categoría',
    description: 'Descripción'
};




