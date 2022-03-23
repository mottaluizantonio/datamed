import { button, rowBar } from "./style";
import {
    Button,
    ColumnBox,
    ModalBox,
    RowBox,
    Text,
    Input,
    Select,
    FormBox,
    Datagrid,
} from "../../theme";
import { useModal } from "../../providers/Modal";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDetails } from "../../providers/Details";

export const ModalDetalhesConsulta = () => {
    const { salvarDiagnostico, diagnosticos } = useDetails();
    const { Switch, stateModalDetalhesConsulta } = useModal();
    console.log("entrei", diagnosticos);

    const formSchema = yup.object().shape({
        diagnostico_tipo: yup.string().required("Selecione o tipo do diagnostico."),
        diagnostico_desc: yup.string().required("Descreva o diagnostico"),
        diagnostico_data: yup.string().required("Digite a data de inicio."),
    });

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const optionsTipo = [
        { value: "", desc: "Selecione", default: true },
        { value: "Tratamento", desc: "Tratamento" },
        { value: "Medicamento Continuo", desc: "Medicamento Continuo" },
        { value: "Cirurgia", desc: "Cirurgia" },
        { value: "Alergia", desc: "Alergia" },
        { value: "Doença Crônica", desc: "Doença Crônica" },
    ];

    const colunas = [
        { label: "Tipo", key: "tipo" },
        { label: "Descrição", key: "descricao" },
        { label: "Data de Inicio", key: "data_inicio" },
        { label: "Data de Termino", key: "data_fim" },
    ];

    const novaDiagnostico = (data) => {
        let validacao = salvarDiagnostico(data);
        // let validacao = { status: true, message: "Diagnostico Registrado" };
        if (validacao.status) {
            reset();
            toast.success(validacao.message);
        } else {
            toast.error(validacao.message);
            reset();
        }
        console.log(data);
    };

    return (
        <ModalBox hidden={stateModalDetalhesConsulta}>
            <ColumnBox bgColor="grey0" width="80%">
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
                <FormBox onSubmit={handleSubmit(novaDiagnostico)}>
                    <RowBox>
                        <Select
                            errorMsg={errors?.diagnostico_tipo?.message}
                            label="Tipo"
                            register={register}
                            options={optionsTipo}
                            name="diagnostico_tipo"
                        ></Select>
                        <Input
                            errorMsg={errors?.diagnostico_desc?.message}
                            label="Descrição"
                            register={register}
                            name="diagnostico_desc"
                        ></Input>
                    </RowBox>
                    <RowBox>
                        <Input
                            errorMsg={errors?.diagnostico_data?.message}
                            label="Data"
                            register={register}
                            name="diagnostico_data"
                            type="date"
                        ></Input>
                        <Input
                            label="Data Final"
                            register={register}
                            name="diagnostico_data_fim"
                            type="date"
                        ></Input>
                        <RowBox style={{ padding: "27px 0px 0px 0px" }}>
                            <Button width="100%" type="submit">
                                Registrar Detalhes
                            </Button>
                        </RowBox>
                    </RowBox>
                </FormBox>
                <Datagrid
                    options={{ showFilter: false, titleColor: "primary" }}
                    bgColor="grey0"
                    title="Diagnosticos"
                    columns={colunas}
                    data={diagnosticos}
                />
            </ColumnBox>
        </ModalBox>
    );
};
