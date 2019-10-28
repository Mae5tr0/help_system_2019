const API_URL = "http://localhost:8081/api";

function post(url, data) {
  return fetch(`${API_URL}${url}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
}

function get(url) {
  return fetch(`${API_URL}${url}`, {
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());
}

export default {
  post,
  get
};
