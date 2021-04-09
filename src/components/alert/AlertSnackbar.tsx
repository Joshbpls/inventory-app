import { Snackbar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Alert, Color } from '@material-ui/lab'

export interface AlertSnackbarProps {
    message: string
    severity: Color
}

function AlertSnackbar({ message, severity }: AlertSnackbarProps) {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (message !== '') {
            setOpen(true)
        }
    }, [message, severity])

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
            <Alert severity={severity}>
                {message}
            </Alert>
        </Snackbar>
    )
}

export default AlertSnackbar