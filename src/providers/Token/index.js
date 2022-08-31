import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
const TokenContext = createContext([]);
export const TokenProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("@datamed:token") || "");      
    const history = useHistory()
    const saveToken = (newToken) => {
        localStorage.setItem("@datamed:token", newToken);
        setToken(newToken);
    };
    const removeToken = () => {
        localStorage.removeItem("@datamed:token");
        setToken("");
    };

    const goTo = (path) => {
        localStorage.setItem("@datamed:path", path)
        history.push(path)
    }
    return <TokenContext.Provider value={{ token, saveToken, removeToken, goTo }}>{children}</TokenContext.Provider>;
};
export const useToken = () => useContext(TokenContext);
