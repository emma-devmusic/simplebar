import { ChangeEvent } from 'react';
import CategorySelector from './CategorySelector';
import SubCategorySelector from './SubCategorySelector';
import SimpleSearchBox from '../../components/shared/SimpleSearchBox';

interface FilterSectionProps {
    inputValue: string;
    handleInputChange: (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => void;
}

const FilterSection = ({
    inputValue,
    handleInputChange,
}: FilterSectionProps) => {
    return (
        <div
            id="sticky-div"
            className="sticky top-0 w-full bg-gray-50 shadow-sm dark:bg-neutral-950"
        >
            <CategorySelector />
            <SubCategorySelector />
            <div className="px-4 py-2 dark:border-[1px] dark:border-b-0 dark:border-neutral-800">
                <SimpleSearchBox
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Buscar productos..."
                    name="search"
                    size="sm"
                />
            </div>
        </div>
    );
};

export default FilterSection;
