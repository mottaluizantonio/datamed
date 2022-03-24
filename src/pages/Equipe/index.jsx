import {
  Button,
  ColumnBox,
  Container,
  Header,
  RowBox,
  Text,
  Title,
} from "../../theme";
import logo from "../../img/logo.svg";
import { useHistory } from "react-router-dom";

export const Equipe = () => {
  const history = useHistory();

  const devs = [
    {
      nome: "Vinícius Rocha",
      cargo: "Tech Leader",
      foto_src:
        "https://ca.slack-edge.com/TQZR39SET-U02FN8D1ABX-0b95021b221d-512",
    },
    {
      nome: "Gabriel Bezerra",
      cargo: "Product Owner",
      foto_src:
        "https://ca.slack-edge.com/TQZR39SET-U024ZB3TV51-28c56190b3f8-512",
    },
    {
      nome: "Luiz Antonio Motta",
      cargo: "Scrum Master",
      foto_src:
        "https://ca.slack-edge.com/TQZR39SET-U02C6QAE3UY-18be2f828427-512",
    },
    {
      nome: "Kamila Alencar",
      cargo: "Quality Assurence",
      foto_src:
        "https://ca.slack-edge.com/TQZR39SET-U025V1N7691-b21b069b7519-512",
    },
    {
      nome: "Rafael Riciardi",
      cargo: "Quality Assurence",
      foto_src:
        "https://ca.slack-edge.com/TQZR39SET-U02FAGTLJFR-9666cce25726-512",
    },
  ];

  return (
    <Container style={{ justifyContent: "space-between" }}>
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
      <RowBox
        width="95%"
        height="auto"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Text style={{ fontSize: "30px" }}>
          Datamed é uma aplicação que visa facilitar o dia a dia dos médicos e
          pacientes, juntando todos os dados em um único lugar. Dessa forma, com
          um único clique, podemos ter acesso à todo o histórico do paciente,
          como consultas, diagnósticos de doenças, exames, tratamentos,
          histórico familiar, etc.
        </Text>
      </RowBox>

      <ColumnBox style={{ justifyContent: "center", alignItems: "center" }}>
        <RowBox
          width="95%"
          height="auto"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Title>Nosso time</Title>
        </RowBox>
        <RowBox
          width="95%"
          height="auto"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          {devs.map((dev) => {
            return (
              <ColumnBox
                bgColor="grey0"
                width="18%"
                height="300px"
                justifyContent="center"
                style={{ justifyContent: "center", alignItems: "center" }}
                alignItems="center"
              >
                <ColumnBox width="80%">
                  <img src={dev.foto_src} alt={`Foto de ${dev.nome}`} />
                </ColumnBox>
                <ColumnBox
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Title style={{ color: "#64B982", fontSize: "23px" }}>
                    {dev.cargo}
                  </Title>
                  <Text style={{ color: "#64B982", fontSize: "15px" }}>
                    {dev.nome}
                  </Text>
                </ColumnBox>
              </ColumnBox>
            );
          })}
        </RowBox>
      </ColumnBox>
    </Container>
  );
};
