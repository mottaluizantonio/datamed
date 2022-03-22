import { button, rowBar } from "./style";
import { Button, ColumnBox, FieldBox, FormBox, ModalBox, RowBox, Text, Input, Select } from "../../theme";
import { useModal } from "../../providers/Modal";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRegister } from "../../providers/Register";
import { toast } from "react-toastify";
export const ModalPaciente = () => {
    const { Switch, stateModalPaciente } = useModal();
    const { cadastrarPaciente } = useRegister();
    const schema = yup.object().shape({
        nome: yup.string().required("Nome obrigatório"),
        email: yup.string().email("Formato de email inválido").required("E-mail obrigatório"),
        cpf: yup.string().required("CPF obrigatório"),
        data_nascimento: yup.string().required("Data de nascimento obrigatória"),
        profissao: yup.string().required("Profissão obrigatória"),
        celular: yup.string().required("Celualar obrigatório"),
        status_fumante: yup.string().required("Celualar obrigatório"),
    });
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    function novoPaciente(data) {
        let validacao = cadastrarPaciente(data);
        validacao.state === true ? toast.success(validacao.message) : toast.error("Algo deu errado!");
        Switch("ModalPaciente");
    }
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
                    <Input register={register} name="nome" errorMsg={errors.nome?.message} label="Nome" placeholder="Nome do paciente" type="text" />
                    <Input register={register} name="cpf" errorMsg={errors.cpf?.message} label="CPF" placeholder="CPF do paciente" type="number" />
                    <Input register={register} name="data_nascimento" errorMsg={errors.data_nascimento?.message} label="Data de nascimento" placeholder="Data de nascimento" type="date" />
                    <Input register={register} name="profissao" errorMsg={errors.profissao?.message} label="Profissão" placeholder="Profissão do paciente" type="teste" />
                    <Select register={register} name="fumante" errorMsg={errors.status_fumante?.message} label="Fumante" options={options_fumante} />
                    <Input register={register} name="email" errorMsg={errors.email?.message} label="E-mail" placeholder="Email do paciente" type="email" />
                    <Input register={register} name="celular" errorMsg={errors.celular?.message} label="Celular" placeholder="Celular do paciente" type="tel" />
                    <Button width="150px">Cadastrar</Button>
                </FormBox>
            </ColumnBox>
        </ModalBox>
    );
};
