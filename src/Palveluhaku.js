import React, {Component} from 'react';
import {
    Col,
    Jumbotron,
    Row,
    Button,
    ButtonGroup
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
            results: []
        };

    }


    handleClick(e) {
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
        console.log("handling form submit");
        formSubmitEvent.preventDefault();

        let chosen = {};
        let topics = [];
        let targets = [];

        for (const checkbox of this.selectedCheckboxes) {
            console.log("Valittuna " + checkbox);
            if (checkbox === "Aikuinen" || checkbox === "Lapsi") {
                targets.push(checkbox);
            } else {
                topics.push(checkbox);
            }
        }

        chosen["topic"] = topics;
        chosen["target"] = targets;

        let querystring = require("query-string");

        console.log("chosen: " + JSON.stringify(chosen));
        console.log("qstring: " + querystring.stringify(chosen));

        var qs = querystring.stringify(chosen);

        console.log("url: " + qs + ', linkki: http://localhost:3001/api/haku/' + qs);

        fetch('http://localhost:3001/api/haku/' + qs)
            .then(response => response.json())
            .then(results => (this.setState({results})));
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
        /*
        let content = this.state.results.map((item) => {
            return (
                <Button onClick={this.handleClick} className="dropdown-button">
                    {item.informationtype}: &nbsp;
                    <Glyphicon className="dropdown-button-glyphicon" glyph="glyphicon glyphicon-chevron-down"/>
                    {item.title} <a href={item.link}> <br/> {item.source} </a>
                </Button>
            )
        });

        */

        let grouped = this.state.results.reduce((group, {title, link, source, informationtype}) => {
            let items = [];
            items[0] = title;
            items[1] = link;
            items[2] = source;
            (group[informationtype] = group[informationtype] || []).push(items);
            return group;
        }, {});

        let content = [];

        console.log("grouped: " + JSON.stringify(grouped));

        for (let item in grouped) {
            console.log("item: " + item);
            let title = item;


            let list = grouped[item].map((i) => {
                return (
                    <div>
                            {i[0] + ": "} <a href={i[1]}> {i[2]} </a>
                    </div>
                )
            });

            content.push(<Button onClick={this.handleClick} className="dropdown-button"> <div id={title}>{item} </div> </Button>);
            //content.push(<Button onClick={this.handleClick} className="dropdown-button"> {item} {list} </Button>);
            content.push(list);
        }

        if (content.length < 1) {
            content = <p> Tuloksia ei löytynyt. Kokeile uudestaan eri hakuehdoin. </p>
        }

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
                            {this.state.isClicked ? <div className="dropdown-table">
                                <ButtonGroup vertical block> {content} </ButtonGroup></div> : null}

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

export default Palveluhaku;
