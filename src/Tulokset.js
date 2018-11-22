import React, {Component} from 'react';
import {Button, ButtonGroup, Glyphicon, Jumbotron, Table} from "react-bootstrap";

class Tulokset extends Component {

    render() {

        return (
            <div className="page-content" align="center">
                <Jumbotron className="otsikko">
                    <h1>Haun tulokset</h1>
                </Jumbotron>
                <div>
                    <DropdownTableButton/>
                    <DropdownTableButton/>
                </div>


            </div>
        );
    }
}

class DropdownTableButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            isClicked: false,
        }
    }

    handleClick() {
        this.setState(({isClicked}) => (
            {
                isClicked: !isClicked,
            }
        ));
    }

    render() {
        return (

            <div className="dropdown-table">
                <ButtonGroup vertical block>
                    <Button onClick={this.handleClick} className="dropdown-button">
                        Tukipuhelin
                        <Glyphicon className="dropdown-button-glyphicon" glyph="glyphicon glyphicon-chevron-down"/>
                    </Button>
                    {this.state.isClicked ? <DropdownTableContent/> : null}
                </ButtonGroup>
            </div>)
    }
}

class DropdownTableContent extends Component {
    render() {
        return (

            <Table striped bordered condensed hover>
                <tbody>
                <tr>
                    <td>Väestöliitto</td>
                </tr>
                <tr>
                    <td>MLL</td>
                </tr>
                </tbody>
            </Table>

        )
    }
}

export default Tulokset;
