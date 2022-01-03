<template>
  <div class="csvdata">
    <h3>NASA: Global Average Temperature</h3>
    <div>
      <div v-if="video"></div>
      <div v-else></div>

      <canvas id="myChart" width="800" height="400"></canvas>
    </div>

    <button @click="fetchData">Fetch Data</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
  name: "Main",
  setup() {
    const error = ref(null);
    const video = ref(false);
    const xlabels = ref([]);
    const ytemps = ref([]);

    const fetchData = async () => {
      const response = await fetch("Zonal-Annual-Means.csv");
      const data = await response.text();
      const table = data.split("\n").slice(1);

      // console.table("table: ", table);

      table.forEach((row) => {
        const columns = row.split(",");
        const year = columns[0];
        xlabels.value.push(year);
        const temp = columns[1];
        ytemps.value.push(temp);
        console.log(year, temp);
      });

      const ctx = document.getElementById("myChart");
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          labels: xlabels.value,
          datasets: [
            {
              label:
                "Combined Land-Surface Air and Sea-Surface Water Temperature",
              data: ytemps.value,
              fill: false,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function (value) {
                  return value + "°";
                },
              },
            },
          },
        },
      });
      // myChart();
      console.log(myChart);
    };

    //end of myChart function
    // const xlabels = [];

    // return { fetchData, video, error, chartIt };
    return { video, error, fetchData };
  },
};
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h3 {
  text-decoration: underline;
}
</style>
