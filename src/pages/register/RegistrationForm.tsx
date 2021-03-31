import { useState } from 'react'
import { Button, CardActions, Grid, makeStyles, Typography } from '@material-ui/core'
import LandingPageCard from '../LandingPageCard'
import { Link } from 'react-router-dom'
import SpacedTextField from '../../components/SpacedTextField'

interface RegistrationFormFields {
    email?: string
    password?: string
    firstName?: string
    lastName?: string
}

const useStyles = makeStyles({
    headerText: {
        fontWeight: 'bold',
        marginBottom: 10
    }
})


function LoginLink() {
    return (
        <Link to='/login'>
            <Typography color='primary' style={{ display: 'inline' }}>Sign in</Typography>
        </Link>
    )
}

function RegistrationForm() {

    const classes = useStyles()
    const [form, setForm] = useState<RegistrationFormFields>()

    const onSubmit = () => {

    }

    return (
        <LandingPageCard>
            <div style={{ marginBottom: 10 }}>
                <Typography className={classes.headerText} variant='h4'>Register</Typography>
                <Typography>Already have an account? <LoginLink /></Typography>
            </div>
            <Grid container direction='row' spacing={2}>
                <Grid item xs={6}>
                    <SpacedTextField
                        label='First Name'
                        variant='outlined'
                    />
                </Grid>
                <Grid item xs={6}>
                    <SpacedTextField
                        label='Last Name'
                        variant='outlined'
                    />
                </Grid>
            </Grid>
            <SpacedTextField
                fullWidth
                required
                label='Email'
                variant='outlined'
                onChange={e => setForm({ ...form, email: e.target.value })} />
            <SpacedTextField
                variant='outlined'
                fullWidth
                required
                label='Password'
                type='password'
                onChange={e => setForm({ ...form, password: e.target.value })} />
            <CardActions>
                <Button variant='contained' color='primary' onClick={onSubmit}>Create account</Button>
            </CardActions>
        </LandingPageCard>
    )
}

export default RegistrationForm