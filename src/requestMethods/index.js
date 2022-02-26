import axios from "axios";
const BASE_URL = "https://ngeorgetech.herokuapp.com/api/";
const BASE_AUTH_URL = "https://ngeorgetech.herokuapp.com/auth/";

let TOKEN;
if (localStorage.getItem("user")) {
  TOKEN = JSON.parse(localStorage.getItem("user")).accessToken;
} else {
  TOKEN = "Not authenticated";
}
export const getApi = axios.create({
  baseURL: BASE_URL,
});

console.log(TOKEN);
export const getApiWithToken = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

export const authAPI = axios.create({
  baseURL: BASE_AUTH_URL,
});
