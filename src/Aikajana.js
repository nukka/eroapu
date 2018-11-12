import React, {Component} from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Jumbotron} from "react-bootstrap";

class Aikajana extends Component {

    constructor(props) {
        super(props);
        this.state = {testarray: []};
        fetch('http://localhost:3001/test')
            .then(response => response.json())
            .then(testarray => (this.setState({testarray})))
    }

    render() {

        console.log("test array: " + JSON.stringify(this.state.testarray));

        return (
            <div className="timeline">
                <Jumbotron className="otsikko">
                    <h1>Aikajana</h1>
                    <div className="helptext" sm={1} md={4}> Alle on listattu eron eri vaiheet. Lorem ipsum dolor sit
                        amet, no dicit maiorum
                        appetere est, pro te hinc quas verear.
                    </div>
                </Jumbotron>

                <VerticalTimeline>{this.state.testarray.map(function (item) {
                    return (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                        >
                            <h3 className="vertical-timeline-element-title">{item.title}</h3>
                            <p>
                                Lorem ipsum <a href={item.link}> <br/> {item.source} </a>
                            </p>
                        </VerticalTimelineElement>
                    )

                })}</VerticalTimeline>

            </div>
        );
    }
}

export default Aikajana;
