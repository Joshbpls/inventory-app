import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import React from "react";

const applicationTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#3296e3"
        }
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif'
    }
})

interface ChildrenProps {
    children: React.ReactNode
}

const ApplicationThemeProvider = ({children}: ChildrenProps) => {
    return <MuiThemeProvider theme={applicationTheme} children={children}/>
}

export default ApplicationThemeProvider;