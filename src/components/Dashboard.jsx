// Dashboard.js
import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Dashboard = ({ children }) => {
  // Data for the pie chart
  const data = {
    labels: ["Pending", "Completed", "Active"],
    datasets: [
      {
        label: "Task Distribution",
        data: [children.pending, children.completed, children.active], // Use state values
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(40, 176, 77, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for the pie chart
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Distribution of Tasks by Status",
      },
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className=" max-w-4xl mx-auto bg-white ">
      <div className="h-96 ">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;
