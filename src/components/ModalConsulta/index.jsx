import { button, rowBar } from "./style";
import { Button, ColumnBox, ModalBox, RowBox, Text } from "../../styles/theme";
import { useModal } from "../../providers/Modal";
export const ModalConsulta = () => {
    const { Switch, stateModalConsulta } = useModal();
    return (
        <ModalBox hidden={stateModalConsulta}>
            <ColumnBox bgColor="grey0" width="550px">
                <RowBox bgColor="primary" style={rowBar}>
                    <Text>TITULO DO MODAL</Text>
                    <Button bgColor="negative" style={button} onClick={() => Switch("ModalConsulta")}>
                        x
                    </Button>
                </RowBox>
            </ColumnBox>
        </ModalBox>
    );
};
