import { ReactNode } from "react";

interface LayoutViewProps {
    title: string;
    children: ReactNode;
}

export const LayoutView = ({ title, children }: LayoutViewProps) => {

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl mt-8 text-center dark:text-white">{title}</h2>
            <div className="flex flex-col gap-8">
                {children}
            </div>
        </div>
    )
}
