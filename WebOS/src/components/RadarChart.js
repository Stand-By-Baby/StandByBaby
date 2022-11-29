import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = () => {
  const data = {
    labels: [
      "Temperature",
      "Awaken Times",
      "Total Sleep Time(hours)",
      "Movement Detection",
      "Average Sleep Time",
    ],
    datasets: [
      {
        label: "MyBaby",
        data: [90, 100, 90, 89, 98],
        backgroundColor: "rgba(81, 85, 126, 0.4)",
        borderColor: "rgb(81, 85, 126)",
        borderWidth: 3,
      },
      {
        label: "AvgBaby",
        data: [70, 90, 87, 78, 80],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 3,
      },
    ],
  };

  const options = {
    // responsive: false,
    scales: {
      r: {
        // angleLines: {
        //   color: "#fff",
        // },
        pointLabels: {
          color: "#fff",
        },
        ticks: {
          color: "#fff",
          showLabelBackdrop: false,
        },
        grid: {
          color: "#fff",
        },
        suggestedMin: 50,
        suggestedMax: 100,
      },
    },
  };
  return <Radar style={{ height: "400px" }} options={options} data={data} />;
};

export default RadarChart;
