import React, {Component} from "react";
import './Node.css'


export  default class NodeComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.id,
            value: props.value,
            isSelected: props.isSelected,
            posX: props.x,
            posY: props.y
        };

    }
    render() {
        const {id, value, posX, posY, isSelected} = this.state;
        let fill = "white";
        if(isSelected){
            fill = "blue";
        }
        return (
            <g>
                <circle id={id} cx={posX} cy={posY} r={35} fill={fill} stroke="black"></circle>
                <text textAnchor="middle" x={posX} y={posY + 5}>{value}</text>
            </g> 

        );
    }
}