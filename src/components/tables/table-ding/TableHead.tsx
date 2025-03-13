
import { useCallback } from "react";
import { Input } from "../../form/Input"

interface TableHeadProps {
    headers: string[];
    handleSelectAll?: (e: any) => void;
    items?: any[];
    isChecked?: boolean;
}

export const TableHead = ({ headers, handleSelectAll, items, isChecked = false }: TableHeadProps) => {

    const handleCheckboxValue = useCallback(() => {
        if (handleSelectAll && items) {
            handleSelectAll((state: any) => {
                if (state.length === items.length) {
                    return [];
                }
                return items.map((e: any) => e.id);
            });
        }
    }, [handleSelectAll, items]);


    return (
        <thead className="ltr:text-left rtl:text-right">
            <tr>
                {
                    handleSelectAll &&
                    <th className="px-4 py-2 font-bold whitespace-nowrap text-gray-900 w-min">
                        <Input
                            label=""
                            type="checkbox"
                            className="text-blue-600"
                            id="selectAll"
                            name="selectAll"
                            value={`checkboxValue-all`}
                            checked={isChecked}
                            onChange={handleCheckboxValue}
                        />
                    </th>
                }
                {
                    headers.map(e => (
                        <th className="px-4 py-2 font-bold whitespace-nowrap text-gray-900" key={e}>{e}</th>
                    ))
                }
            </tr>
        </thead>
    )
}
