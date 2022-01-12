


export function searchTree(root,value){
    console.log("root", root);
    console.log('value', value);
    //start node will be root
    //traverse over nodes in tree until end node reached.
}

export function resetNodeColour(nodes){
    setTimeout(function() {
        console.log(nodes);
        for(let i = 0; i < nodes.length; i++){
            document.getElementById(nodes[i]).style.fill = "white";
        }
    }, 3000)

}

function postOrder(root){
    let result = [];
    let stack = [];

    stack.push(root);
    while(stack.length !== 0){
        let current = stack.pop();
        result.push(current.id);
        if(current.left){
            stack.push(current.left);
        }
        if(current.right){
            stack.push(current.right);
        }
    }
    return result.reverse();
}
function inOrder(root){
    let stack = [];
    let res = [];
    while(root !== null || stack.length !== 0) {
        while(root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        res.push(root.id);
        root = root.right;
    }
    return res;
}

//in order traversal
export function traverseTreeDFS(root,order){
    if(root == null){
        return;
    }
    let current = root;
    switch (order){
        case "preOrder":
            let stack = [];
            let nodes = [];
            stack.push(current);
            nodes.push(current.id);
            let interval = setInterval(function(){
                let top = stack.pop();
                document.getElementById(top.id).style.fill = "aquamarine";
                if(top.right != null){
                    stack.push(top.right);
                    nodes.push(top.right.id);
                }
                if(top.left != null){
                    stack.push(top.left);
                    nodes.push(top.left.id);
                }
                if(stack.length  === 0){
                    clearInterval(interval);
                    resetNodeColour(nodes);
                }
            }, 1000);
            break;
        case "inOrder":
            let inOrderResult = inOrder(current);
            for(let i = 0; i < inOrderResult.length; i++){

                (function(index){
                    setTimeout(function() {
                        document.getElementById(inOrderResult[index]).style.fill = "aquamarine";
                        if(i + 1 === inOrderResult.length){
                            resetNodeColour(inOrderResult);
                        }
                    },i * 1000)
                }(i))
            }   
            break;
        case "postOrder":
            let postOrderResult = postOrder(current);
            console.log(postOrderResult);
            for(let i = 0 ; i< postOrderResult.length; i++){
                (function(index){
                    setTimeout(function(){
                        document.getElementById(postOrderResult[index]).style.fill = "aquamarine";
                        if(i + 1 === postOrderResult.length){
                            resetNodeColour(postOrderResult);
                        }
                    }, i * 1000);
                }(i))
            }
            break;
        default:

    }
}

