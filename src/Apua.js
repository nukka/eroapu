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
            disableButton: true,
            showSuccessText: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    state = {
        feedback: '',
        formSubmitted: false
    };


    handleChange(event) {
        this.setState({
            feedback: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const env = {
            REACT_APP_EMAILJS_RECEIVER: process.env.REACT_APP_EMAILJS_RECEIVER,
            REACT_APP_EMAILJS_TEMPLATEID: "template_lxucH6tK"
        };

        const {
            REACT_APP_EMAILJS_RECEIVER: receiverEmail,
            REACT_APP_EMAILJS_TEMPLATEID: template
        } = env;

        this.sendFeedback(
            template,
            receiverEmail,
            this.state.feedback,
        );


        this.setState({
            formSubmitted: true
        });

    }


    sendFeedback(templateId, from_name, message_html, from_email, from_phone) {

        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleTextInput = this.handleTextInput.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);

        this.setState({showSuccessText: false});

        from_name = this.state.name;
        message_html = this.state.formtext;
        from_email = this.state.email;
        from_phone = this.state.phonenumber;

        if (from_email === '') {
            from_email = "Ei annettu";
        } else if (from_phone === '') {
            from_phone = "Ei annettu"
        }

        window.emailjs
            .send('gmail', templateId, {
                from_name,
                message_html,
                from_email,
                from_phone
            })
            .then(response => {
                if (response.status === 200) {
                    console.log("Lomake lähetty");
                    this.setState({showSuccessText: true});
                }
            })

            .catch(err => {
                if (err.status !== 200) {
                    console.log("Lomaketta ei lähetty");
                }

            });

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


    }

    handleNameInput(e) {
        this.setState({name: e.target.value});
        console.log("nimi: " + e.target.value);


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

    showSuccess() {
        if (this.state.showSuccessText === true) {
            return <p>Lomake lähetty</p>;
        }
    }

    render() {

        let contactField = null;
        let phoneWarningTextField = this.phoneNumberAlert();
        let emailWarningTextField = this.emailAlert();

        let testi = this.showSuccess();
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

                        <Button type="submit" value="Submit" onClick={this.handleSubmit}
                                disabled={this.state.disableButton} className="btn default"> Lähetä </Button>

                        {testi}
                    </Form>
                </div>
            </div>


        );
    }
}

export default Apua;
