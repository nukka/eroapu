import React, {Component} from 'react';
import './App.css';
import {Navbar, Nav, NavItem, Jumbotron, Col, Grid, Row} from 'react-bootstrap'

class App extends Component {
    render() {
        return (
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
                <Jumbotron>
                    <h1>Eroapua verkossa</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquid ex ea commodi consequat.
                    </p>
                </Jumbotron>
                <div className="portal-content">
                <Grid>
                    <Row className="show-grid">
                        <Col md={3} >Haku</Col>
                        <Col md={3} >Aikajana</Col>
                        <Col md={3} >Hätänappi</Col>
                        <Col md={3} >Kalenteri</Col>
                    </Row>
                </Grid>
                </div>

                <div className="page-footer">
                    <Grid>
                        <p className="footer-title"> Footer </p>
                    <Row className="show-grid">
                        <Col md={4} >Tieto1</Col>
                        <Col md={4} >Tieto2</Col>
                        <Col md={4} >Tieto3</Col>
                    </Row>
                </Grid>
                </div>

            </div>
        );
    }
}

export default App;
