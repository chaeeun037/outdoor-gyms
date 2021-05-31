import './GymSearchButton.css'
import { Button, Icon } from '@material-ui/core'

function GymSearchButton() {
    const onButtonClick = () => {
        alert('click!')
    }

    return (
        <Button
            variant='contained'
            color='primary'
            onClick={onButtonClick}
        >
            <Icon>search</Icon>
        </Button>
    )
}

export default GymSearchButton