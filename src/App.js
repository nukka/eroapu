import React, {Component} from 'react';
import {Col, Grid, Jumbotron, Row} from 'react-bootstrap'
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class App extends Component {
    render() {
        return (
            <div className="page-content front-page">
                <Jumbotron className="otsikko-portaali">
                    <div className="portal-and-search">
                        <h1>Portaali</h1>
                        <div className="helptext">
                            <p>Hae eroon liittyvää tietoa vapaalla hakusanalla tai käyttämällä tarkempaa hakua</p>
                        </div>
                        <Row>
                            <Col md={2}>
                                <Hakupalkki/>
                            </Col>
                        </Row>
                    </div>
                </Jumbotron>
                <div className="portal-content">
                    <Grid>

                        <Row className="show-grid">
                            <Col md={3}>Haku</Col>
                            <Col md={3}>Aikajana</Col>
                            <Col md={3}>Hätänappi</Col>
                            <Col md={3}>Kalenteri</Col>
                        </Row>
                    </Grid>
                </div>

            </div>
        );
    }
}

class Hakupalkki extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: ''
        };

    }

    handleChange(e) {
        this.setState({value: e.target.value});
        //console.log(e.target.value);

    }

    render() {
        return (
            <form>
                <FormGroup controlId="searchBar">
                    <ControlLabel>Vapaa haku</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Syötä haluamasi hakusana"
                        onChange={this.handleChange}
                    />

                </FormGroup>
            </form>
        );
    }

}

export default App;
