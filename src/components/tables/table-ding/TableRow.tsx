import { ActionButton } from '../../../types/form';
import { tdKey } from '../../../types/table';
import { Button } from '../../buttons/Button'
import { Edit2 } from 'lucide-react'
import { Input } from '../../form/Input';
import { memo, useCallback } from 'react';

type T = Record<tdKey, any>

interface TableRowProps<T> {
    td: T;
    columns: (keyof T)[]; // Lista de claves dinámicas a mostrar
    actionsDefault?: boolean;
    actions?: ActionButton[];
    withActions: boolean;
    handleSelectItem?: (e: any) => void;
    isChecked?: boolean;
}

export const TableRow = memo(({ actions, actionsDefault = true, td, columns, withActions, handleSelectItem, isChecked = false }: TableRowProps<T>) => {

    const handleActionDefault = () => {
        alert('Pasa las acciones a la tabla de la siguiente manera: actions={actions} y con el tipo ActionButton[], donde actions es un array de objetos con las propiedades: label, action, icon, variant, type, disabled')
    }

    const handleCheckboxValue = useCallback(() => {
        if (handleSelectItem) {
            handleSelectItem((state: any) => {
                if (state.includes(td.id)) {
                    return state.filter((id: any) => id !== td.id);
                }
                return [...state, td.id];
            });
        }
    }, [td.id, handleSelectItem]);

    return (
        <tr className='hover:bg-background-hover'>
            {
                handleSelectItem &&
                <td className='px-4 py-2 font-medium whitespace-nowrap text-gray-900 w-12'>
                    <Input
                        label=""
                        type="checkbox"
                        id="selectAll"
                        name="selectAll"
                        value={`checkboxValue-${td.id}`}
                        checked={isChecked}
                        onChange={handleCheckboxValue}
                    />
                </td>
            }
            {columns.map((colKey) => (
                <td key={colKey as string} className="px-4 py-2 font-medium whitespace-nowrap text-gray-900 max-w-24 w-fit truncate">
                    {td[colKey]}
                </td>
            ))}
            <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {
                    withActions && actions
                        ? actions.map((btn, i) => (
                            <Button
                                key={i}
                                action={() => btn.action(td.id)}
                                label={btn.label}
                                className={btn.className}
                                disabled={btn.disabled}
                                icon={btn.icon}
                                type={btn.type}
                                variant={btn.variant}
                            />
                        ))
                        : withActions && actionsDefault && <>
                            <Button
                                label=""
                                icon={<Edit2 className="h-5" />}
                                variant="plain-primary"
                                action={handleActionDefault}
                            />
                        </>
                }
            </td>
        </tr>
    )
})

TableRow.displayName = 'TableRow';