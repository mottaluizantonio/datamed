import { rowBar } from "./style";
import { Button, ColumnBox, FieldBox, FormBox, ModalBox, RowBox, Text } from "../../theme";
import { useModal } from "../../providers/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDetails } from "../../providers/Details";
import { toast } from "react-toastify";
export const ModalConsulta = () => {
    const { salvarConsulta } = useDetails();
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

    const novaConsulta = (data) => {
        let validacao = salvarConsulta(data);
        // let validacao = { status: true, message: "Consulta Registrada" };
        if (validacao.status) {
            reset();
            toast.success(validacao.message);
            Switch("ModalConsulta");
        } else {
            toast.error(validacao.message);
            reset();
        }
        console.log(data);
    };

    return (
        <ModalBox hidden={stateModalConsulta}>
            <ColumnBox bgColor="grey0" width="80%" height="500px" justifyContent="center">
                <ColumnBox height="100%" bgColor="primary" style={rowBar}>
                    <RowBox>
                        <Text>Registrar Nova Consulta</Text>
                    </RowBox>
                    <FormBox width="100%" height="100%" onSubmit={handleSubmit(novaConsulta)}>
                        <FieldBox height="100%" error={!!errors?.desc_consulta}>
                            <label>Descrição da Consulta</label>
                            <textarea {...register("desc_consulta")} placeholder={!!errors?.desc_consulta ? errors.desc_consulta.message : "Descreva a consulta!"}></textarea>
                        </FieldBox>
                        <RowBox>
                            <Button width="50%" type="submit">
                                Registrar Diagnostico
                            </Button>
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
                        </RowBox>
                    </FormBox>
                </ColumnBox>
            </ColumnBox>
        </ModalBox>
    );
};
