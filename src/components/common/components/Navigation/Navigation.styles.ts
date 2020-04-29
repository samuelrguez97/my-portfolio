import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    navContainer: {
        width: '100%',
        position: 'relative'
    },
    navItem: {
        width: 150,
        backgroundColor: '#fff',
        transition: 'background-color 1s',
        '& a': {
            fontSize: 20,
            textDecoration: 'none',
            color: '#5656ef',
            '&:visited': {
                color: '#5656ef'
            }
        }
    },
    navItemActive: {
        backgroundColor: '#dfdfff'
    },
    navBorderUp: {
        position: 'absolute',
        bottom: 35,
        width: 150,
        height: 5,
        left: 0,
        transition: 'left 0.5s'
    },
    navBorderDown: {
        position: 'absolute',
        bottom: -15,
        width: 150,
        height: 5,
        left: 0,
        transition: 'left 0.5s'
    },
    navBorderDash: {
        width: '100%',
        height: '100%',
        backgroundColor: '#5656ef',
        borderRadius: 10,
        margin: '0 auto'
    }
})

export default useStyles