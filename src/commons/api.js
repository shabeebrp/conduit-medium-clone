import axios from "axios";
export const api = axios.create({
  baseURL: "https://conduit.productionready.io/api"
});

{
  let jwt = localStorage.getItem("medium-clone-jwt");
  if (jwt) api.defaults.headers.common["Authorization"] = `Bearer ${jwt} `;
}

export function setToken(jwt) {
  localStorage.setItem("medium-clone-jwt", jwt);
  api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}
export function clearToken() {
  localStorage.removeItem("medium-clone-jwt");
  delete api.defaults.headers.common["Authorization"];
}
