<script>
    import { onMount, onDestroy } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let chart;
    
    export let name_1;
    export let name_2;
    export let q_1;
    export let q_2;
  
    onMount(() => {
      const ctx = document.getElementById('pie-chart').getContext('2d');
      
      chart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: [name_1, name_2],
          datasets: [{
            data: [q_1, q_2],
            backgroundColor: ['blue', 'green'], // You can set different colors as needed
          }],
        },
      });
    });
  
    onDestroy(() => {
      // Clean up the chart when the component is destroyed
      if (chart) {
        chart.destroy();
      }
    });
  </script>
  
  <style>
    #pie-chart{
      height:90%;
    }
  </style>
  
  <div>
    <canvas id="pie-chart"></canvas>
  </div>
  