import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    background: {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        backgroundColor: '#aaaaf1',
        backgroundImage: '-webkit-linear-gradient(-60deg, #FFF 50%, #aaaaf1 50%)'
    },
    webBlock: {
        marginTop: 40,
        width: '100%',
        height: '100%'
    },
    switchWrapper: {
        position: 'relative',
        '& > div': {
            position: 'absolute'
        }
    }
}))

export default useStyles