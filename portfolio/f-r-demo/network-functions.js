"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Graph {
    constructor({ canvas, nodes = [], edges = [], weightFactor = 1, primaryDark = "#90a4ae", primaryMid = '#b0bec5', primaryLight = '#fce4ec', secondaryDark = '#ffab91', secondaryMid = '#f06292', tertiaryMid = '#9575cd' }) {
        var _a, _b, _c, _d, _e, _f;
        this.canvas = canvas;
        this.nodes = [];
        this.nodeIds = [];
        this.nodeDictionary = {};
        this.edges = [];
        this.width = (_b = (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.clientWidth) !== null && _b !== void 0 ? _b : 0;
        this.height = (_d = (_c = this.canvas) === null || _c === void 0 ? void 0 : _c.clientHeight) !== null && _d !== void 0 ? _d : 0;
        this.weightFactor = weightFactor;
        this.playing = false;
        //colour palette
        this.primaryDark = primaryDark;
        this.primaryMid = primaryMid;
        this.primaryLight = primaryLight;
        this.secondaryDark = secondaryDark;
        this.secondaryMid = secondaryMid;
        this.tertiaryMid = tertiaryMid;
        for (let node of nodes) {
            if (!this.nodeIds.includes(node.id)) {
                const newNode = new GraphNode({
                    id: node.id,
                    x: node.x === undefined ? (Math.random() * (this.width - 20)) + 10 : parseInt(node.x),
                    //should really change these margins to adapt in response to node size
                    y: node.y === undefined ? (Math.random() * (this.height - 20)) + 10 : parseInt(node.y),
                    strokeColor: (_e = node.strokeColor) !== null && _e !== void 0 ? _e : this.primaryDark,
                    fillColor: (_f = node.fillColor) !== null && _f !== void 0 ? _f : this.primaryMid
                });
                this.nodes.push(newNode);
                this.nodeIds.push(node.id); //keep Id list up to date
                this.nodeDictionary[node.id] = newNode; //keep node dictionary up to date     
            }
        }
        this.nodes.forEach((n) => {
            this.nodeIds.push(n.id);
            this.nodeDictionary[n.id] = n;
        });
        edges.
            filter((e) => this.nodeIds.includes(e.source) && this.nodeIds.includes(e.target))
            .forEach((e) => {
            const newEdge = {
                source: this.nodeDictionary[e.source],
                target: this.nodeDictionary[e.target]
            };
            this.edges.push(newEdge);
        });
        //or, perhaps, instead of filtering the list I ought to throw an error if the user tries to add an edge which doesn't have associated nodes?
    }
    addNode({ id, x = null, y = null, strokeColor = null, fillColor = null }) {
        if (!this.nodeIds.includes(id)) {
            const newNode = new GraphNode({
                id: id,
                x: x === null ? (Math.random() * (this.width - 20)) + 10 : x,
                //should really change these margins to adapt in response to node size
                y: y === null ? (Math.random() * (this.height - 20)) + 10 : y,
                strokeColor: strokeColor !== null && strokeColor !== void 0 ? strokeColor : this.primaryDark,
                fillColor: fillColor === null ? this.primaryMid : fillColor
            });
            this.nodes.push(newNode);
            this.nodeIds.push(id); //keep Id list up to date
            this.nodeDictionary[id] = newNode; //keep node dictionary up to date
            return newNode;
        }
        else {
            throw "A node already exists with that id.";
        }
        return new GraphNode({ id: '', x: 0, y: 0, strokeColor: '', fillColor: '' }); // this is no good really, even though I don't think that it should come to pass; it's just there to appease the compiler...
    }
    addEdge({ source, target }) {
        if (this.nodeIds.includes(source)) {
            if (this.nodeIds.includes(target)) {
                const newEdge = {
                    source: this.nodeDictionary[source],
                    target: this.nodeDictionary[target]
                };
                this.edges.push(newEdge);
            }
            else {
                console.error(`Graph does not include a node with id ${target}`);
            }
        }
        else {
            console.error(`Graph does not include a node with id ${source}`);
        }
    }
    clear() {
        this.canvas.innerHTML = "";
    }
    draw() {
        this.nodes.forEach((n) => drawCircle({
            canvas: this.canvas,
            x: n.x,
            y: n.y,
            id: n.id,
            label: n.label,
            displayLabel: n.displayLabel,
            weight: n.weight * this.weightFactor,
            strokeColor: n.strokeColor,
            fillColor: n.fillColor
        }));
        this.edges.forEach((e) => drawLine({
            canvas: this.canvas,
            source: e.source,
            target: e.target,
            color: this.primaryDark,
            weight: this.weightFactor
        }));
    }
    refresh() {
        this.clear();
        this.draw();
    }
    arrangeInCircle() {
        const centreX = this.width / 2;
        const centreY = this.height / 2;
        const radius = Math.min(centreX, centreY) / 2;
        const nodeCount = this.nodes.length;
        for (let i = 0; i < nodeCount; i++) {
            this.nodes[i].x = centreX + radius * Math.cos(((2 * Math.PI) / nodeCount) * i);
            this.nodes[i].y = centreY + radius * Math.sin(((2 * Math.PI) / nodeCount) * i);
        }
    }
    arrangeRandomly() {
        for (let node of this.nodes) {
            node.x = Math.random() * this.width;
            node.y = Math.random() * this.height;
        }
    }
    // Some helper functions for fruchtermanReingold
    fa(z, k, c) { return (Math.pow(z, 2) / k) * c; }
    fr(z, k, c) { return (Math.pow(k, 2) / z) * c; }
    dist(vector) { return Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2)); }
    deltaF(a, b) {
        let dif = a - b;
        if (dif < 0) {
            return Math.min(dif, -0.0001);
        }
        else {
            return Math.max(dif, 0.0001);
        }
    }
    // The following is an implementation the Fruchterman-Reingold algorithm for node placement,
    // based on the pseudo-code for the algorithm provided in their 1991 paper.
    // And then an 'animated' version below, which redraws after each step.
    fruchtermanReingold(attractionConstant, repulsionConstant) {
        const net = { nodes: this.nodes, edges: this.edges };
        const width = this.width;
        const height = this.height;
        let k = Math.sqrt((width * height) / net.nodes.length);
        let t = 50;
        for (let i = 1; i < 80; i++) {
            //calculate displacement based on node repulsion
            for (let node of net.nodes) {
                node.disp = { 'x': 0, 'y': 0 };
                for (let otherNode of net.nodes) {
                    if (node != otherNode) {
                        let delta = { 'x': this.deltaF(node.x, otherNode.x), 'y': this.deltaF(node.y, otherNode.y) };
                        let distanceDelta = this.dist(delta);
                        let newDispX = node.disp.x + (delta.x / distanceDelta) * this.fr(distanceDelta, k, repulsionConstant);
                        let newDispY = node.disp.y + (delta.y / distanceDelta) * this.fr(distanceDelta, k, repulsionConstant);
                        node.disp.x = newDispX;
                        node.disp.y = newDispY;
                    }
                }
            }
            for (let edge of net.edges) {
                //calculate displacement based on node attraction (for nodes sharing an edge)
                const source = edge.source;
                const target = edge.target;
                let delta = { 'x': this.deltaF(source.x, target.x), 'y': this.deltaF(source.y, target.y) };
                let distanceDelta = this.dist(delta);
                source.disp.x = source.disp.x - (delta.x / distanceDelta) * this.fa(distanceDelta, k, attractionConstant);
                source.disp.y = source.disp.y - (delta.y / distanceDelta) * this.fa(distanceDelta, k, attractionConstant);
                target.disp.x = target.disp.x + (delta.x / distanceDelta) * this.fa(distanceDelta, k, attractionConstant);
                target.disp.y = target.disp.y + (delta.y / distanceDelta) * this.fa(distanceDelta, k, attractionConstant);
            }
            for (let node of net.nodes) {
                let tempX = node.x + (node.disp.x / this.dist(node.disp)) * Math.min(Math.abs(node.disp.x), t);
                let tempY = node.y + (node.disp.y / this.dist(node.disp)) * Math.min(Math.abs(node.disp.y), t);
                // there's no mention of using the absolute value in the pseudo-code that I'm working from, but unless you include it it'll always pick a negative value over t, with the Math.min() function, but then the two negatives will cancel each other out when you multiply disp by disp. *Possibly* this is accounted for in the original by the fact that they seem to take (0,0) to be the centre of the canvas, rather than the top left corner as it is for me, though if that is how it works I can't quite work out why it would be the case...
                node.x = Math.min(width - 10, Math.max(10, tempX));
                node.y = Math.min(height - 10, Math.max(20, tempY));
            }
            t = t - (10 / i);
        }
        this.refresh();
    }
    fruchtermanReingoldAnimate(attractionConstant, repulsionConstant) {
        return __awaiter(this, void 0, void 0, function* () {
            this.playing = true;
            const net = { nodes: this.nodes, edges: this.edges };
            const width = this.width;
            const height = this.height;
            let k = Math.sqrt((width * height) / net.nodes.length);
            let t = 50;
            for (let i = 1; i < 80; i++) {
                if (!this.playing)
                    break;
                //calculate displacement based on node repulsion
                for (let node of net.nodes) {
                    node.disp = { 'x': 0, 'y': 0 };
                    for (let otherNode of net.nodes) {
                        if (node != otherNode) {
                            let delta = { 'x': this.deltaF(node.x, otherNode.x), 'y': this.deltaF(node.y, otherNode.y) };
                            let distanceDelta = this.dist(delta);
                            let newDispX = node.disp.x + (delta.x / distanceDelta) * this.fr(distanceDelta, k, repulsionConstant);
                            let newDispY = node.disp.y + (delta.y / distanceDelta) * this.fr(distanceDelta, k, repulsionConstant);
                            node.disp.x = newDispX;
                            node.disp.y = newDispY;
                        }
                    }
                }
                for (let edge of net.edges) {
                    const source = edge.source;
                    const target = edge.target;
                    let delta = { 'x': this.deltaF(source.x, target.x), 'y': this.deltaF(source.y, target.y) };
                    let distanceDelta = this.dist(delta);
                    source.disp.x = source.disp.x - (delta.x / distanceDelta) * this.fa(distanceDelta, k, attractionConstant);
                    source.disp.y = source.disp.y - (delta.y / distanceDelta) * this.fa(distanceDelta, k, attractionConstant);
                    target.disp.x = target.disp.x + (delta.x / distanceDelta) * this.fa(distanceDelta, k, attractionConstant);
                    target.disp.y = target.disp.y + (delta.y / distanceDelta) * this.fa(distanceDelta, k, attractionConstant);
                }
                for (let node of net.nodes) {
                    let tempX = node.x + (node.disp.x / this.dist(node.disp)) * Math.min(Math.abs(node.disp.x), t);
                    let tempY = node.y + (node.disp.y / this.dist(node.disp)) * Math.min(Math.abs(node.disp.y), t);
                    // there's no mention of using the absolute value in the pseudo-code that I'm working from, but unless you include it it'll always pick a negative value over t, with the Math.min() function, but then the two negatives will cancel each other out when you multiply disp by disp. *Possibly* this is accounted for in the original by the fact that they seem to take (0,0) to be the centre of the canvas, rather than the top left corner as it is for me, though if that is how it works I can't quite work out why it would be the case...
                    node.x = Math.min(width - 10, Math.max(10, tempX));
                    node.y = Math.min(height - 10, Math.max(20, tempY));
                }
                t = t - (10 / i);
                this.refresh();
                yield new Promise(r => setTimeout(r, 200));
            }
            this.playing = false;
        });
    }
    // Some slightly more 'network science'-y functions
    containsNode(edge, node) {
        return edge.source === node || edge.target === node;
    }
    degree(nodeId) {
        const node = this.nodeDictionary[nodeId];
        let degreeCounter = 0;
        for (let edge of this.edges) {
            if (this.containsNode(edge, node))
                degreeCounter++;
        }
        return degreeCounter;
    }
    averageDegree() {
        let runningTotal = 0;
        for (let nodeId of this.nodeIds) {
            runningTotal += this.degree(nodeId);
        }
        return runningTotal / this.nodes.length / 2;
    }
    shortestPath(startId, endId) {
        const startNode = this.nodeDictionary[startId];
        const endNode = this.nodeDictionary[endId];
        if (!startNode || !endNode)
            throw "Path can only be calculated between two nodes in the network.";
        return this.breadthFirstSearch(this.edges, [{ node: startNode, depth: 0 }], endNode, []);
    }
    breadthFirstSearch(edges, queue, endNode, covered) {
        var _a;
        if (queue.length > 0) {
            const current = queue.shift();
            const currNode = current === null || current === void 0 ? void 0 : current.node;
            const depth = (_a = current === null || current === void 0 ? void 0 : current.depth) !== null && _a !== void 0 ? _a : 0; //this is hacky because I'm pretty sure I'm putting it in just to avoid the compiler error, when I'm actually assuming that it'll never get assigned 0...
            if (currNode === endNode) {
                return depth;
            }
            else {
                //get the ids of all the nodes that the current node is directly connected with
                const nextOutNodes = edges.filter((e) => e.source === currNode).map((e) => e.target);
                const nextInNodes = edges.filter((e) => e.target === currNode).map((e) => e.source);
                const nextLevelNodes = nextOutNodes.concat(nextInNodes);
                //add all these first-order links to the end of the queue, labelling them with their depth
                for (let node of nextLevelNodes) {
                    if (!covered.includes(node)) {
                        queue.push({ node: node, depth: depth + 1 });
                        covered.push(node);
                    }
                }
                // call the function again with the new (shifted, and possibly pushed) queue
                return this.breadthFirstSearch(edges, queue, endNode, covered);
            }
        }
        else {
            throw "Path not found.";
        }
    }
    generateRandomNetwork(n, p, nodePrefix = 'n') {
        for (let i = 0; i < n; i++) {
            this.addNode({ id: `${nodePrefix}${i}` });
        }
        // once the nodes are added, add edges between them with probability p
        // the repetition of the i-n loop is, I think, necessary because you need the nodes to be there in order to create the edges (different to how I did it in earlier implementations, but I think it has benefits elsewhere even if it makes this random generation function more cumbersome.)
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (Math.random() <= p) {
                    this.addEdge({
                        source: `${nodePrefix}${i}`,
                        target: `${nodePrefix}${j}`
                    });
                    // this.edges.push({
                    //                     source: this.nodeDictionary[`${nodePrefix}${i}`],
                    //                     target: this.nodeDictionary[`${nodePrefix}${j}`]
                    //                 });
                    // this.edges.push({'source': `${nodePrefix}${j}`, 'target': `${nodePrefix}${i}`});
                }
            }
        }
    }
}
class GraphNode {
    constructor({ id, x = 0, y = 0, strokeColor, fillColor, label = "", displayLabel = false, weight = 1, disp = { 'x': 0, 'y': 0 }, }) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.label = label;
        this.displayLabel = displayLabel;
        this.weight = weight;
        this.disp = disp;
        this.strokeColor = strokeColor,
            this.fillColor = fillColor;
    }
}
// basic drawing functions
function drawLine({ canvas, source, target, color, weight = 1 }) {
    const ns = 'http://www.w3.org/2000/svg';
    const line = document.createElementNS(ns, 'line');
    line.setAttributeNS(null, 'id', 'edge' + source.id + target.id);
    line.setAttributeNS(null, 'x1', source.x.toString());
    line.setAttributeNS(null, 'y1', source.y.toString());
    line.setAttributeNS(null, 'x2', target.x.toString());
    line.setAttributeNS(null, 'y2', target.y.toString());
    line.setAttributeNS(null, 'stroke', color);
    line.setAttributeNS(null, 'stroke-width', weight.toString());
    canvas.appendChild(line);
}
function drawCircle({ canvas, x, y, id, weight, fillColor, strokeColor, label = "", displayLabel = false, highlighted = false, strokeWidth = 2 }) {
    const ns = 'http://www.w3.org/2000/svg';
    const group = document.createElementNS(ns, 'g');
    group.setAttributeNS(null, 'class', 'hoverPoint');
    const circle = document.createElementNS(ns, 'circle');
    circle.setAttributeNS(null, 'cx', x.toString());
    circle.setAttributeNS(null, 'cy', y.toString());
    circle.setAttributeNS(null, 'r', (weight * 2).toString());
    circle.setAttributeNS(null, 'stroke', strokeColor);
    circle.setAttributeNS(null, 'fill', fillColor);
    circle.setAttributeNS(null, 'stroke-width', strokeWidth.toString());
    circle.setAttributeNS(null, 'class', 'point');
    circle.setAttributeNS(null, 'id', id);
    // circle.addEventListener('mouseenter', mouseOverPoint);
    // circle.addEventListener('mouseleave', mouseOutPoint);
    group.appendChild(circle);
    if (label != "") {
        const lab = document.createElementNS(ns, 'text');
        lab.setAttributeNS(null, 'x', (x + 7).toString());
        lab.setAttributeNS(null, 'y', y.toString());
        lab.setAttributeNS(null, 'id', 'label' + id);
        lab.setAttributeNS(null, 'class', displayLabel ? 'show' : 'hide');
        lab.innerHTML = label;
        group.appendChild(lab);
    }
    canvas.appendChild(group);
}