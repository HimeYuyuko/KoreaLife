//여기부터는 작동됨 위에는 사이즈 조절 및 기타 처리를 위한 코드
//var svg부터
var svg = d3.select("svg"),
	width = +svg.attr("width"),
	height = +svg.attr("height");
/*var html = function(){
	`
	<div style='max-width:900px; overflow-x:auto; padding:0px; margin:0px;'></div>`;
}
const div = html`<div style='max-width: 900px; overflow-x: auto; padding: 0px; margin: 0px;'></div>`;
const svg = d3.select(div)
	.append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", `translate(${margin.left},${margin.top})`);*/

var subgraphWidth = width * 2 / 8;
var subgraphHeight = height * 1 / 5;
var subgraph = svg.append("g")
	.attr("id", "subgraph")
	.attr("transform", `translate(${width - subgraphWidth - 20}, 0)`);


subgraph.append("text")
	.style("font-size", "16px")
svg.append('defs').append('marker')
	.attr("id", 'arrowhead')
	.attr('viewBox', '-0 -5 10 10') //the bound of the SVG viewport for the current SVG fragment. defines a coordinate system 10 wide and 10 high starting on (0,-5)
	.attr('refX', 24) // x coordinate for the reference point of the marker. If circle is bigger, this need to be bigger.
	.attr('refY', 0)
	.attr('orient', 'auto')
	.attr('markerWidth', 6)
	.attr('markerHeight', 6)
	.attr('xoverflow', 'visible')
	.append('svg:path')
	.attr('d', 'M 0,-5 L 10 ,0 L 0,5')
	.attr('fill', '#999')
	.style('stroke', 'none');



//상단 중앙에 해당 문서명 출력용
svg.append('defs').append('marker')
	.attr("id", 'arrowhead')
	.attr('viewBox', '-0 -5 10 10') //the bound of the SVG viewport for the current SVG fragment. defines a coordinate system 10 wide and 10 high starting on (0,-5)
	.attr('refX', 24) // x coordinate for the reference point of the marker. If circle is bigger, this need to be bigger.
	.attr('refY', 0)
	.attr('orient', 'auto')
	.attr('markerWidth', 6)
	.attr('markerHeight', 6)
	.attr('xoverflow', 'visible')
	.append('svg:path')
	.attr('d', 'M 0,-5 L 10 ,0 L 0,5')
	.attr('fill', '#999')
	.style('stroke', 'none');

svg.append("text")
	.text("Robot Components")
	.attr("text-anchor", "middle")
	.attr("x", width / 2)
	.attr("y", height/30)
	.style("font-size", "20px")
	
//시뮬레이션 크기 조정
var simulation = d3.forceSimulation()
	.force("link", d3.forceLink() // This force provides links between nodes
		.id(d => d.id) // This sets the node id accessor to the specified function. If not specified, will default to the index of a node.
		.distance(120)
	)
	.force("charge", d3.forceManyBody().strength(-700)) // This adds repulsion (if it's negative) between nodes. 
	.force("center", d3.forceCenter(width / 2, height / 2))


//팀별 색깔 지정 ex) Team A= 오렌지
var colorScale = d3.scaleOrdinal()
	.domain(["Team A", "Team B", "Team C", "Team D", "Team E"])
	.range(['#ff9e6d', '#86cbff', '#c2e5a0', '#fff686', '#9e79db'])
	
var graph = {
	nodes: [
		{ id: 1, name: 'AGGR', label: 'Aggregation', group: 'Team C', runtime: 20 },
		{ id: 2, name: 'ASMT', label: 'Assessment Repository', group: 'Team A', runtime: 60 },
		{ id: 3, name: 'CALC', label: 'Final Calc', group: 'Team C', runtime: 30 },
		{ id: 4, name: 'DEMO', label: 'Demographic', group: 'Team B', runtime: 40 },
		{ id: 5, name: 'ELIG', label: 'Eligibility', group: 'Team B', runtime: 20 },
		{ id: 6, name: 'GOAL', label: 'Goal Setting', group: 'Team C', runtime: 60 },
		{ id: 7, name: 'GROW', label: 'Growth Model', group: 'Team C', runtime: 60 },
		{ id: 8, name: 'LINK', label: 'Linkage', group: 'Team A', runtime: 100 },
		{ id: 9, name: 'MOSL', label: 'MOSL', group: 'Team A', runtime: 80 },
		{ id: 10, name: 'MOTP', label: 'MOTP', group: 'Team A', runtime: 20 },
		{ id: 11, name: 'REPT', label: 'Reporting', group: 'Team E', runtime: 240 },
		{ id: 12, name: 'SEDD', label: 'State Data', group: 'Team A', runtime: 30 },
		{ id: 13, name: 'SNAP', label: 'Snapshot', group: 'Team A', runtime: 40 }
	],
	links: [
		{ source: 1, target: 3, type: 'Next -->>' },
		{ source: 1, target: 2, type: 'Next -->>' },
		{ source: 6, target: 1, type: 'Next -->>' },
		{ source: 7, target: 1, type: 'Next -->>' },
		{ source: 9, target: 1, type: 'Next -->>' },
		{ source: 2, target: 4, type: 'Next -->>' },
		{ source: 2, target: 6, type: 'Next -->>' },
		{ source: 2, target: 7, type: 'Next -->>' },
		{ source: 2, target: 8, type: 'Next -->>' },
		{ source: 2, target: 9, type: 'Next -->>' },
		{ source: 10, target: 3, type: 'Next -->>' },
		{ source: 3, target: 11, type: 'Next -->>' },
		{ source: 8, target: 5, type: 'Go to ->>' },
		{ source: 8, target: 11, type: 'Go to ->>' },
		{ source: 6, target: 9, type: 'Go to ->>' },
		{ source: 7, target: 9, type: 'Go to ->>' },
		{ source: 8, target: 9, type: 'Go to ->>' },
		{ source: 9, target: 11, type: 'Go to ->>' },
		{ source: 12, target: 9, type: 'Go to ->>' },
		{ source: 13, target: 11, type: 'Go to ->>' },
		{ source: 13, target: 2, type: 'Go to ->>' },
		{ source: 13, target: 4, type: 'This way>>' },
		{ source: 13, target: 5, type: 'This way>>' },
		{ source: 13, target: 8, type: 'This way>>' },
		{ source: 13, target: 9, type: 'This way>>' },
		{ source: 13, target: 10, type: 'This way>>' },
		{ source: 4, target: 7, type: 'Next -->>' },
		{ source: 10, target: 5, type: 'Next -->>' },
		{ source: 4, target: 2, type: 'Next -->>' },
		{ source: 5, target: 3, type: 'Next -->>' }
	]
};
console.log("dataset is ...", graph.nodes);

var message_span = document.getElementById('NodesArray');

message_span.innerHTML = JSON.stringify(graph.nodes,null,2);

function run(graph) {

	graph.links.forEach(function(d) {
		//     d.source = d.source_id;    
		//     d.target = d.target_id;
	});
	// 링크 시각화
	var link = svg.selectAll(".links")
		.data(graph.links)
		.enter()
		.append("line")
		.attr("class", "links")
		.attr("stroke", "#999")
		.attr("stroke-width", "2px")
		.style("opacity", 0.8)
		.attr("id", d => "line" + d.source + d.target)
		.attr("class", "links")
		.attr('marker-end', 'url(#arrowhead)')

	link.append("title")
		.text(d => d.type);

	var edgepaths = svg.selectAll(".edgepath") //make path go along with the link provide position for link labels
		.data(graph.links)
		.enter()
		.append('path')
		.attr('class', 'edgepath')
		.attr('fill-opacity', 0)
		.attr('stroke-opacity', 0)
		.attr('id', function(d, i) { return 'edgepath' + i })
		.style("pointer-events", "none");

	var edgelabels = svg.selectAll(".edgelabel")
		.data(graph.links)
		.enter()
		.append('text')
		.style("pointer-events", "none")
		.attr('class', 'edgelabel')
		.attr('id', function(d, i) { return 'edgelabel' + i })
		.attr('font-size', 10)
		.attr('fill', '#aaa');

	edgelabels.append('textPath') //To render text along the shape of a <path>, enclose the text in a <textPath> element that has an href attribute with a reference to the <path> element.
		.attr('xlink:href', function(d, i) { return '#edgepath' + i })
		.style("text-anchor", "middle")
		.style("pointer-events", "none")
		.attr("startOffset", "50%")
		.text(d => d.type);

	// 노드 시각화
	var node = svg.selectAll(".nodes")
		.data(graph.nodes)
		.enter()
		.append("g")
		.attr("class", "nodes")

	node.call(d3.drag() //sets the event listener for the specified typenames and returns the drag behavior.
		.on("start", dragstarted) //start - after a new pointer becomes active (on mousedown or touchstart).
		.on("drag", dragged)      //drag - after an active pointer moves (on mousemove or touchmove).
	);

	node.append("circle")
		.attr("r", d => 17)//+ d.runtime/20 )
		.attr("id", d => "circle" + d.id)
		.style("stroke", "grey")
		.style("stroke-opacity", 0.3)
		.style("stroke-width", d => d.runtime / 10)
		.style("fill", d => colorScale(d.group))

	node.append("title")
		.text(d => d.id + ": " + d.label + " - " + d.group + ", runtime:" + d.runtime + "min");

	node.append("text")
		.attr("dy", 4)
		.attr("dx", -15)
		.text(d => d.name);
	node.append("text")
		.attr("dy", 12)
		.attr("dx", -8)
		.text(d => d.runtime);
	var neighborTarget = {};
	for (var i = 0; i < graph.nodes.length; i++) {
		var id = graph.nodes[i].id;
		neighborTarget[id] = graph.links.filter(function(d) {
			return d.source == id;
		}).map(function(d) {
			return d.target;
		})
	}
	var neighborSource = {};
	for (var i = 0; i < graph.nodes.length; i++) {
		var id = graph.nodes[i].id;
		neighborSource[id] = graph.links.filter(function(d) {
			return d.target == id;
		}).map(function(d) {
			return d.source;
		})
	}

	console.log("neighborSource is ", neighborSource);
	console.log("neighborTarget is ", neighborTarget);

	node.selectAll("circle").on("click", function(d) {

		var active = d.active ? false : true // toggle whether node is active
			, newStroke = active ? "yellow" : "grey"
			, newStrokeIn = active ? "green" : "grey"
			, newStrokeOut = active ? "red" : "grey"
			, newOpacity = active ? 0.6 : 0.3
			, subgraphOpacity = active ? 0.9 : 0;

		subgraph.selectAll("text")
			.text("Selected: " + d.label)
			.attr("dy", 14)
			.attr("dx", 14)

		//extract node's id and ids of its neighbors
		var id = d.id
			, neighborS = neighborSource[id]
			, neighborT = neighborTarget[id];
		console.log("neighbors is from ", neighborS, " to ", neighborT);
		d3.selectAll("#circle" + id).style("stroke-opacity", newOpacity);
		d3.selectAll("#circle" + id).style("stroke", newStroke);

		d3.selectAll("#subgraph").style("opacity", subgraphOpacity)

		//highlight the current node and its neighbors
		for (var i = 0; i < neighborS.length; i++) {
			d3.selectAll("#line" + neighborS[i] + id).style("stroke", newStrokeIn);
			d3.selectAll("#circle" + neighborS[i]).style("stroke-opacity", newOpacity).style("stroke", newStrokeIn);
		}
		for (var i = 0; i < neighborT.length; i++) {
			d3.selectAll("#line" + id + neighborT[i]).style("stroke", newStrokeOut);
			d3.selectAll("#circle" + neighborT[i]).style("stroke-opacity", newOpacity).style("stroke", newStrokeOut);
		}
		//update whether or not the node is active
		d.active = active;
	})



	/* var label = svg.append("g")
		 .attr("class", "labels")
		 .selectAll("text")
		 .data(graph.nodes)
		 .enter().append("text")
		   .attr("class", "label")
		   .text(function(d) { return d.id; });*/

	simulation
		.nodes(graph.nodes)
		.on("tick", ticked);

	simulation.force("link")
		.links(graph.links);

	function ticked() {
		link.attr("x1", d => d.source.x)
			.attr("y1", d => d.source.y)
			.attr("x2", d => d.target.x)
			.attr("y2", d => d.target.y);

		node.attr("transform", d => `translate(${d.x},${d.y})`);

		edgepaths.attr('d', d => 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y);
	}
}
//set up dictionary of neighbors

function dragstarted(d) {
	if (!d3.event.active) simulation.alphaTarget(0.3).restart()
	d.fx = d.x
	d.fy = d.y
	//  simulation.fix(d);
}

function dragged(d) {
	d.fx = d3.event.x
	d.fy = d3.event.y
	//  simulation.fix(d, d3.event.x, d3.event.y);
}

/*function dragended(d) {
  d.fx = d3.event.x
  d.fy = d3.event.y
  if (!d3.event.active) simulation.alphaTarget(0);
  //simulation.unfix(d);
}*/
// 1번 레전드 생성
var legend_g = svg.selectAll(".legend")
	.data(colorScale.domain())
	.enter().append("g")
	.attr("transform", (d, i) => `translate(${width},${i * 20})`)
	console.log(width)

legend_g.append("circle")
	.attr("cx", 0)
	.attr("cy", 0)
	.attr("r", 5)
	.attr("fill", colorScale);

legend_g.append("text")
	.attr("x", 10)
	.attr("y", 5)
	.text(d => d);

//2번 레전드 생성
var legend_g2 = svg.append("g")
	//.attr("transform", (d, i) => `translate(${width},${i * 20})`); 
	.attr("transform", `translate(${width}, 120)`);

legend_g2.append("circle")
	.attr("r", 5)
	.attr("cx", 0)
	.attr("cy", 0)
	.style("stroke", "grey")
	.style("stroke-opacity", 0.3)
	.style("stroke-width", 15)
	.style("fill", "black")
legend_g2.append("text")
	.attr("x", 15)
	.attr("y", 0)
	.text("long runtime");

legend_g2.append("circle")
	.attr("r", 5)
	.attr("cx", 0)
	.attr("cy", 20)
	.style("stroke", "grey")
	.style("stroke-opacity", 0.3)
	.style("stroke-width", 2)
	.style("fill", "black")
legend_g2.append("text")
	.attr("x", 15)
	.attr("y", 20)
	.text("short runtime");

run(graph)