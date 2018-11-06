import React, {Component} from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Jumbotron} from "react-bootstrap";

class Aikajana extends Component {
    render() {
        return (
            <div className="timeline">
                <Jumbotron className="otsikko">
                    <h1>Aikajana</h1>
                    <div className="helptext" sm={1} md={4}> Alle on listattu eron eri vaiheet. Lorem ipsum dolor sit amet, no dicit maiorum
                        appetere est, pro te hinc quas verear.
                    </div>
                </Jumbotron>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    >
                        <h3 className="vertical-timeline-element-title">Eron aihe 1</h3>
                        <p>
                            Lorem ipsum <a href="#"> <br/> linkki </a>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    >
                        <h3 className="vertical-timeline-element-title">Eron vaihe 2 </h3>
                        <h4 className="vertical-timeline-element-subtitle">Kuvaus</h4>
                        <p>
                            Lorem ipsum
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    >
                        <h3 className="vertical-timeline-element-title">Eron vaihe 3 </h3>
                        <h4 className="vertical-timeline-element-subtitle">Kuvaus</h4>
                        <p>
                            User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                    >
                        <h3 className="vertical-timeline-element-title"> Eron vaihe 4</h3>
                        <h4 className="vertical-timeline-element-subtitle">Kuvaus</h4>
                        <p>
                            Lorem ipsum
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        );
    }
}

export default Aikajana;
