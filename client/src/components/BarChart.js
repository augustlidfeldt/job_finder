import React from "react";
import { Bar } from "react-chartjs-2";

class BarChart extends React.Component {
  render() {
    const { data, highlight, domain } = this.props;

    // calculate frequency of data
    var counts = {};
    for (var i = 0; i < data.length; i++)
      counts[data[i]] = counts[data[i]] + 1 || 0;

    // generate data
    const barDataValues = [];
    for (let i = 5; i < domain[1]; i = i + 5) {
      let tempSum = 0;
      for (let j = 0; j < 6; j++) {
        tempSum += counts[i - j];
      }
      barDataValues.push(tempSum || 0);
    }
    const barData = {
      labels: barDataValues.map((val, i) => i),
      datasets: [
        {
          backgroundColor: barDataValues.map((val, i) =>
            i * 5 >= highlight[0] - 5
              ? "rgba(135, 206, 235, 1)"
              : "rgba(255, 99, 132, 0.2)"
          ),
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          data: barDataValues
        }
      ]
    };

    const options = {
      responsive: true,
      legend: {
        display: false
      },
      plugins: {
        legend: {
          display: false
        }
      },

      scales: {

        x:
        {
          ticks: {
            beginAtZero: true,
          },
          categoryPercentage: 0.3,
          barPercentage: 0.3,
          grid: {
            display: false
          }

        }
        ,
        y:
        {
          display: false,
          ticks: {
            min: 0
          },
          categoryPercentage: 0.3,
          barPercentage: 0.3,
        }

      }
    };
    return <Bar data={barData} options={options} />;
  }
}

export default BarChart;
