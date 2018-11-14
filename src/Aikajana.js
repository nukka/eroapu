import React, {Component} from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Jumbotron, Glyphicon} from "react-bootstrap";

class Aikajana extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show1stContent: false,
            show2ndContent: false,
            harkitsen: [],
            eronnut: []
        };

        fetch('http://localhost:3001/api/aikajana/harkitsen_eroa')
            .then(response => response.json())
            .then(harkitsen => (this.setState({harkitsen})));

        fetch('http://localhost:3001/api/aikajana/olen_eronnut')
            .then(response => response.json())
            .then(eronnut => (this.setState({eronnut})));
    }

    toggleTimeLine1stElement() {
        console.log("showcontent1: " + this.state.show1stContent);
        this.setState({show1stContent: !this.state.show1stContent});
    }

    toggleTimeLine2ndElement (){
        console.log("showcontent2: " + this.state.show2ndContent);
        this.setState({show2ndContent: !this.state.show2ndContent});
    }

    render() {
        let divorcedContent = this.state.harkitsen.map(function (item) {
            return (
                <p>
                    {item.title} <a href={item.link}> <br/> {item.source} </a>
                </p>

            );
        });

        let consideringContent = this.state.eronnut.map(function (item) {
            return (
                <p>
                    {item.title} <a href={item.link}> <br/> {item.source} </a>
                </p>

            );
        });

        return (
            <div className="timeline">
                <Jumbotron className="otsikko">
                    <h1>Aikajana</h1>
                    <div className="helptext" sm={1} md={4}> Alle on listattu eron eri vaiheet. Lorem ipsum dolor sit
                        amet, no dicit maiorum
                        appetere est, pro te hinc quas verear.
                    </div>
                </Jumbotron>

                <VerticalTimeline>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    >
                        <div onClick={() => this.toggleTimeLine1stElement()}>
                            <h3 className="vertical-timeline-element-title">Harkitsen eroa</h3>
                            <Glyphicon className="pull-right" glyph="glyphicon glyphicon-menu-down"/>
                            {this.state.show1stContent && consideringContent}
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{background: 'rgb(255,105,180)', color: '#fff'}}
                    >
                        <div onClick={() => this.toggleTimeLine2ndElement()}>
                            <h3 className="vertical-timeline-element-title">Olen eronnut</h3>
                            <div className="down-arrow">
                            <Glyphicon className="down-arrow pull-right" glyph="glyphicon glyphicon-menu-down"/></div>
                            {this.state.show2ndContent && divorcedContent}
                        </div>

                    </VerticalTimelineElement></VerticalTimeline>


            </div>
        );
    }
}

export default Aikajana;
