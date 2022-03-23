import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { Datamed } from "../../services";
import { useLogin } from "../Login";
import { useRegister } from "../Register";
import { useToken } from "../Token";
const DashboardContext = createContext([]);
export const DashboardProvider = ({ children }) => {
    const { idLogado, setLoged } = useLogin();
    const [pacientes, setPacientes] = useState([]);
    const { token } = useToken();
    useEffect(() => getPacientes(idLogado), [idLogado]);
    const setMedico = (id) => setLoged(id);
    const { cadastrarUsuario } = useRegister();
    const getPacientes = async (id = idLogado) => {
        const api = Datamed(token);
        if (id > 0) {
            let { data } = await api.get(`/vinculo_medico_paciente?id_medico=${id}`);
            let dadosUsuarios = await api.get(`/dados_usuarios`);
            let listaIncludes = [];
            data.forEach(({ id_paciente }) => {
                // let paciente = dadosUsuarios.data.find(({ userId }) => userId === id_paciente);
                // setPacientes([...pacientes, paciente]);
                listaIncludes.push(id_paciente);
            });
            let listaPacientes = dadosUsuarios.data.filter(({ userId }) => listaIncludes.includes(userId));
            setPacientes([...listaPacientes]);
        }
    };
    const cadastrarPaciente = async (dados) => {
        let id_medico = Number(idLogado);
        let id_paciente = 0;
        let api = Datamed(token);
        const validacaoCPF = await api.get(`/dados_usuarios?cpf=${dados.cpf}`);
        if (validacaoCPF.data.length > 0) {
            id_paciente = validacaoCPF.data[0].userId;
            const { data } = await api.get(`vinculo_medico_paciente?id_paciente=${id_paciente}&id_medico=${id_medico}`);
            if (data.length > 0) return { id: 0, status: false, message: "Este paciente já esta cadastrado!" };
        } else {
            dados.tipo = "paciente";
            dados.crm = "";
            dados.password = dados.cpf + dados.tipo + dados.dados_nascimento;
            dados.confirmarSenha = dados.password;
            let retorno = await cadastrarUsuario(dados);
            if (!!retorno?.status) {
                id_paciente = retorno.id;
            } else {
                return retorno;
            }
        }

        api = Datamed(token);
        let vinculo = { userId: id_medico, id_paciente, id_medico };
        const { data } = await api.post(`/640/vinculo_medico_paciente`, vinculo).catch(({ response }) => console.log("error", response.data));
        return !!data?.id ? { id: data.id, status: true, message: "Paciente adicionado com sucesso!" } : { id: 0, status: false, message: "Ops! Algo deu errado" };
    };
    return <DashboardContext.Provider value={{ pacientes, setMedico, cadastrarPaciente, getPacientes }}>{children}</DashboardContext.Provider>;
};
export const useDashboard = () => useContext(DashboardContext);
