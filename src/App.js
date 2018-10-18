import React, {Component} from 'react';
import './App.css';
import {Navbar, Nav, NavItem, Jumbotron} from 'react-bootstrap'

class App extends Component {
    render() {
        return (
            <div className="App">

                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Eroapua</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">
                                Aihe 1
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                Aihe 2
                            </NavItem>
                            <NavItem eventKey={3} href="#">
                                Aihe 3
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
            </div>
        );
    }
}

export default App;
