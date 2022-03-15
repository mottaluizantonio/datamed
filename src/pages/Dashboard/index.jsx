import {} from "./style";
import { useBla } from "../../providers/Bla";
export const Dashboard = () => {
    const { bla, changeBla } = useBla();
    changeBla(["BOOOAAAAAAAA!"]);
    return <div>{bla}</div>;
};
