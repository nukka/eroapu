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

class Apua extends Component {

    constructor(props) {
        super(props);
        this.state = {
            radioSelected: 'phone',
            email: '',
            phonenumber: '',
            formtext: ''
        }
    }

    handleUserInput(e) {
        const value = e.target.value;
        console.log("value: " + value);
    }

    handleRadioClick(e) {
        this.setState({radioSelected: e});
    }

    render() {

        let contactField = null;
        const radioSelected = this.state.radioSelected;
        if (radioSelected === 'phone') {
            contactField = <FormControl onChange={(e) => this.handleUserInput(e)} placeholder="Kirjoita puhelinnumero..."/>;
        } else {
            contactField = <FormControl onChange={(e) => this.handleUserInput(e)} placeholder="Kirjoita sähköposti..."/>;
        }

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
                    <h1>Pyydä apua -lomake</h1>
                    <p>
                        Hae
                    </p>
                </Jumbotron>
                <div id="lomake" className="container">

                    <p> Jos avuntarpeesi on akuuttia, soita valtakunnalliseen kriisipuhelimeen <b> 010 195 202</b>.
                        Kriisipuhelin päivystää arkisin klo 9.00– 07.00 sekä viikonloppuisin ja juhlapyhinä klo
                        15.00–07.00. Pyrimme vastaamaan yhteydenottoon <b>x</b> päivän sisällä. </p>
                    <Form>

                        <Grid>
                            <Col sm={2} m={2}>
                                <p>Ottakaa minuun yhteyttä...</p>
                            </Col>

                            <Col sm={2} md={2}>

                                <Radio name="radioGroup"
                                       onClick={() => this.handleRadioClick('phone')}>Puhelimitse</Radio>
                                <Radio name="radioGroup"
                                       onClick={() => this.handleRadioClick('email')}>Sähköpostitse</Radio>

                            </Col>

                        </Grid>


                        {contactField}

                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Miten voimme auttaa? </ControlLabel>
                            <FormControl componentClass="textarea"
                                         placeholder="Kirjoita tähän, millaista apua tarvitset"/>
                        </FormGroup>

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

export default Apua;
