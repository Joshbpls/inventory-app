import { useEffect, useState } from 'react'
import { Button, CardActions, makeStyles, Typography } from '@material-ui/core'
import LandingPageCard from '../LandingPageCard'
import { Link, useHistory } from 'react-router-dom'
import SpacedTextField from '../../components/SpacedTextField'
import { useRequest } from '../../hooks/useRequest'
import { register, setToken } from '../../api/api'
import { ResponseErrorText } from '../../components/alert/ErrorText'
import { AuthenticationResponse } from '../../api/model'

interface RegistrationFormFields {
    email?: string
    password?: string
    name?: string
}

const useStyles = makeStyles({
    headerText: {
        fontWeight: 'bold',
        marginBottom: 10
    }
})


function LoginLink() {
    return (
        <Link style={{ textDecoration: 'none' }} to='/login'>
            <Typography color='primary' style={{ display: 'inline' }}>Sign in</Typography>
        </Link>
    )
}

function RegistrationForm() {

    const classes = useStyles()
    const history = useHistory()
    const [form, setForm] = useState<RegistrationFormFields>({})
    const [request, sendRequest] = useRequest<AuthenticationResponse>()

    const onSubmit = () => sendRequest(register(form.email!, form.name!, form.password!))

    useEffect(() => {
        const { response } = request
        if (response?.success && response.token) {
            setToken(response.token)
            history.push('/')
        }
    }, [request, history])

    return (
        <LandingPageCard>
            <div style={{ marginBottom: 10 }}>
                <Typography className={classes.headerText} variant='h4'>Register</Typography>
                <Typography>Already have an account? <LoginLink /></Typography>
                <ResponseErrorText response={request.response} />
            </div>
            <SpacedTextField
                fullWidth
                label='Name'
                variant='outlined'
                onChange={e => setForm({ ...form, name: e.target.value })}
            />
            <SpacedTextField
                fullWidth
                label='Email'
                variant='outlined'
                onChange={e => setForm({ ...form, email: e.target.value })} />
            <SpacedTextField
                fullWidth
                variant='outlined'
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