import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { useRequest } from '../../hooks/useRequest'
import { UserOrganizationResponse } from '../../api/model'
import NavigationBar from '../../components/navigation/NavigationBar'
import OrganizationCard from '../../components/organization/OrganizationCard'
import { useHistory } from 'react-router-dom'
import Loader from '../../components/loading/Loader'
import { getOrganizations } from '../../api/api'


function OrganizationPage() {

    const [request, sendRequest] = useRequest<UserOrganizationResponse>()
    const history = useHistory()

    useEffect(() => {
        if (request.error) {
            history.push('/login')
        }
    }, [history, request])

    useEffect(() => sendRequest(getOrganizations()), [sendRequest])

    return (
        <div style={{padding: 50}}>
            <Grid container spacing={5}>
                <Loader loading={request.loading} />
                <Grid item xs={2} md={2} lg={2}>
                    <NavigationBar />
                </Grid>
                <Grid container item xs={10} md={10} lg={10}>
                    {request.response?.orgs.map(element => <OrganizationCard organization={element} />)}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrganizationPage