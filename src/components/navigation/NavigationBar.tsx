import { Card, CardContent, Grid } from '@material-ui/core'
import NavigationElement, { NavigationElementProps } from './NavigationElement'
import DashboardIcon from '@material-ui/icons/Dashboard'
import GroupIcon from '@material-ui/icons/Group';
import ProfileInfo from './ProfileInfo'

function NavigationElementGridItem(props: NavigationElementProps) {
    return (
        <Grid item xs={12} md={12} lg={12}>
            <NavigationElement {...props} />
        </Grid>
    )
}

function NavigationBar() {
    return (
        <Card elevation={0} style={{height: '100%'}}>
            <CardContent>
                <Grid spacing={2} container direction='column'>
                    <Grid item>
                        <ProfileInfo name='Test' organization='Test'/>
                    </Grid>
                    <NavigationElementGridItem label='Dashboard' to='/dashboard' icon={<DashboardIcon />} />
                    <NavigationElementGridItem label='Organizations' to='/account' icon={<GroupIcon />} />
                </Grid>
            </CardContent>
        </Card>
    )
}

export default NavigationBar