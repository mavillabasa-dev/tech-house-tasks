import React from "react";
import { TrashIcon } from "@primer/octicons-react";
import { Task } from "@/models/task.model";

interface ICardProps {
  task: Task
  removeTask: (taskId: number) => void;
}

export const Card = ({ removeTask, task }: ICardProps) => {
  return (
    <div className="flex justify-between items-center my-3 p-4 border border-gray-300 shadow-md rounded-sm ">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
        <p className="text-gray-600">{task.description}</p>
      </div>
      <div className="flex">
        <button className="text-gray-500" onClick={() => removeTask(task.id)}>
          <TrashIcon size={"small"} />
        </button>
      </div>
    </div>
  );
};
