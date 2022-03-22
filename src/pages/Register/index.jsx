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
import { Input } from "../../styles/Input";
import { useRegister } from "../../providers/Register";
import { toast } from "react-toastify";

export const Register = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    nome: yup.string().required("Campo Obrigatório"),
    data_nascimento: yup.string().required("Campo Obrigatório"),
    celular: yup.string().required("Campo Obrigatório"),
    profissao: yup.string().required("Campo Obrigatório"),
    status_fumante: yup.string().required("Campo Obrigatório"),
    cpf: yup
      .string()
      .required("Campo Obrigatório")
      .min(11, "Mínimo de 11 dígitos")
      .max(11, "Máximo de 11 dígitos"),
    crm: yup
      .string()
      .required("Campo Obrigatório")
      .min(6, "Mínimo de 6 dígitos"),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Mínimo 8 digitos, Necessário maiúscula, minúscula, Número e Caracter especial"
      ),
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

  const { cadastrarUsuario } = useRegister();

  const novoUsuario = (registros) => {
    let validacao = cadastrarUsuario(registros);
    if (validacao.status) {
      toast.success(validacao.message);
      history.push("/login");
    } else {
      toast.error(validacao.message);
    }
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
          <FormBox
            style={{ overflow: "auto" }}
            width="400px"
            onSubmit={handleSubmit(novoUsuario)}
          >
            <Input
              register={register}
              name="email"
              errorMsg={errors.email?.message}
              label="Email"
              placeholder="Seu Email"
              type="email"
            />
            <Input
              register={register}
              name="nome"
              errorMsg={errors.nome?.message}
              label="Nome"
              placeholder="Seu Nome"
            />
            <RowBox>
              <Input
                register={register}
                name="data_nascimento"
                errorMsg={errors.data_nascimento?.message}
                label="Nascimento"
                type="date"
              />
              <Input
                register={register}
                name="celular"
                errorMsg={errors.celular?.message}
                label="Celular"
                placeholder="Seu Número"
                type="tel"
              />
            </RowBox>
            <RowBox>
              <Input
                register={register}
                name="profissao"
                errorMsg={errors.profissao?.message}
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
            </RowBox>

            <RowBox>
              <Input
                register={register}
                name="cpf"
                errorMsg={errors.cpf?.message}
                label="CPF"
                placeholder="Insira seu CPF"
                type="number"
              />

              <Input
                register={register}
                name="crm"
                errorMsg={errors.crm?.message}
                label="CRM"
                placeholder="Insira seu CRM"
                type="number"
              />
            </RowBox>

            <RowBox>
              <Input
                register={register}
                name="password"
                errorMsg={errors.password?.message}
                label="Senha"
                placeholder="Sua Senha"
                type="passWord"
              />
              <Input
                register={register}
                name="confirmarSenha"
                errorMsg={errors.confirmarSenha?.message}
                label="Confirmar Senha"
                placeholder="Insira a mesma senha"
                type="passWord"
              />
            </RowBox>
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
