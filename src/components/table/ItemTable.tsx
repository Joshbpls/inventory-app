import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core'
import { InventoryItem } from '../../model/InventoryItem'
import { useState } from 'react'


const ROWS_PER_PAGE = 5

interface ItemTableProps {
    items: InventoryItem[]
}

interface ItemRowProps {
    item: InventoryItem
}

export function ItemTable({ items }: ItemTableProps) {

    const [page, setPage] = useState(0)

    function getVisibleItems() {
        const start = page * ROWS_PER_PAGE
        let end = start + ROWS_PER_PAGE
        if (end >= items.length) {
            end = items.length - 1
        }
        return items.slice(start, end)
    }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Category</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {getVisibleItems().map(element => <ItemRow key={element.name} item={element} />)}
                </TableBody>
                <TablePagination
                    count={items.length}
                    onChangePage={(event, page) => setPage(page)}
                    page={page}
                    rowsPerPage={ROWS_PER_PAGE}
                    rowsPerPageOptions={[]}
                />
            </Table>
        </TableContainer>
    )
}

function ItemRow({ item }: ItemRowProps) {
    return (
        <TableRow>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.amount}</TableCell>
            <TableCell>{item.category || 'N/A'}</TableCell>
        </TableRow>
    )
}