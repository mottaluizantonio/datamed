import { Route, Switch } from "react-router-dom";
import { Landingpage } from "../pages/Landingpage";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { Details } from "../pages/Details";

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Landingpage />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/register/:type">
                <Register />
            </Route>
            <Route exact path="/dashboard/:id">
                <Dashboard />
            </Route>
            <Route exact path="/datails">
                <Details />
            </Route>
        </Switch>
    );
};
