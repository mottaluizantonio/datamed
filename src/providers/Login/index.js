import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Datamed } from "../../services";
import { useToken } from "../Token";

const LoginContext = createContext([]);
export const LoginProvider = ({ children }) => {
    const { token, saveToken, removeToken } = useToken();
    const api = Datamed(token);
    const [idLogado, setIdLogado] = useState(0);
    const [infoLoged, setInfoLoged] = useState(JSON.parse(localStorage.getItem("@datamed:login")) || {});
    const setLoged = (id) => setIdLogado(id);
    let history = useHistory();
    const validarLogin = async ({ crm, password }) => {
        let retorno = { status: false, message: "CRM ou Senha invalidos!" };
        let { data = [] } = await api.get(`/dados_usuarios?crm=${crm}`);
        if (data.length > 0) {
            let { email, nome } = data[0];
            let {
                data: {
                    accessToken,
                    user: { id },
                },
            } = await api.post(`/login`, { email, password });
            saveToken(accessToken);
            setLoged(id);
            setInfoLoged({ crm, password });
            localStorage.setItem("@datamed:login", JSON.stringify({ crm, password }));
            retorno = { id, status: true, message: `Bem vindo ${nome} !` };
        }
        return retorno;
    };
    const logout = (page) => {
        removeToken();
        setLoged(0);
        localStorage.removeItem("@datamed:login");
        setInfoLoged({});
        history.push(page);
    };
    return <LoginContext.Provider value={{ idLogado, validarLogin, setLoged, infoLoged, logout }}>{children}</LoginContext.Provider>;
};
export const useLogin = () => useContext(LoginContext);
