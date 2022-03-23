import { createContext, useContext } from "react";
import { Datamed } from "../../services";
const RegisterContext = createContext([]);
export const RegisterProvider = ({ children }) => {
    const api = Datamed();
    const cadastrarUsuario = async (dados) => {
        const { email, password, crm = "", cpf = "", tipo = "medico" } = dados;
        let search = tipo === "medico" ? `crm=${crm}` : `cpf=${cpf}`;
        const { data } = tipo === "medico" ? await api.get(`/dados_usuarios?${search}`).catch(({ result }) => console.log("error", result)) : { data: [] };
        if (data.length === 0) {
            let retorno = await api.post(`/users`, { email, password }).catch(
                ({ response: { status } }) =>
                    status === 400 && {
                        id: 0,
                        status: false,
                        message: "Este email já esta cadastrado!",
                    }
            );
            if (!!retorno?.data) {
                const {
                    user: { id },
                } = retorno.data;
                delete dados.confirmarSenha;
                dados.status_fumante = Number(dados.status_fumante);
                let arrData = dados.data_nascimento.split("-");
                dados.data_nascimento = `${arrData[2]}/${arrData[1]}/${arrData[0]}`;
                retorno = await api.post(`/dados_usuarios`, { ...dados, userId: id }).then((res) => ({
                    id,
                    status: true,
                    message: tipo === "medico" ? "Usuario cadastrado com sucesso!" : "Paciente adicionado!",
                }));
            }
            return retorno;
        } else {
            return { id: data[0].userId, status: false, message: tipo === "medico" ? "CPF já cadastradado!" : "CRM já cadastradado!" };
        }
    };
    return <RegisterContext.Provider value={{ cadastrarUsuario }}>{children}</RegisterContext.Provider>;
};

export const useRegister = () => useContext(RegisterContext);
