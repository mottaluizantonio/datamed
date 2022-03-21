import { ModalConsulta } from "../../components/ModalConsulta";
import { useDashboard } from "../../providers/Dashboard";
import { useModal } from "../../providers/Modal";
import { Datagrid } from "../../styles/Datagrid";
import { Button, Container, Content, Header } from "../../styles/theme";

export const Mock = () => {
    const { Switch } = useModal();
    const { pacientes, setMedico } = useDashboard();
    setMedico(40);
    const onClickTeste = (dadosLinha) => console.log(dadosLinha);
    let gridColumns = [
        {
            label: "Nome do Paciente",
            key: "nome",
            type: "text",
            width: 100,
        },
        {
            label: "CPF do Paciente",
            key: "cpf",
            type: "text",
            width: 100,
        },
        {
            label: "Nascimento do Paciente",
            key: "data_nascimento",
            type: "text",
            width: 100,
        },
        {
            label: "Ação",
            type: "button",
            onclick: onClickTeste,
            key: "Detalhes",
            width: 100,
        },
    ];
    return (
        <>
            <Container>
                <Header>
                    <Button onClick={() => Switch("ModalConsulta")}>MODAL</Button>
                </Header>
                <Content style={{ justifyContent: "center" }}>
                    <Datagrid
                        title="Pacientes"
                        columns={gridColumns}
                        data={pacientes}
                        options={{
                            emptyMsg: "Nenhum paciente foi encontrado!",
                            showTitle: true,
                            showFilter: true,
                        }}
                    ></Datagrid>
                </Content>
            </Container>
            <ModalConsulta />
        </>
    );
};
