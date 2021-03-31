import { TextField, withStyles } from '@material-ui/core'


const SpacedTextField = withStyles({
    root: {
        marginBottom: 10,
        marginTop: 10
    }
})(TextField)

export default SpacedTextField;