import { Search } from 'lucide-react';
import { Input } from '../form/Input';
import { useEffect } from 'react';
import { Dropdown } from './Dropdown';
import { useForm } from '../../hooks/useForm';
import { NonTextFilterOption, TextFilterOption } from '../../types/table';
import { renderFilter } from './RenderFIlters';

interface FilterProps {
    options: [TextFilterOption, ...NonTextFilterOption[]];
    getQuery: (query: string) => void;
    isLoading?: boolean;
}

export const Filter = ({ options, getQuery, isLoading }: FilterProps) => {
    const initialFilters = options.reduce(
        (acc, option) => {
            acc[option.id] = '';
            if (option.type === 'date') {
                acc[option.id] = '';
            }
            return acc;
        },
        {} as Record<string, any>
    );

    const [values, handleInputChange] = useForm(initialFilters);

    const dropdownElements = options
        .filter((opt) => opt.type !== 'text')
        .map((e) => renderFilter(e, values, handleInputChange));

    useEffect(() => {
        const searchParams = new URLSearchParams();
        Object.entries(values).forEach(([key, value]) => {
            if (value) {
                if (typeof value === 'boolean') {
                    searchParams.append(key, values[options[0].id]);
                } else {
                    searchParams.append(key, value);
                }
            }
        });
        getQuery(searchParams.toString());
    }, [values, getQuery]);

    return (
        <div className="flex w-full items-end gap-4" tabIndex={2}>
            {options.map(
                (opt) =>
                    opt.type === 'text' && (
                        <div
                            className="relative flex w-full items-center"
                            key={opt.id}
                        >
                            <Input
                                label={opt.label}
                                name={opt.id}
                                onChange={(e) => handleInputChange(e)}
                                type="text"
                                isFloatingLabel
                                value={values[opt.id]}
                                placeholder=""
                                size="md"
                                disabled={isLoading}
                            />
                            <Search className="absolute right-4 size-5 text-gray-400 hover:cursor-pointer hover:text-gray-500" />
                        </div>
                    )
            )}
            <Dropdown title="Filtros" elements={dropdownElements} />
        </div>
    );
};
