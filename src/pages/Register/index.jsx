import {
  ColumnBox,
  Container,
  Content,
  FieldBox,
  FormBox,
  Header,
  Text,
  Title,
} from "../../styles/theme";
import {} from "./style";
// import imgLogin from "../../img/imgLogin.svg";
import logo from "../../img/logo.svg";

export const Register = () => {
  return (
    <Container>
      <Header>
        <img src={logo} alt="" />
      </Header>
      <Content>
        <ColumnBox>
          <ColumnBox>
            <Title>Registre-se</Title>
            <Text>É rápido e fácil</Text>
          </ColumnBox>
          <FormBox>
            <FieldBox>
              <label>E-mail</label>
              <input
                type="email"
                placeholder="Seu email"
                // {...register("email")}
              />
            </FieldBox>
            <FieldBox>
              <label>Nome</label>
              <input
                type="text"
                placeholder="Seu nome"
                // {...register("nome")}
              />
            </FieldBox>
            <FieldBox>
              <label>Nascimento</label>
              <input
                type="date"
                //    {...register("data_nascimento")}
              />
            </FieldBox>
            <FieldBox>
              <label>Celular</label>
              <input
                type="tel"
                placeholder="Número"
                //   {...Register("celular")}
              />
            </FieldBox>
            <FieldBox>
              <label>Profissão</label>
              <input
                type="text"
                placeholder="Sua Profissão"
                // {...Register("profissao")}
              />
            </FieldBox>
            <FieldBox>
              <label>Fumante</label>
              <select
              //    {...register("status_fumante")}
              >
                <option>Não</option>
                <option>Sim</option>
              </select>
            </FieldBox>
            <FieldBox>
              <label>CPF</label>
              <input
                type="text"
                placeholder="Insira seu CPF"
                // {...register("cpf")}
              />
            </FieldBox>
            <FieldBox>
              <label>CRM</label>
              <input
                type="text"
                placeholder="Insira seu CRM"
                // {...register("crm")}
              />
            </FieldBox>
            <FieldBox>
              <label>Senha</label>
              <input
                type="passWord"
                placeholder="Sua senha"
                //   {...register("password")}
              />
            </FieldBox>
            <FieldBox>
              <label>Confirmar Senha</label>
              <input type="password" placeholder="Sua senha" />
            </FieldBox>
          </FormBox>
        </ColumnBox>
      </Content>
    </Container>
  );
};
