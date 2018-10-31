import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Apua from './Apua';
import Aikajana from './Aikajana';
import Palveluhaku from './Palveluhaku';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

function Etusivu() {
    return (
        <App/>
    );
}

function Haku() {
    return (
        <Palveluhaku/>
    );
}

function Hätänappi() {
    return (
        <Apua/>
    );
}

function Jana() {
    return (
        <Aikajana/>
    );
}

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Etusivu} />
            <Route path="/haku" component={Haku} />
            <Route path="/apua" component={Hätänappi} />
            <Route path="/aikajana" component={Jana} />
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));


