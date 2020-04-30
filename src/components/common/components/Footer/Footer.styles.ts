import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    footerBlock: {
        backgroundColor: '#fff',
        width: '100%',
        boxShadow: '0px 3px 20px 0px'
    },
    footerContainer: {
        width: '100%',
        height: '100%',
        color: '#5656ef',
        fontSize: 20
    },
    logoImg: {
        width: 117,
        height: 67
    },
    footerItem: {
        [theme.breakpoints.down('sm')]: {
            margin: '10px 0'
        }
    }
}))

export default useStyles