export function watchPosition(callback) {
    navigator.geolocation.watchPosition((pos) => {
        callback ({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
        })
    }, () => null, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 200,
    })
}