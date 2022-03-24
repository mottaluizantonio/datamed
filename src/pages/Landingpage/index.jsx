import { Button, ColumnBox, Container, RowBox, Text } from "../../theme";
import { container, rightSide, boxLogo, Img } from "./style";
import logo from "../../img/logo.svg";
import imgLandingpage from "../../img/imgLandingpage.svg";
import { useHistory } from "react-router-dom";
import { useLogin } from "../../providers/Login";
import { useEffect } from "react";
export const Landingpage = () => {
  const { setFirstAccess } = useLogin();
  const history = useHistory();
  useEffect(() => setFirstAccess(0), []);
  const goTo = (path) => history.push(path);

  return (
    <Container style={container}>
      <ColumnBox style={{ gap: "150px" }}>
        <ColumnBox style={boxLogo}>
          <img src={logo} alt="" />
          <Text>Seu paciente em um click!</Text>
        </ColumnBox>
        <RowBox>
          <Button width="150px" onClick={() => goTo("/login")}>
            Login
          </Button>
          <Button width="150px" onClick={() => goTo("/register/medico")}>
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
