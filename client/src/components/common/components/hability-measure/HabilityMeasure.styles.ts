import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    habilityContainer: {
        margin: '0 -7px'
    },
    habilityBox: {
        width: 55,
        height: 35,
        borderRadius: 6,
        boxShadow: '0px 0px 5px 0px',
        margin: 7,
        transition: 'background-color 1s',
        [theme.breakpoints.only('sm')]: {
            width: 45,
            height: 30,
        },
        [theme.breakpoints.only('xs')]: {
            width: 20,
            height: 17.5,
        }
    },
    active: {
        backgroundColor: '#5656ef'
    }
}))

export default useStyles