import { Route, Switch } from "react-router-dom";
import { Landingpage } from "../pages/Landingpage";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { Details } from "../pages/Details";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const Routes = () => {
    const history = useHistory();
    useEffect(() => history.push("/login"), [history]);
    return (
        <Switch>
            <Route exact path="/">
                <Landingpage />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/register:type">
                <Register />
            </Route>
            <Route exact path="/dashboard">
                <Dashboard />
            </Route>
            <Route exact path="/datails">
                <Details />
            </Route>
        </Switch>
    );
};
