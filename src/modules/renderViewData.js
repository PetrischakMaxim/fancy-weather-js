export default function renderVieData(data) {
  const {
    city,
    country,
    coords: { lat, lng },
  } = data;
  const viewCity = document.querySelector('[data-name="city"]');
  const viewCountry = document.querySelector('[data-name="country"]');
  const viewLatitude = document.querySelector('[data-name="latitude"]');
  const viewLongitude = document.querySelector('[data-name="longitude"]');

  viewLatitude.textContent = lat;
  viewLongitude.textContent = lng;
  viewCity.textContent = city;
  viewCountry.textContent = country;
}
