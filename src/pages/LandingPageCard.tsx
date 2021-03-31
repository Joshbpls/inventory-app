import { Card, CardContent, makeStyles } from '@material-ui/core'
import React from 'react'

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

const LandingPageCard = ({ children }: { children: React.ReactNode }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Card className={classes.card} elevation={5}>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </div>
    )
}

export default LandingPageCard;