import {
	Button,
	Container,
	Content,
	Header,
	RowBox,
	Title,
} from '../../styles/theme';
import { useLogin } from '../../providers/Login';
import logo from '../../img/logo.svg';
import { useDashboard } from '../../providers/Dashboard';
import { Datagrid } from '../../styles/Datagrid';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { ModalPaciente } from '../../components/ModalPaciente';
import { useModal } from '../../providers/Modal';
export const Dashboard = () => {
	const { pacientes, setMedico } = useDashboard();
	const { Switch } = useModal();
	const { logout } = useLogin();
	const { id = 40 } = useParams();
	const history = useHistory();
	const handleRedirectDetails = (dataPaciente) => {
		history.push(`datails/${dataPaciente.cpf}`);
	};
	setMedico(id);
	let gridColumns = [
		{
			label: 'Nome do Paciente',
			key: 'nome',
			type: 'text',
			width: 100,
		},
		{
			label: 'CPF',
			type: 'text',
			key: 'cpf',
			width: 100,
		},
		{
			label: 'Ação',
			type: 'button',
			onclick: handleRedirectDetails,
			key: 'Detalhes',
			width: 100,
		},
	];
	return (
		<>
			<Container>
				<Header>
					<RowBox width='25%'>
						<img src={logo} alt='Datamed' />
					</RowBox>
					<Button onClick={() => Switch('ModalPaciente')}>
						Adicionar paciente
					</Button>
					<Button onClick={() => logout('/')}>Sair</Button>
				</Header>
				<RowBox style={{ padding: '20px 0 0 0' }}>
					<Title>Bem vindo, Dr. Strange!</Title>
				</RowBox>
				<Content>
					<Datagrid
						title='Pacientes'
						columns={gridColumns}
						data={pacientes}
					/>
				</Content>
			</Container>
			<ModalPaciente />
		</>
	);
};
