import { Button, ColumnBox, Container, RowBox, Text } from "../../theme";
import { container, rightSide, boxLogo } from "./style";
import logo from "../../img/logo.svg";
import imgLandingpage from "../../img/imgLandingpage.svg";
import { useHistory } from "react-router-dom";
export const Landingpage = () => {
    const history = useHistory();
    return (
        <Container style={container}>
            <ColumnBox style={{ gap: "150px" }}>
                <ColumnBox style={boxLogo}>
                    <img src={logo} alt="" />
                    <Text>Seu paciente em um click!</Text>
                </ColumnBox>
                <RowBox>
                    <Button width="150px" onClick={() => history.push("/login")}>
                        Login
                    </Button>
                    <Button width="150px" onClick={() => history.push("/register/:type")}>
                        Registrar-se
                    </Button>
                </RowBox>
            </ColumnBox>
            <ColumnBox style={rightSide}>
                <img src={imgLandingpage} alt="" />
            </ColumnBox>
        </Container>
    );
};
