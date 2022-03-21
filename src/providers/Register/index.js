import { createContext, useContext } from "react";
const RegisterContext = createContext([]);
export const RegisterProvider = ({ children }) => {
    const cadastrarUsuario = (dados) => {
        console.log("dados", dados);
        return { state: true, message: "Cadastrado com sucesso!" };
    };
    const cadastrarPaciente = (dados) => {
        console.log("dados", dados);
        return { state: true, message: "Cadastrado com sucesso!" };
    };
    return <RegisterContext.Provider value={{ cadastrarUsuario, cadastrarPaciente }}>{children}</RegisterContext.Provider>;
};

export const useRegister = () => useContext(RegisterContext);
