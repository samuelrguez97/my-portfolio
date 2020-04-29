import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    block: {
        padding: '30px 30px',
        boxShadow: '0px 5px 20px 0px grey',
        position: 'sticky',
        overflow: 'hidden'
    },
    menu: {
        width: 250
    },
    navigation: {
        width: 'auto',
        display: 'table'
    },
    pageInfo: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        boxShadow: '5px 0px 20px 0px grey',
        width: 250
    },
    title: {
        fontSize: 25
    },
    logoImg: {
        width: 167,
        height: '100%'
    }
})

export default useStyles