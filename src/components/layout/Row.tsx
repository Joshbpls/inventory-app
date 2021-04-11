import { Box, BoxProps } from '@material-ui/core'

export interface RowProps extends BoxProps {
    center?: boolean
}

export function Row(props: RowProps) {
    return (
        <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center' {...props}>
            {props.children}
        </Box>
    )
}