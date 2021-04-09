import { OrganizationModel } from '../../api/model'
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'

interface OrganizationCardProps {
    organization: OrganizationModel
}

function OrganizationCard({ organization }: OrganizationCardProps) {
    return (
        <Card onClick={() => {}}>
            <CardContent>
                <CardHeader title={organization.name} />
                <Typography>Click to view</Typography>
            </CardContent>
        </Card>
    )
}

export default OrganizationCard