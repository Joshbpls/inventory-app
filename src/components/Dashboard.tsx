import {Card, CardContent, CardHeader, Grid} from "@material-ui/core";


function Dashboard() {
    return (
        <Grid container spacing={5}>
            <Grid item xs={12} md={3} lg={3}>
                <Card>
                    <CardContent>
                        <CardHeader title="Hello"/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Card>
                    <CardContent>
                        <CardHeader title="Inventory Table"/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
                <Card>
                    <CardContent>
                        <CardHeader title="Notifications"/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                <Card>
                    <CardContent>
                        <CardHeader title="Status"/>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Dashboard;