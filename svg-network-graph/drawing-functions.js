
var ns = 'http://www.w3.org/2000/svg';
const primaryDark = "#90a4ae";
const primaryMid = '#b0bec5';
const primaryLight = '#fce4ec';
const secondaryDark = '#ffab91';
const secondaryMid = '#ff7043';


function drawLine(
				canvasId, 
				start, 
				end, 
                color="",
				weight='2' 
			){
				let canv = document.getElementById(canvasId);
				let line = document.createElementNS(ns, 'line');
				line.setAttributeNS(null, 'x1', start.x);
				line.setAttributeNS(null, 'y1', start.y);
				line.setAttributeNS(null, 'x2', end.x);
				line.setAttributeNS(null, 'y2', end.y);
				line.setAttributeNS(null, 'stroke', color != '' ? color : primaryDark);
				line.setAttributeNS(null, 'stroke-width', weight);
				canv.appendChild(line);
			}

function drawCircle(
					canvasId, 
					x, 
					y,
                    id,
                    label="",
                    displayLabel=false,
                    highlighted=false,
					radius='5', 
					fillColor='', 
					strokeColor='', 
					strokeWidth="2"
				) {
					let canv = document.getElementById(canvasId);
                    
                    let group = document.createElementNS(ns, 'g');
                    group.setAttributeNS(null, 'class', 'hoverPoint');

					let circle = document.createElementNS(ns, 'circle');
					if(fillColor == ''){
                        fillColor = highlighted ? secondaryMid : primaryMid;
                    }
                    if(strokeColor == ''){
                        strokeColor = highlighted ? secondaryDark : primaryDark;
                    }
                    circle.setAttributeNS(null, 'cx', x);
					circle.setAttributeNS(null, 'cy', y);
					circle.setAttributeNS(null, 'r', radius);
					circle.setAttributeNS(null, 'stroke', strokeColor);
					circle.setAttributeNS(null, 'fill', fillColor);
					circle.setAttributeNS(null, 'stroke-width', strokeWidth);
                    circle.setAttributeNS(null, 'class', 'point');
                    circle.setAttributeNS(null, 'id', id);
                    circle.addEventListener('mouseenter', mouseOverPoint);
                    circle.addEventListener('mouseleave', mouseOutPoint);
                    group.appendChild(circle);
                    if (label != ""){
                        let lab = document.createElementNS(ns, 'text');
                        lab.setAttributeNS(null, 'x', x + 7);
                        lab.setAttributeNS(null, 'y', y);
                        lab.setAttributeNS(null, 'class', displayLabel ? 'show' : 'hide');
                        lab.innerHTML = label;
                        group.appendChild(lab);
                    }
					canv.appendChild(group);
				}

function mouseOverPoint(event){
    console.log('start mouseover function');
    let pointId = event.target.id;
    net.nodes.find((e) => e.id == pointId).displayLabel = true;
    net.nodes.find((e) => e.id == pointId).highlighted = true;
    for (edge of net.edges){
        if (edge.source == pointId){
            edge.color = secondaryMid;
            // console.log(net.nodes);
            console.log(edge.target);
            // console.log("h");
            net.nodes.find((e) => e.id == edge.target).highlighted = true;
            net.nodes.find((e) => e.id == edge.target).displayLabel = true;
            // console.log(net.nodes.find((e) => e.id == edge.target));
            console.log(net.nodes);
        }
    }
    drawGraph(net.edges, net.nodes, 'graph-svg');
}

function mouseOutPoint(event){
    for (edge of net.edges){
            edge.color = '';
    }
    for (node of net.nodes){
        node.displayLabel = false;
        node.highlighted = false;
    }
    
    drawGraph(net.edges, net.nodes, 'graph-svg');
}