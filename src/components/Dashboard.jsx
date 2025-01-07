// Dashboard.js
import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { useRecoilState } from "recoil";
import currentTasks from "../data/atoms";

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Dashboard = () => {
  const [taskData, setTaskData] = useRecoilState(currentTasks);

  // State for task counts
  const [taskCount, setTaskCount] = useState({
    pending: 0,
    active: 0,
    completed: 0,
  });

  // UseEffect to calculate task counts when taskData changes
  useEffect(() => {
    const newTaskCount = { pending: 0, active: 0, completed: 0 };

    // Iterate over taskData and update the count
    taskData.forEach((task) => {
      if (task.status === "pending") {
        newTaskCount.pending += 1;
      } else if (task.status === "active") {
        newTaskCount.active += 1;
      } else if (task.status === "completed") {
        newTaskCount.completed += 1;
      }
    });

    // Update task count state after calculations
    setTaskCount(newTaskCount);
  }, [taskData]); // Re-run when taskData changes

  // Data for the pie chart
  const data = {
    labels: ["Pending", "Completed", "Active"],
    datasets: [
      {
        label: "Task Distribution",
        data: [taskCount.pending, taskCount.completed, taskCount.active], // Use state values
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
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Dashboard</h2>
      <div className="h-96">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;
