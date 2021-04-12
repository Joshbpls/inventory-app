import { Box, Button, Card, CardContent, CardHeader, Dialog, Grid, Typography, withStyles } from '@material-ui/core'
import { ItemTable } from '../../components/table/ItemTable'
import NavigationBar from '../../components/navigation/NavigationBar'
import { useEffect, useState } from 'react'
import { InventoryItem } from '../../model/InventoryItem'
import PopupContent, { PopupContentType } from './PopupContent'
import { useParams } from 'react-router-dom'
import { BasicResponse } from '../../api/model'
import { getInventory } from '../../api/api'
import { useRequest } from '../../hooks/useRequest'

const SpacedButton = withStyles({
    root: {
        margin: 5
    }
})(Button)

export interface DashboardParams {
    id: string
}

interface GetItemsResponse extends BasicResponse {
    items: InventoryItem[]
}

function Dashboard() {

    const { id } = useParams<DashboardParams>()

    const [opened, setOpened] = useState<PopupContentType>('none')
    const [items, setItems] = useState<InventoryItem[]>([])
    const [request, sendRequest] = useRequest<GetItemsResponse>()

    const onItemCreate = () => {
        setOpened('none')
        sendRequest(getInventory(id))
    }

    const updateItems = () => sendRequest(getInventory(id))

    useEffect(() => {
        const { response } = request;
        if(response?.success) {
            setItems(response.items)
        }
    }, [request])

    useEffect(() => {
        sendRequest(getInventory(id))
    }, [id, sendRequest])

    return (
        <div style={{ padding: 50 }}>
            <Dialog open={opened !== 'none'} onClose={() => setOpened('none')}>
                <PopupContent
                    type={opened}
                    items={items}
                    onItemCreate={onItemCreate}
                    orgId={id}
                />
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
                            <ItemTable
                                onEditSuccess={updateItems}
                                items={items}
                            />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                    <Card elevation={0}>
                        <CardContent>
                            <CardHeader title='Recent Activity' />
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
        </Box>
    )
}

export default Dashboard