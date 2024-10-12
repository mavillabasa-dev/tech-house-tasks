import { Task } from "@/models/task.model";
import { Card } from "../card";
import styles from "./tasklist.module.css";

interface ITasksList {
  tasks: Task[] | undefined;
}

export const TaskList = ({ tasks }: ITasksList) => {
  if (tasks?.length === 0 || !tasks) {
    return (
      <div className="flex justify-center items-center">
        <h3 className="text-lg font-semibold text-gray-800">No hay tareas disponibles</h3>
      </div>
    );
  }
  return (
    <div>
      <h1 className={styles.title}>Mis tareas</h1>
      {tasks.map((value, index) => (
        <Card key={`${index}-${value.id}`} subtitle={`${value.completed}`} title={value.title} />
      ))}
    </div>
  );
};
