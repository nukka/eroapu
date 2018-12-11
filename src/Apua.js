import React, {Component} from 'react';
import {
    Alert,
    Form,
    FormGroup,
    Button,
    Radio,
    ControlLabel,
    FormControl,
    Jumbotron,
    Image
} from 'react-bootstrap'

import successLogo from './images/success.png';
import errorLogo from './images/error.png';
import loaderGif from './images/loader.gif'

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
            hideSuccessText: true,
            hideErrorText: true,
            hideForm: false,
            hideLoadingText: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.successText = (
            <div className="feedback-text">
                <div onClick={this.handleSubmit} className="helptext">
                    <Image className="feedback-text-image" src={successLogo}/>
                    <p><b>Kiitos yhteydenotostasi!</b></p>
                    <p>Pyrimme olemaan sinuun yhteydessä
                        kolmen arkipäivän sisällä.</p>
                </div>
                <div className="back-btn">
                    <Button href="/apua">Palaa takaisin</Button>
                </div>
            </div>
        );

        this.errorText = (
            <div className="feedback-text">
                <div onClick={this.handleSubmit} className="helptext">
                    <Image className="feedback-text-image" src={errorLogo}/>
                    <p><b>Lomakkeen lähettäminen epäonnistui.</b></p>
                    <p>Tarkista internet-yhteytesi ja yritä uudelleen.</p>

                </div>
                <div className="back-btn">
                    <Button href="/apua">Palaa takaisin</Button>
                </div>
            </div>
        );

        this.loadingText = (
            <div align="center">

                <Image src={loaderGif}/>
            </div>
        );
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

        this.setState({hideLoadingText: false});
        console.log("hide loading: " + this.state.hideLoadingText);

        const env = {
            REACT_APP_EMAILJS_RECEIVER: process.env.REACT_APP_EMAILJS_RECEIVER,
            REACT_APP_EMAILJS_TEMPLATEID: "template_lxucH6tK",
            //REACT_APP_EMAILJS_TEMPLATEID: "template_Sy2nlRNd", //Backup-tilin template ID
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
            formSubmitted: true,
        });

    }


    sendFeedback(templateId, from_name, message_html, from_email, from_phone) {

        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleTextInput = this.handleTextInput.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);


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
                    this.setState({hideSuccessText: false});
                    this.setState({hideErrorText: true});
                    this.setState({hideForm: true});
                    this.setState({hideLoadingText: true});
                }
            })

            .catch(err => {
                if (err.status !== 200) {
                    console.log("Lomaketta ei lähetty");
                    this.setState({hideSuccessText: true});
                    this.setState({hideErrorText: false});
                    this.setState({hideForm: true});
                    this.setState({hideLoadingText: true});
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

    render() {

        let contactField = null;
        let phoneWarningTextField = this.phoneNumberAlert();
        let emailWarningTextField = this.emailAlert();

        let success = this.state.hideSuccessText ? {display: 'none'} : {};
        let error = this.state.hideErrorText ? {display: 'none'} : {};
        let loading = this.state.hideLoadingText ? {display: 'none'} : {};
        let form = this.state.hideForm ? {display: 'none'} : {};

        const radioSelected = this.state.radioSelected;
        if (radioSelected === 'phone') {
            contactField =
                <FormControl className="form-field" onChange={(e) => this.handleUserInput(e)}
                             placeholder="Kirjoita puhelinnumero*"/>;
        } else if (radioSelected === 'email') {
            contactField =
                <FormControl className="form-field" onChange={(e) => this.handleUserInput(e)}
                             placeholder="Kirjoita sähköposti*"/>;
        } else {
            contactField = '';
        }

        return (

            <div className="page-content">

                <Jumbotron className="otsikko" style={form}>
                    <h1>Pyydä apua</h1>
                    <div className="helptext">
                    </div>
                </Jumbotron>

                <div id="lomake" className="container" style={form}>

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
                            <ControlLabel>Nimi tai nimimerkki*</ControlLabel>
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
                                         placeholder="Tähän voit kirjoittaa tilanteestasi."/>
                        </FormGroup>

                        <Button type="submit" value="Submit" onClick={this.handleSubmit}
                                disabled={this.state.disableButton} className="btn default"> Lähetä </Button>


                    </Form>
                    <p className="privacy-text"> Lomakkeella jättämäsi tietoja käsittelevät ainoastaan Oulun kaupungin sosiaali- ja terveystoimen sosiaalialan ammattilaiset.
                        Täyttämäsi tiedot poistuvat automaattisesti määrääajan kuluttua. Tietojasi ei luovuteta kolmansille osapuolille. </p>

                </div>

                <div className="sentSuccess" style={success}>
                    {this.successText}
                </div>

                <div className="sentError" style={error}>
                    {this.errorText}
                </div>

                <div className="loading" style={loading}>
                    {this.loadingText}
                </div>

            </div>


        );
    }
}

export default Apua;
