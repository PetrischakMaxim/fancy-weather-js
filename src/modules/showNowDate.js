export default function showNowDate() {
  const html = document.documentElement;
  const currentLang = html.lang;

  const now = new Date().toLocaleString(`${currentLang}`, {
    day: 'numeric',
    month: 'long',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
  });

  const nowDateView = document.querySelector('.data__item--date');
  nowDateView.textContent = now.replace(/,/g, '');
}
