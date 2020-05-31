import renderViewData from './renderViewData';
import getWeather from './getWeather';

export default function renderMap(longitude, latitude) {
  const { google } = window;
  const geocoder = new google.maps.Geocoder();
  const infowindow = new google.maps.InfoWindow();
  const coords = { lat: latitude, lng: longitude };

  const mapWrapper = new google.maps.Map(
    document.getElementById('location-map'),
    {
      center: coords,
      zoom: 8,
    }
  );

  function geocodeLatLng(map) {
    geocoder.geocode({ location: coords }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          const marker = new google.maps.Marker({
            position: coords,
            map,
          });
          infowindow.setContent(results[0].formatted_address);
          const preData = {};

          results[0].address_components.forEach(el => {
            const { types } = el;
            if (types) {
              const key = [...types][0];
              const prop = el.long_name;
              preData[key] = prop;
            }
          });
          const {
            country,
            locality,
            // eslint-disable-next-line camelcase
            administrative_area_level_1,
            // eslint-disable-next-line camelcase
            postal_code,
          } = preData;

          const mapData = {
            coords,
            city: locality,
            state: administrative_area_level_1,
            country,
            postalCode: postal_code,
          };
          renderViewData(mapData);
          getWeather(country, 1, 'celsium');
          infowindow.open(map, marker);
        }
      } else {
        window.alert(`Geocoder failed due to: ${status}`);
      }
    });
  }
  geocodeLatLng(mapWrapper);
}
