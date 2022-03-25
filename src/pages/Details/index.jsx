import { useEffect, useState } from "react";
import { Button, ColumnBox, Container, Content, Header, RowBox, Text, Title, Datagrid } from "../../theme";
import logo from "../../img/logo.svg";
import { ModalConsulta } from "../../components/ModalConsulta";
import { useParams } from "react-router-dom";
import { useDetails } from "../../providers/Details";
import { HeaderBottomLine } from "./style";
import { useLogin } from "../../providers/Login";
import { useModal } from "../../providers/Modal";
import { ModalDiagnosticos } from "../../components/ModalDiagnosticos";
import { ModalAntecedentes } from "../../components/ModalAntecedentes";
import { useToken } from "../../providers/Token";

export const Details = () => {
    const [Id_consulta, setId_consulta] = useState(0);
    const { goTo } = useToken();
    const { cpf } = useParams();
    const { Paciente, selectPaciente, historico, consultas, getDiagnosticos } = useDetails();
    const { idLogado } = useLogin();
    const [idade, setIdade] = useState(0);
    const { Switch } = useModal();
    const colunasHistorico = [
        { label: "Tipo", key: "tipo" },
        { label: "Descrição", key: "descricao" },
    ];
    const detalhesConsulta = ({ id }) => {
        setId_consulta(id);
        Switch("ModalDiagnosticos");
        getDiagnosticos(id);
    };

    const colunasConsultas = [
        { label: "Descrição", key: "desc_consulta" },
        {
            label: "Ação",
            key: "Diagnostico",
            type: "button",
            onclick: detalhesConsulta,
        },
    ];

    const calculate_age = ({ data_nascimento = "01/01/1900" }) => {
        const data_nasc = data_nascimento.split("/");
        const dia_nascimento = Number(data_nasc[0]);
        const mes_nascimento = Number(data_nasc[1]);
        const ano_nascimento = Number(data_nasc[2]);

        const hoje = new Date();
        const dia_atual = hoje.getDate();
        const mes_atual = hoje.getMonth() + 1;
        const ano_atual = hoje.getFullYear();

        let anos = ano_atual - ano_nascimento;

        if (mes_atual < mes_nascimento || (mes_atual === mes_nascimento && dia_atual < dia_nascimento)) {
            anos--;
        }

        setIdade(anos < 0 ? 0 : anos);
    };

    useEffect(() => selectPaciente(cpf), []);

    useEffect(() => calculate_age(Paciente), [Paciente]);

    const handleVoltar = () => goTo(`/dashboard/${idLogado}`);

    return (
        <>
            <Container>
                <Header>
                    <img src={logo} alt="Datamed logo" />
                    <RowBox width="auto">
                        <Button onClick={() => Switch("ModalAntecedentes")}>Histórico familiar</Button>
                        <Button onClick={() => Switch("ModalConsulta")}>Nova consulta</Button>
                        <Button onClick={handleVoltar}>Voltar</Button>
                    </RowBox>
                </Header>
                <HeaderBottomLine />
                <Header>
                    <ColumnBox width="auto">
                        <Title>Nome paciente: {Paciente.nome}</Title>
                        <Text>
                            Idade:
                            {idade}
                        </Text>
                    </ColumnBox>
                    <ColumnBox width="auto">
                        <Text>Profissão: {Paciente.profissao}</Text>
                        <Text>Fumante: {!!Paciente.status_fumante ? "sim" : "não"}</Text>
                    </ColumnBox>
                </Header>
                <Content>
                    <ColumnBox height="100%" overflow="auto">
                        <Datagrid overflow="auto" height="100%" stitle="Histórico" columns={colunasHistorico} data={historico}></Datagrid>
                    </ColumnBox>
                    <ColumnBox height="100%" overflow="auto">
                        <Datagrid overflow="auto" title="Consultas" columns={colunasConsultas} data={consultas}></Datagrid>
                    </ColumnBox>
                </Content>
            </Container>
            <ModalConsulta></ModalConsulta>
            <ModalAntecedentes></ModalAntecedentes>
            <ModalDiagnosticos id_consulta={Id_consulta}></ModalDiagnosticos>
        </>
    );
};
