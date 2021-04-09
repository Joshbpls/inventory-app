import { Button, CardActions, makeStyles, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useRequest } from '../../hooks/useRequest'
import { login } from '../../api/api'
import { Link, useHistory } from 'react-router-dom'
import { LoginResponse } from '../../api/model'
import LandingPageCard from '../LandingPageCard'
import SpacedTextField from '../../components/SpacedTextField'
import { ResponseErrorText } from '../../components/alert/ErrorText'

const useStyles = makeStyles({
    card: {
        width: '25%',
        textAlign: 'center'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    headerText: {
        fontWeight: 'bold',
        marginBottom: 10
    }
})

function RegisterLink() {
    return (
        <Link style={{ textDecoration: 'none' }} to='/register'>
            <Typography style={{ display: 'inline' }} color='primary'>Register</Typography>
        </Link>
    )
}

function LoginForm() {
    const classes = useStyles()
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [request, sendRequest] = useRequest<LoginResponse>()

    useEffect(() => {
        if (request.response?.success) {
            history.push('/')
        }
    }, [request, history])

    function onClickSubmit() {
        sendRequest(login(username, password))
    }

    return (
        <LandingPageCard>
            <div style={{ marginBottom: 10 }}>
                <Typography className={classes.headerText} variant='h4'>Login</Typography>
                <Typography>Don't have an account? <RegisterLink /></Typography>
                <ResponseErrorText response={request.response} />
            </div>
            <form>
                <SpacedTextField
                    fullWidth
                    label='Email'
                    placeholder='example@gmail.com'
                    onChange={e => setUsername(e.target.value)}
                    variant='outlined'
                    value={username}
                />
                <SpacedTextField
                    fullWidth
                    label='Password'
                    placeholder='**********'
                    type='password'
                    onChange={e => setPassword(e.target.value)}
                    variant='outlined'
                    value={password}
                />
            </form>
            <CardActions>
                <Button
                    disabled={request.loading}
                    variant='contained'
                    color='primary'
                    onClick={onClickSubmit}>
                    Login
                </Button>
            </CardActions>
        </LandingPageCard>
    )
}

export default LoginForm