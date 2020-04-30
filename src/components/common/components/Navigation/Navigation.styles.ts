import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    navContainer: {
        width: 'auto',
        position: 'relative'
    },
    navItem: {
        width: 150,
        backgroundColor: '#fff',
        transition: 'background-color 0.5s',
        borderRadius: 5,
        padding: '5px 0',
        '&:hover': {
            fontWeight: 600
        },
        '& a': {
            fontSize: 18,
            textDecoration: 'none',
            color: '#5656ef',
            '&:visited': {
                color: '#5656ef'
            }
        }
    },
    navItemActive: {
        backgroundColor: '#dfdfff',
        fontWeight: 600
    },
    navBorder: {
        position: 'absolute',
        bottom: 45,
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