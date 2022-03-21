import {
  Button,
  ColumnBox,
  Container,
  Content,
  FieldBox,
  FormBox,
  Header,
  RowBox,
  Text,
  Title,
} from "../../styles/theme";
import {} from "./style";
import imgLogin from "../../img/imgLogin.svg";
import logo from "../../img/logo.svg";
import { useHistory } from "react-router-dom";
import { container, rightSide } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export const Register = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    nome: yup.string().required("Campo Obrigatório"),
    data_nascimento: yup.string().required("Campo Obrigatório"),
    celular: yup.string().required("Campo Obrigatório"),
    profissao: yup.string().required("Campo Obrigatório"),
    status_fumante: yup.string().required("Campo Obrigatório"),
    cpf: yup.string().required("Campo Obrigatório"),
    crm: yup.string().required("Campo Obrigatório"),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Mínimo 8 digitos, Necessário maiúscula, minúscula, Número e Caracter especial"
      ),
    confirmarSenha: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas diferentes")
      .required("Campo Obrigatório"),
  });

  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <Container style={container}>
      <Header>
        <img src={logo} alt="" />
      </Header>
      <Content>
        <ColumnBox>
          <ColumnBox>
            <Title>Registre-se</Title>
            <Text>É rápido e fácil</Text>
          </ColumnBox>
          <FormBox width="564px">
            <FieldBox>
              <label>E-mail</label>
              <input
                type="email"
                placeholder="Seu email"
                {...register("email")}
              />
            </FieldBox>
            <FieldBox>
              <label>Nome</label>
              <input type="text" placeholder="Seu nome" {...register("nome")} />
            </FieldBox>
            <FieldBox>
              <label>Nascimento</label>
              <input type="date" {...register("data_nascimento")} />
            </FieldBox>
            <FieldBox>
              <label>Celular</label>
              <input type="tel" placeholder="Número" {...register("celular")} />
            </FieldBox>
            <FieldBox>
              <label>Profissão</label>
              <input
                type="text"
                placeholder="Sua Profissão"
                {...register("profissao")}
              />
            </FieldBox>
            <FieldBox>
              <label>Fumante</label>
              <select {...register("status_fumante")}>
                <option>Não</option>
                <option>Sim</option>
              </select>
            </FieldBox>
            <FieldBox>
              <label>CPF</label>
              <input
                type="text"
                placeholder="Insira seu CPF"
                {...register("cpf")}
              />
            </FieldBox>
            <FieldBox>
              <label>CRM</label>
              <input
                type="text"
                placeholder="Insira seu CRM"
                {...register("crm")}
              />
            </FieldBox>
            <FieldBox>
              <label>Senha</label>
              <input
                type="passWord"
                placeholder="Sua senha"
                {...register("password")}
              />
            </FieldBox>
            <FieldBox>
              <label>Confirmar Senha</label>
              <input
                type="password"
                placeholder="Sua senha"
                {...register("confirmarSenha")}
              />
            </FieldBox>
            <RowBox>
              <Button type="submit">Registre-se</Button>
              <Button onClick={() => history.push("/")}>Voltar</Button>
            </RowBox>
          </FormBox>
        </ColumnBox>
        <ColumnBox style={rightSide}>
          <img src={imgLogin} alt="" />
        </ColumnBox>
      </Content>
    </Container>
  );
};
