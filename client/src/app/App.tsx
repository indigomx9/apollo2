import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import { Home } from "../components/Home";
import { RocketInventoryList } from "../containers/RocketInventoryList";
import "./App.css";

export const App = () => (
    <BrowserRouter>
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/inven" component={RocketInventoryList} />
            </Switch>
        </React.Fragment>
    </BrowserRouter>
);

