import { button, rowBar } from "./style";
import { Button, ColumnBox, FormBox, ModalBox, RowBox, Text, Input, Select } from "../../theme";
import { useModal } from "../../providers/Modal";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDashboard } from "../../providers/Dashboard";
export const ModalPaciente = () => {
    const { Switch, stateModalPaciente } = useModal();
    const { cadastrarPaciente, getPacientes } = useDashboard();
    const schema = yup.object().shape({
        nome: yup.string().required("Campo obrigatório!"),
        email: yup.string().email("Email inválido!").required("Campo obrigatório!"),
        data_nascimento: yup.string().required("Campo obrigatório!"),
        profissao: yup.string(),
        status_fumante: yup.string().required("Campo obrigatório!"),
        celular: yup
            .string()
            .matches(/^[0-9]{2}.?[0-9]{9}$/, "Número Invalido!")
            .required("Campo Obrigatório!"),
        cpf: yup
            .string()
            .matches(/^[0-9]{11}$/, "CPF Invalido!")
            .required("Campo Obrigatório"),
    });
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const novoPaciente = async (data) => {
        let validacao = await cadastrarPaciente(data);
        if (validacao.status === true) {
            toast.success(validacao.message);
            Switch("ModalPaciente");
            getPacientes();
        } else {
            toast.error(validacao.message, { autoClose: 2500 });
        }
    };
    const options_fumante = [
        { value: "", desc: "Escolha", default: true },
        { value: "1", desc: "Sim" },
        { value: "0", desc: "Não" },
    ];
    return (
        <ModalBox hidden={stateModalPaciente} height="100%">
            <ColumnBox bgColor="grey0" width="400px" height="600px">
                <RowBox bgColor="primary" style={rowBar}>
                    <Text>Adicionar Paciente</Text>
                    <Button
                        bgColor="negative"
                        style={button}
                        onClick={() => {
                            reset();
                            Switch("ModalPaciente");
                        }}
                    >
                        x
                    </Button>
                </RowBox>
                {/* <Input register={} name="" errorMsg={} label="" placeholder="" type="" /> */}
                <FormBox onSubmit={handleSubmit(novoPaciente)} style={{ overflow: "auto" }}>
                    <ColumnBox overflow="auto">
                        <Input register={register} name="nome" errorMsg={errors?.nome?.message} label="Nome" placeholder="Nome do paciente" type="text" />
                        <Input register={register} name="cpf" errorMsg={errors?.cpf?.message} label="CPF" placeholder="CPF do paciente" />
                        <Input register={register} name="data_nascimento" errorMsg={errors?.data_nascimento?.message} label="Data de nascimento" placeholder="Data de nascimento" type="date" />
                        <Input register={register} name="profissao" errorMsg={errors?.profissao?.message} label="Profissão" placeholder="Profissão do paciente" type="teste" />
                        <Select register={register} name="status_fumante" errorMsg={errors?.status_fumante?.message} label="Fumante" options={options_fumante} />
                        <Input register={register} name="email" errorMsg={errors?.email?.message} label="E-mail" placeholder="Email do paciente" type="email" />
                        <Input register={register} name="celular" errorMsg={errors?.celular?.message} label="Celular" placeholder="Celular do paciente" type="tel" />
                    </ColumnBox>
                    <Button width="90%">Cadastrar</Button>
                </FormBox>
            </ColumnBox>
        </ModalBox>
    );
};
