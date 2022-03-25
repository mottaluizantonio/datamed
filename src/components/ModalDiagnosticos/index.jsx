import { button, rowBar } from './style';
import {
	Button,
	ColumnBox,
	ModalBox,
	RowBox,
	Text,
	Input,
	Select,
	FormBox,
	Datagrid,
} from '../../theme';
import { useModal } from '../../providers/Modal';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useDetails } from '../../providers/Details';

export const ModalDiagnosticos = ({ id_consulta }) => {
	const {
		salvarDiagnostico,
		diagnosticos,
		getDiagnosticos,
		getDadosPaciente,
	} = useDetails();
	const { Switch, stateModalDiagnosticos } = useModal();

	const formSchema = yup.object().shape({
		tipo: yup.string().required('Selecione o tipo do diagnostico.'),
		descricao: yup.string().required('Descreva o diagnostico'),
		data_inicio: yup.string().required('Digite a data de inicio.'),
	});

	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(formSchema),
	});

	const optionsTipo = [
		{ value: '', desc: 'Selecione', default: true },
		{ value: 'Tratamento', desc: 'Tratamento' },
		{ value: 'Medicamento Continuo', desc: 'Medicamento Continuo' },
		{ value: 'Cirurgia', desc: 'Cirurgia' },
		{ value: 'Alergia', desc: 'Alergia' },
		{ value: 'Doença Crônica', desc: 'Doença Crônica' },
	];
	const colunas = [
		{ label: 'Tipo', key: 'tipo' },
		{ label: 'Descrição', key: 'descricao' },
		{ label: 'Data de Inicio', key: 'data_inicio' },
		{ label: 'Data de Termino', key: 'data_fim' },
	];
	const dataAtual = new Date().toISOString().substr(0, 10);
	const novaDiagnostico = async (data) => {
		let validacao = await salvarDiagnostico({ ...data, id_consulta });
		if (validacao.status) {
			reset();
			toast.success(validacao.message);
			getDiagnosticos(id_consulta);
			getDadosPaciente();
		} else {
			toast.error(validacao.message);
			reset();
		}
	};
	return (
		<ModalBox hidden={stateModalDiagnosticos}>
			<ColumnBox bgColor='grey0' width='60%' height='100%'>
				<RowBox bgColor='primary' style={rowBar}>
					<Text>Diagnosticos</Text>
					<Button
						bgColor='negative'
						style={button}
						onClick={() => Switch('ModalDiagnosticos')}>
						x
					</Button>
				</RowBox>
				<FormBox onSubmit={handleSubmit(novaDiagnostico)}>
					<RowBox>
						<Select
							errorMsg={errors?.tipo?.message}
							label='Tipo'
							register={register}
							name='tipo'
							options={optionsTipo}></Select>
						<Input
							errorMsg={errors?.descricao?.message}
							label='Descrição'
							register={register}
							name='descricao'></Input>
					</RowBox>
					<RowBox>
						<Input
							errorMsg={errors?.data_inicio?.message}
							label='Data'
							register={register}
							name='data_inicio'
							type='date'
							defaultValue={dataAtual}></Input>
						<Input
							label='Data Final'
							register={register}
							name='data_fim'
							type='date'></Input>
						<RowBox style={{ padding: '30px 0px 0px 0px' }}>
							<Button width='100%' type='submit'>
								Registrar Detalhes
							</Button>
						</RowBox>
					</RowBox>
				</FormBox>
				<ColumnBox overflow='auto' height='100%'>
					<Datagrid
						height='100%'
						options={{ showHeader: false }}
						bgColor='grey0'
						columns={colunas}
						data={diagnosticos}
					/>
				</ColumnBox>
			</ColumnBox>
		</ModalBox>
	);
};
