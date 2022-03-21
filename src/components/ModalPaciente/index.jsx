import { button, rowBar } from "./style";
import { Button, ColumnBox, ModalBox, RowBox, Text } from "../../styles/theme";
import { useModal } from "../../providers/Modal";
export const ModalPaciente = () => {
    const { Switch, stateModalPaciente } = useModal();
    return (
        <ModalBox hidden={stateModalPaciente}>
            <ColumnBox bgColor="grey0" width="600px">
                <RowBox bgColor="primary" style={rowBar}>
                    <Text>TITULO DO MODAL</Text>
                    <Button bgColor="negative" style={button} onClick={() => Switch("ModalPaciente")}>
                        x
                    </Button>
                </RowBox>
            </ColumnBox>
        </ModalBox>
    );
};
