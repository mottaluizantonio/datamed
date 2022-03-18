import {} from "./style";
import { Button } from "../../styles/theme";
import { useLogin } from "../../providers/Login";
export const Dashboard = () => {
    const { logout } = useLogin();
    return (
        <div>
            <Button onClick={() => logout("/")}>Logout</Button>
        </div>
    );
};
