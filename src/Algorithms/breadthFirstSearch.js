import {resetNodeColour} from './depthFirstSearch';

export function traverseTreeBFS(root){
    let queue= [];
    let nodes = [];
    queue.push(root);
    nodes.push(root.id);
    let interval = setInterval(function(){
        let top = queue.shift();
        document.getElementById(top.id).style.fill = "aquamarine";
        if(top.left != null){
            queue.push(top.left);
            nodes.push(top.left.id);
        }
        if(top.right != null){
            queue.push(top.right);
            nodes.push(top.right.id);
        }
        if(queue.length  === 0){
            clearInterval(interval);
            resetNodeColour(nodes);
        }
    }, 1000);
    
}