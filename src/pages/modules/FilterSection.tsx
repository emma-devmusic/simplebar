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
        <div id='sticky-div' className="sticky top-0 w-full bg-gray-50 shadow-sm ">
            <CategorySelector />
            <SubCategorySelector />
            <div className="px-4 py-2">
                <div className="relative flex w-full items-center">
                    <Input
                        label="Busca tus productos"
                        className="rounded-lg bg-gray-50"
                        isFloatingLabel
                        placeholder="Hamburguesa"
                        name="search"
                        value={inputValue}
                        onChange={handleInputChange}
                        size="sm"
                        inputClass="rounded-lg"
                        labelClass="rounded-lg !bg-gray-50"
                        type="text"
                        iconPosition="left"
                    />
                    <Search className="absolute right-3.5 h-4 w-4 text-gray-400" />
                </div>
            </div>
        </div>
    )
}

export default FilterSection