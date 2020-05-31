import renderMap from './renderMap';

export default function getCurrentPosition() {
  const geoOptions = {
    enableHighAccuracy: true,
    timeout: 10 * 1000,
  };

  function getGeoWithNavigator(response) {
    const { latitude, longitude } = response.coords;
    renderMap(longitude, latitude);
  }

  function getGeoWitApi() {
    const apiSource = `https://ipinfo.io?token=5e380700ac3c18`;
    fetch(apiSource)
      .then(res => res.json())
      .then(data => {
        const { loc } = data;
        const options = loc.split(',');
        const coords = {
          lat: +options[0],
          lng: +options[1],
        };
        renderMap(coords.lng, coords.lat);
      });
  }

  navigator.geolocation.getCurrentPosition(
    getGeoWithNavigator,
    getGeoWitApi,
    geoOptions
  );
}
