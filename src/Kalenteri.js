import React, {Component} from 'react';
import {Calendar} from 'react-calendar'
import 'react-vertical-timeline-component/style.min.css';
import {Jumbotron} from "react-bootstrap";

class Kalenteri extends Component {

    render() {
        return (
            <div className="page-content calendar" align="center">
                <Jumbotron className="otsikko">
                    <h1>Tapahtumakalenteri</h1>
                </Jumbotron>
                <p>kalenteri</p>
                <Calendar/>
            </div>
        );
    }
}

export default Kalenteri;
