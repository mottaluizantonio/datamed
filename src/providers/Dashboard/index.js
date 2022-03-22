import { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { useLogin } from '../Login';
const DashboardContext = createContext([]);
export const DashboardProvider = ({ children }) => {
	const [pacientes, setPacientes] = useState([]);
	const { idLogado, setLoged } = useLogin();
	useEffect(() => getPacientes(idLogado), [idLogado]);
	const setMedico = (id) => setLoged(id);
	const getPacientes = (id) => {
		//pegar os pacientes deste medico na api e colocar no state pacientes, array vazio [] por default
		//mock abaxo
		let listaPacientes = [
			{
				userId: 1,
				nome: 'Gabriel',
				email: 'gabriel@mail.com',
				data_nascimento: '18/02/1987',
				cpf: '67656456',
				profissao: 'Médico',
				celular: '45496498',
				status_fumante: 0,
				tipo: 'medico',
				crm: '79461325855',
				id: 1,
			},
			{
				userId: 2,
				nome: 'Vinicius',
				email: 'vini@mail.com',
				data_nascimento: '18/02/1987',
				cpf: '67656456',
				profissao: 'Médico',
				celular: '45496498',
				status_fumante: 0,
				tipo: 'paciente',
				crm: '',
				id: 2,
			},
			{
				userId: 3,
				nome: 'Kamila',
				email: 'kamis@mail.com',
				data_nascimento: '18/02/1987',
				cpf: '67656456',
				profissao: 'Médico',
				celular: '45496498',
				status_fumante: 0,
				tipo: 'medico',
				crm: '79461325855',
				id: 3,
			},
			{
				userId: 4,
				nome: 'Luiz',
				email: 'luiz@mail.com',
				data_nascimento: '18/02/1987',
				cpf: '67656456',
				profissao: 'Médico',
				celular: '45496498',
				status_fumante: 0,
				tipo: 'paciente',
				crm: '',
				id: 4,
			},
		];
		//Mock acima
		id > 0 && setPacientes(listaPacientes);
	};
	return (
		<DashboardContext.Provider value={{ pacientes, setMedico }}>
			{children}
		</DashboardContext.Provider>
	);
};
export const useDashboard = () => useContext(DashboardContext);
