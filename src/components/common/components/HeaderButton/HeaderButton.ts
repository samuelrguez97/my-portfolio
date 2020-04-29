import { styled } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const HeaderButton = styled(Button)({
    background: 'linear-gradient(45deg, #5656ef 30%, #5656ef85 90%)',
    border: 0,
    borderRadius: 4,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '0 10px',
    fontSize: 17
})

export default HeaderButton