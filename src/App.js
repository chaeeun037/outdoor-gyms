import logo from './logo.svg';
import './App.css';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'
import { useState } from 'react'

function NaverMapsAPI() {
  const navermaps = window.naver.maps;
  const [center, setCenter] = useState({ lat: 37.3361804, lng: 127.124099 })

  const handleCenterChanged = (changedCenter) => {
    setCenter({lat: changedCenter.y, lng: changedCenter.x});
  }

  return (
    <NaverMap 
      id='maps-examples-map-simple'
      style={{
        width: '100%',
        height: '600px',
      }}
      defaultCenter={center}
      onCenterChanged={handleCenterChanged}
      defaultZoom={16}
    >
      <Marker 
        position={new navermaps.LatLng(center.lat, center.lng)}
        animation={navermaps.Animation.BOUNCE}
        onClick={() => {
          alert('마커!')
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
