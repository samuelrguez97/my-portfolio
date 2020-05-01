import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        maxHeight: '100%'
    },
    photoCard: {
        width: '100%',
        borderRadius: 10,
        boxShadow: '0px 5px 20px 0px grey'
    },
    infoCard: {
        width: '100%',
        borderRadius: 10,
        boxShadow: '0px 5px 20px 0px grey',
        color: '#5656ef',
        backgroundColor: '#fff',
        padding: 30,
        marginBottom: 50
    },
    homeImg: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    title: {
        fontSize: 30,
        textAlign: 'left',
        fontWeight: 600
    },
    text: {
        fontSize: 18,
        textAlign: 'left'
    }
}))

export default useStyles