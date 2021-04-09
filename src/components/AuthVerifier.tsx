import React, { useEffect } from 'react'
import { useRequest } from '../hooks/useRequest'
import { CircularProgress } from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import { BasicResponse } from '../api/model'
import { refresh } from '../api/api'

export interface AuthVerifierProps {
    children: React.ReactNode
}

export function AuthVerifier({ children }: AuthVerifierProps) {
    const [request, sendRequest] = useRequest<BasicResponse>()

    useEffect(() => {
        sendRequest(refresh())
    }, [sendRequest])

    if(request.loading) {
        return <CircularProgress />
    }
    if(request.error) {
        return <Redirect to='/login' />
    }
    if(request.response?.success) {
        return {children};
    }
}