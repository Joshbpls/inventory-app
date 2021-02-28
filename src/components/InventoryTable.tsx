import {Table, TableBody, TableCell, TableHead, TablePagination, TableRow} from "@material-ui/core";
import {InventoryItem} from "../model/InventoryItem";
import {useState} from "react";


const ROWS_PER_PAGE = 5;

interface InventoryTableProps {
    items: InventoryItem[]
}

interface InventoryItemRowProps {
    item: InventoryItem
}

export function InventoryTable({ items }: InventoryTableProps) {

    const [page, setPage] = useState(0);

    function getVisibleItems() {
        const start = page * ROWS_PER_PAGE;
        let end = start + ROWS_PER_PAGE;
        if(end >= items.length) {
            end = items.length - 1;
        }
        return items.slice(start, end);
    }

    return (
        <Table>
            <TableHead>
                <TableRow style={{backgroundColor: "#f1f1f1"}}>
                    <TableCell>Name</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Category</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {getVisibleItems().map(element => <InventoryItemRow key={element.name} item={element} />)}
            </TableBody>
            <TablePagination
                count={items.length}
                onChangePage={(event, page) => setPage(page)}
                page={page}
                rowsPerPage={ROWS_PER_PAGE}
                rowsPerPageOptions={[]}
            />
        </Table>
    )
}

function InventoryItemRow({ item }: InventoryItemRowProps) {
    return (
        <TableRow>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.amount}</TableCell>
            <TableCell>{item.category || "N/A"}</TableCell>
        </TableRow>
    )
}