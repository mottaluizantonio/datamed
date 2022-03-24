import { Button, Container, Content, Header, RowBox, Title, Datagrid } from "../../theme";
import { useLogin } from "../../providers/Login";
import logo from "../../img/logo.svg";
import { useDashboard } from "../../providers/Dashboard";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ModalPaciente } from "../../components/ModalPaciente";
import { useModal } from "../../providers/Modal";
import { useEffect, useState } from "react";
export const Dashboard = () => {
    const [lista, setLista] = useState([]);
    const { id } = useParams();
    const { pacientes, setMedico } = useDashboard();
    useEffect(() => setMedico(id), [setMedico, id]);
    useEffect(() => setLista(pacientes), [pacientes]);
    const { logout, dadosLogado } = useLogin();
    const { Switch } = useModal();
    const history = useHistory();
    const handleRedirectDetails = (dataPaciente) => {
        history.push(`/details/${dataPaciente.cpf}`);
    };
    let gridColumns = [
        {
            label: "Nome do Paciente",
            key: "nome",
            type: "text",
            width: 100,
        },
        {
            label: "CPF",
            type: "text",
            key: "cpf",
            width: 100,
        },
        {
            label: "Ação",
            type: "button",
            onclick: handleRedirectDetails,
            key: "Detalhes",
            width: 100,
        },
    ];
    return (
        <>
            <Container>
                <Header>
                    <RowBox width="25%">
                        <img src={logo} alt="Datamed" />
                    </RowBox>
                    <RowBox width="auto">
                        <Button onClick={() => Switch("ModalPaciente")}>Adicionar paciente</Button>
                        <Button onClick={() => logout("/")}>Sair</Button>
                    </RowBox>
                </Header>
                <RowBox style={{ padding: "20px 0 0 0" }}>
                    <Title>Bem vindo, Sr(a). {dadosLogado.nome}</Title>
                </RowBox>
                <Content overflow="auto">
                    <Datagrid title="Pacientes" columns={gridColumns} data={lista} />
                </Content>
            </Container>
            <ModalPaciente />
        </>
    );
};
