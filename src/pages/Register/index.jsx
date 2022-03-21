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
import Input from "../../components/Input";

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
    crm: yup
      .string()
      .required("Campo Obrigatório")
      .min(6, "Mínimo de 6 caracteres"),
    password: yup.string().required("Campo Obrigatório"),
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   "Mínimo 8 digitos, Necessário maiúscula, minúscula, Número e Caracter especial"
    // ),
    confirmarSenha: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas não coincidem")
      .required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const novoUsuario = (registros) => {
    console.log(registros);
  };

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
          <FormBox width="564px" onSubmit={handleSubmit(novoUsuario)}>
            <Input
              register={register}
              name="email"
              erroCor={!!errors?.email}
              error={errors.email?.message}
              label="Email"
              placeholder="Seu Email"
            />
            <Input
              register={register}
              name="nome"
              erroCor={!!errors?.nome}
              error={errors.nome?.message}
              label="Nome"
              placeholder="Seu Nome"
            />

            <FieldBox error={!!errors?.data_nascimento}>
              <label>Nascimento {errors.data_nascimento?.message}</label>
              <input type="date" {...register("data_nascimento")} />
            </FieldBox>
            <FieldBox error={!!errors?.celular}>
              <label>Celular {errors.celular?.message}</label>
              <input type="tel" placeholder="Número" {...register("celular")} />
            </FieldBox>
            <FieldBox error={!!errors?.profissao}>
              <label>Profissão {errors.profissao?.message}</label>
              <input
                type="text"
                placeholder="Sua Profissão"
                {...register("profissao")}
              />
            </FieldBox>
            <FieldBox error={!!errors?.status_fumante}>
              <label>Fumante {errors.status_fumante?.message}</label>
              <select {...register("status_fumante")}>
                <option>Não</option>
                <option>Sim</option>
              </select>
            </FieldBox>
            <FieldBox error={!!errors?.cpf}>
              <label>CPF {errors.cpf?.message}</label>
              <input
                type="text"
                placeholder="Insira seu CPF"
                {...register("cpf")}
              />
            </FieldBox>
            <FieldBox error={!!errors?.crm}>
              <label>CRM {errors.cpf?.message} </label>
              <input
                type="text"
                placeholder="Insira seu CRM"
                {...register("crm")}
              />
            </FieldBox>
            <FieldBox error={!!errors?.password}>
              <label>Senha {errors.password?.message}</label>
              <input
                type="passWord"
                placeholder="Sua senha"
                {...register("password")}
              />
            </FieldBox>
            <FieldBox error={!!errors?.confirmarSenha}>
              <label>Confirmar Senha {errors.confirmarSenha?.message}</label>
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
