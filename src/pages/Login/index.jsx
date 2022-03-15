import { useForm } from "react-hook-form";
import { Content, FooterBox } from "./style";
import { useHistory } from "react-router-dom";
import { Container, FieldBox, Button, FormBox, Title } from "../../styles/theme";
export const Login = () => {
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const logar = (dados) => {};
    return (
        <Container bgColor="Grey4">
            <Title>Datamed</Title>
            <Content>
                <FormBox onSubmit={handleSubmit(logar)}>
                    <Title>Login</Title>
                    <FieldBox>
                        <label>Email</label>
                        <input defaultValue="" {...register("email")} type="email"></input>
                    </FieldBox>
                    <FieldBox>
                        <label>Senha</label>
                        <input defaultValue="" {...register("password")} type="password"></input>
                    </FieldBox>
                    <Button fullWidth bgColor="primary" type="submit">
                        Entrar
                    </Button>
                </FormBox>
                <FooterBox>
                    <label>Ainda não possui uma conta?</label>
                    <Button fullWidth bgColor="Grey1" onClick={() => history.push("/signin")}>
                        Cadastre-se
                    </Button>
                </FooterBox>
            </Content>
        </Container>
    );
};
