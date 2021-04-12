import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core'
import { InventoryItem } from '../../model/InventoryItem'
import React, { useState } from 'react'
import ItemRow from './ItemRow'


const ROWS_PER_PAGE = 5

interface ItemTableProps {
    items: InventoryItem[]
    onEditSuccess: () => void
}

export function ItemTable({ items, onEditSuccess }: ItemTableProps) {

    const [page, setPage] = useState(0)

    function getVisibleItems() {
        const start = page * ROWS_PER_PAGE
        let end = start + ROWS_PER_PAGE
        if (end >= items.length) {
            end = items.length
        }
        return items.slice(start, end)
    }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell width={25} />
                        <TableCell>Name</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Category</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {getVisibleItems()
                        .map(element =>
                            <ItemRow key={element.name} item={element} onEditSuccess={onEditSuccess} />
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