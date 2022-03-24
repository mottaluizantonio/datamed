import {
  Button,
  ColumnBox,
  Container,
  Header,
  RowBox,
  Text,
  Title,
} from "../../theme";
import { useHistory } from "react-router-dom";
import logo from "../../img/logo.svg";

// import { useLogin } from "../../providers/Login";
// import { useEffect } from "react";

const Equipe = () => {
  // const { setFirstAccess } = useLogin();
  // useEffect(() => setFirstAccess(0), []);

  const history = useHistory();

  return (
    <Container>
      <Header>
        <RowBox width="25%">
          <img src={logo} alt="Datamed" />
        </RowBox>
        <RowBox width="auto">
          <Button width="100px" onClick={() => history.push("/")}>
            Voltar
          </Button>
        </RowBox>
      </Header>
      <RowBox width="75%">
        <ColumnBox>
          <img
            width="150px"
            src="https://ca.slack-edge.com/TQZR39SET-U02FN8D1ABX-0b95021b221d-512"
            alt="Foto de Vinicius Rocha"
          />
          <Title>Tech Leader</Title>
          <Text>Vinícius Rocha</Text>
        </ColumnBox>
        <ColumnBox>
          <img
            src="https://ca.slack-edge.com/TQZR39SET-U024ZB3TV51-28c56190b3f8-512"
            alt="Foto de Gabriel Bezerra"
          />
          <Title>Product Owner</Title>
          <Text>Gabriel Bezerra</Text>
        </ColumnBox>
        <ColumnBox>
          <img
            src="https://ca.slack-edge.com/TQZR39SET-U025V1N7691-b21b069b7519-512"
            alt="Foto de Kamila Alencar"
            width="150px"
          />
          <Title>Quality Assurence</Title>
          <Text>Kamila Alencar</Text>
        </ColumnBox>
      </RowBox>
      <RowBox width="50%">
        <ColumnBox>
          <img
            width="150px"
            src="https://ca.slack-edge.com/TQZR39SET-U02C6QAE3UY-18be2f828427-512"
            alt="Foto de Luiz Antonio Motta"
          />
          <Title>Scrum Master</Title>
          <Text>Luiz Antonio Motta</Text>
        </ColumnBox>
        <ColumnBox>
          <img
            width="150px"
            src="https://ca.slack-edge.com/TQZR39SET-U02FAGTLJFR-9666cce25726-512"
            alt="Foto de Rafael Riciardi"
          />
          <Title>Quality Assurance</Title>
          <Text>Rafael Ricciardi</Text>
        </ColumnBox>
      </RowBox>
    </Container>
  );
};

export default Equipe;
