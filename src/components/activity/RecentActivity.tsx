import { InventoryEvent } from '../../model/InventoryEvent'
import {
    Card,
    CardContent,
    CardHeader,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Typography
} from '@material-ui/core'
import React from 'react'
import { Refresh } from '@material-ui/icons'
import moment from 'moment'


export interface RecentActivityProps {
    events: InventoryEvent[]
    onClickRefresh?: () => void
}

function RecentActivity({ events, onClickRefresh }: RecentActivityProps) {
    return (
        <Card elevation={0}>
            <CardContent>
                <CardHeader
                    title='Recent Activity'
                    action={
                        <IconButton onClick={onClickRefresh}>
                            <Refresh />
                        </IconButton>
                    }
                />
                <List>
                    {events.map(e => <ActivityItem event={e} />)}
                </List>
            </CardContent>
        </Card>
    )
}

function ActivityItem({ event }: { event: InventoryEvent }) {
    return (
        <React.Fragment>
            <ListItem alignItems='flex-start'>
                <ListItemText
                    primary={event.user.name}
                    secondary={<Typography variant='caption'>{event.action} {moment(event.timestamp).calendar()}</Typography>}
                />
            </ListItem>
            <Divider />
        </React.Fragment>
    )
}

export default RecentActivity