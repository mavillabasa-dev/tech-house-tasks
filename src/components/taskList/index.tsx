"use client";

import { Task } from "@/models/task.model";
import { Card } from "../card";
import styles from "./tasklist.module.css";
import { PrimaryButton } from "../primaryButton";
import { useModal } from "@/hooks/useModal";
import Modal from "../modal";
import { AddTaskForm } from "../addTaskForm";
import { useTaskManager } from "@/hooks/useTaskManager";

interface ITasksList {
  initialTasks: Task[];
}

export const TaskList = ({ initialTasks }: ITasksList) => {
  const { isOpen, toggle } = useModal();
  const { addTask, removeTask, tasks } = useTaskManager(initialTasks);

  return (
    <>
      <div className="md:w-1/2 mx-auto">
        <h1 className={styles.title}>Mis tareas</h1>
        {tasks?.length === 0 || !tasks ? (
          <div className="flex justify-center items-center py-5">
            <h3 className="text-lg font-semibold text-gray-800">No hay tareas disponibles</h3>
          </div>
        ) : (
          tasks.map((value, index) => (
            <Card key={`${index}-${value.id}`} task={value} removeTask={removeTask} />
          ))
        )}
        <div>
          <PrimaryButton onClick={() => toggle()} label={"Añadir tarea"} disabled={false}/>
        </div>
      </div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <AddTaskForm onCancel={toggle} onSubmit={addTask} closeModal={toggle} />
      </Modal>
    </>
  );
};
