import { rowBar, button } from "./style";
import { Button, ColumnBox, FieldBox, FormBox, ModalBox, RowBox, Text } from "../../theme";
import { useModal } from "../../providers/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDetails } from "../../providers/Details";
import { toast } from "react-toastify";
export const ModalConsulta = () => {
    const { salvarConsulta, getDadosPaciente } = useDetails();
    const { Switch, stateModalConsulta } = useModal();
    const formSchema = yup.object().shape({
        desc_consulta: yup.string().required("Digite o diagnostico da consulta."),
    });

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const novaConsulta = async (data) => {
        let validacao = await salvarConsulta(data);
        console.log("validacao", validacao);
        if (validacao.status) {
            reset();
            toast.success(validacao.message);
            getDadosPaciente();
            Switch("ModalConsulta");
        } else {
            toast.error(validacao.message);
            reset();
        }
    };

    return (
        <ModalBox hidden={stateModalConsulta}>
            <ColumnBox bgColor="primary" width="80%" height="500px" justifyContent="center">
                <RowBox style={rowBar}>
                    <Text>Histórico Familiar</Text>
                    <Button
                        bgColor="negative"
                        style={button}
                        onClick={() => {
                            reset();
                            Switch("ModalConsulta");
                        }}
                    >
                        x
                    </Button>
                </RowBox>
                <ColumnBox height="100%" style={rowBar}>
                    <FormBox width="100%" height="100%" onSubmit={handleSubmit(novaConsulta)}>
                        <FieldBox height="100%" error={!!errors?.desc_consulta}>
                            <label>Descrição da Consulta</label>
                            <textarea {...register("desc_consulta")} placeholder={!!errors?.desc_consulta ? errors.desc_consulta.message : "Descreva a consulta!"}></textarea>
                        </FieldBox>
                        <RowBox>
                            <Button
                                bgColor="negative"
                                onClick={() => {
                                    reset();
                                    Switch("ModalConsulta");
                                }}
                                width="50%"
                                type="button"
                            >
                                Cancelar
                            </Button>
                            <Button width="50%" type="submit">
                                Registrar Diagnostico
                            </Button>
                        </RowBox>
                    </FormBox>
                </ColumnBox>
            </ColumnBox>
        </ModalBox>
    );
};
