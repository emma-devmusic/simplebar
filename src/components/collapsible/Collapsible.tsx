import { ReactNode } from "react"


interface CollapsibleProps {
    name: ReactNode;
    children: ReactNode;
}

export const Collapsible = ({name, children}:CollapsibleProps) => {
    return (
        <details className="group [&_summary::-webkit-details-marker]:hidden  rounded-md border-[1px] border-gray-200 bg-zinc-50">
            <summary
                className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg hover:bg-blue-50  transition-all p-4 text-gray-900"
            >
                <div className="font-medium">
                    {name}
                </div>

                <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </summary>

            <div className="p-4 leading-relaxed text-gray-700">
                {children}
            </div>
        </details>
    )
}
