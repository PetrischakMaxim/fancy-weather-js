export default function hideLoader(delay = 1000) {
  const loader = document.querySelector('.loader-block');

  setTimeout(() => {
    loader.classList.add('hidden');
  }, delay);
}
