import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    block: {
        boxShadow: '0px 5px 20px 0px grey',
        position: 'sticky',
        backgroundColor: '#FFF',
        top: 0,
        zIndex: 1000
    },
    menu: {
        width: 250,
        marginRight: 40
    },
    navigation: {
        width: 'auto',
        display: 'table'
    },
    pageInfo: {
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