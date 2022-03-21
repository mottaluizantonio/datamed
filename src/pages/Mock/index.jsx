import { ModalConsulta } from "../../components/ModalConsulta";
import { useModal } from "../../providers/Modal";
import { Datagrid } from "../../styles/Datagrid";
import { Button, Container, Content, Header } from "../../styles/theme";

export const Mock = () => {
    const { Switch } = useModal();
    let colunas = [
        {
            label: "Nome",
            key: "nome",
            width: 100,
        },
        {
            label: "Email",
            key: "email",
            width: 100,
        },
        {
            label: "Data de Nascimento",
            key: "idade",
            width: 100,
        },
    ];
    let dados = [
        {
            nome: "Vinicius Rocha",
            email: "vini@vini.com",
            idade: "23",
        },
        {
            nome: "Luiz Augusto",
            email: "luiz@luiz.com",
            idade: "32",
        },
        {
            nome: "Rafael Mendes Gomes",
            email: "rafael@rafael.com",
            idade: "22",
        },
    ];
    return (
        <>
            <Container>
                <Header>
                    <Button onClick={() => Switch("ModalConsulta")}>Abrir Modal</Button>
                </Header>
                <Content style={{ justifyContent: "center" }}>
                    <Datagrid title="Usuarios" columns={colunas} data={dados} />
                </Content>
            </Container>
            <ModalConsulta />
        </>
    );
};
