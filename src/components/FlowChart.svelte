<!-- FlowChart.svelte -->
<script>
  import { onMount } from 'svelte';
  import { hierarchy, cluster } from 'd3-hierarchy';

  onMount(() => {
    var width = 460;
    var height = 460;

    // append the svg object to the body of the page
    var svg = d3.select("#flowchart")
      .append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(40,0)");  // bit of margin on the left = 40

    // Define the data directly in the code
    var data = {
      "name": "Root",
      "children": [
        {
          "name": "Node 1",
          "children": [
            { "name": "Leaf 1" },
            { "name": "Leaf 2" }
          ]
        },
        {
          "name": "Node 2",
          "children": [
            { "name": "Leaf 3" },
            { "name": "Leaf 4" }
          ]
        }
      ]
    };

    // Create the cluster layout:
    var clusterLayout = cluster()
      .size([height, width - 100]);  // 100 is the margin I will have on the right side

    // Give the data to this cluster layout:
    var root = hierarchy(data, function(d) {
      return d.children;
    });
    clusterLayout(root);

    // Add the links between nodes:
    svg.selectAll('path')
      .data(root.descendants().slice(1))
      .enter()
      .append('path')
      .attr("d", function(d) {
        return "M" + d.y + "," + d.x
                + "C" + (d.parent.y + 50) + "," + d.x
                + " " + (d.parent.y + 150) + "," + d.parent.x
                + " " + d.parent.y + "," + d.parent.x;
              })
      .style("fill", 'none')
      .attr("stroke", '#ccc');

    // Add a circle for each node with tooltips:
    var nodes = svg.selectAll("g")
      .data(root.descendants())
      .enter()
      .append("g")
      .attr("transform", function(d) {
        return "translate(" + d.y + "," + d.x + ")";
      });

    nodes.append("circle")
      .attr("r", 7)
      .style("fill", "#69b3a2")
      .attr("stroke", "black")
      .style("stroke-width", 2);

    // Add tooltips using SVG <title> elements
    nodes.append("title")
      .text(function(d) {
        return d.data.name; // Use the node's name as the tooltip text
      });
  });
</script>

<h4>Event Traceback</h4>
<div id="flowchart"></div>