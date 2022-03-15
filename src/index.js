import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { Routes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Providers } from "./providers";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ToastContainer />
            <Providers>
                <Routes />
            </Providers>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
