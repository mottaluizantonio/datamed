import axios from "axios";
export const Datamed = (token) =>
    axios.create({
        "Content-Type": "application/vnd.api+json",
        baseURL: "https://json-server-capstone-m3.herokuapp.com",
        // baseURL: "https://datamed-api.herokuapp.com",
        headers: { Authorization: `Bearer ${token}` },
    });
