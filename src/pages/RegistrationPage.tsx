import {Button, FormControl, Grid, TextField} from "@material-ui/core";
import {useState} from "react";


export default function RegistrationPage() {

    return (
        <Grid style={{height: "55vh"}} container justify="center" alignItems="center">
            <Grid item xs={12} md={4} lg={4}>
                <RegistrationForm />
            </Grid>
        </Grid>
    )

}

function RegistrationForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = () => {

    }

    return (
        <FormControl>
            <TextField value={email} placeholder="Email" onChange={e => setEmail(e.target.value)}/>
            <TextField value={password} onChange={e => setPassword(e.target.value)}/>
            <Button onClick={onSubmit}>Submit</Button>
        </FormControl>
    )
}