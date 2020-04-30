import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    '@keyframes slide-in': {
        '100%': { transform: 'translateX(0%)' }
    },
    '@-webkit-keyframes slide-in': {
        '100%': { '-webkit-transform': 'translateX(0%)' }
    },
    '@keyframes slide-out': {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-110%)' }
    },
    '@-webkit-keyframes slide-out': {
        '0%': { '-webkit-transform': 'translateX(0%)' },
        '100%': { '-webkit-transform': 'translateX(-110%)' }
    },
    menuContainer: {
        top: 71,
        position: 'absolute',
        width: '50%',
        backgroundColor: '#FFF',
        boxShadow: '0px 5px 20px 0px grey',
        transform: 'translateX(-110%)',
        '-webkit-transform': 'translateX(-110%)'
    },
    slideIn: {
        animation: `$slide-in 0.5s ${theme.transitions.easing.easeIn}`,
        'animation-fill-mode': 'forwards'
    },
    slideOut: {
        animation: `$slide-out 0.5s ${theme.transitions.easing.easeOut}`,
        'animation-fill-mode': 'forwards'
    },
    navContainer: {
        position: 'relative',
        width: '100%',
        margin: '15px 0'
    },
    navItem: {
        backgroundColor: '#fff',
        transition: 'background-color 0.5s',
        height: 60,
        textAlign: 'left',
        alignItems: 'center',
        borderRadius: 5,
        padding: '5px 0',
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
    navItemContainer: {
        height: '100%',
        paddingLeft: 10
    },
    navBorder: {
        position: 'absolute',
        width: 5,
        height: 60,
        left: 0,
        transition: 'top 0.5s'
    },
    navBorderDash: {
        width: '100%',
        height: '100%',
        backgroundColor: '#5656ef',
        borderRadius: 10,
        margin: '0 auto'
    }
}))

export default useStyles