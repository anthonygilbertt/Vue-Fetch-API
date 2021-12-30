<template>
  <div class="csvdata">
    <h3>NASA:</h3>
    <div>
      <div v-if="video"></div>
      <div v-else></div>
      <!-- <canvas id="myChart" width="400" height="400"></canvas> -->
      <canvas id="myChart" width="400" height="400"></canvas>
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

    const fetchData = async () => {
      const response = await fetch("Zonal-Annual-Means.csv");
      const data = await response.text();
      const table = data.split("\n").slice(1);

      // console.table("table: ", table);

      table.forEach((row) => {
        const columns = row.split(",");
        const year = columns[0];
        const temp = columns[1];
        console.log(year, temp);
      });

      const ctx = document.getElementById("myChart");

      const myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
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
            },
          },
        },
      });
      console.log(myChart);
      //end of myChart function
    };

    // async function chartIt() {
    //   // Organize the `chart.js` related code line into a function
    //   const data = await fetchData(); // Get resulting data from the getData() function.
    //   const ctx = document.getElementById("myChart").getContext("2d");
    //   new Chart(ctx, {
    //     type: "line", // Switch the graph to a line chart
    //     data: {
    //       labels: data.xs, // Customize the label sources
    //       datasets: [
    //         {
    //           label:
    //             "Combined Land-Surface Air and Sea-Surface Water Temperature (℃)", // new name
    //           data: data.ys, // Customize the data source for the Y-axis
    //           fill: false, // Do not fill the line
    //           backgroundColor: "rgba(255, 99, 132, 0.2)", // Adopt single color scheme across different datasets
    //           borderColor: "rgba(255, 99, 132, 1)", // adopt single color scheme across different datasets
    //           borderWidth: 1,
    //         },
    //       ],
    //     },
    //     options: {
    //       scales: {
    //         yAxes: [
    //           {
    //             ticks: {
    //               // Include a ℃ sign in the ticks
    //               callback: function (value, index, values) {
    //                 return value + "℃";
    //               },
    //             },
    //           },
    //         ],
    //       },
    //     },
    //   });
    // }

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
