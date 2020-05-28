export default function getCurrentBackground(word) {
  const apiUrl = `https://api.unsplash.com/photos/random?query=${word}&client_id=w5rS4NQKiTV0yemZ6Ww7VWaBWbLIYB4bsw5-4pbBOl4`;
  return fetch(apiUrl)
    .then(res => res.json())
    .then(data => data.urls.regular);
}
