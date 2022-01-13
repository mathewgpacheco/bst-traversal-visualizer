# Binary Search Tree Traversal Visualizer

a basic application where depth first search and breadth first search algorithms are visualized through the traversal of a binary search tree. Technologies used: React js, CSS, HTML and deployed using github pages.

live @: https://mathewgpacheco.github.io/bst-traversal-visualizer/


### Types of Traversals

## Depth First Search
Depth-first search (DFS) algorithm is a way of traversing through a tree/graph in which it goes along each possible longest path before backtracking. The algorithm typically starts from the root node and traverses through adjacent nodes (a path) until all nodes along the path are visited. It uses backtracking to find any other unvisited nodes and travels to them. There are different types of depth first search approaches in which they are demonstrated below.

### Pre-Order

Pre-order traverses the root of each subtree before traversing through the left nodes in the subtree, then the right nodes in the subtrees.

<img src="https://media.giphy.com/media/J80NzxdCv1m9ZIsT1Z/giphy.gif" width="420" height="200"/>

### In-Order

In-order traverses the left most nodes of each subtree before traversing through the root node in the subtree, followed by the right most nodes in the subtree.

<img src="https://media.giphy.com/media/GD1HIoB6MHGGZvldFf/giphy.gif" width="420" height="200"/>

### Post-Order

<img src="https://media.giphy.com/media/5B1Wkl7IhBRFEKgDel/giphy.gif" width="420" height="200"/>

Post-order traverses the left most nodes of each subtree before traversing through the right most nodes in the subtree, followed by the root node.

## Breadth First Search

<img src="https://media.giphy.com/media/AdMGAka8Oo6zkp3INz/giphy.gif" width="420" height="200"/>

Breadth first search starts at the root node and sequentially visits each node at a certain depth before traversing to the next height.
