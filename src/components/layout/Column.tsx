import { Box, BoxProps } from '@material-ui/core'

function Column(props: BoxProps) {
    return (
        <Box display='flex' flexDirection='column' {...props}>
            {props.children}
        </Box>
    )
}

export default Column