import { createContext, useContext, useState } from "react";
const ModalContext = createContext([]);
export const ModalProvider = ({ children }) => {
  const [stateModalPaciente, setStateModalPaciente] = useState(true);
  const [stateModalHistoricoFamiliar, setModalHistStateModalHistoricoFamiliar] =
    useState(true);
  const [stateModalConsulta, setStateModalConsulta] = useState(true);
  const [stateModalDetalhesConsulta, setStateModalDetalhesConsulta] =
    useState(true);
  const Switch = (modal) => {
    switch (modal) {
      case "ModalPaciente": {
        setStateModalPaciente(!stateModalPaciente);
        break;
      }
      case "ModalHistoricoFamiliar": {
        setModalHistStateModalHistoricoFamiliar(!stateModalHistoricoFamiliar);
        break;
      }
      case "ModalConsulta": {
        setStateModalConsulta(!stateModalConsulta);
        break;
      }

      case "ModalDetalhesConsulta": {
        setStateModalDetalhesConsulta(!stateModalDetalhesConsulta);
        break;
      }

      default: {
        break;
      }
    }
  };
  return (
    <ModalContext.Provider
      value={{
        Switch,
        stateModalPaciente,
        stateModalHistoricoFamiliar,
        stateModalConsulta,
        stateModalDetalhesConsulta,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export const useModal = () => useContext(ModalContext);
