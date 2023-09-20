<!-- Modified VerticalBarGraph.svelte -->
<script>
    export let data = [];
  
    // Calculate the total value of all data elements
    let totalValue = data.reduce((sum, item) => sum + item.value, 0);
  
    // Calculate the maximum value for scaling the heights
    let maxValue = Math.max(...data.map(item => item.value));
  
    // Calculate the percentage for scaling heights
    let scalePercentage = 80 / maxValue;
  
    // Calculate the width percentage for each column
    let colWidth = Math.floor(97/data.length)

    function colorPicker(i){
        const colors = ['#0074d9', '#ff851b', '#001f3f', '#39cccc', '#ff4136', '#2ecc40', '#85144b', '#3d9970', '#b10dc9'];
        i = i%9;
        return colors[i]
    }
  </script>
  
  <style>
    /* Add custom CSS styles for the modified vertical bar graph */
    .bar-graph {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      height: 100%;
      width: 100%;
    }
  
    .bar {
      color: white; /* Text color (adjust as needed) */
      text-align: center;
    }
  </style>
  
  <div class="bar-graph">
    {#each data as item, index}
      <div class="bar" style="background-color: {colorPicker(index)}; width: {colWidth}%; height: {item.value * scalePercentage}%">{item.label}: {item.value}</div>
    {/each}
  </div>
  