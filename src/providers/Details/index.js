import { createContext, useContext, useState } from "react";

const DetailsContext = createContext();

export const DetailsProvider = ({ children }) => {
  const [consultas, setConsultas] = useState([]);
  const [diagnosticos, setDiagnosticos] = useState([]);
  const [historicoFamiliar, setHistoricoFamiliar] = useState([]);
  const [paciente, setPaciente] = useState([]);

  const selectPaciente = (cpf = undefined) => {
    //Mock abaixo
    let pacienteSelecionado = cpf !== undefined && {
      userId: 2,
      nome: "Vinicius",
      email: "vini@mail.com",
      data_nascimento: "18/02/1987",
      cpf: "67656456",
      profissao: "Médico",
      celular: "45496498",
      status_fumante: 0,
      tipo: "paciente",
      crm: "",
      id: 2,
    };
    //Mock acima
    // setPaciente(pacienteSelecionado);
    // console.log("pacienteSelecionado", pacienteSelecionado);
    return pacienteSelecionado;
  };

  const getDadosPaciente = () => {
    //Mocks abaixo
    let listaDiagnosticos = !!paciente?.id
      ? [
          {
            id: 1,
            idConsulta: 1,
            tipo: "Doença Cronica",
            descricao: "Dermatite atópica",
          },
          {
            id: 2,
            idConsulta: 1,
            tipo: "Medicamento constante",
            descricao: "Hidratante - Nutrel Profuse",
          },
          {
            id: 2,
            idConsulta: 2,
            tipo: "Doença Cronica",
            descricao: "Ceratocone",
          },
        ]
      : [];
    let listaHistoricoFamiliar = !!paciente?.id
      ? [
          {
            id: 1,
            idPaciente: 2,
            grau: "1º",
            parentesco: "pai",
            nome: "Francisco Alves Pereira",
            doenca: "Ceratocone",
          },
          {
            id: 2,
            idPaciente: 2,
            grau: "1º",
            parentesco: "mae",
            nome: "Elsa Rocha Bento",
            doenca: "Dermatite atópica",
          },
        ]
      : [];
    let listaConsultas = !!paciente?.id
      ? [
          {
            id: 1,
            crm_medico: "79461325855",
            desc: "O paciente está com dermatite atópica",
          },
          {
            id: 2,
            crm_medico: "79461325855",
            desc: "o pacioente tem ceratocone",
          },
        ]
      : [];
    //Mocks acima
    setDiagnosticos(listaDiagnosticos);
    setHistoricoFamiliar(listaHistoricoFamiliar);
    setConsultas(listaConsultas);
  };

  return (
    <DetailsContext.Provider
      value={{ paciente, setPaciente, selectPaciente, getDadosPaciente }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export const useDetails = () => useContext(DetailsContext);
