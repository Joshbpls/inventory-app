import React, {useContext} from 'react';
import {BrowserRouter as Router, Redirect, Route, RouteProps, Switch} from "react-router-dom";
import AuthContextProvider, {AuthContext} from "./context/AuthContext";
import Dashboard from "./components/Dashboard";
import ApplicationThemeProvider from "./theme/ApplicationThemeProvider";
import LoginPage from "./pages/login/LoginPage";
import RegistrationPage from "./pages/register/RegistrationPage";

export function App() {
    return (
        <ApplicationThemeProvider>
            <AuthContextProvider>
                <Router>
                    <Switch>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/register" component={RegistrationPage} />
                        <AuthRoute path="/" component={Dashboard}/>
                    </Switch>
                </Router>
            </AuthContextProvider>
        </ApplicationThemeProvider>
    )
}

function AuthRoute(props: RouteProps) {
    const { authenticated } = useContext(AuthContext);
    if (authenticated) {
        return (<Route {...props} />)
    }
    return <Redirect to="/login"/>
}

export default App;
