import { ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect, ReactNode } from 'react';

interface DropdownTypes {
    title: string;
    elements: ReactNode[];
}

export const Dropdown = ({ title, elements }: DropdownTypes) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <div className="inline-flex items-center overflow-hidden rounded-md border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-700 hover:cursor-pointer" onClick={toggleDropdown}>
                <div className="border-e px-4 py-2 text-sm text-gray-600  border-gray-300 border-none">
                    {title}
                </div>
                <div className="h-full p-2 text-gray-600">
                    <span className="sr-only">Menu</span>
                    <ChevronDown className='size-4' />
                </div>
            </div>
            {isOpen && (
                <div
                    className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
                    role="menu"
                >
                    <div className="p-2">
                        {elements.map((e, i) => (
                            <div
                                key={i}
                                className="block items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                role="menuitem"
                            >
                                {e}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
