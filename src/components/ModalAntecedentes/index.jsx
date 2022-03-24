import { button, rowBar } from "./style";
import { Button, ColumnBox, ModalBox, RowBox, Text, Datagrid } from "../../theme";
import { useModal } from "../../providers/Modal";
import { useDetails } from "../../providers/Details";
export const ModalAntecedentes = () => {
    const { Switch, stateModalAntecedentes } = useModal();
    const { antecedentes } = useDetails();

    const colunas = [
        { label: "Grau", key: "grau" },
        { label: "Diagnóstico", key: "doenca" },
    ];

    return (
        <ModalBox hidden={stateModalAntecedentes}>
            <ColumnBox bgColor="grey0" width="65%">
                <RowBox bgColor="primary" style={rowBar}>
                    <Text>Antecedentes</Text>
                    <Button bgColor="negative" style={button} onClick={() => Switch("ModalAntecedentes")}>
                        x
                    </Button>
                </RowBox>
                <Datagrid options={{ showHeader: false }} bgColor="grey0" columns={colunas} data={antecedentes}></Datagrid>
            </ColumnBox>
        </ModalBox>
    );
};
