import React, { useState } from 'react'
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons'
import { Collapse, IconButton, TableCell, TableRow } from '@material-ui/core'
import { InventoryItem } from '../../model/InventoryItem'
import ItemTableEditor from './ItemTableEditor'

export interface ItemRowProps {
    item: InventoryItem
    onEditSuccess: () => void
}

function ItemRow({ item, onEditSuccess }: ItemRowProps) {

    const [collapse, setCollapsed] = useState(false)

    const getIcon = () => collapse ? <ArrowDropUp /> : <ArrowDropDown />

    return (
        <React.Fragment>
            <TableRow>
                <TableCell>
                    <IconButton onClick={() => setCollapsed(!collapse)}>
                        {getIcon()}
                    </IconButton>
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell>{item.category || 'N/A'}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={collapse}>
                        <ItemTableEditor onEditSuccess={onEditSuccess} target={item} />
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

export default ItemRow