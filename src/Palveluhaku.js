import React, {Component} from 'react';
import {Col, Jumbotron, ButtonToolbar, MenuItem, Row, SplitButton} from 'react-bootstrap';

const palvelut = [ //nämä tiedot otetaan myöhemmin tekstitiedostosta/tietokannasta
    'Kirja- ja opasvinkit',
    'Yleistä informaatiota',
    'Ajankohtainen informaatio/uutiset',
    'Chat',
    'Keskustelupalsta',
    'Blogi',
    'Videot',
    'Tukipuhelin',
    'Omakohtaiset tarinat',
    'Pelit',
];

const kohderyhma = [
    'Aikuinen',
    'Lapsi',
];

class Palveluhaku extends Component {
    componentWillMount = () => { // The functions of this class are borrowed from http://react.tips/checkboxes-in-react/
        this.selectedCheckboxes = new Set();
    };

    toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label)
        } else {
            this.selectedCheckboxes.add(label)
        }
    };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        for (const checkbox of this.selectedCheckboxes) {
            console.log("Valittuna " + checkbox);
        }
    };

    createCheckbox = label => (
        <CheckboxGroup
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
    );

    createCheckboxes = () => (
        palvelut.map(this.createCheckbox)
    );

    createCheckboxes2 = () => (
        kohderyhma.map(this.createCheckbox)
    );


    render() {
        return (
            <div className="container">
                <Jumbotron className="otsikko">
                    <h1>Palveluhaku</h1>
                    <div className="helptext">
                    </div>
                </Jumbotron>
                <Row className="show-grid">
                    <Col md={2} xsOffset={2}/>
                    <Col md={2}>
                        <p className="helptext">Palvelu</p>
                        <form onSubmit={this.handleFormSubmit}>
                            {this.createCheckboxes()}
                            <button className="btn btn-default" type="submit">Hae</button>
                        </form>
                    </Col>
                    <Col md={2}>
                        <p className="helptext">Kohderyhmä</p>
                        <form onSubmit={this.handleFormSubmit}>
                            {this.createCheckboxes2()}
                        </form>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={2} xsOffset={4}>
                        {/* <DropdownGroup/> nappia painettaessa ilmestyy pudotusvalikot */}
                    </Col>
                </Row>

            </div>
        );
    }
}

class CheckboxGroup extends Component { //The code of this class is from http://react.tips/checkboxes-in-react/
    state = {
        isChecked: false,
    };

    toggleCheckboxChange = () => {
        const {handleCheckboxChange, label} = this.props;
        this.setState(({isChecked}) => (
            {
                isChecked: !isChecked,
            }
        ));

        handleCheckboxChange(label);
    };

    render() {
        const {label} = this.props;
        const {isChecked} = this.state;

        return (
            <div className="checkbox">
                <label>
                    <input
                        type="checkbox"
                        value={label}
                        checked={isChecked}
                        onChange={this.toggleCheckboxChange}
                    />
                    {label}
                </label>
            </div>
        );
    }


}

class DropdownGroup extends Component {
    render() {
        return (
            <div className="container">
                <ButtonToolbar>
                    <SplitButton className="dropdown-button" bsSize="large" title="Tukipuhelin" id="dropdown-btn">
                        <MenuItem className="dropdown-button" eventKey="1">Väestöliitto</MenuItem>
                        <MenuItem eventKey="1">Eriparivanhemmat</MenuItem>
                        <MenuItem eventKey="1">Mannerheimin Lastensuojeluliitto</MenuItem>
                    </SplitButton>
                </ButtonToolbar>

                <ButtonToolbar>
                    <SplitButton className="dropdown-button" bsSize="large" title="Chat" id="dropdown-btn">
                        <MenuItem className="dropdown-button" eventKey="1">Väestöliitto</MenuItem>
                        <MenuItem eventKey="1">Eriparivanhemmat</MenuItem>
                        <MenuItem eventKey="1">Mannerheimin Lastensuojeluliitto</MenuItem>
                    </SplitButton>
                </ButtonToolbar>
            </div>
        )
    }

}


export default Palveluhaku;
