import React, {Component} from 'react';
import {VerticalTimeline} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Jumbotron} from "react-bootstrap";

class Aikajana extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showConsideringContent: false,
            showDivorcedContent: false,
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

    toggleTimeLineConsideringElement() {
        this.setState({showConsideringContent: !this.state.showConsideringContent});
    }

    toggleTimeLineDivorcedElement() {
        this.setState({showDivorcedContent: !this.state.showDivorcedContent});
    }

    toggleTimeLineParentingElement() {
        this.setState({showParentingContent: !this.state.showParentingContent});
    }

    toggleTimeLineParentsDivorcedElement() {
        this.setState({showParentsDivorcedContent: !this.state.showParentsDivorcedContent});
    }

    render() {
        let divorcedContent = this.state.harkitsen.map(function (item) {
            return (
                <p className="timeline-link">
                    {item.title} <a href={item.link} target="_blank" rel="noopener noreferrer">: {item.source} </a>
                </p>

            );
        });

        let consideringContent = this.state.eronnut.map(function (item) {
            return (
                <p className="timeline-link">
                    {item.title} <a href={item.link} target="_blank" rel="noopener noreferrer">: {item.source} </a>
                </p>

            );
        });

        let parentingContent = this.state.vanhemmuus.map(function (item) {
            return (
                <p className="timeline-link">
                    {item.title} <a href={item.link} target="_blank" rel="noopener noreferrer">: {item.source} </a>
                </p>

            );
        });

        let parentsDivorcedContent = this.state.lapsillejanuorille.map(function (item) {
            return (
                <p className="timeline-link">
                    {item.title} <a href={item.link} target="_blank" rel="noopener noreferrer">: {item.source} </a>
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
                         onClick={() => this.toggleTimeLineConsideringElement()}>
                        <div>
                            <span className="vertical-timeline-element-icon bounce-in"
                                  style={{background: 'rgb(33, 150, 243)', color: 'rgb(255, 255, 255)'}}/>
                            <div className="vertical-timeline-element-content bounce-in">
                                <div><h3 className="vertical-timeline-element-title">Harkitsen eroa</h3><span
                                    className="pull-right glyphicon glyphicon-glyphicon glyphicon-menu-down"/>
                                </div>
                                <span className="vertical-timeline-element-date"/>
                                {this.state.showConsideringContent && consideringContent}</div>
                        </div>
                    </div>

                    <div className="vertical-timeline-element--work vertical-timeline-element"
                         onClick={() => this.toggleTimeLineDivorcedElement()}>
                        <div>
                            <span className="vertical-timeline-element-icon bounce-in"
                                  style={{background: 'rgb(233, 30, 99)', color: 'rgb(255, 255, 255)'}}/>
                            <div className="vertical-timeline-element-content bounce-in">
                                <div><h3 className="vertical-timeline-element-title">Olen eronnut</h3><span
                                    className="pull-right glyphicon glyphicon-glyphicon glyphicon-menu-down"/>
                                </div>
                                <span className="vertical-timeline-element-date"/>
                                {this.state.showDivorcedContent && divorcedContent}</div>
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
                                <div><h3 className="vertical-timeline-element-title"> Vanhempani ovat eronneet </h3>
                                    <span
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
