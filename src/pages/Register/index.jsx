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
              type="email"
            />
            <Input
              register={register}
              name="nome"
              erroCor={!!errors?.nome}
              error={errors.nome?.message}
              label="Nome"
              placeholder="Seu Nome"
            />
            <Input
              register={register}
              name="data_nascimento"
              erroCor={!!errors?.data_nascimento}
              error={errors.data_nascimento?.message}
              label="Nascimento"
              type="date"
            />
            <Input
              register={register}
              name="celular"
              erroCor={!!errors?.celular}
              error={errors.celular?.message}
              label="Celular"
              placeholder="Seu Número"
              type="tel"
            />

            <Input
              register={register}
              name="profissão"
              erroCor={!!errors?.profissao}
              error={errors.profissao?.message}
              label="Profissão"
              placeholder="Sua Profissão"
              type="text"
            />

            <FieldBox error={!!errors?.status_fumante}>
              <label>Fumante {errors.status_fumante?.message}</label>
              <select {...register("status_fumante")}>
                <option>Não</option>
                <option>Sim</option>
              </select>
            </FieldBox>

            <Input
              register={register}
              name="cpf"
              erroCor={!!errors?.cpf}
              error={errors.cpf?.message}
              label="CPF"
              placeholder="Insira seu CPF"
              type="number"
            />

            <Input
              register={register}
              name="crm"
              erroCor={!!errors?.crm}
              error={errors.crm?.message}
              label="CRM"
              placeholder="Insira seu CRM"
              type="number"
            />
            <Input
              register={register}
              name="password"
              erroCor={!!errors?.password}
              error={errors.password?.message}
              label="Senha"
              placeholder="Sua Senha"
              type="passWord"
            />
            <Input
              register={register}
              name="confirmarSenha"
              erroCor={!!errors?.confirmarSenha}
              error={errors.confirmarSenha?.message}
              label="Confirmar Senha"
              placeholder="Insira a mesma senha"
              type="passWord"
            />
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
