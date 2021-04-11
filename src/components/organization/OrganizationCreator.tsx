import { Button, Card, CardContent, CardHeader, TextField } from '@material-ui/core'
import { useRequest } from '../../hooks/useRequest'
import { useEffect, useState } from 'react'
import Loader from '../loading/Loader'
import { createOrganization } from '../../api/api'
import { BasicResponse } from '../../api/model'
import { ResponseErrorText } from '../alert/ErrorText'
import Column from '../layout/Column'

export interface OrganizationCreatorProps {
    onCreateSuccess: () => void
}

function OrganizationCreator({ onCreateSuccess }: OrganizationCreatorProps) {

    const [request, sendRequest] = useRequest<BasicResponse>()
    const [name, setName] = useState('')

    useEffect(() => {
        if (request.response?.success) {
            onCreateSuccess()
        }
    }, [request])

    const onClickSubmit = () => {
        sendRequest(createOrganization(name))
    }

    return (
        <Card>
            <CardContent style={{width: '350px', padding: 30}}>
                <Loader loading={request.loading} />
                <CardHeader title='Create Organization' />
                <ResponseErrorText response={request.response} />
                <Column>
                    <TextField
                        label='Organization Name'
                        placeholder='ABC Organization'
                        variant='outlined'
                        onChange={e => setName(e.target.value)}
                    />
                    <Button
                        style={{width: '120px', marginTop: '10px'}}
                        disabled={request.loading}
                        variant='contained'
                        color='primary'
                        onClick={onClickSubmit}>
                        Submit
                    </Button>
                </Column>
            </CardContent>
        </Card>
    )
}

export default OrganizationCreator