import { InventoryItem } from '../../model/InventoryItem'
import { useRequest } from '../../hooks/useRequest'
import { BasicResponse } from '../../api/model'
import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import { updateItem } from '../../api/api'

interface ItemTableEditProps {
    target: InventoryItem
    onEditSuccess?: () => void
}

function ItemTableEditor({ target, onEditSuccess }: ItemTableEditProps) {

    const [request, sendRequest] = useRequest<BasicResponse>()
    const [amount, setAmount] = useState(target.amount)
    const [category, setCategory] = useState(target.category)

    useEffect(() => {
        const { response } = request
        if(response?.success) {
            onEditSuccess?.()
        }
    }, [request])

    const onQuantityChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const input = Number.parseInt(event.target.value)
        setAmount(input)
    }

    const onClickUpdate = () => {
        sendRequest(updateItem(target.id!, { amount, category }))
    }

    return (
        <Box margin={2}>
            <Typography style={{ fontWeight: 'bold' }}>Item Details</Typography>
            <Box marginTop={2} display='flex'>
                <Grid container spacing={2}>
                    <Grid item>
                        <TextField
                            disabled
                            label='Item #'
                            value={target.id}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            style={{ width: 100, marginRight: 10 }}
                            value={amount}
                            onChange={onQuantityChange}
                            type='number'
                            label='Stock'
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            label='Category'
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            color='primary'
                            variant='contained'
                            onClick={onClickUpdate}>
                            Update
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default ItemTableEditor