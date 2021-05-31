import './RightPanel.css'
import GymSearchButton from './GymSearchButton.js'
import GymAddButton from './GymAddButton.js'


function RightPanel() {
    return (
        <div className='right-panel'>
            <GymSearchButton></GymSearchButton>
            <GymAddButton></GymAddButton>
        </div>
    )
}

export default RightPanel
