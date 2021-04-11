import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, CardHeader, Dialog, Grid, Typography } from '@material-ui/core'
import { useRequest } from '../../hooks/useRequest'
import { OrganizationModel, UserOrganizationResponse } from '../../api/model'
import NavigationBar from '../../components/navigation/NavigationBar'
import { useHistory } from 'react-router-dom'
import Loader from '../../components/loading/Loader'
import { getOrganizations } from '../../api/api'
import OrganizationCard, { OrganizationCardProps } from '../../components/organization/OrganizationCard'
import OrganizationCreator from '../../components/organization/OrganizationCreator'
import { Add } from '@material-ui/icons'


function OrganizationCardGridItem(props: OrganizationCardProps) {
    return (
        <Grid item>
            <OrganizationCard {...props} />
        </Grid>
    )
}

function OrganizationPage() {

    const [request, sendRequest] = useRequest<UserOrganizationResponse>()
    const [creatorOpen, setCreatorOpen] = useState(false)
    const history = useHistory()

    useEffect(() => {
        if (request.error) {
            history.push('/login')
        }
    }, [history, request])

    useEffect(() => sendRequest(getOrganizations()), [sendRequest])

    return (
        <div style={{ padding: 50 }}>
            <Dialog open={creatorOpen} onClose={() => setCreatorOpen(false)}>
                <OrganizationCreator onCreateSuccess={() => sendRequest(getOrganizations())} />
            </Dialog>
            <Grid container spacing={5}>
                <Loader loading={request.loading} />
                <Grid item xs={2} md={2} lg={2}>
                    <NavigationBar />
                </Grid>
                <Grid item xs={10} md={10} lg={10}>
                    <Card elevation={0} style={{ height: '100%', padding: 15 }}>
                        <CardContent>
                            <CardActions style={{ float: 'right' }}>
                                <Button
                                    variant='outlined'
                                    color='primary'
                                    onClick={() => setCreatorOpen(true)}
                                    startIcon={<Add />}
                                >
                                    Create Organization
                                </Button>
                            </CardActions>
                            <CardHeader title='Your Organizations' />
                            <Box marginTop='15px'>
                                <PageContent orgs={request.response?.orgs} onButtonClick={() => setCreatorOpen(true)} />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

interface PageContentProps {
    orgs?: OrganizationModel[]
    onButtonClick: () => void
}

function PageContent({ orgs, onButtonClick }: PageContentProps) {
    if (orgs) {
        return <OrganizationCardList orgs={orgs} />
    }
    return <CreateOrganization onButtonClick={onButtonClick} />
}

function OrganizationCardList({ orgs }: { orgs: OrganizationModel[] }) {
    return (
        <Grid container spacing={3}>
            {orgs.map(org => <OrganizationCardGridItem key={org.id} organization={org} />)}
        </Grid>
    )
}

function CreateOrganization({ onButtonClick }: { onButtonClick: () => void }) {
    return (
        <Box display='flex' flexDirection='column' paddingTop='15%' alignItems='center' justifyContent='center'>
            <Typography variant='h5'>Hmmm, looks like you have no organizations</Typography>
            <Typography variant='h5'>Get started by creating one</Typography>
            <Button
                style={{ marginTop: 20 }}
                color='primary'
                variant='contained'
                onClick={onButtonClick}
            >
                Create
            </Button>
        </Box>
    )
}

export default OrganizationPage