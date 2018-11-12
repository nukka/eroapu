import React, {Component} from 'react';
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap';

class Palveluhaku extends Component {
    render() {
        return (
            <div className="App">
                <CheckboxGroup/>
            </div>
        );
    }
}

class CheckboxGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {checkboxChecked: false};
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div className="page-content">
                <Jumbotron className="otsikko">
                    <h1>Palveluhaku</h1>
                    <div className="helptext">
                    </div>
                </Jumbotron>
                <Grid>
                    <Row className="show-grid">
                        <Col md={2} xsOffset={2}>
                        </Col>
                        <Col md={2}>
                            <p>Kohderyhmä</p>
                            <Row>
                                <input type="checkbox"/> Aikuinen
                            </Row>
                            <Row>
                                <input type="checkbox"/> Lapsi
                            </Row>
                            <Row>
                                <input type="checkbox"/> Asiantuntija
                            </Row>

                        </Col>
                        <Col md={2}>
                            <p>Palvelu</p>
                            <Row>
                                <input type="checkbox"/> Kirja- ja opasvinkit
                            </Row>
                            <Row>
                                <input type="checkbox"/> Yleinen informaatio
                            </Row>
                            <Row>
                                <input type="checkbox"/> Ajankohtainen informaatio
                            </Row>
                            <Row>
                                <input type="checkbox"/> Chat
                            </Row>
                            <Row>
                                <input type="checkbox"/> Keskustelupalsta
                            </Row>
                            <Row>
                                <input type="checkbox"/> Blogi
                            </Row>
                            <Row>
                                <input type="checkbox"/> Videot
                            </Row>
                            <Row>
                                <input type="checkbox"/> Tukipuhelin
                            </Row>
                            <Row>
                                <input type="checkbox"/> Omakohtaiset tarinat
                            </Row>
                            <Row>
                                <input type="checkbox"/> Pelit
                            </Row>

                        </Col>


                    </Row>

                </Grid>
            </div>
        );
    }

    handleChange(props) {
        this.setState({checkboxChecked: props.target.checked});
        console.log(this.state.checkboxChecked ? 'Checkbox not checked' : 'Checkbox checked');
    }

}

export default Palveluhaku;
