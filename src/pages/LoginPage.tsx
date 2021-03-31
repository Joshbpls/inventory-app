import {CardContent, CardHeader, Grid} from "@material-ui/core";
import LoginForm from "../components/LoginForm";


function LoginPage() {
    return (
        <Grid style={{height: "55vh"}} container justify="center" alignItems="center">
            <Grid item xs={12} md={4} lg={4}>
                <LoginForm />
            </Grid>
        </Grid>
    )
}

function Test() {
    return (
        <div>
            <p>

            </p>
        </div>
    )
}

export default LoginPage;