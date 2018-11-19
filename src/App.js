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
                                   src="https://bytebucket.org/eroauttaminenverkossa/eroapu/raw/8809d2296162010e25da88537204494b0413d998/src/images/sydan_perhe.jpg?token=11d1925cd2c4384bef4178e356fcaa3455ba2535"/>
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
