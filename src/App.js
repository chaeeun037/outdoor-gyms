import './App.css'
import { RenderAfterNavermapsLoaded } from 'react-naver-maps'
import { NaverMaps } from './component/NaverMaps.js'

function App() {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={'mu55qgbh9l'}
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMaps />
    </RenderAfterNavermapsLoaded>
  )
}

export default App
