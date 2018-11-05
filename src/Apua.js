import React, {Component} from 'react';
import './App.css';
import {
    Alert,
    Col,
    Grid,
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
            radioSelected: '',
            email: '',
            phonenumber: '',
            formtext: '',
            showphonewarning: false,
            showemailwarning: false,
        }
    }

    handleUserInput(e) {
        const value = e.target.value;
        console.log("value: " + value);

        this.setState({showphonewarning: false});
        this.setState({showemailwarning: false});

        if (this.state.radioSelected === 'phone') {

            var phonereg = /^[0-9+]+$/;

            if (phonereg.test(value) && value.length < 14) {
                this.setState({phonenumber: value});
                this.setState({showphonewarning: false});
            } else {
                if (value !== '' || value.length !== 0 ) {
                    this.setState({showphonewarning: true});
                } else {
                    this.setState({showphonewarning: false});
                }
            }

        } else {
            var emailreg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (emailreg.test(value)) {
                this.setState({email: value});
                this.setState({showemailwarning: false});
            } else {
                if (value !== '' || value.length !== 0 ) {
                    this.setState({showemailwarning: true});
                } else {
                    this.setState({showemailwarning: false});
                }
            }

        }

    }

    phoneNumberAlert() {

        if (this.state.showphonewarning === true) {
            return <Alert bsStyle="danger"> Laita puhelinnumeroon vain numeroita. <br/> Puhelinnumeron pituus voi olla vain maksimissaan 13 merkkiä. </Alert>;
        } else {
            return '';
        }

    }

    emailAlert() {

        if (this.state.showemailwarning === true) {
            return <Alert bsStyle="danger"> Invalidi sähköposti. </Alert>;
        } else {
            return '';
        }

    }

    handleRadioClick(e) {
        this.setState({radioSelected: e});
    }

    render() {

        let contactField = null;
        let phoneWarningTextField = this.phoneNumberAlert();
        let emailWarningTextField = this.emailAlert();
        const radioSelected = this.state.radioSelected;
        if (radioSelected === 'phone') {
            contactField = <FormControl onChange={(e) => this.handleUserInput(e)} placeholder="Kirjoita puhelinnumero..."/>;
        } else if (radioSelected === 'email') {
            contactField = <FormControl onChange={(e) => this.handleUserInput(e)} placeholder="Kirjoita sähköposti..."/>;
        } else {
            contactField = '';
        }

        return (
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
                        {phoneWarningTextField}
                        {emailWarningTextField}

                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Miten voimme auttaa? </ControlLabel>
                            <FormControl componentClass="textarea"
                                         placeholder="Kirjoita tähän, millaista apua tarvitset"/>
                        </FormGroup>

                        <Button type="submit"> Lähetä </Button>

                    </Form>
                </div>
        );
    }
}

export default Apua;
