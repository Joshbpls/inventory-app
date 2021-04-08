import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Dialog,
    Grid,
    Typography, withStyles
} from '@material-ui/core'
import { ItemTable } from '../../components/table/ItemTable'
import NavigationBar from '../../components/navigation/NavigationBar'
import { useState } from 'react'
import { InventoryItem } from '../../model/InventoryItem'
import PopupContent, { PopupContentType } from './PopupContent'

const SpacedButton = withStyles({
    root: {
        margin: 5
    }
})(Button)

export interface DashboardProps {
    items: InventoryItem[]

}

function Dashboard() {

    const [editing, setEditing] = useState<InventoryItem>()
    const [opened, setOpened] = useState<PopupContentType>('none')

    return (
        <div>
            <Dialog open={opened !== 'none'} onClose={() => setOpened('none')}>
                <PopupContent type={opened} items={[]} item={editing} />
            </Dialog>
            <Grid container spacing={5}>
                <Grid item xs={2} md={2} lg={2}>
                    <NavigationBar />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Card elevation={0}>
                        <CardContent>
                            <Box flexDirection='row' display='flex' justifyContent='space-between' padding={2}>
                                <Typography variant='h5'>Inventory Content</Typography>
                                <TableButtons setPopupContentType={setOpened} />
                            </Box>
                            <ItemTable items={[]} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                    <Card elevation={0}>
                        <CardContent>
                            <CardHeader title='Notifications' />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

function TableButtons({ setPopupContentType }: { setPopupContentType: (type: PopupContentType) => void }) {
    return (
        <Box>
            <SpacedButton
                color='primary'
                variant='contained'
                onClick={() => setPopupContentType('creator')}>
                Create
            </SpacedButton>
            <SpacedButton
                color='primary'
                variant='contained'
                onClick={() => setPopupContentType('operation')}>
                Edit
            </SpacedButton>
        </Box>
    )
}

export default Dashboard