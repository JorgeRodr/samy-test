export function get(url) {
  return fetch(url ? url : "http://localhost:8080/images")
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    });
}
