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
        margin: '50px 0',
        width: '100%',
        height: '100%',
    },
    webContainer: {
        backgroundColor: '#dfdfff',
        padding: '40px 20px',
        borderRadius: 10
    }
}))

export default useStyles