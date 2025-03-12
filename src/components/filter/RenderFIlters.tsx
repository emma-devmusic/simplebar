import { ChevronDown } from "lucide-react";
import { Input } from "../form/Input";
import { NonTextFilterOption } from "../../types/table";

export const renderFilter = (
    opt: NonTextFilterOption,
    values: Record<string, any>,
    handleInputChange: (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => void
) => {
    switch (opt.type) {
        case 'checkbox':
            return (
                <Input
                    id={opt.id}
                    label={opt.label}
                    name={opt.id}
                    onChange={handleInputChange}
                    type="checkbox"
                    checked={values[opt.id]}
                    value={values[opt.id]}
                    key={opt.id}
                />
            );
        case 'number':
            return (
                <Input
                    id={opt.id}
                    label={opt.label}
                    name={opt.id}
                    onChange={handleInputChange}
                    type="number"
                    checked={values[opt.id]}
                    value={values[opt.id]}
                    placeholder="Número"
                    key={opt.id}
                    min={0}
                />
            );
        case 'date':
            return (
                <Input
                    id={opt.id}
                    label={opt.label}
                    name={opt.id}
                    onChange={handleInputChange}
                    type="date"
                    checked={values[opt.id]}
                    value={values[opt.id]}
                    key={opt.id}
                    isFloatingLabel
                />
            );
        case 'select':
            return (
                <div className="relative flex w-full items-center">
                    <select
                        id={opt.id}
                        aria-label={`Seleccionar ${opt.label}`}
                        value={values[opt.id]}
                        name={opt.id}
                        onChange={handleInputChange}
                        className="w-full [appearance:_none;] rounded-md border border-gray-200 bg-white p-2 px-2.5 py-2.5 text-sm text-gray-700 transition-all focus:outline-2 focus:outline-primary"
                    >
                        <option value="">{opt.label}</option>
                        {opt.selectOptions?.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-3 size-4" />
                </div>
            );
        default:
            return null;
    }
};
