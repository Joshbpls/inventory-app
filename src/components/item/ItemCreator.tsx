import { Button, Card, CardContent, CardHeader, Grid, TextField, TextFieldProps } from '@material-ui/core'
import { useRequest } from '../../hooks/useRequest'
import { useEffect, useState } from 'react'
import { ResponseErrorText } from '../alert/ErrorText'
import { BasicResponse } from '../../api/model'
import { createItem } from '../../api/api'

export interface ItemCreatorProps {
    orgId: string
    onItemCreate: () => void
}

function TextFieldGridItem(props: TextFieldProps) {
    return (
        <Grid item xs={12}>
            <TextField style={{ width: 300 }} {...props} />
        </Grid>
    )
}

/**
 * Ask professor if all passed down functions should use useCallback(() => {}, [])
 */

function ItemCreator({ orgId, onItemCreate }: ItemCreatorProps) {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [request, sendRequest] = useRequest<BasicResponse>()

    const onItemSubmit = () => {
        sendRequest(createItem({ organization: orgId, name, amount, category }))
    }

    const reset = () => {
        setName('')
        setAmount(0)
        setCategory('')
    }

    useEffect(() => {
        const { response } = request;
        if(response?.success) {
            onItemCreate()
            reset()
        }
    }, [request])

    return (
        <Card>
            <CardContent style={{ padding: 25 }}>
                <CardHeader title='Item Creator' />
                <ResponseErrorText response={request.response} />
                <Grid container direction='column' spacing={2}>
                    <TextFieldGridItem
                        variant='outlined'
                        label='Item Name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <TextFieldGridItem
                        variant='outlined'
                        label='Current Amount'
                        type='number'
                        value={amount}
                        onChange={e => setAmount(Number.parseInt(e.target.value))}
                    />
                    <TextFieldGridItem
                        variant='outlined'
                        label='Category'
                        placeholder='N/A'
                        InputProps={{ inputProps: { min: 0 } }}
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    />
                    <Grid item xs={12}>
                        <Button
                            color='primary'
                            variant='contained'
                            style={{ width: 150 }}
                            onClick={() => onItemSubmit()}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default ItemCreator