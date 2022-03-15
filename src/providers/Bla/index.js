import { createContext, useContext, useState } from "react";
const BlaContext = createContext([]);
export const ProviderBla = ({ children }) => {
    const [bla, setBla] = useState([]);
    const changeBla = (data) => {
        setBla(data);
    };
    return <BlaContext.Provider value={{ bla, changeBla }}>{children}</BlaContext.Provider>;
};
export const useBla = () => useContext(BlaContext);
