import { button, rowBar } from "./style";
import { Button, ColumnBox, ModalBox, RowBox, Text } from "../../styles/theme";
import { useModal } from "../../providers/Modal";
export const ModalHistoricoFamiliar = () => {
    const { Switch, stateModalHistoricoFamiliar } = useModal();
    return (
        <ModalBox hidden={stateModalHistoricoFamiliar}>
            <ColumnBox bgColor="grey0" width="600px">
                <RowBox bgColor="primary" style={rowBar}>
                    <Text>TITULO DO MODAL</Text>
                    <Button bgColor="negative" style={button} onClick={() => Switch("ModalHistoricoFamiliar")}>
                        x
                    </Button>
                </RowBox>
            </ColumnBox>
        </ModalBox>
    );
};
