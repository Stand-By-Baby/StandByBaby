import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VerticalBarChart = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "MyBaby",
        data: [90, 100, 90, 98],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [90, 123, 12, 11],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    // responsive: false,
    scales: {
      r: {
        // pointLabels: {
        //   color: "#fff",
        // },
        // ticks: {
        //   color: "#fff",
        //   showLabelBackdrop: false,
        // },
        // grid: {
        //   color: "#fff",
        // },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Sleep Time",
      },
    },
  };

  return <Bar style={{ height: "400px" }} options={options} data={data} />;
};

export default VerticalBarChart;
