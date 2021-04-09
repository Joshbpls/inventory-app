import { InventoryItem } from '../../model/InventoryItem'
import { Card, CardContent, CardHeader } from '@material-ui/core'

export interface ItemEditorProps {
    item?: InventoryItem
}

function ItemEditor({ item }: ItemEditorProps) {
    return (
        <Card>
            <CardContent style={{padding: 25}}>
                <CardHeader title='Item Editor'/>
            </CardContent>
        </Card>
    )
}

export default ItemEditor;