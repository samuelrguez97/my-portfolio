import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    webBlock: {
        marginTop: 40
    },
    switchWrapper: {
        position: 'relative',
        '& > div': {
            position: 'absolute'
        }
    }
}))

export default useStyles