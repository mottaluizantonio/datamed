import { button, rowBar } from "./style";
import {
  Button,
  ColumnBox,
  ModalBox,
  RowBox,
  Text,
  Datagrid,
} from "../../theme";
import { useModal } from "../../providers/Modal";
import { useDetails } from "../../providers/Details";
export const ModalHistoricoFamiliar = () => {
  const { Switch, stateModalHistoricoFamiliar } = useModal();
  const { historicoFamiliar } = useDetails();

  const colunaHistorico = [
    { label: "Grau", key: "grau" },
    { label: "Diagnóstico", key: "doenca" },
  ];

  return (
    <ModalBox hidden={stateModalHistoricoFamiliar}>
      <ColumnBox bgColor="grey0" width="600px">
        <RowBox bgColor="primary" style={rowBar}>
          <Text>Histórico Familiar</Text>
          <Button
            bgColor="negative"
            style={button}
            onClick={() => Switch("ModalHistoricoFamiliar")}
          >
            x
          </Button>
        </RowBox>
        <Datagrid
          options={{ showFilter: false, showTitle: false }}
          bgColor="grey0"
          title="Histórico"
          columns={colunaHistorico}
          data={historicoFamiliar}
        ></Datagrid>
      </ColumnBox>
    </ModalBox>
  );
};
