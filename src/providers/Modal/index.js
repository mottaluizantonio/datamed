import { createContext, useContext, useState } from "react";
const ModalContext = createContext([]);
export const ModalProvider = ({ children }) => {
    const [stateModalPaciente, setStateModalPaciente] = useState(true);
    const [stateModalAntecedentes, setStateModalAntecedentes] = useState(true);
    const [stateModalConsulta, setStateModalConsulta] = useState(true);
    const [stateModalDiagnosticos, setStateModalDiagnosticos] = useState(true);
    const Switch = (modal) => {
        switch (modal) {
            case "ModalPaciente": {
                setStateModalPaciente(!stateModalPaciente);
                break;
            }
            case "ModalAntecedentes": {
                setStateModalAntecedentes(!stateModalAntecedentes);
                break;
            }
            case "ModalConsulta": {
                setStateModalConsulta(!stateModalConsulta);
                break;
            }
            case "ModalDiagnosticos": {
                setStateModalDiagnosticos(!stateModalDiagnosticos);
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
                stateModalAntecedentes,
                stateModalConsulta,
                stateModalDiagnosticos,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};
export const useModal = () => useContext(ModalContext);
