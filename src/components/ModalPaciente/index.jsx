import { button, rowBar } from './style';
import {
	Button,
	ColumnBox,
	FieldBox,
	FormBox,
	ModalBox,
	RowBox,
	Text,
} from '../../styles/theme';
import { useModal } from '../../providers/Modal';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useRegister } from '../../providers/Register';
import { toast } from 'react-toastify';
import { palette } from '../../styles/palette';
export const ModalPaciente = () => {
	const { Switch, stateModalPaciente } = useModal();
	const { cadastrarPaciente } = useRegister();

	const schema = yup.object().shape({
		nome: yup.string().required('Nome obrigatório'),
		email: yup
			.string()
			.email('Formato de email inválido')
			.required('E-mail obrigatório'),
		cpf: yup.string().required('CPF obrigatório'),
		data_nascimento: yup
			.string()
			.required('Data de nascimento obrigatória'),
		profissao: yup.string().required('Profissão obrigatória'),
		celular: yup.string().required('Celualar obrigatório'),
		status_fumante: yup.string(),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	function novoPaciente(data) {
		let validacao = cadastrarPaciente(data);
		validacao.state === true
			? toast.success(validacao.message)
			: toast.error('Algo deu errado!');
		Switch('ModalPaciente');
	}

	return (
		<ModalBox hidden={stateModalPaciente} height='100%'>
			<ColumnBox bgColor='grey0' width='400px' height='600px'>
				<RowBox bgColor='primary' style={rowBar}>
					<Text>Adicionar Paciente</Text>
					<Button
						bgColor='negative'
						style={button}
						onClick={() => Switch('ModalPaciente')}>
						x
					</Button>
				</RowBox>
				<FormBox
					onSubmit={handleSubmit(novoPaciente)}
					style={{ overflow: 'auto' }}>
					<FieldBox>
						<label>Nome</label>
						<input
							placeholder='Nome do paciente'
							{...register('nome')}
							type='text'
						/>
						{errors.nome?.message}
					</FieldBox>
					<FieldBox>
						<label>CPF</label>
						<input
							placeholder='CPF do paciente'
							{...register('cpf')}
							type='number'
						/>
						{errors.cpf?.message}
					</FieldBox>
					<FieldBox>
						<label>Data de nascimento</label>
						<input
							placeholder='Data de nascimento do paciente'
							{...register('data_nascimento')}
							type='date'
						/>
						{errors.data_nascimento?.message}
					</FieldBox>
					<FieldBox>
						<label>Profissão</label>
						<input
							placeholder='Profissão do paciente'
							{...register('profissao')}
						/>
						{errors.profissao?.message}
					</FieldBox>
					<FieldBox>
						<label>Fumante</label>
						<select
						style={{color: palette.grey0}}
							name='fumante'
							id='fumante'
							{...register('status_fumante')}>
							<option value='sim'>Sim</option>
							<option value='nao'>Não</option>
						</select>
					</FieldBox>
					<FieldBox>
						<label>E-mail</label>

						<input
							placeholder='E-mail do paciente'
							{...register('email')}
							type='email'
						/>
						{errors.email?.message}
					</FieldBox>
					<FieldBox>
						<label>Celular</label>

						<input
							placeholder='Celular do paciente'
							{...register('celular')}
							type='tel'
						/>
						{errors.celular?.message}
					</FieldBox>
					<Button width='150px'>Cadastrar</Button>
				</FormBox>
			</ColumnBox>
		</ModalBox>
	);
};
