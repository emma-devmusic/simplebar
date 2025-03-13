
import { products_obj } from '../../../common/mocks/products'
import { TableDing } from '../table-ding/TableDing'

export const ProductsTable = () => {
    return (
        <TableDing
            columns={['name', 'price', 'category', 'description']}
            td={products_obj}
            withActionsRow
            getItemsSelected={(e) => console.log(e)}
        />
    )
}
