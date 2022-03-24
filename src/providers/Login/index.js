import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Datamed } from "../../services";
import { useToken } from "../Token";

const LoginContext = createContext([]);
export const LoginProvider = ({ children }) => {
    const { token, saveToken, removeToken } = useToken();
    const [firstAccess, setFirstAccess] = useState(1);
    const api = Datamed(token);
    const [idLogado, setIdLogado] = useState(0);
    const [dadosLogado, setDadosLogado] = useState({});
    const [infoLoged, setInfoLoged] = useState(JSON.parse(localStorage.getItem("@datamed:login")) || {});
    const setLoged = (id) => setIdLogado(Number(id));
    let history = useHistory();
    const validarLogin = async ({ crm, password }) => {
        let retorno = { id: 0, status: false, message: "CRM invalido!" };
        let reponse = await api.get(`/dados_usuarios?crm=${crm}`);
        if (reponse.data.length > 0) {
            let { email, nome } = reponse.data[0];
            await api
                .post(`/login`, { email, password })
                .then(
                    ({
                        data: {
                            accessToken,
                            user: { id },
                        },
                    }) => {
                        retorno = { id, status: true, message: `Bem-vindo ${nome} !` };
                        setDadosLogado({ ...reponse.data[0] });
                        saveToken(accessToken);
                        setLoged(id);
                        setInfoLoged({ crm, password });
                        localStorage.setItem("@datamed:login", JSON.stringify({ crm, password }));
                    }
                )
                .catch((err) => {
                    retorno = { id: 0, status: false, message: "Senha invalida!" };
                    setDadosLogado({});
                });
        }
        return retorno;
    };
    const logout = (page) => {
        removeToken();
        setLoged(0);
        setDadosLogado({});
        localStorage.removeItem("@datamed:login");
        setInfoLoged({});
        history.push(page);
    };
    return <LoginContext.Provider value={{ idLogado, validarLogin, dadosLogado, setLoged, infoLoged, logout, firstAccess, setFirstAccess }}>{children}</LoginContext.Provider>;
};
export const useLogin = () => useContext(LoginContext);
