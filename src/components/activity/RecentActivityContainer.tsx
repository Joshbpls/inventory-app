import { useCallback, useEffect, useState } from 'react'
import { InventoryEvent } from '../../model/InventoryEvent'
import { useRequest } from '../../hooks/useRequest'
import { getEventList } from '../../api/api'
import RecentActivity from './RecentActivity'

interface RecentActivityResponse {
    success: boolean
    message?: string
    events?: InventoryEvent[]

}

function RecentActivityContainer({ org }: { org: string }) {
    const [request, sendRequest] = useRequest<RecentActivityResponse>()
    const [events, setEvents] = useState<InventoryEvent[]>([])

    const refresh = () => sendRequest(getEventList(org));

    useEffect(() => {
        setEvents(request.response?.events || [])
    }, [request])

    useEffect(() => {
        sendRequest(getEventList(org))
    }, [org, sendRequest])

    return <RecentActivity events={events} onClickRefresh={refresh}/>
}

export default RecentActivityContainer