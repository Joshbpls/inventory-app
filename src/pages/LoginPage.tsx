import {Box, Grid, Paper} from "@material-ui/core";
import LoginPrompt from "../components/LoginPrompt";


function LoginPage() {
    return (
        <Paper elevation={0}>
            <Grid container justify="center">
                <Grid item xs={12} md={4} lg={4}>
                    <LoginPrompt/>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default LoginPage;