
var ns = 'http://www.w3.org/2000/svg';
const primaryDark = "#90a4ae";
const primaryMid = '#b0bec5';
const primaryLight = '#fce4ec';
const secondaryDark = '#ffab91';
const secondaryMid = '#ff7043';
const tertiaryMid = '#9575cd';


function drawLine(
				canvasId, 
				start, 
				end,
                sourceId,
                targetId,
                color="",
				weight='' 
			){
				let canv = document.getElementById(canvasId);
				let line = document.createElementNS(ns, 'line');
                line.setAttributeNS(null, 'id', 'edge' + sourceId + targetId);
				line.setAttributeNS(null, 'x1', start.x);
				line.setAttributeNS(null, 'y1', start.y);
				line.setAttributeNS(null, 'x2', end.x);
				line.setAttributeNS(null, 'y2', end.y);
				line.setAttributeNS(null, 'stroke', color != '' ? color : primaryDark);
				line.setAttributeNS(null, 'stroke-width', weight != '' ? weight : 0);
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
					radius='1', 
					fillColor= primaryMid, 
					strokeColor= primaryDark, 
					strokeWidth="2"
				) {
					let canv = document.getElementById(canvasId);
                    
                    let group = document.createElementNS(ns, 'g');
                    group.setAttributeNS(null, 'class', 'hoverPoint');

					let circle = document.createElementNS(ns, 'circle');

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
                    circle.addEventListener('touchstart', mouseOverPoint);
                    circle.addEventListener('touchend', mouseOutPoint);
                    group.appendChild(circle);
                    if (label != ""){
                        let lab = document.createElementNS(ns, 'text');
                        lab.setAttributeNS(null, 'x', x + 7);
                        lab.setAttributeNS(null, 'y', y);
                        lab.setAttributeNS(null, 'id', 'label' + id);
                        lab.setAttributeNS(null, 'class', displayLabel ? 'show' : 'hide');
                        lab.innerHTML = label;
                        group.appendChild(lab);
                    }
					canv.appendChild(group);
				}


//I had been having the problem that this event kept being called over and over whilst the mouse hovered, even though it never left the initial point. Worked out that this was because I was re-drawing the whole graph, thereby putting a *new* element underneath the cursor, which was then having a mouseenter event triggered.
function mouseOverPoint(event){
        let pointId = event.target.id;
        let hoveredNode = document.getElementById(pointId);
        let hoveredLabel = document.getElementById('label' + pointId);
        hoveredNode.setAttributeNS(null, 'stroke', secondaryMid);
        hoveredLabel.style.display = 'inline-block';
        for (edge of net.edges){
            if (edge.source == pointId){
                let outEdge = document.getElementById('edge' + edge.source + edge.target);
                let outNode = document.getElementById(edge.target);
                let outLabel = document.getElementById('label' + edge.target);
                outEdge.style.stroke = secondaryMid;
                outEdge.style['stroke-width'] = 2;
                outNode.setAttributeNS(null, 'stroke', secondaryMid);
                outLabel.style.display = 'inline-block';
            } else if(edge.target == pointId){
                //doing this as else/if means that outgoing links will take precedence, if there is one of each. But I need to add something that could show bidirectional links anyway, and that will probably mean needing to come up with a different structure overall anyway?
                let inEdge = document.getElementById('edge' + edge.source + edge.target);
                let inNode = document.getElementById(edge.source);
                let inLabel = document.getElementById('label' + edge.source);
                inEdge.style.stroke = tertiaryMid;
                inEdge.style['stroke-width'] = 2;
                inNode.setAttributeNS(null, 'stroke', tertiaryMid);
                inLabel.style.display = 'inline-block';
            }   
        }     
}

//this basically manually undoes what the mouseenter function did, so will need to be adjusted if the other is...
function mouseOutPoint(event){
        let pointId = event.target.id;
        let hoveredNode = document.getElementById(pointId);
        let hoveredLabel = document.getElementById('label' + pointId);
        hoveredNode.setAttributeNS(null, 'stroke', primaryDark);
        hoveredLabel.style.display = 'none';
        for (edge of net.edges){
            if (edge.source == pointId){
                let outEdge = document.getElementById('edge' + edge.source + edge.target);
                let outNode = document.getElementById(edge.target);
                let outLabel = document.getElementById('label' + edge.target);
                outEdge.style.stroke = primaryDark;
                outEdge.style['stroke-width'] = 1;
                outNode.setAttributeNS(null, 'stroke', primaryDark);
                outLabel.style.display = 'none';
            } else if(edge.target == pointId){
                let inEdge = document.getElementById('edge' + edge.source + edge.target);
                let inNode = document.getElementById(edge.source);
                let inLabel = document.getElementById('label' + edge.source);
                inEdge.style.stroke = primaryDark;
                inEdge.style['stroke-width'] = 1;
                inNode.setAttributeNS(null, 'stroke', primaryDark);
                inLabel.style.display = 'none';
            }   
        }
}