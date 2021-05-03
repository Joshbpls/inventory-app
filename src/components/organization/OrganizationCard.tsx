import { OrganizationModel } from '../../api/model'
import { Card, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { Row } from '../layout/Row'

export interface OrganizationCardProps {
    organization: OrganizationModel
}

const useStyles = makeStyles({
    hovered: {
        transition: 'all .2s ease-in-out',
        transform: 'scale(1.03)',
        width: 400
    },
    default: {
        transition: 'all .2s ease-in-out',
        width: 400
    }
})

function OrganizationCard({ organization }: OrganizationCardProps) {

    const classes = useStyles()
    const history = useHistory()
    const [hovered, setHovered] = useState(false)

    const onClick = () => {
        history.push(`/orgs/${organization.id}`)
    }

    return (
        <Card className={hovered ? classes.hovered : classes.default} onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)} elevation={hovered ? 5 : 1} onClick={() => onClick()}>
            <CardContent>
                <CardHeader style={{ padding: 5, paddingBottom: 20 }} title={organization.name} />
                <Row justifyContent='flex-start'>
                    <div style={{ marginLeft: 5 }}>
                        <Typography>{organization.members.length + 1}</Typography>
                        <Typography variant='caption'>Members</Typography>
                    </div>
                    <div style={{ marginLeft: 50 }}>
                        <Typography>{organization.owner.name}</Typography>
                        <Typography variant='caption'>Owner</Typography>
                    </div>
                </Row>
                <div style={{ marginTop: 10, marginLeft: 5 }}>
                    <Typography variant='caption'>Click to view</Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default OrganizationCard