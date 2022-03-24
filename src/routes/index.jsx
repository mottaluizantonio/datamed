import { Route, Switch } from "react-router-dom";
import { Landingpage } from "../pages/Landingpage";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { Details } from "../pages/Details";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useLogin } from "../providers/Login";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Equipe from "../pages/Equipe";
export const Routes = () => {
  const { validarLogin, firstAccess } = useLogin();
  const history = useHistory();
  const logar = async (
    dados = JSON.parse(localStorage.getItem("@datamed:login")) || {}
  ) => {
    let { id = 0, status, message } = await validarLogin(dados);
    history.push(
      id > 0 && status ? `/dashboard/${id}` : firstAccess ? "/" : "/login"
    );
    if (!!dados?.password)
      status ? toast.success(message) : toast.error(message);
  };
  useEffect(() => logar(), []);
  return (
    <Switch>
      <Route exact path="/">
        <Landingpage />
      </Route>
      <Route exact path="/login">
        <Login logar={logar} />
      </Route>
      <Route exact path="/register/:type">
        <Register />
      </Route>
      <Route exact path="/dashboard/:id">
        <Dashboard />
      </Route>
      <Route exact path="/details/:cpf">
        <Details />
      </Route>
      <Route exact path="/equipe">
        <Equipe />
      </Route>
    </Switch>
  );
};
