import { Link } from "react-router-dom";
import { SidebarLinks } from "../../common/definitions/constants";
import { ReactNode } from "react";

interface LinkItemProps {
    to: string;
    children: React.ReactNode;
    variant?: "navbar" | "sidebar" | "text"; // Variantes
    className?: string;
    childs?: SidebarLinks[]; // Menú de subcategorías para páginas con menús laterales
    icon?: ReactNode;
}

export const LinkItem = ({ to, children, variant = "text", className, childs, icon }: LinkItemProps) => {

    const variantStyles = {
        navbar: "text-white font-bold px-4 py-2",
        sidebar: "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",
        text: "text-gray-700 underline hover:text-primary-hover",
    };
    const variantClass = variantStyles[variant];

    if (childs) {
        return (
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                    className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                    <div className="flex items-center gap-2">
                        {icon}
                        <span className="text-sm font-medium">{children}</span>
                    </div>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                    {
                        childs.map((child: SidebarLinks) => (
                            <li key={child.href}>
                                <LinkItem to={child.href} variant={'sidebar'} >
                                    <div className="flex items-center gap-2">
                                        {child.label}
                                    </div>
                                </LinkItem>
                            </li>
                        ))
                    }
                </ul>
            </details>
        )
    }
    return (
        <Link
            to={to}
            className={`${variantClass} ${className}`}
        >
            <span className="flex items-center gap-2">
                {icon && icon}
                { children && <span className="text-nowrap">{children}</span> }
            </span>
        </Link>
    );
};
