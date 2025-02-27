import React from "react";
import Card from "./Card";

const Completed = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.status === "completed");
  return (
    <div className="flex-col bg-green-500 p-4 rounded-lg shadow m-2 overflow-y-auto border">
      <h2 className="text-gray-800 font-bold text-center">COMPLETED</h2>
      <p className="text-gray-600">
        This is the third container with light grey background.
      </p>
      <div>
        {completedTasks.map((task) => (
          <Card
            cerated={task.created}
            timeDuration={task.timeDuration}
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

export default Completed;
