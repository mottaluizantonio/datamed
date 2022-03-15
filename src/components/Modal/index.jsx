import * as yup from "yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, ColumnBox, FieldBox, FormBox, ModalBox, RowBox, Title } from "../../styles/theme";
import { getToken } from "../../services";
import { toast } from "react-toastify";
import axios from "axios";
export const Modal = ({ title, stateModal, setStateModal, initData, lista, setLista, typeModal }) => {
    const cache = getToken();
    const api = axios.create({
        "Content-Type": "application/vnd.api+json",
        baseURL: "https://kenziehub.herokuapp.com",
        headers: { Authorization: `Bearer ${cache?.token}` },
    });
    const saveTech = async ({ id, title, status }) => {
        if (id === null) {
            api.post("https://kenziehub.herokuapp.com/users/techs", { title, status })
                .then(({ data }) => {
                    toast.success("Cadastrado com sucesso!");
                    setStateModal(false);
                    setLista([...lista, data]);
                })
                .catch(
                    ({
                        response: {
                            data: { message },
                        },
                    }) => {
                        toast.error(message);
                    }
                );
        } else {
            api.put(`https://kenziehub.herokuapp.com/users/techs/${id}`, { status })
                .then((res) => {
                    toast.success("Salvo com sucesso!");
                    setStateModal(false);
                    let newLista = lista;
                    newLista.forEach((tech) => {
                        if (tech.id === id) tech.status = status;
                    });
                    setLista([...newLista]);
                })
                .catch(
                    ({
                        response: {
                            data: { message },
                        },
                    }) => {
                        toast.error(message);
                    }
                );
        }
    };
    const dellTech = () => {
        console.log("initData", initData);
        api.delete(`https://kenziehub.herokuapp.com/users/techs/${initData.id}`)
            .then((res) => {
                toast.warning("Exluido com sucesso!");
                setStateModal(false);
                setLista(lista.filter(({ id }) => initData.id !== id));
            })
            .catch(
                ({
                    response: {
                        data: { message },
                    },
                }) => {
                    toast.error(message);
                }
            );
    };
    const validacoes = yup.object().shape({
        title: yup.string().required("Campo Obrigatorio!"),
        status: yup.string().required("Campo Obrigatorio!"),
    });
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(validacoes) });
    useEffect(() => reset(initData), [initData, reset]);
    return (
        <ModalBox state={stateModal} bgColor="rgb(52, 59, 65, 0.5)">
            <ColumnBox style={{ maxWidth: "430px", gap: 0 }}>
                <RowBox bgColor="Grey2" style={{ padding: "15px 21px", justifyContent: "space-between", borderRadius: "4px 4px 0px 0px" }}>
                    <Title>{typeModal === "cadastro" ? "Cadastrar Tecnologia" : "Tecnologia Detalhes"}</Title>
                    <Button style={{ width: "30px", height: "30px", color: "#868E96" }} bgColor="Grey2" onClick={() => setStateModal(false)}>
                        x
                    </Button>
                </RowBox>
                <FormBox onSubmit={handleSubmit(saveTech)} bgColor="Grey3" style={{ padding: "15px 21px 30px 21px" }}>
                    <input {...register("id")} hidden></input>
                    <FieldBox error={!!errors?.title}>
                        <label>Nome</label>
                        <input {...register("title")} placeholder={errors?.title?.message}></input>
                    </FieldBox>
                    <FieldBox error={!!errors?.status}>
                        <label>Selecionar status</label>
                        <select {...register("status")}>
                            <option selected disabled hidden>
                                {errors?.status?.message}
                            </option>
                            <option>Iniciante</option>
                            <option>Intermediário</option>
                            <option>Avançado</option>
                        </select>
                    </FieldBox>
                    <RowBox>
                        <Button type="submit" fullWidth bgColor="primary">
                            {typeModal === "cadastro" ? "Cadastrar Tecnologia" : "Salvar Alterações"}
                        </Button>
                        {typeModal === "detalhes" ? (
                            <Button type="button" onClick={() => dellTech()} fullWidth bgColor="Grey1">
                                Excluir
                            </Button>
                        ) : (
                            <></>
                        )}
                    </RowBox>
                </FormBox>
            </ColumnBox>
        </ModalBox>
    );
};
