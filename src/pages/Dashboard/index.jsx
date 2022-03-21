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
export const Dashboard = () => {
	const { pacientes, setMedico } = useDashboard();
	const { logout } = useLogin();
    const { id } = useParams()
    setMedico(40)
	let gridColumns = [
		{
			label: 'Nome do Paciente',
			key: 'nome',
			type: 'text',
			width: 100,
		},{
			label: 'Ação',
			type: 'button',
			// onclick: onClickTeste,
			key: 'Detalhes',
			width: 100,
		},
	];
	return (
		<Container>
			<Header>
				<RowBox width='25%'>
					<img src={logo} alt='Datamed' />
				</RowBox>
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
	);
};
