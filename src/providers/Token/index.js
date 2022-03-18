import { createContext, useContext, useState } from "react";
const TokenContext = createContext([]);
export const TokenProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("@datamed:token") || "");
    const saveToken = (newToken) => {
        localStorage.setItem("@datamed:token", newToken);
        setToken(newToken);
    };
    const removeToken = () => {
        localStorage.removeItem("@datamed:token");
        setToken("");
    };
    return <TokenContext.Provider value={{ token, saveToken, removeToken }}>{children}</TokenContext.Provider>;
};
export const useToken = () => useContext(TokenContext);
