import React, {Component} from 'react';
import {Col, Row, Image, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'

class App extends Component {
    render() {
        return (
            <div className="page-content front-page">

                <div className="portal-and-search">
                    <Row>
                        <Col md={3}>
                            <div className="otsikko-portaali">
                                <p>Portaali</p>
                            </div>
                            <div className="helptext">
                                <p>Hae eroon liittyvää tietoa vapaalla hakusanalla tai käyttämällä tarkempaa
                                    hakua</p>
                            </div>
                            <Hakupalkki/>
                        </Col>

                        <Col md={7}>
                            <Image className="front-page-image"
                                   src="https://bytebucket.org/eroauttaminenverkossa/eroapu/raw/be4ff7a0e3ec6a28f9f3c66f06371c7bc15dcf61/src/images/lapsiperhe.jpg?token=a7e0ad896ff1025e622a5e6ab616803425b545dd"/>
                        </Col>


                        <Col md={2}>
                            <Button className="hatanappi" href="/apua"> Tarvitsen apua</Button>
                        </Col>
                    </Row>
                </div>
                <div className="portal-content">

                    <Row className="show-grid">
                        <Col md={4}>
                            <Button className="button-row button-haku" href="/haku">Palveluhaku</Button>
                        </Col>
                        <Col md={4}>
                            <Button className="button-row button-aikajana" href="/aikajana">Aikajana</Button>
                        </Col>
                        <Col md={4}>
                            <Button className="button-row button-kalenteri" href="/kalenteri">Kalenteri</Button>
                        </Col>
                    </Row>

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
            value: '',
            results: [],
        };

    }

    handleChange(e) {
        this.setState({value: e.target.value});

    }


    compareValues() {
        let input = this.state.value;
        let inputArray = [];
        inputArray.push(input.split(" "));


        if (input.length >= 3){
            //jos sanassa on 3 tai enemmän kirjainta lisätään taulukkoon
        }

        this.state.results.map(function (item) {
            if (input === item.title.toLowerCase()) {

            }
            return (null);

        })

    }


    render() {
        this.compareValues();
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
