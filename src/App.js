import React, {Component} from 'react';
import './App.css';
import {Navbar, Nav, NavItem, Jumbotron, Col, Grid, Row} from 'react-bootstrap'

class App extends Component {
    render() {
        return (
            <div className="App">

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

export default App;
