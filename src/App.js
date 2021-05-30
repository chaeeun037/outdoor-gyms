import logo from './logo.svg';
import './App.css';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'

function NaverMapsAPI() {
  const navermaps = window.naver.maps;
  return (
    <NaverMap 
      id='maps-examples-map-simple'
      style={{
        width: '100%',
        height: '600px',
      }}
      defaultCenter={{ lat: 37.3361804, lng: 127.124099 }}
      defaultZoom={16}
    >
      <Marker 
        position={new navermaps.LatLng(37.3361804, 127.124099)}
        animation={navermaps.Animation.BOUNCE}
        onClick={() => {
          alert('여기는 우리집 입니다.')
        }}
      />
    </NaverMap>
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
