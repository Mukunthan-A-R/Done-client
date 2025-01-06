import React from "react";
import Card from "./Card";

const Pending = ({ tasks }) => {
  const pendingTasks = tasks.filter((task) => task.status === "pending");
  return (
    <div className="flex-col bg-red-400 p-4 rounded-lg shadow m-2">
      <h2 className="text-gray-800 font-bold text-center">PENDING</h2>
      <p className="text-gray-600">
        This is the first container with light grey background.
      </p>
      <div>
        {pendingTasks.map((task) => (
          <Card
            key={task.id}
            id={task.id}
            title={task.title}
            status={task.status}
          >
            {task.description}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pending;
