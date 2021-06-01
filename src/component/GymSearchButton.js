import './GymSearchButton.css'
import { Button, Icon } from '@material-ui/core'

function GymSearchButton() {
    const onButtonClick = () => {
        alert('click!')
        // redux 사용해서 marker update
    }

    return (
        <Button
            className='gym-search-button'
            variant='contained'
            color='primary'
            onClick={onButtonClick}
        >
            <Icon fontSize='large'>search</Icon>
        </Button>
    )
}

export default GymSearchButton