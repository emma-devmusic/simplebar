import { PlusCircle, Trash2Icon } from "lucide-react";
import { Button } from "../../buttons/Button";
import { OrderItem } from "../../../types/orders";

interface OrderTableProps {
    items: OrderItem[];
    onAddProduct: () => void;
}

export const OrderTable: React.FC<OrderTableProps> = ({ items, onAddProduct }: OrderTableProps) => {
    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="text-left ">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Producto
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Precio ($)
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {items.length > 0 ? (
                        items.map((item, index) => (
                            <tr key={index}>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-800">
                                    <div className="flex items-center gap-3">
                                        <span>
                                            <Button
                                                action={() => console.log("Eliminar producto")}
                                                icon={<Trash2Icon className="h-4 w-4 " />}
                                                variant="plain-danger"
                                                label=""
                                                className="hover:bg-red-100"
                                            />
                                        </span>
                                        <p>{item.name}</p>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    ${item.unit_price.toLocaleString()}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={2}
                                className="whitespace-nowrap px-4 py-2 text-center text-gray-500"
                            >
                                No hay productos en la orden.
                            </td>
                        </tr>
                    )}

                    <tr>
                        <td
                            colSpan={2}
                            className="whitespace-nowrap px-4 py-2 text-center"
                        >
                            <Button
                                label="Agregar Producto"
                                icon={<PlusCircle className="h-4 w-4 text-primary" />}
                                variant="plain"
                                className="w-full !py-2"
                                action={onAddProduct}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
