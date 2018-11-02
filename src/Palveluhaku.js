import React, {Component} from 'react';
import './App.css';
import {Navbar, Nav, NavItem, Jumbotron, Col, Grid, Row} from 'react-bootstrap'

class Palveluhaku extends Component {
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
                <Jumbotron className="otsikko">
                    <h1>Palveluhaku</h1>
                    <p>
                        alle tulee valintalaatikot
                    </p>
                </Jumbotron>


                <footer className="page-footer">
                    <Grid>
                        <p className="footer-title"> Footer </p>
                        <Row className="show-grid">
                            <Col md={4}>Tieto1</Col>
                            <Col md={4}>Tieto2</Col>
                            <Col md={4}>Tieto3</Col>
                        </Row>
                    </Grid>
                </footer>

            </div>
        );
    }
}

export default Palveluhaku;
