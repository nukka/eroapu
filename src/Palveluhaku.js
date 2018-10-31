import React, {Component} from 'react';
import './App.css';
import {
    Navbar,
    Nav,
    NavItem,
    Jumbotron,
    Col,
    Grid,
    Row,
    Form,
    FormGroup,
    Button,
    Radio,
    ControlLabel,
    FormControl
} from 'react-bootstrap'

class Palveluhaku extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phonenumber: '',
            formtext: ''
        }
    }

    handleUserInput(e) {
        const value = e.target.value;
        console.log("value: " + value);
    }

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
                        Hae
                    </p>
                </Jumbotron>
                <div id="lomake" className="container">
                    <Form>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Pyydä apua</ControlLabel>
                            <FormControl componentClass="textarea"
                                         placeholder="Kirjoita tähän, millaista apua tarvitset"/>
                        </FormGroup>

                        <p>Ottakaa minuun yhteyttä...</p>
                        <Radio>Puhelimitse</Radio>
                        <FormControl placeholder="Kirjoita puhelinnumero..."/>
                        <Radio>Sähköpostitse</Radio>
                        <FormControl onChange={this.handleUserInput} placeholder="Kirjoita sähköposti..."/>
                        <Button type="submit"> Lähetä </Button>

                    </Form>

                </div>

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
    );
    }
    }

    export default Palveluhaku;
