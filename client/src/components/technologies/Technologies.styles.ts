import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    infoCard: {
        width: '100%',
        borderRadius: 10,
        boxShadow: '0px 5px 20px 0px grey',
        color: '#5656ef',
        backgroundColor: '#FFF',
        padding: 30,
        textAlign: 'left'
    },
    title: {
        fontSize: 30,
        fontWeight: 600,
        textAlign: 'center'
    },
    selector: {
        textAlign: 'left'
    },
    label: {
        fontSize: 18
    },
    technologyInfoContainer: {

    }
}))

export default useStyles