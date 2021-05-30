import logo from './logo.svg';
import './App.css';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps'

function NaverMapsAPI() {
  return (
    <NaverMap 
      id='maps-examples-map-simple'
      style={{
        width: '100%',
        height: '600px',
      }}
    />
  )
}

function App() {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={'mu55qgbh9l'}
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMapsAPI />
    </RenderAfterNavermapsLoaded>
  );
}

export default App;
