import React from "react";
import Card from "./Card";

const Active = ({ tasks }) => {
  const activeTasks = tasks.filter((task) => task.status === "active");

  return (
    <div className="flex-col bg-green-200 p-4 rounded-lg shadow m-2">
      <h2 className="text-gray-800 font-bold text-center">ACTIVE</h2>
      <p className="text-gray-600">
        This is the second container with light grey background.
      </p>
      <div>
        {activeTasks.map((task) => (
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

export default Active;
