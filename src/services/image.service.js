const IMAGES_URL = "http://localhost:8080/images";

export function get(url) {
  return fetch(url ? url : IMAGES_URL)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    });
}

export function getByName(name) {
  return fetch(`${IMAGES_URL}?name=${name}`)
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
