import { Backdrop, CircularProgress } from '@material-ui/core'


function Loader({ loading }: { loading: boolean }) {
    return (
        <Backdrop style={{ zIndex: 2 }} open={loading}>
            <CircularProgress style={{ color: 'white' }} />
        </Backdrop>
    )
}

export default Loader