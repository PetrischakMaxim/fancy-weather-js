export default function getCurrentDate(date) {
  let d = date;
  d = [
    `0${d.getDate()}`,
    `0${d.getMonth() + 1}`,
    `${d.getFullYear()}`,
    `0${d.getHours()}`,
    `0${d.getMinutes()}`,
  ].map(component => component.slice(-2));

  // соединить компоненты в дату
  return `${d.slice(0, 3).join('.')} ${d.slice(3).join(':')}`;
}

new Date().toLocaleString('ru', {
  month: 'long',
});
