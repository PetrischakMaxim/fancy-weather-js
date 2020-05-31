export default function showNowDate() {
  const html = document.documentElement;
  const currentLang = html.lang;

  const nowDateView = document.querySelector('.data__item--date');
  setInterval(() => {
    const now = new Date().toLocaleString(`${currentLang}`, {
      day: 'numeric',
      month: 'long',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
    nowDateView.textContent = now.replace(/,/g, '');
  }, 100);
}
