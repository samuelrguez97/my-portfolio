import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        minHeight: '100vh',
        height: '100%',
        flexDirection: 'column'
    },
    webBlock: {
        flex: 1,
        marginTop: 50,
        marginBottom: 50,
        width: '100%',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            marginBottom: 250,
        }
    }
}))

export default useStyles