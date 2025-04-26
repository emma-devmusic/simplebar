
import { CircleDollarSign, MessageSquareText, MessagesSquare, MonitorCog } from "lucide-react";
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
        label: 'Características',
        icon: <MonitorCog size={sizeIconsSidebar} className="min-w-[18px]" />,
        href: '#features'
    },
    {
        label: 'Testimonios',
        icon: <MessageSquareText size={sizeIconsSidebar} className="min-w-[18px]" />,
        href: "#testimonials",
    },
    {
        label: 'Precios',
        icon: <CircleDollarSign size={sizeIconsSidebar} className="min-w-[18px]" />,
        href: "#pricing",
    },
    {
        label: 'FAQ',
        icon: <MessagesSquare size={sizeIconsSidebar} className="min-w-[18px]" />,
        href: "#faq",
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




