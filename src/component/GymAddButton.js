import './GymAddButton.css'
import { Button } from '@material-ui/core'

function GymAddButton() {
    return (
        <Button
            className='gym-add-button'
            variant='contained'
            color='primary'
        >Add My Gym</Button>
    )
}

export default GymAddButton