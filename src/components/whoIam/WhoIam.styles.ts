import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    photoCard: {
        width: '100%',
        borderRadius: 10,
        boxShadow: '0px 5px 20px 0px grey',
        [theme.breakpoints.down('sm')]: {
            marginBottom: 20
        }
    },
    infoCard: {
        width: '100%',
        borderRadius: 10,
        boxShadow: '0px 5px 20px 0px grey',
        color: '#5656ef',
        backgroundColor: '#fff',
        padding: 30
    },
    homeImg: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    title: {
        fontSize: 30,
        fontWeight: 600
    },
    text: {
        fontSize: 18,
        textAlign: 'left'
    }
}))

export default useStyles