import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Routes } from "./routes";
import { Providers } from "./providers";
import "react-toastify/dist/ReactToastify.css";
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
