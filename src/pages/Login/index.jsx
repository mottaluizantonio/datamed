import { useForm } from "react-hook-form";
import { container, rightSide } from "./style";
import { useHistory } from "react-router-dom";
import { Container, FieldBox, Button, FormBox, Content, RowBox, ColumnBox, Title, Text, Header } from "../../styles/theme";
import imgLogin from "../../img/imgLogin.svg";
import logo from "../../img/logo.svg";

export const Login = ({ logar }) => {
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    return (
        <Container style={container}>
            <Header>
                <img src={logo} alt="" />
            </Header>
            <Content>
                <ColumnBox>
                    <ColumnBox>
                        <Title>Login</Title>
                        <Text>Bem-vindo de volta!</Text>
                    </ColumnBox>
                    <FormBox width="300px" onSubmit={handleSubmit(logar)}>
                        <FieldBox>
                            <label>CRM</label>
                            <input defaultValue="123456" {...register("crm")}></input>
                        </FieldBox>
                        <FieldBox>
                            <label>Senha</label>
                            <input defaultValue="vini" {...register("password")} type="password"></input>
                        </FieldBox>
                        <RowBox>
                            <Button fullWidth type="submit">
                                Entrar
                            </Button>
                            <Button width="100px" onClick={() => history.push("/")}>
                                Voltar
                            </Button>
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
