import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Apua from './Apua';
import Aikajana from './Aikajana';
import Palveluhaku from './Palveluhaku';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Col, Grid, Jumbotron, Nav, Navbar, NavItem, Row} from "react-bootstrap";

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

        <div className="App">
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Eroapua</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/aikajana">
                            Aikajana
                        </NavItem>
                        <NavItem eventKey={2} href="/apua">
                            Pyydä apua
                        </NavItem>
                        <NavItem eventKey={3} href="/haku">
                            Palveluhaku
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={4} href="#">
                            Yhteystiedot
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Jumbotron className="otsikko">
                <h1>Eroapua verkossa</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquid ex ea commodi consequat.
                </p>
            </Jumbotron>


            <Switch>
                <Route exact path="/" component={Etusivu}/>
                <Route path="/haku" component={Haku}/>
                <Route path="/apua" component={Hätänappi}/>
                <Route path="/aikajana" component={Jana}/>
            </Switch>

            <div className="page-footer">
                <Grid>
                    <p className="footer-title"> Footer </p>
                    <Row className="show-grid">
                        <Col md={4}>Tieto1</Col>
                        <Col md={4}>Tieto2</Col>
                        <Col md={4}>Tieto3</Col>
                    </Row>
                </Grid>
            </div>
        </div>
    </BrowserRouter>
), document.getElementById('root'));


