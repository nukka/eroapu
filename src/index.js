import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Apua from './Apua';
import Aikajana from './Aikajana';
import Palveluhaku from './Palveluhaku';
import Kalenteri from './Kalenteri';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {
    Col, Grid, Nav, Navbar, NavItem, Row, Image
} from "react-bootstrap";

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

function Hatanappi() {
    return (
        <Apua/>
    );
}

function Jana() {
    return (
        <Aikajana/>
    );
}

function Tapahtumakalenteri() {
    return (
        <Kalenteri/>
    );
}

ReactDOM.render((
    <BrowserRouter>

        <div>
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
                        <NavItem eventKey={3} href="/kalenteri">
                            Tapahtumakalenteri
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={4} href="#">
                            Yhteystiedot
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="page-content">
                <Switch>
                    <Route exact path="/" component={Etusivu}/>
                    <Route path="/haku" component={Haku}/>
                    <Route path="/apua" component={Hatanappi}/>
                    <Route path="/aikajana" component={Jana}/>
                    <Route path="/kalenteri" component={Tapahtumakalenteri}/>
                </Switch>
            </div>
            <div className="page-footer">
                <Grid>
                    <Row className="show-grid">
                        <Col md={3}>

                            <p className="footer-title"> Eroportaali </p>
                            Eroportaalista löydät tiedon koottuna. Lorem ipsum dolor sit amet, no dicit maiorum
                            appetere est, pro te hinc quas verear. Petentium elaboraret pro ne. Ludus nostrum fastidii
                            usu cu, mel stet forensibus ut, has id imperdiet intellegebat. Et officiis laboramus sed,
                            vis ne case reque liberavisse, summo partiendo facilisis sed no.

                        </Col>
                        <Col md={6} className="footer-middle">
                            <p className="footer-title"> Linkkejä </p>

                            <div className="url-list">
                                <ul><a href="https://apuaeroon.fi/"> apuaeroon.fi </a></ul>
                                <ul><a href="https://perheaikaa.fi/"> perheaikaa.fi </a></ul>
                                <ul><a href="https://suomenkasper.fi"> suomenkasper.fi </a></ul>
                                <ul><a href="https://lapsuus.ouka.fi/"> lapsuus.ouka.fi </a></ul>

                            </div>

                        </Col>


                        <Col md={3}><p className="footer-title"> Ylläpitäjän logo </p> <Image
                            src="https://bitbucket.org/eroauttaminenverkossa/eroapu/raw/cd93527332fb2b84575e7f4ba0baa2a7a1c8a4e9/src/Logo.png"/></Col>
                    </Row>
                </Grid>
            </div>
        </div>
    </BrowserRouter>
), document.getElementById('root'));


