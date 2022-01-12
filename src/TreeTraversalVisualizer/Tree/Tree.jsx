import React, {Component} from "react";
import NodeComponent from '../Node/NodeComponent';
import Node from '../Node/Node';
import EdgeComponent from '../Edge/EdgeComponent';
import Edge from '../Edge/Edge';
import {searchTree, traverseTreeDFS}  from "../../Algorithms/depthFirstSearch";
import {traverseTreeBFS}  from "../../Algorithms/breadthFirstSearch";
import './Tree.css';


export default class Tree extends Component {
    constructor(props){
        super(props);
        let maxWidth = 1850;
        this.state = {
            root: null,
            id: 0,
            nodes: [],
            edges: [],
            maxWidth: 1850,
            maxHeight: 1850,
            posX: maxWidth /2,
            posY: 100,
            selectValue: "none"
        };
    }

    add(data){
        for(let i = 0 ; i< this.state.nodes.length; i++){
            if (this.state.nodes[i].data === data){
                return;
            }
        }
        const {root,id , posX, posY} = this.state;
        this.setState({error: ""});
        let newID = id + 1;
        if(root === null){
            let node = new Node(newID, data, posX, posY);
            this.state.nodes.push(node);
            this.setState({id: newID, root: node, nodes: this.state.nodes});

          //  this.printRoot();
        }
        else {
            this.addNode(root, data, newID);
        }

    }
    printRoot(){
        console.log(this.state.root);
    }
    addNode(node, data, newID){

        if(data < node.data){
            if(node.left === null){
                //add node to left side
                let prevX = node.x;
                let prevY = node.y ;
                let newX = prevX - 100;
                let newY = prevY + 100;
                if(prevX === this.state.posX && prevY === this.state.posY){
                    newX = prevX - (this.state.maxWidth/4);
                }
                let newNode = new Node(newID, data ,newX, newY);  
                let edge = new Edge(newID,prevX, prevY, newX, newY);
                node.left = newNode;
                this.state.nodes.push(newNode);
                this.state.edges.push(edge);
                this.setState({id: newID ,  nodes: this.state.nodes, edges: this.state.edges});

              //  this.printRoot();
            }
            else{

                this.addNode(node.left,data, newID);
            }
        }
        else{
            if(node.right === null){
                //add node to right side
                let prevX = node.x;
                let prevY = node.y;
                let newX = prevX + 100;
                let newY = prevY + 100;
                if(prevX === this.state.posX && prevY === this.state.posY){
                    newX = prevX + this.state.maxWidth/4;
                }
              
                let newNode = new Node(newID, data ,newX, newY);  
                let edge = new Edge(newID,prevX, prevY, newX, newY);
                node.right = newNode;
                this.state.nodes.push(newNode);
                this.state.edges.push(edge);
                this.setState({id: newID, nodes: this.state.nodes, edges: this.state.edges});
           //     this.printRoot();
            }
            else {
                this.addNode(node.right, data, newID);
            }
        }
    }

    handleReset = (event) =>{
        this.setState({nodes: [], root: null,edges:  []});
        event.preventDefault();
    }
    handleTraversal = (event) =>{

        if(this.state.selectValue !== 'bfs'){
            traverseTreeDFS(this.state.root,this.state.selectValue);
        }
        else {
            traverseTreeBFS(this.state.root);
        }
        event.preventDefault();
    }
    handleAddNode = (event) =>{
        if(isNaN(parseInt(event.target.value))){
            this.setState({error: "Enter a number."});
            event.preventDefault();
            return;
        }
        //this.setState({error: ""});
        this.add(parseInt(event.target.value));
     //   this.printRoot();
        event.preventDefault();
    }

    handleSearch = (event) =>{
        searchTree(this.state.root, event.target.value);
        event.preventDefault();
    }

    handleChange= (event) =>{
        this.setState({value: event.target.value});
    }
    handleDropdownChange = (event)=>{
        this.setState({selectValue: event.target.value})
    }
    render() {
        const {maxWidth, maxHeight} = this.state;
        return (
            <div>
                <ul className='header'>
                    <li className='btn-traverse-wrapper'>
                        <form>
                            <select value={this.state.selectValue} onChange={this.handleDropdownChange}>
                                <option value="none">Select Traversal</option>
                                <option value="preOrder">Pre Order </option>
                                <option value="inOrder">In Order </option>
                                <option value="postOrder">Post Order </option>
                                <option value="bfs">Breadth First </option>
                            </select>
                            <button className='btn btn-primary btn-sm m-2' onClick={this.handleTraversal}>Traverse Tree</button>
                        </form>
                    </li>
                    <li className='btn-reset-wrapper'>
                            <form>
                                <button className='btn btn-primary btn-sm m-2' onClick={this.handleReset}> Reset Tree</button>
                            </form>
                    </li>
                    <li className='btn-add-wrapper'>
                        <form>
                            <label>
                                <input type='text' onChange={this.handleChange}></input>
                            </label>
                            <button className='btn btn-primary btn-sm m-2' onClick={this.handleAddNode} value={this.state.value}>Add Node</button>
                                <label>
                                    {this.state.error && <div className="error">{this.state.error}</div>}
                                </label>
                            </form>
                    </li>
                </ul>
                <div>
                    <h2 className='treeHeader'>
                        Binary Search Tree
                    </h2>
                    <svg width={maxWidth}height={maxHeight}>
                        {this.state.edges.map(edge => (<EdgeComponent key={edge.id} x1={edge.x1} y1={edge.y1} x2={edge.x2} y2={edge.y2} />))}
                        {this.state.nodes.map(node =>( <NodeComponent key={node.id} id={node.id} x={node.x} y={node.y}  id={node.id} value={node.data}/>))}
                    </svg>
                </div>
            </div>

        );
    }
}