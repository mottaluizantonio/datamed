import axios from "axios";
export const Datamed = (token) =>
    axios.create({
        "Content-Type": "application/vnd.api+json",
        baseURL: "https://datamed-api.herokuapp.com",
        headers: { Authorization: `Bearer ${token}` },
    });
