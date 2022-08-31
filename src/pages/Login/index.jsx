import { useForm } from "react-hook-form";
import { container, rightSide } from "./style";
import { useHistory } from "react-router-dom";
import { Container, Button, FormBox, Content, RowBox, ColumnBox, Title, Text, Header, Input } from "../../theme";
import imgLogin from "../../img/imgLogin.svg";
import logo from "../../img/logo.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
export const Login = ({ logar }) => {
    const history = useHistory();
    const schema = yup.object().shape({
        crm: yup.string().required("Campo Obrigatório"),
        password: yup.string().required("Campo Obrigatório"),
    });
    const {
        register,
        handleSubmit,
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
                        <Title>Login</Title>
                        <Text>Bem-vindo de volta!</Text>
                    </ColumnBox>
                    <FormBox width="300px" onSubmit={handleSubmit(logar)}>
                        <Input register={register} name="crm" label="CRM" errorMsg={errors?.crm?.message} />
                        <Input register={register} name="password" label="Senha" errorMsg={errors?.password?.message} type="password" />
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
                    <img className="ocultar" src={imgLogin} alt="" />
                </ColumnBox>
            </Content>
        </Container>
    );
};
