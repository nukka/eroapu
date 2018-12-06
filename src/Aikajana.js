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
            showParentingContent: false,
            showParentsDivorcedContent: false,
            harkitsen: [],
            eronnut: [],
            vanhemmuus: [],
            lapsillejanuorille: []
        };

        fetch('http://localhost:3001/api/aikajana/harkitsen_eroa')
            .then(response => response.json())
            .then(harkitsen => (this.setState({harkitsen})));

        fetch('http://localhost:3001/api/aikajana/olen_eronnut')
            .then(response => response.json())
            .then(eronnut => (this.setState({eronnut})));

        fetch('http://localhost:3001/api/aikajana/vanhemmuus')
            .then(response => response.json())
            .then(vanhemmuus => (this.setState({vanhemmuus})));

        fetch('http://localhost:3001/api/aikajana/lapsillejanuorille')
            .then(response => response.json())
            .then(lapsillejanuorille => (this.setState({lapsillejanuorille})));
    }

    toggleTimeLine1stElement() {
        console.log("showcontent1: " + this.state.show1stContent);
        this.setState({show1stContent: !this.state.show1stContent});
    }

    toggleTimeLine2ndElement() {
        console.log("showcontent2: " + this.state.show2ndContent);
        this.setState({show2ndContent: !this.state.show2ndContent});
    }

    toggleTimeLineParentingElement() {
        console.log("showParentingContent: " + this.state.showParentingContent);
        this.setState({showParentingContent: !this.state.showParentingContent});
    }

    toggleTimeLineParentsDivorcedElement() {
        console.log("ParentsDivorced: " + this.state.showParentsDivorcedContent);
        this.setState({showParentsDivorcedContent: !this.state.showParentsDivorcedContent});
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

        let parentingContent = this.state.vanhemmuus.map(function (item) {
            return (
                <p>
                    {item.title} <a href={item.link}> <br/> {item.source} </a>
                </p>

            );
        });

        let parentsDivorcedContent = this.state.lapsillejanuorille.map(function (item) {
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
                    <div className="helptext"> Alle on listattu eron eri vaiheet. Klikkaa elementtiä aikajanalla, niin
                        saat tietoa valitsemastasi vaiheesta.
                    </div>
                </Jumbotron>

                <VerticalTimeline>

                    <div className="vertical-timeline-element--work vertical-timeline-element"
                         onClick={() => this.toggleTimeLine1stElement()}>
                        <div>
                            <span className="vertical-timeline-element-icon bounce-in"
                                  style={{background: 'rgb(33, 150, 243)', color: 'rgb(255, 255, 255)'}}/>
                            <div className="vertical-timeline-element-content bounce-in">
                                <div><h3 className="vertical-timeline-element-title">Harkitsen eroa</h3><span
                                    className="pull-right glyphicon glyphicon-glyphicon glyphicon-menu-down"/>
                                </div>
                                <span className="vertical-timeline-element-date"/>
                                {this.state.show1stContent && consideringContent}</div>
                        </div>
                    </div>

                    <div className="vertical-timeline-element--work vertical-timeline-element"
                         onClick={() => this.toggleTimeLine2ndElement()}>
                        <div>
                            <span className="vertical-timeline-element-icon bounce-in"
                                  style={{background: 'rgb(233, 30, 99)', color: 'rgb(255, 255, 255)'}}/>
                            <div className="vertical-timeline-element-content bounce-in">
                                <div><h3 className="vertical-timeline-element-title">Olen eronnut</h3><span
                                    className="pull-right glyphicon glyphicon-glyphicon glyphicon-menu-down"/>
                                </div>
                                <span className="vertical-timeline-element-date"/>
                                {this.state.show2ndContent && divorcedContent}</div>
                        </div>
                    </div>

                    <div className="vertical-timeline-element--work vertical-timeline-element"
                         onClick={() => this.toggleTimeLineParentingElement()}>
                        <div>
                            <span className="vertical-timeline-element-icon bounce-in"
                                  style={{background: 'rgb(60,179,113)', color: 'rgb(255, 255, 255)'}}/>
                            <div className="vertical-timeline-element-content bounce-in">
                                <div><h3 className="vertical-timeline-element-title"> Apua vanhemmuuteen </h3><span
                                    className="pull-right glyphicon glyphicon-glyphicon glyphicon-menu-down"/>
                                </div>
                                <span className="vertical-timeline-element-date"/>
                                {this.state.showParentingContent && parentingContent}</div>
                        </div>
                    </div>

                    <div className="vertical-timeline-element--work vertical-timeline-element"
                         onClick={() => this.toggleTimeLineParentsDivorcedElement()}>
                        <div>
                            <span className="vertical-timeline-element-icon bounce-in"
                                  style={{background: 'rgb(255,228,181)', color: 'rgb(255, 255, 255)'}}/>
                            <div className="vertical-timeline-element-content bounce-in">
                                <div><h3 className="vertical-timeline-element-title"> Vanhempani ovat eronneet </h3><span
                                    className="pull-right glyphicon glyphicon-glyphicon glyphicon-menu-down"/>
                                </div>
                                <span className="vertical-timeline-element-date"/>
                                {this.state.showParentsDivorcedContent && parentsDivorcedContent}</div>
                        </div>
                    </div>

                </VerticalTimeline>


            </div>
        );
    }
}

export default Aikajana;
