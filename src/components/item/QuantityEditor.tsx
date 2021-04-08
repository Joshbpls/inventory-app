import { Button, Card, CardContent, Grid, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { InventoryItem } from '../../model/InventoryItem'
import { useState } from 'react'

export interface QuantityEditorProps {
    items: InventoryItem[]
}

type OperationType = 'add' | 'remove';

function QuantityEditor({ items }: QuantityEditorProps) {
    const [operationType, setOperationType] = useState<OperationType>('add')
    const [amount, setAmount] = useState<number>(0)
    return (
        <Card>
            <CardContent style={{padding: 25}}>
                <Grid container direction='column' spacing={2}>
                    <Grid item>
                        <Typography style={{marginBottom: 25}} variant='h5'>Quantity Editor</Typography>
                    </Grid>
                    <Grid item>
                        <Autocomplete
                            renderInput={params => <TextField {...params} label='Item' variant='outlined' />}
                            options={items}
                            getOptionLabel={option => option.name}
                            style={{ width: 300 }}
                        />
                    </Grid>
                    <Grid item>
                        <OperationSelector onChange={setOperationType} selected={operationType} />
                    </Grid>
                    <Grid item>
                        <TextField
                            style={{width: 300}}
                            variant='outlined'
                            label='Amount'
                            type='number'
                            value={amount}
                            onChange={event => setAmount(Number.parseInt(event.target.value))}
                        />
                    </Grid>
                    <Grid item>
                        <Button style={{marginTop: 10}} variant='contained' color='primary'>
                            Update
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

interface OperationSelectorProps {
    onChange: (type: OperationType) => void
    selected: OperationType
}

function OperationSelector({ onChange, selected }: OperationSelectorProps) {
    return (
        <Select
            style={{width: 300}}
            value={selected}
            onChange={event => onChange(event.target.value as OperationType)}
            variant='outlined'
        >
            <MenuItem value='add'>Add</MenuItem>
            <MenuItem value='remove'>Remove</MenuItem>
        </Select>
    )
}

export default QuantityEditor