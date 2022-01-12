export default class Node {
    constructor(id,data,x,y){
        this.id = id;
        this.data = data;
        this.right = null;
        this.left = null;
        this.x = x;
        this.y = y;
    }
}