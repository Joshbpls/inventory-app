import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    CircularProgress,
    FormControl, Grid,
    TextField,
    withStyles
} from "@material-ui/core";
import {useState} from "react";
import {sendLoginRequest} from "../api/api";
import {LoginResponse} from "../api/model";

const SpacedTextField = withStyles({
    root: {
        marginBottom: 10,
        marginTop: 10
    }
})(TextField)


function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [response, setResponse] = useState<LoginResponse>();

    function sendRequest(username: string, password: string) {
        setLoading(true)
        sendLoginRequest(username, password)
            .then(response => setResponse(response))
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }


    if (loading) {
        return (
            <Box display='flex' justifyContent='center'>
                <CircularProgress/>
            </Box>
        )
    }

    return (
        <Card elevation={0}>
            <CardContent>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item>
                        <CardHeader title="Login"/>
                    </Grid>
                    <Grid item>
                        <FormControl>
                            <SpacedTextField
                                label="Username"
                                placeholder="example@gmail.com"
                                type="email"
                                onChange={e => setUsername(e.target.value)}
                                variant="outlined"
                                value={username}
                            />
                            <SpacedTextField
                                label="Password"
                                placeholder="**********"
                                type="password"
                                onChange={e => setPassword(e.target.value)}
                                variant="outlined"
                                value={password}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={4} md={4} lg={4}>
                        <Button variant="contained" color="primary" fullWidth onClick={() => sendRequest(username, password)}>Login</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default LoginForm;