import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'
import React from 'react'


export interface NavigationElementProps {
    label: string
    to: string
    icon?: React.ReactNode
    onClick?: () => void
}

const useStyles = makeStyles({
    selected: {
        color: 'white',
        backgroundColor: '#638efe'
    },
    unselected: {
        color: 'gray'
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        padding: 8,
        paddingLeft: 15
    }
})


function NavigationElement({ label, to, icon, onClick }: NavigationElementProps) {
    const classes = useStyles()
    const location = useLocation()

    const isSelected = () => location.pathname === to;

    const getConditionalStyle = () => isSelected() ? classes.selected : classes.unselected;

    return (
        <Link onClick={onClick} to={to} style={{ textDecoration: 'none' }}>
            <Card elevation={0} className={getConditionalStyle()}>
                <CardContent className={classes.content} style={{paddingBottom: 8}}>
                    {icon}
                    <Typography style={{ paddingLeft: 10 }}>{label}</Typography>
                </CardContent>
            </Card>
        </Link>
    )
}

export default NavigationElement