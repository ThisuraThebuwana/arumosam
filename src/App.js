import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {GlobalStyles} from "./globalStyles";
import Hero from "./components/Hero";
import Home from "./pages/home";
import Category1 from "./pages/category1";
import Category2 from "./pages/category2";

function App() {
    return (
        <Router>
            <GlobalStyles/>
            <Hero/>
            <Switch>
                <Route path={"/"} exact component={Home}/>
                <Route path={"/birthday-gifts"} component={Category1}/>
                <Route path={"/anniversary-gifts"} component={Category2}/>
            </Switch>
        </Router>
    );
}

export default App;
