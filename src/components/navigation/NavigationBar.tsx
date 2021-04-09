import { Card, CardContent, Grid } from '@material-ui/core'
import NavigationElement, { NavigationElementProps } from './NavigationElement'
import ProfileInfo from './ProfileInfo'
import { OrganizationData } from '../../api/model'
import { AccountBox, Group } from '@material-ui/icons'

export interface NavigationBarProps {
    firstName: string
    organizations: OrganizationData[]
}

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
                        <ProfileInfo name='User' organization='Colo Inv.'/>
                    </Grid>
                    <NavigationElementGridItem label='Organizations' to='/' icon={<Group />} />
                    <NavigationElementGridItem label='Account' to='/account' icon={<AccountBox />} />
                </Grid>
            </CardContent>
        </Card>
    )
}


export default NavigationBar