import './NaverMaps.css'
import { watchPosition } from '../helper/Gelocation.js'
import { NaverMap, Marker } from 'react-naver-maps'
import { useState } from 'react'

export function NaverMaps(props) {
    const navermaps = window.naver.maps
    const [center, setCenter] = useState({ lat: 37.3361804, lng: 127.124099 })
    const [myPosition, setMyPosition] = useState({ lat: 0, lng: 0 })

    const handleCenterChanged = (changedCenter) => {
        setCenter({ lat: changedCenter.y, lng: changedCenter.x })
    }

    watchPosition(({ lat, lng }) => {
        setMyPosition({ lat, lng })
    })

    return (
        <div className="navermaps-container">
            <NaverMap
                className="navermaps-map"
                id='navermap'
                defaultCenter={center}
                onCenterChanged={handleCenterChanged}
                defaultZoom={16}
            >

                <Marker
                    position={new navermaps.LatLng(center.lat, center.lng)}
                    onClick={() => {
                        alert('마커!')
                    }}
                />
                <Marker
                    position={new navermaps.LatLng(myPosition.lat, myPosition.lng)}
                    animation={navermaps.Animation.BOUNCE}
                />
            </NaverMap>

            {props.children}
        </div>
    )
}