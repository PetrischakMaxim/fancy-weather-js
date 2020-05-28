export default function setCurrentBackground(element, source) {
  element.style.backgroundImage = `url(${source})`;
  console.log(element);
}
