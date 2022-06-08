import React, {Component} from "react";
import './Cell.css'

export default class Cell extends Component {

    render() {
        const {onClickHandler} = this.props;

        return (
            <div className="cell" onClick={onClickHandler}>{this.props.children}</div>
        );
    }
}