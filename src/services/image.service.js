export function get(page) {
  return fetch("http://localhost:8080/images")
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    });
}
