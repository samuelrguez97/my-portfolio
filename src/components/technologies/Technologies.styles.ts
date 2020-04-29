import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    infoCard: {
        width: '100%',
        borderRadius: 10,
        boxShadow: '0px 5px 20px 0px grey',
        color: '#5656ef',
        backgroundColor: '#FFF',
        padding: 30
    },
    title: {
        fontSize: 34,
        fontWeight: 600
    },
    selector: {
        textAlign: 'left'
    },
    label: {
        fontSize: 20
    },
    technologyInfoContainer: {

    }
}))

export default useStyles