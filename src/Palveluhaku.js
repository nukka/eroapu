import React, {Component} from 'react';
import {Checkbox, Grid, Row, Col, Button, Jumbotron} from 'react-bootstrap';

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
                    <div className="helptext"> Rastita haluamasi vaihtoehdot ja paina "hae" -näppäintä.
                    </div>
                </Jumbotron>
                <Grid>
                    <Row className="show-grid">
                        <Col md={2} xsOffset={2}>
                        </Col>
                        <Col md={2}>
                            <p>Kohderyhmä</p>
                        </Col>
                        <Col md={2}>
                            <p>Palvelu</p>
                        </Col>

                    </Row>
                    <Row className="show-grid">
                        <Col md={2} xsOffset={2}>
                        </Col>
                        <Col md={2}>
                            <Checkbox checked={this.state.checkboxChecked}
                                      onChange={this.handleChange}>Aikuinen</Checkbox>
                        </Col>
                        <Col md={2}>
                            <Checkbox>Kirja- ja opasvinkit</Checkbox>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={2} xsOffset={2}>
                        </Col>
                        <Col md={2}>
                            <Checkbox>Lapsi</Checkbox>
                        </Col>
                        <Col md={2}>
                            <Checkbox>Yleinen informaatio</Checkbox>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={2} xsOffset={2}>
                        </Col>
                        <Col md={2}>
                            <Checkbox>Asiantuntija</Checkbox>
                        </Col>
                        <Col md={2}>
                            <Checkbox>Ajankohtainen informaatio/uutiset</Checkbox>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={2} xsOffset={2}>
                        </Col>
                        <Col md={2}>
                        </Col>
                        <Col md={2}>
                            <Checkbox>Chat</Checkbox>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={2} xsOffset={2}>
                        </Col>
                        <Col md={2}>
                        </Col>
                        <Col md={2}>
                            <Checkbox>Keskustelupalsta</Checkbox>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={2} xsOffset={2}>
                        </Col>
                        <Col md={2}>
                        </Col>
                        <Col md={2}>
                            <Checkbox>Blogi</Checkbox>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={2} xsOffset={2}>
                        </Col>
                        <Col md={2}>
                        </Col>
                        <Col md={2}>
                            <Checkbox>Tukipuhelin</Checkbox>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={2} xsOffset={2}>
                        </Col>
                        <Col md={2}>
                        </Col>
                        <Col md={2}>
                            <Checkbox>Omakohtaiset tarinat</Checkbox>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={2} xsOffset={2}>
                        </Col>
                        <Col md={2}>
                        </Col>
                        <Col md={2}>
                            <Checkbox>Pelit</Checkbox>
                        </Col>
                        <Col md={2}>
                            <Button>Hae</Button>
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
