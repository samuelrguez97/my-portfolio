import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
        border: '1px solid #5656ef',
        borderRadius: 6,
        width: 'auto',
        minWidth: 150,
        minHeight: 50,
        padding: '10px 20px',
        cursor: 'pointer',
        '&:hover': {
            boxShadow: '0px 0px 3px 0px',
        }
    },
    value: {
        fontSize: 18,
        color: '#5656ef',
        fontWeight: 600
    },
    valuesContainer: {
        position: 'absolute',
        width: '90%',
        bottom: -70,
        backgroundColor: '#FFF',
        borderRadius: 6,
        boxShadow: '0px 0px 6px',
        maxHeight: 225,
        overflow: 'auto',
        '&::-webkit-scrollbar': {
            width: 10
        },
        '&::-webkit-scrollbar-track': {
            background: 'transparent'
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: 6,
            background: '#7a7ada'
        },
        '&::-webkit-scrollbar-thumb:hover': {
            background: '#5656ef'
        }
    },
    containerMargin: {
        margin: '10px 1px'
    },
    valueItem: {
        width: '100%',
        padding: 18,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#dfdfff'
        }
    },
    selected: {
        fontWeight: 600
    }
}))

export default useStyles