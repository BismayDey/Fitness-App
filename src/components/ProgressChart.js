import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProgressChart = ({ log }) => {
  const dates = log.map((workout) => workout.date);

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Workouts",
        data: log.map(() => 1),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
    animation: {
      duration: 1500, // Animation duration
      easing: "easeOutBounce", // Bounce effect
    },
  };

  return (
    <div className="chart-container">
      <h2>Progress Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ProgressChart;
