import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    footerBlock: {
        backgroundColor: '#5656ef',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 100,
        boxShadow: '0px 3px 20px 0px'
    },
    footerContainer: {
        width: '100%',
        height: '100%',
        color: '#fff',
        padding: '35px 0',
        fontSize: 20
    }
})

export default useStyles