export function get(url) {
  return fetch(url ? url : "http://localhost:8080/images")
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    });
}

export function like(url) {
  return fetch(url, { method: "POST" })
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    });
}
