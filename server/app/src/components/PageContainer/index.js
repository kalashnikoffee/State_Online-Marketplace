import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react";
import NavBar from "../NavBar";
import Home from "../../pages/Home";
import Cart from "../../pages/Cart";
import NotFound from "../../pages/NotFound";
import LogIn from "../../pages/LogIn";
import LogOut from "../../pages/LogOut";
import { useUserContext } from "../../utils/UserState";

function PageContainer(){
    const [user, setUser] = useUserContext();
    return (
        <div>
            <Router>
                <NavBar>
                    <Switch>
                    <Route exact path="/" component={Home} />
                    <Route />
                    <Route />
                    <Route />
                    <Route />
                    </Switch>
                </NavBar>
            </Router>
        </div>
    )
}