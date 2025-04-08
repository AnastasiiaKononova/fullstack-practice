import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:5000/api",
});

httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      // маємо додати до запиту заголовок Authorization з цим токеном
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

/// TODO: response interceptors
// Якщо приходить 403 помилка - намагаємося оновити сесію за допомогою RefreshToken

/* Auth API */
export const signIn = async (data) =>
  await httpClient.post("/users/sign-in", data);

export const signUp = async (data) =>
  await httpClient.post("/users/sign-up", data);

/* Chat API */

export const getUserChats = async () => await httpClient.get("/chats");

/*
GET http://localhost:5000/api/chats HTTP/1.1
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWU1OTVhNGI2ZTIwZjBiYTMyMzY5MWMiLCJlbWFpbCI6ImphbmVEZWVlb2VAcmUuZmQiLCJpYXQiOjE3MDk2MzAzMTYsImV4cCI6MTcwOTYzMDY3Nn0.xmK-wWAcbAjZ4_Q0iJcK6JovZCH2b2_h_IMK4VKB6mU

*/

//const API_BASE = 'http://localhost:5000/api';

//  export const signIn = async (data) => {
//      const options = {
//          method: 'POST',
//          headers: {
//              'Content-Type': 'application/json'
//          },
//          body: JSON.stringify(data)
//      }
//      const res =  await fetch(`${API_BASE}/users/sign-in`, options);
//      return await res.json();
//  }

//  export const signUp = async (data) => {
//      const options = {
//          method: 'POST',
//          headers: {
//              'Content-Type': 'application/json'
//          },
//          body: JSON.stringify(data)
//      }
//      const res = await fetch(`${API_BASE}/users/sign-up`, options)
//      return await res.json();
//  }
