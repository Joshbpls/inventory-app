import { Icon, makeStyles, Typography } from '@material-ui/core'
import UserIcon from '../../svg/user.svg'

export interface ProfileInfoProps {
    organization: string
}

const useStyles = makeStyles({
    container: {
        marginTop: 25,
        marginBottom: 25,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center'
    }
})

function ProfileInfo({ organization }: ProfileInfoProps) {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div>
                <Icon>
                    <img src={UserIcon} alt='ProfileIcon' height={45} width={45}/>
                </Icon>
                <Typography variant='h6'>Welcome</Typography>
                <Typography variant='caption' color='textSecondary'>{organization}</Typography>
            </div>
        </div>
    )
}

export default ProfileInfo;