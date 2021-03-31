import { useCallback, useState } from 'react'
import { AxiosError } from 'axios'

interface Request<T> {
    loading: boolean
    response?: T | null
    error?: AxiosError | null
}

export const useRequest = <T>(): [Request<T>, (request: Promise<T>) => void] => {

    const [request, setRequest] = useState<Request<T>>({ loading: false })

    const sendRequest = useCallback((request: Promise<T>) => {
        setRequest({ loading: true })
        request.then(response => setRequest({ loading: false, response }))
            .catch(error => setRequest({ loading: false, error }))
    }, [])

    return [request, sendRequest]
}