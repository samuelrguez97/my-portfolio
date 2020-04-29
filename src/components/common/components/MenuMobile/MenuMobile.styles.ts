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
        position: 'absolute',
        width: '50%',
        height: 800,
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
    }
}))

export default useStyles