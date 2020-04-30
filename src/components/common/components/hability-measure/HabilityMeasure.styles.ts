import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    habilityBox: {
        width: 60,
        height: 40,
        borderRadius: 6,
        boxShadow: '0px 0px 5px 0px',
        margin: 7,
        [theme.breakpoints.only('sm')]: {
            width: 45,
            height: 30,
        },
        [theme.breakpoints.only('xs')]: {
            width: 25,
            height: 20,
        }
    }
}))

export default useStyles