import { Card, CardContent, Grid } from '@material-ui/core'
import NavigationElement, { NavigationElementProps } from './NavigationElement'
import ProfileInfo from './ProfileInfo'
import { Group, Input } from '@material-ui/icons'
import { setToken } from '../../api/api'

function NavigationElementGridItem(props: NavigationElementProps) {
    return (
        <Grid item xs={12} md={12} lg={12}>
            <NavigationElement {...props} />
        </Grid>
    )
}

function NavigationBar() {

    return (
        <Card elevation={0} style={{ height: '90vh' }}>
            <CardContent style={{ height: '100%' }}>
                <Grid spacing={2} container direction='column' justify='space-between'>
                    <Grid item>
                        <ProfileInfo organization='Inventory Manager' />
                    </Grid>
                    <NavigationElementGridItem label='Organizations' to='/' icon={<Group />} />
                    <NavigationElementGridItem
                        label='Logout'
                        to='/login'
                        icon={<Input />}
                        onClick={() => setToken('')}
                    />
                </Grid>
            </CardContent>
        </Card>
    )
}


export default NavigationBar