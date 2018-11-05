import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Button, Glyphicon} from 'react-bootstrap';
import './App.css';
import {Col, Grid, Row} from 'react-bootstrap'

class App extends Component {
    render() {
        return (
            <div className="App">

                <div className="portal-content">
                    <Grid>
                        <div className="show-grid with-margin">
                            <Row>
                                <Col md={4}>
                                </Col>
                                <Col md={4}>
                                    <Hakupalkki/>
                                </Col>
                                <Col md={4}>
                                </Col>
                            </Row>
                        </div>

                        <Row>
                            <Col md={3}>
                                <Button bsSize="large" href="/haku">
                                    <Glyphicon glyph="glyphicon glyphicon-search"/> Haku
                                </Button>
                            </Col>
                            <Col md={3}>
                                <Button bsSize="large" href="/aikajana">
                                    <Glyphicon glyph="glyphicon glyphicon-minus"/> Aikajana
                                </Button>
                            </Col>
                            <Col md={3}>
                                <Button bsSize="large" href="/apua">
                                    <Glyphicon glyph="glyphicon glyphicon-exclamation-sign"/> Hätänappi
                                </Button>
                            </Col>
                            <Col md={3}>
                                <Button bsSize="large">
                                    <Glyphicon glyph="glyphicon glyphicon-calendar"/> Kalenteri
                                </Button>
                            </Col>
                        </Row>


                    </Grid>
                    <Grid>

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
