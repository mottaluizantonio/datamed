import { createContext, useContext } from "react";
import { Datamed } from "../../services";
const RegisterContext = createContext([]);
export const RegisterProvider = ({ children }) => {
    const api = Datamed();
    const validacao = async ({ cpf, crm = "" }) => {
        const { data: validacao_crm } = !!crm.length > 0 && (await api.get(`/dados_usuarios?crm=${crm}`));
        const { data: validacao_cpf } = !!cpf.length > 0 && (await api.get(`/dados_usuarios?cpf=${cpf}`));
        return {
            id: !!validacao_cpf.length > 0 ? validacao_cpf[0].id : !!validacao_crm.length > 0 ? validacao_crm[0].id : 0,
            status: !!validacao_cpf.length > 0 ? false : !!validacao_crm.length > 0 ? false : true,
            message: !!validacao_cpf.length > 0 ? "CPF em uso!" : !!validacao_crm.length > 0 ? "CRM em uso!" : "",
        };
    };
    const cadastrarUsuario = async (dados) => {
        const { email, password, tipo = "medico" } = dados;
        let r_validacao = await validacao(dados);
        if (r_validacao?.status) {
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
                dados.profissao = tipo === "medico" ? "Médico" : dados.profissao;
                retorno = await api.post(`/dados_usuarios`, { ...dados, userId: id }).then((res) => ({
                    id,
                    status: true,
                    message: tipo === "medico" ? "Usuario cadastrado com sucesso!" : "Paciente adicionado!",
                }));
            }
            return retorno;
        } else {
            return r_validacao;
        }
    };
    return <RegisterContext.Provider value={{ cadastrarUsuario }}>{children}</RegisterContext.Provider>;
};

export const useRegister = () => useContext(RegisterContext);
