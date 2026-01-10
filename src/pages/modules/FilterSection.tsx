import { ChangeEvent, useState } from 'react';
import CategorySelector from './CategorySelector';
import SubCategorySelector from './SubCategorySelector';
import { Search } from 'lucide-react';
import { Input, Button } from '../../components';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { get_order_by_id } from '../../redux/slices/orderSlice';

interface FilterSectionProps {
    inputValue: string;
    handleInputChange: (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => void;
    hideOrderSearch?: boolean;
}

const FilterSection = ({
    inputValue,
    handleInputChange,
    hideOrderSearch = false,
}: FilterSectionProps) => {
    const [orderSearchValue, setOrderSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { tenant_path, branch_path } = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleOrderSearch = () => {
        if (!tenant_path || !branch_path || !orderSearchValue.trim()) return;

        dispatch(
            get_order_by_id({
                path: `${tenant_path}/${branch_path}`,
                order_number: Number(orderSearchValue),
                setIsLoading,
                navigate,
            })
        );
    };

    const handleOrderInputChange = (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setOrderSearchValue(e.target.value);
    };

    return (
        <div
            id="sticky-div"
            className="sticky top-0 w-full bg-gray-50 shadow-sm dark:bg-neutral-950"
        >
            <CategorySelector />
            <SubCategorySelector />
            <div className="px-4 py-2 dark:border-[1px] dark:border-b-0 dark:border-neutral-800">
                <div className="relative flex w-full items-center">
                    <Input
                        label=""
                        className="rounded-lg bg-gray-50 dark:bg-neutral-900 dark:text-white"
                        placeholder="Búsquedar productos"
                        name="search"
                        value={inputValue}
                        onChange={handleInputChange}
                        size="sm"
                        inputClass="rounded-lg dark:bg-neutral-900 dark:text-white"
                        labelClass="rounded-lg !bg-gray-50 dark:!bg-neutral-900 dark:text-gray-300"
                        type="text"
                        iconPosition="left"
                    />
                    <Search className="absolute right-3.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                </div>
            </div>
            {!hideOrderSearch && (
                <div className="px-4 py-2 dark:border-[1px] dark:border-b-0 dark:border-neutral-800">
                    <div className="flex w-full flex-col gap-2 min-[400px]:flex-row lg:items-center lg:gap-2">
                        <div className="relative flex w-full items-center">
                            <Input
                                label=""
                                className="w-full rounded-lg bg-gray-50 dark:bg-neutral-900 dark:text-white"
                                placeholder="Buscar orden para modificarla"
                                name="orderSearch"
                                value={orderSearchValue}
                                onChange={handleOrderInputChange}
                                size="sm"
                                inputClass="rounded-lg dark:bg-neutral-900 dark:text-white"
                                labelClass="rounded-lg !bg-gray-50 dark:!bg-neutral-900 dark:text-gray-300"
                                type="number"
                                iconPosition="left"
                                disabled={isLoading}
                            />
                            <Search className="absolute right-3.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                        </div>
                        <Button
                            label="Buscar"
                            action={handleOrderSearch}
                            disabled={isLoading || !orderSearchValue.trim()}
                            className="w-full min-[400px]:w-auto"
                            size="sm"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterSection;
