import React, {Component} from 'react';
import {
    Col,
    Jumbotron,
    Row,
    Table,
    Button,
    ButtonGroup,
    Glyphicon
} from 'react-bootstrap';

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

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            isClicked: false,
        }
    }

    handleClick() {
        this.setState({
            isClicked: true,
        });
        console.log("State: " + this.state.isClicked);
    }


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
                            <button className="btn btn-default" type="submit" onClick={this.handleClick}>Hae</button>
                        </form>
                    </Col>
                    <Col md={2}>
                        <p className="helptext">Kohderyhmä</p>
                        <form onSubmit={this.handleFormSubmit}>
                            {this.createCheckboxes2()}
                        </form>
                    </Col>
                </Row>
                <div className="spacer">
                    <Row className="show-grid">
                        <Col xsOffset={4}>
                            {this.state.isClicked ? <DropdownTableButton/> : null}
                        </Col>
                    </Row>
                </div>


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


class DropdownTableButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            isClicked: false,
        }
    }

    handleClick() {
        this.setState(({isClicked}) => (
            {
                isClicked: !isClicked,
            }
        ));
    }

    render() {
        return (

            <div className="dropdown-table">
                <ButtonGroup vertical block>
                    <Button onClick={this.handleClick} className="dropdown-button">
                        Tukipuhelin
                        <Glyphicon className="dropdown-button-glyphicon" glyph="glyphicon glyphicon-chevron-down"/>
                    </Button>
                    {this.state.isClicked ? <DropdownTableContent/> : null}
                </ButtonGroup>
            </div>)
    }
}

class DropdownTableContent extends Component {
    render() {
        return (

            <Table striped bordered condensed hover>
                <tbody>
                <tr>
                    <td>Väestöliitto</td>
                </tr>
                <tr>
                    <td>MLL</td>
                </tr>
                </tbody>
            </Table>

        )
    }
}


export default Palveluhaku;
