import React, {Component} from "react";



export  default class EdgeComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.id,
            x1: props.x1,
            x2: props.x2,
            y1: props.y1,
            y2: props.y2
        };

    }
    render() {
        const { x1, x2, y1, y2} = this.state;
        return (
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="black"/>
        );
    }
}