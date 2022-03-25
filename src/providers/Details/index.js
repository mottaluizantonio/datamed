import { createContext, useContext, useEffect, useState } from 'react';
import { Datamed } from '../../services';
import { useLogin } from '../Login';
import { useToken } from '../Token';

const DetailsContext = createContext();

export const DetailsProvider = ({ children }) => {
	const [Paciente, setPaciente] = useState({});
	const [consultas, setConsultas] = useState([]);
	const [historico, setHistorico] = useState([]);
	const [antecedentes, setAntecedentes] = useState([]);
	const [diagnosticos, setdiagnosticos] = useState([]);
	const [id_consulta, setConsulta] = useState([]);
	const { token } = useToken();
	const { idLogado } = useLogin();

	const api = Datamed(token);

	const selectPaciente = async (cpf) => {
		let result = await api.get(`dados_usuarios?cpf=${cpf}`);
		!!result?.data && setPaciente(result.data.length > 0 && result.data[0]);
	};

	useEffect(() => getDadosPaciente(), [Paciente]);

	const getConsultas = async (
		id_medico = idLogado,
		id_paciente = Paciente?.userId
	) => {
		let { data: listaConsultas = [] } = await api.get(
			`consultas?id_medico=${id_medico}&id_paciente=${id_paciente}`
		);
		setConsultas(listaConsultas);
	};

	const getHistorico = async (id_paciente = Paciente?.userId) => {
		let { data: listaHistorico = [] } = await api.get(
			`diagnosticos?id_paciente=${id_paciente}`
		);
		setHistorico(listaHistorico);

	};

	const getAntecedentes = async (id_paciente = Paciente?.userId) => {
		let { data: listaAntecedentes = [] } = await api.get(
			`antecedentes?id_paciente=${id_paciente}`
		);
		setAntecedentes(listaAntecedentes);
	};

	const getDiagnosticos = async (id) => {
		setConsulta(id);
		let { data: listaDiagnosticos = [] } = await api.get(
			`diagnosticos?id_consulta=${id}`
		);
		setdiagnosticos(listaDiagnosticos);
	};

	const getDadosPaciente = async () => {
		getConsultas();
		getHistorico();
		getAntecedentes();
	};

	const tratarData = (data) =>
		data.length > 0
			? `${data.split('-')[2]}/${data.split('-')[1]}/${
					data.split('-')[0]
			  }`
			: '--/--/----';
	const salvarConsulta = async (dados) => {
		let response = await api.post(`/640/consultas`, {
			...dados,
			userId: idLogado,
			id_medico: idLogado,
			id_paciente: Paciente?.userId,
		});
		return {
			status: !!response?.data?.id ? true : false,
			message: !!response?.data?.id
				? 'Consulta registrada!'
				: 'Ops! Algo deu errado',
		};
	};

	const salvarDiagnostico = async (dados) => {
		dados.data_inicio = tratarData(dados.data_inicio);
		dados.data_fim = tratarData(dados.data_fim);
		let response = await api.post(`/640/diagnosticos`, {
			...dados,
			id_consulta,
			userId: idLogado,
			id_medico: idLogado,
			id_paciente: Paciente?.userId,
		});
		return {
			status: !!response?.data?.id ? true : false,
			message: !!response?.data?.id
				? 'incluido com sucesso!'
				: 'Ops! Algo deu errado',
		};
	};

	return (
		<DetailsContext.Provider
			value={{
				Paciente,
				historico,
				consultas,
				antecedentes,
				diagnosticos,
				selectPaciente,
				getDadosPaciente,
				getDiagnosticos,
				salvarConsulta,
				salvarDiagnostico,
			}}>
			{children}
		</DetailsContext.Provider>
	);

};

export const useDetails = () => useContext(DetailsContext);
