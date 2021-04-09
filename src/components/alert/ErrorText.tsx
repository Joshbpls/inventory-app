import { Typography } from '@material-ui/core'
import { BasicResponse } from '../../api/model'

export interface ErrorTextProps {
    visible: boolean
    message: string
}

function ErrorText({ visible, message }: ErrorTextProps) {
    if (visible) {
        return (
            <Typography color='error'>{message}</Typography>
        )
    }
    return null
}

export interface ResponseErrorTextProps {
    response?: BasicResponse | null
}

export function ResponseErrorText({ response }: ResponseErrorTextProps) {

    const isVisible = () => {
        return (response != null && !response.success)
    }

    return <ErrorText visible={isVisible()} message={response?.message || "Error"} />
}

export default ErrorText