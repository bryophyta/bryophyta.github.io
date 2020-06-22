class graphNode {
    constructor(id, label="", x=0, y=0, displayLabel=false){
        this.id = id;
        this.label = label;
        this.x = x;
        this.y = y;
        this.displayLabel = displayLabel;
    }

}


function findUndirectedLinks(targetNode, nodeMaps){

    //the idea is that 'targetNode' will be the id of a node, and that nodeMaps will be an object with keys representing each of the other nodes, and values representing the nodes which the former are attached to. It outputs an array of edges, in the format that I'm using here.
    let edgeList = [];
    let targetId = Object.keys(targetNode)[0];
    
    for (const id of targetNode[targetId]) {
        if(nodeMaps[id].includes(targetId)){
            edgeList.push({'source' : id, 'target' : targetId});
        }
    }

    return edgeList;
}

function arrangeInCircle(nodeList, centreX, centreY, radius) {
    
    //this updates coordinates for a list of nodes so that they are arranged in a circle
    //I need TODO at least two things -
    //                                  1. Have it take at least the dimensions of the container
    //                                      as parameters, and maybe also the centre point. Or 
    //                                      I guess centre and radius would be most flexible?
    //                                  2. Have it *return* a new list, rather than modifying the
    //                                      one that's passed to it directly.


    nodeList.forEach((e, i, a) =>
            e.x = centreX + radius * Math.cos(((2 * Math.PI) / a.length) * i
        ));
    nodeList.forEach((e, i, a) =>
            e.y = centreY + radius * Math.sin(((2 * Math.PI) / a.length) * i)
        );
    // return nodeList;
}

function findLinks(targetId, nodeMaps){

    //the idea is that 'targetNode' will be the id of a node, and that nodeMaps will be an object with keys representing each of the other nodes, and values representing the nodes which the former are attached to. It outputs an array of edges, in the format that I'm using here.
    let edgeList = [];
    
    for (const id of Object.keys(nodeMaps)) {
        if(nodeMaps[id].influencedBy.includes(targetId)){
            edgeList.push({'source' : id, 'target' : targetId, 'color' : ''});
        }
    }

    return edgeList;
}


function clearGraph(graph){
    document.getElementById(graph).innerHTML = "";
}

function drawGraph(edgeList, nodeList, graph) {
    
    clearGraph(graph);

    //add edges from the given array to the svg graph
    edgeList.forEach(
        (e, i) =>
                drawLine(graph, 
                {'x': nodeList.find((n) => n.id == e.source).x, 'y' : nodeList.find((n) => n.id == e.source).y},
                {'x': nodeList.find((n) => n.id == e.target).x, 'y' : nodeList.find((n) => n.id == e.target).y},
                e.color
                )
    );

        //add nodes from the given array to the svg graph canvas
    nodeList.forEach((e, i, a) =>
                                drawCircle(graph, e.x, e.y, e.id, e.label, e.displayLabel, e.highlighted)
        );
}


// a pair of functions to find out the degree of connection of any given node, by looking up the information on the table. This works I think? But it's definitely a solution that makes me think I'm striking a really bad balance between a functional approach and an OO approach? Like, should I just have classes for graph, node, and edge, and then have a canonical representation of the graph which I could call methods on to find information like this?

//not being used in the current application, but keeping them in as I think I'll want to use them later.

function containsNode(edge){
    return edge.source == this || edge.target == this;
}

function getNodeDegree(node, edgeArray){
    return edgeArray.filter(containsNode, node).length;
}



function generateRandomNetwork(n, p){
    var nodeList = [];
    var edgeList = [];
    for (let i = 0; i < n; i++){
        let newNode = new graphNode(i);
        nodeList.push(newNode);
        for (let j = i + 1; j < n; j++){
            if(Math.random() <= p){
                edgeList.push({'source': i, 'target': j});
                edgeList.push({'source': j, 'target': i});
            }
        }
    }
    return {'nodes': nodeList, 'edges': edgeList};
}



function calculateAverageDegree(n){
    var runningTotal = 0;
    let nodeCount = n.nodes.length;
    for(let i = 0; i < nodeCount; i++){
        runningTotal += getNodeDegree(i, n.edges);
    }
    return runningTotal / nodeCount / 2;
}