import './GymAddButton.css'
import { Button, Icon } from '@material-ui/core'

function GymAddButton() {
    const onButtonClick = () => {
        alert('click!')
        // redux 사용해서 marker update
    }

    return (
        <Button
            className='gym-add-button'
            variant='contained'
            color='primary'
            onClick={onButtonClick}
        >
            <Icon fontSize='large'>add</Icon>
        </Button>
    )
}

export default GymAddButton