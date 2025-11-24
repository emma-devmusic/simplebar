import { ChangeEvent } from 'react'
import CategorySelector from './CategorySelector'
import SubCategorySelector from './SubCategorySelector'
import { Search } from 'lucide-react'
import { Input } from '../../components'

interface FilterSectionProps {
    inputValue: string,
    handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
}

const FilterSection = ({inputValue, handleInputChange}: FilterSectionProps) => {
    return (
        <div id='sticky-div' className="sticky top-0 w-full bg-gray-50 shadow-sm dark:bg-neutral-950">
            <CategorySelector />
            <SubCategorySelector />
            <div className="px-4 py-2 dark:border-[1px] dark:border-neutral-800 dark:border-b-0">
                <div className="relative flex w-full items-center">
                    <Input
                        label=""
                        className="rounded-lg bg-gray-50 dark:bg-neutral-900 dark:text-white"
                        placeholder="Búsqueda..."
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
        </div>
    )
}

export default FilterSection