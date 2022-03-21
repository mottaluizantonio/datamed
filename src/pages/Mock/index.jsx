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
            label: "Sobrenome",
            key: "sobrenome",
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
            sobrenome: "Pereira",
            idade: "23",
        },
        {
            nome: "Luiz Augusto",
            sobrenome: "Motta",
            idade: "32",
        },
        {
            nome: "Rafael Mendes Gomes",
            sobrenome: "Ricciardi",
            idade: "22",
        },
    ];
    return (
        <>
            <Container>
                <Header>
                    <Button onClick={() => Switch("ModalConsulta")}>MODAL</Button>
                </Header>
                <Content style={{ justifyContent: "center" }}>
                    <Datagrid title="Usuarios" columns={colunas} data={dados} />
                </Content>
            </Container>
            <ModalConsulta />
        </>
    );
};
