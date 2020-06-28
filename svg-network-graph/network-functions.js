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
    //I need TODO at least ~two~ one things -
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

function arrangeRandomly(nodeList, width, height, margin=15){
    nodeList.forEach((e, i, a) =>
            e.x = Math.floor(Math.random() * Math.floor(width-2*margin)) + margin);
    nodeList.forEach((e, i, a) =>
            e.y = Math.floor(Math.random() * Math.floor(height-2*margin)) + margin);
}

function sinkSoloNodes(network, width, height, redraw = false, graph = '', margin=15){
    let soloNodeList = [];
    let outNodes = network.edges.map((e) => e.source);
    let inNodes = network.edges.map((e) => e.target);
    let connectedNodes = outNodes.concat(inNodes);
    for(node of network.nodes){
        if(! connectedNodes.includes(node.id)){
            soloNodeList.push(node);
        }
    }
    soloNodeList.forEach((e, i, a) => e.x = margin + (i * ((width - 2 * margin) / a.length)));
    soloNodeList.forEach((e, i, a) => e.y = height - margin);
    if(redraw){ drawGraph(net.edges, net.nodes, graph); }
}

function findLinks(targetId, nodeMaps){

    //the idea is that 'targetNode' will be the id of a node, and that nodeMaps will be an object with keys representing each of the other nodes, and values representing the nodes which the former are attached to. It outputs an array of edges, in the format that I'm using here.
    let edgeList = [];
    for (const id of Object.keys(nodeMaps)) {
        if(nodeMaps[id].influencedBy.includes(targetId)){
            edgeList.push({'source' : id, 'target' : targetId, 'color' : '', 'weight' : ''});
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
                e.source,
                e.target,
                e.color, 
                e.weight
                )
    );

        //add nodes from the given array to the svg graph canvas
    nodeList.forEach((e, i, a) =>
                                drawCircle(graph, e.x, e.y, e.id, e.label, e.displayLabel, e.highlighted, radiusFromDegree(e.id, edgeList))
        );
}


// a pair of functions to find out the degree of connection of any given node, given a nodeId and a list of edges. This works I think? But it's definitely a solution that makes me think I'm striking a really bad balance between a functional approach and an OO approach? Like, should I just have classes for graph, node, and edge, and then have a canonical representation of the graph which I could call methods on to find information like this?

//not being used in the current application, but keeping them in as I think I'll want to use them later.

function containsNode(edge){
    return edge.source == this || edge.target == this;
}

function getNodeDegree(nodeId, edgeList){
    return edgeList.filter(containsNode, nodeId).length;
}

function radiusFromDegree(nodeId, edgeList) {
    let area = (getNodeDegree(nodeId, edgeList) * 5) + 5;
    return Math.sqrt(area / Math.PI);
    // return getNodeDegree(nodeId, edgeList) + 1;
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


// Recursively implementing a 'breadth-first' algorithm for finding the shortest path between two nodes; should pass and empty array the parameters for 'queue' and 'covered', and 0 for 'n', when first invoking it.
// What's the most likely use case for this? Should it just return the depth, rather than providing the node id as well? Probably...
// I'll make another copy of this below that returns the 'covered' list, so that it can be used to map a connected component
function shortestPathBF(network, queue, endId, covered) {
    if (queue.length > 0){
        let currNode = queue.shift();
        let currId = currNode.id;
        let n = currNode.n;
        if (currId == endId){
            return n;
        } else {
            //get the ids of all the nodes that the current node is directly connected with
            let nextOutNodeIds = network.edges.filter((e) => e.source == currId).map((e) => e.target);
            let nextInNodeIds = network.edges.filter((e) => e.target == currId).map((e) => e.source);
            let nextLevelNodeIds = nextOutNodeIds.concat(nextInNodeIds);

            //add all these first-order links to the end of the queue, labelling them with their depth
            for (nodeId of nextLevelNodeIds) {
                if (! covered.includes(nodeId)){
                    queue.push({'n' : n+1, 'id': nodeId});
                    covered.push(nodeId);
                }
            }
            
            // call the function again with the new (shifted, and possibly pushed) queue
            return shortestPathBF(network, queue, endId, covered);
        }
    } else {
        return "node not found";
    }
}

//same as 'shortestPathBF' above, but returns the 'covered' list, so as to map connected components; used in the 'findComponents' function immediately below
function connectedComponentMapBF(network, queue, endId, covered) {
    if (queue.length > 0){
        let currNode = queue.shift();
        let currId = currNode.id;
        let n = currNode.n;
        if (currId == endId){
            return n; //shouldn't happen with this -- should feed it an id that it won't find
        } else {
            //get the ids of all the nodes that the current node is directly connected with
            let nextOutNodeIds = network.edges.filter((e) => e.source == currId).map((e) => e.target);
            let nextInNodeIds = network.edges.filter((e) => e.target == currId).map((e) => e.source);
            let nextLevelNodeIds = nextOutNodeIds.concat(nextInNodeIds);

            //add all these first-order links to the end of the queue, labelling them with their depth
            for (nodeId of nextLevelNodeIds) {
                if (! covered.includes(nodeId)){
                    queue.push({'n' : n+1, 'id': nodeId});
                    covered.push(nodeId);
                }
            }
            
            // call the function again with the new (shifted, and possibly pushed) queue
            return connectedComponentMapBF(network, queue, endId, covered);
        }
    } else {
        return covered;
    }
}

//need to finish this -- basic idea is loop through all nodes (knocking out ones that are caught in a component) and run connectecComponents to map components from them.
function findComponents(network){
    let covered = [];
    let components = [];
    for (node of network.nodes){
        if(! covered.includes(node.id)){

        }
    }
}




// The following is an attempt to implement the Fruchterman-Reingold algorithm for node placement,
// based on the pseudo-code for the algorithm provided in their 1991 paper.

function fruchtermanReingold(net, width, height){


}

async function ascend(net, graph, width, height){
    console.log(net.nodes);
    for (let i = 0; i < 50; i++){
        for (node of net.nodes){
            if (node.y > 15){
                node.y -= radiusFromDegree(node.id, net.edges)*5;
            }
        }
        drawGraph(net.edges, net.nodes, graph);
        await new Promise(r => setTimeout(r, 200));
    }
}

async function converge(net, graph, width, height){
    for (let i = 1; i < 50; i++){
        for (node of net.nodes){
            if (node.y != height/2){
                node.y -= (node.y - height/2)/(15 * Math.sqrt(i))*(radiusFromDegree(node.id, net.edges));
            }
            if (node.x != width/2){
                node.x -= (node.x - width/2)/(15 * Math.sqrt(i))*(radiusFromDegree(node.id, net.edges));
            }
        }
        drawGraph(net.edges, net.nodes, graph);
        await new Promise(r => setTimeout(r, 100));
    }
    await new Promise(r => setTimeout(r, 5000)).then(    ascend(net, 'graph-svg', width, height)); 

}