import axios from "axios";
let folder = "";
// export const setToken = (token) => localStorage.setItem(folder, JSON.stringify({ token }));
// export const getToken = () => (localStorage.getItem(folder) !== undefined ? JSON.parse(localStorage.getItem(folder)) : { token: "not found" });
// export const deleteToken = () => localStorage.removeItem(folder);
export const api = axios.create({
    // "Content-Type": "application/vnd.api+json",
    // baseURL: "",
    // headers: { Authorization: `Bearer ${cache?.token}` },
});
