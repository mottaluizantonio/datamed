import { ModalConsulta } from "../../components/ModalConsulta";
import { useModal } from "../../providers/Modal";
import { Button, Container } from "../../styles/theme";

export const Mock = () => {
    const { Switch } = useModal();
    return (
        <>
            <Container>
                <Button onClick={() => Switch("ModalConsulta")}>MODAL</Button>
            </Container>
            <ModalConsulta></ModalConsulta>
        </>
    );
};
