import { useEffect, useState } from "react";
import {
  Button,
  ColumnBox,
  Container,
  Content,
  Header,
  RowBox,
  Text,
  Title,
} from "../../styles/theme";
import {} from "./style";
import logo from "../../img/logo.svg";
import { ModalConsulta } from "../../components/ModalConsulta";
import { useParams } from "react-router-dom";
import { useDetails } from "../../providers/Details";
import { HeaderBottomLine } from "./style";
import { useHistory } from "react-router-dom";
import { useLogin } from "../../providers/Login";

export const Details = () => {
  const { cpf } = useParams();
  const { paciente, setPaciente, selectPaciente, getDadosPaciente } =
    useDetails();
  const { idLogado } = useLogin();

  useEffect(() => {
    setPaciente(selectPaciente(cpf), []);
  }, []);

  const calculate_age = (paciente) => {
    const data_nascimento = paciente.data_nascimento.split("/");
    const dia_nascimento = Number(data_nascimento[0]);
    const mes_nascimento = Number(data_nascimento[1]);
    const ano_nascimento = Number(data_nascimento[2]);

    const hoje = new Date();
    const dia_atual = hoje.getDate();
    const mes_atual = hoje.getMonth() + 1;
    const ano_atual = hoje.getFullYear();

    let anos = ano_atual - ano_nascimento;

    if (
      mes_atual < mes_nascimento ||
      (mes_atual === mes_nascimento && dia_atual < dia_nascimento)
    ) {
      anos--;
    }

    return anos < 0 ? 0 : anos;
  };

  const history = useHistory();

  const handleVoltar = () => {
    history.push(`/dashboard/${idLogado}`);
  };

  return (
    <>
      <Container>
        <Header>
          <img src={logo} alt="Datamed logo" />
          <RowBox width="auto">
            <Button>Histórico familiar aqui</Button>
            <Button>Nova consulta</Button>
            <Button onClick={handleVoltar}>voltar</Button>
          </RowBox>
        </Header>

        <HeaderBottomLine />

        <Header>
          <ColumnBox width="auto">
            <Title>Nome paciente: {paciente.nome}</Title>
            <Text>Idade: {calculate_age(paciente)}</Text>
          </ColumnBox>
          <ColumnBox width="auto">
            <Text>Profissão: {paciente.profissao}</Text>
            <Text>Fumante: {!!paciente.status_fumante ? "sim" : "não"}</Text>
          </ColumnBox>
        </Header>

        <Content>
          <ColumnBox>Histórico</ColumnBox>
          <ColumnBox>Consultas</ColumnBox>
        </Content>
      </Container>
      <ModalConsulta></ModalConsulta>
    </>
  );
};
