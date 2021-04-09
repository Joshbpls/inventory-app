import { Backdrop, CircularProgress } from '@material-ui/core'


function Loader({ loading }: { loading: boolean }) {
    return (
        <Backdrop open={loading}>
            <CircularProgress />
        </Backdrop>
    )
}

export default Loader;