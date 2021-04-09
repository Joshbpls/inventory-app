import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from '@material-ui/core'
import { InventoryItem } from '../../model/InventoryItem'
import { useState } from 'react'
import { Edit } from '@material-ui/icons'


const ROWS_PER_PAGE = 5

interface ItemTableProps {
    items: InventoryItem[]
    onActionClick: (clicked: InventoryItem) => void
}

interface ItemRowProps {
    item: InventoryItem
    onActionClick: (clicked: InventoryItem) => void
}

export function ItemTable({ items, onActionClick }: ItemTableProps) {

    const [page, setPage] = useState(0)

    function getVisibleItems() {
        const start = page * ROWS_PER_PAGE
        let end = start + ROWS_PER_PAGE
        if (end >= items.length) {
            end = items.length;
        }
        return items.slice(start, end)
    }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={2}>Name</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell align='right'>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {getVisibleItems()
                        .map(element =>
                            <ItemRow key={element.name} item={element} onActionClick={onActionClick} />
                        )}
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

function ItemRow({ item, onActionClick }: ItemRowProps) {
    return (
        <TableRow>
            <TableCell colSpan={2}>{item.name}</TableCell>
            <TableCell>{item.amount}</TableCell>
            <TableCell>{item.category || 'N/A'}</TableCell>
            <TableCell align='right'>
                <IconButton onClick={() => onActionClick(item)}>
                    <Edit />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}