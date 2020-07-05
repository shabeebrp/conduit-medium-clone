import axios from "axios";
export const api = axios.create({
  baseURL: "https://conduit.productionready.io/api"
});

const jwtKey = "medium-clone-jwt";
{
  let jwt = localStorage.getItem(jwtKey);
  if (jwt) api.defaults.headers.common["Authorization"] = `Bearer ${jwt} `;
}

export function setToken(jwt) {
  localStorage.setItem(jwtKey, jwt);
  api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}
export function clearToken() {
  localStorage.removeItem(jwtKey);
  delete api.defaults.headers.common["Authorization"];
}
export function getToken() {
  return localStorage.getItem(jwtKey);
}
