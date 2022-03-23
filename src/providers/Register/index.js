import { createContext, useContext } from 'react';
import { toast } from 'react-toastify';
import { Datamed } from '../../services';
const RegisterContext = createContext([]);
export const RegisterProvider = ({ children }) => {
	const api = Datamed();
	const cadastrarUsuario = async (dados) => {
		const { email, password, crm } = dados;
		const getDadosUser = await api.get('/dados_usuarios');

		const validaCRM = getDadosUser.data.find((item) => item.crm === crm);

		if (validaCRM === undefined) {
			let retorno = await api.post(`/users`, { email, password }).catch(
				({ response: { status } }) =>
					status === 400 && {
						status: false,
						message: 'Este email já esta cadastrado!',
					}
			);
			if (!!retorno?.data) {
				const {
					user: { id },
				} = retorno.data;

				delete dados.confirmarSenha;
				dados.status_fumante = Number(dados.status_fumante);
				let arrData = dados.data_nascimento.split('-');
				dados.data_nascimento = `${arrData[2]}/${arrData[1]}/${arrData[0]}`;

				retorno = await api
					.post(`/dados_usuarios`, { ...dados, userId: id })
					.then((res) => ({
						status: true,
						message: 'Usuario cadastrado com sucesso!',
					}));
			}
			return retorno;
		} else {
			return toast.error('CRM já cadastradado!');
		}

		
	};
	const cadastrarPaciente = (dados) => {
		console.log('dados', dados);
		return { status: true, message: 'Cadastrado com sucesso!' };
	};
	return (
		<RegisterContext.Provider
			value={{ cadastrarUsuario, cadastrarPaciente }}>
			{children}
		</RegisterContext.Provider>
	);
};

export const useRegister = () => useContext(RegisterContext);
