import { makeStyles, Paper } from '@material-ui/core'
import RegistrationForm from './RegistrationForm'


const useStyles = makeStyles({
    root: {
        height: '100vh',
        background: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
        overflow: 'hidden'
    }
})


function RegistrationPage() {
    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <RegistrationForm />
        </Paper>
    )
}

export default RegistrationPage