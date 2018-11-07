import React, {Component} from 'react';
import {Checkbox, Grid, Row, Col, Jumbotron} from 'react-bootstrap';

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
            <div>
                <Jumbotron className="otsikko">
                    <h1>Palveluhaku</h1>
                    <div className="helptext" sm={1} md={4}>
                    </div>
                </Jumbotron>
                <Grid>
                    <Row className="show-grid">
                        <Col md={2} xsOffset={2}>
                        </Col>
                        <Col md={2}>
                            <p>Kohderyhmä</p>
                            <Row>
                                <Checkbox>Aikuinen</Checkbox>
                            </Row>
                            <Row>
                                <Checkbox>Lapsi</Checkbox>
                            </Row>
                            <Row>
                                <Checkbox>Asiantuntija</Checkbox>
                            </Row>

                        </Col>
                        <Col md={2}>
                            <p>Palvelu</p>
                            <Row>
                                <Checkbox>Kirja- ja opasvinkit</Checkbox>
                            </Row>
                            <Row>
                                <Checkbox>Yleinen informaatio</Checkbox>
                            </Row>
                            <Row>
                                <Checkbox>Ajankohtainen informaatio</Checkbox>
                            </Row>
                            <Row>
                                <Checkbox>Chat</Checkbox>
                            </Row>
                            <Row>
                                <Checkbox>Keskustelupalsta</Checkbox>
                            </Row>
                            <Row>
                                <Checkbox>Blogi</Checkbox>
                            </Row>
                            <Row>
                                <Checkbox>Videot</Checkbox>
                            </Row>
                            <Row>
                                <Checkbox>Tukipuhelin</Checkbox>
                            </Row>
                            <Row>
                                <Checkbox>Omakohtaiset tarinat</Checkbox>
                            </Row>
                            <Row>
                                <Checkbox>Pelit</Checkbox>
                            </Row>
                            <Row>
                                <input type="checkbox" defaultChecked={true}/>
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
