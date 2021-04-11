import { OrganizationModel } from '../../api/model'
import { Card, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

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
                <CardHeader title={organization.name} />
                <Typography>Owner: {organization.owner.name}</Typography>
                <Typography>Members: {organization.members.length + 1} </Typography>
                <Typography variant='caption'>Click to view</Typography>
            </CardContent>
        </Card>
    )
}

export default OrganizationCard