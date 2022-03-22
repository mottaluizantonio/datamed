import { button, rowBar } from "./style";
import { Button, ColumnBox, ModalBox, RowBox, Text } from "../../styles/theme";
import { useModal } from "../../providers/Modal";
export const ModalDetalhesConsulta = () => {
  const { Switch, stateModalDetalhesConsulta } = useModal();

  return (
    <ModalBox hidden={stateModalDetalhesConsulta}>
      <ColumnBox bgColor="grey0" width="600px">
        <RowBox bgColor="primary" style={rowBar}>
          <Text>DETALHES CONSULTA</Text>
          <Button
            bgColor="negative"
            style={button}
            onClick={() => Switch("ModalDetalhesConsulta")}
          >
            x
          </Button>
        </RowBox>
      </ColumnBox>
    </ModalBox>
  );
};
