import {Button, Card, CardContent, CardHeader, CircularProgress, FormControl, Input} from "@material-ui/core";
import {useState} from "react";
import {sendLoginRequest} from "../api/api";
import {LoginResponse} from "../api/model";


function LoginPrompt() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<LoginResponse>();

    function sendRequest(username: string, password: string) {
        setLoading(true)
        sendLoginRequest(username, password)
            .then(response => setResponse(response))
            .finally(() => setLoading(false));
    }

    if(loading) {
        return <CircularProgress />
    }

    return (
        <Card>
            <CardContent>
                <CardHeader title="Login"/>
                <FormControl>
                    <Input required title="Username" type="username" onChange={e => setUsername(e.target.value)}/>
                    <Input required title="Password" type="password" onChange={e => setPassword(e.target.value)} />
                    <Button onClick={() => sendRequest(username, password)}>Login</Button>
                </FormControl>
            </CardContent>
        </Card>
    )
}

export default LoginPrompt;