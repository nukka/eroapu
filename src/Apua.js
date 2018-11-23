import React, {Component} from 'react';
import {
    Alert,
    Form,
    FormGroup,
    Button,
    Radio,
    ControlLabel,
    FormControl,
    Jumbotron
} from 'react-bootstrap'

import axios from 'axios';

class Apua extends Component {

    constructor(props) {
        super(props);
        this.state = {
            radioSelected: '',
            email: '',
            phonenumber: '',
            formtext: '',
            name: '',
            showphonewarning: false,
            showemailwarning: false,
            disableButton: true
        }
    }

    handleUserInput(e) {
        const value = e.target.value;

        this.setState({showphonewarning: false});
        this.setState({showemailwarning: false});
        this.setState({disableButton: true});

        if (this.state.radioSelected === 'phone') {

            var phonereg = /^[0-9+]+$/;

            if (phonereg.test(value) && value.length < 14) {
                this.setState({phonenumber: value});
                this.setState({showphonewarning: false});
                this.setState({disableButton: false});
            } else {
                if (value !== '' || value.length !== 0) {
                    this.setState({showphonewarning: true});
                    this.setState({disableButton: true});
                } else {
                    this.setState({showphonewarning: false});
                    this.setState({disableButton: false});
                }
            }

        } else {
            var emailreg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (emailreg.test(value)) {
                this.setState({email: value});
                this.setState({showemailwarning: false});
                this.setState({disableButton: false});
            } else {
                if (value !== '' || value.length !== 0) {
                    this.setState({showemailwarning: true});
                    this.setState({disableButton: true});
                } else {
                    this.setState({showemailwarning: false});
                    this.setState({disableButton: false});
                }
            }

        }

    }

    handleTextInput(e) {
        this.setState({formtext: e.target.value});
        console.log("teksti: " + e.target.value);

        const text = {
            name: this.state.name,
        };

        axios.post(`http://localhost:3001/api/`, {text})
            .then(res => {
                console.log(res.data);
            })
    }

    handleNameInput(e) {
        this.setState({name: e.target.value});
        console.log("nimi: " + e.target.value);

        const name = {
            name: this.state.name,
        };

        axios.post(`http://localhost:3001/api/`, {name})
            .then(res => {
                console.log(res.data);
            })
    }

    phoneNumberAlert() {

        if (this.state.showphonewarning === true) {
            return <Alert bsStyle="danger"> Laita puhelinnumeroon vain numeroita. <br/> Puhelinnumeron pituus voi olla
                vain maksimissaan 13 merkkiä. </Alert>;
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
            contactField =
                <FormControl className="form-field" onChange={(e) => this.handleUserInput(e)}
                             placeholder="Kirjoita puhelinnumero..."/>;
        } else if (radioSelected === 'email') {
            contactField =
                <FormControl className="form-field" onChange={(e) => this.handleUserInput(e)}
                             placeholder="Kirjoita sähköposti..."/>;
        } else {
            contactField = '';
        }

        return (

            <div className="page-content">

                <Jumbotron className="otsikko">
                    <h1>Pyydä apua</h1>
                    <div className="helptext">
                    </div>
                </Jumbotron>

                <div id="lomake" className="container">

                    <p className="helptext"> Tarvitsetko neuvoa tai haluatko jutella jonkun kanssa eroon liittyvistä
                        asioista? Ota yhteyttä alla olevan lomakkeen avulla. Jos avuntarpeesi on akuuttia, soita
                        valtakunnalliseen kriisipuhelimeen <b> 010 195 202</b>.
                        Kriisipuhelin päivystää arkisin klo 9.00– 07.00 sekä viikonloppuisin ja juhlapyhinä klo
                        15.00–07.00. Pyrimme itse vastaamaan yhteydenottoon 3 päivän sisällä. </p>

                    <Form className="form-content">

                        <p>Ottakaa minuun yhteyttä...</p>
                        <Radio name="radioGroup"
                               onClick={() => this.handleRadioClick('phone')}>Puhelimitse</Radio>
                        <Radio className="form-field" name="radioGroup"
                               onClick={() => this.handleRadioClick('email')}>Sähköpostitse</Radio>


                        {contactField}
                        {phoneWarningTextField}
                        {emailWarningTextField}

                        <FormGroup controlId="formName">
                            <ControlLabel>Nimi tai nimimerkki</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Syötä nimesi tai nimimerkkisi"
                                onChange={(e) => this.handleNameInput(e)}
                            />
                        </FormGroup>


                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel className="form-field">Miten voimme auttaa? </ControlLabel>
                            <FormControl className="form-field text-area" componentClass="textarea"
                                         onChange={(e) => this.handleTextInput(e)}
                                         placeholder="Kirjoita tähän, millaista apua tarvitset"/>
                        </FormGroup>

                        <Button onClick={() => console.log(this.state)} type="submit"
                                disabled={this.state.disableButton} className="btn default"> Lähetä </Button>

                    </Form>
                </div>
            </div>
        );
    }
}

export default Apua;
