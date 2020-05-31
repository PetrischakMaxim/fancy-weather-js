// eslint-disable-next-line no-unused-vars
export default function getWeather(location, period, unit = 'celsium') {
  const todayView = document.querySelector('[data-name="current-day"');
  const todayIcon = document.querySelector('[data-name="current-icon"');
  const todayStatus = document.querySelector('[data-name="current-status"');
  const todayFeelLike = document.querySelector(
    '[data-name="current-feelslike"'
  );
  const todayWind = document.querySelector('[data-name="current-wind"');
  const todayHumidity = document.querySelector('[data-name="current-humidity"');

  const apiSource = `https://api.weatherapi.com/v1/forecast.json?key=a0f08157541c4c08ae7173640203105&q=${location}&days=${period}`;
  fetch(apiSource)
    .then(res => res.json())
    .then(data => {
      const {
        current: {
          condition: { icon, text },
          temp_c,
          temp_f,
          feelslike_c,
          feelslike_f,
          wind_kph,
          humidity,
        },
      } = data;
      if (unit === 'celsium') {
        todayView.textContent = `${temp_c}°C`;
        todayFeelLike.textContent = `${feelslike_c}°C`;
      } else {
        todayView.textContent = `${temp_f}°F`;
        todayFeelLike.textContent = `${feelslike_f}°F`;
      }

      todayIcon.src = icon;
      todayIcon.alt = text;
      todayStatus.textContent = text;
      todayWind.textContent = `${Math.round(
        ((wind_kph * 1000) / 36000) * 10
      )} m/s`;
      todayHumidity.textContent = `${humidity}%`;
    });
}
