"use client";

import { Card } from "../card";
import { PrimaryButton } from "../primaryButton";
import { useModal } from "@/hooks/useModal";
import { AddTaskForm } from "../addTaskForm";
import { useTasks } from "@/hooks/useTask";
import Modal from "../modal";
import Pagination from "../pagination";
import styles from "./tasklist.module.css";


export const TaskList = () => {
  const { isOpen, toggle } = useModal();
  const { tasks, currentPage, totalPages, loading, setCurrentPage, addTask, removeTask } = useTasks(1, 3);

  if (loading) return <p>Cargando tareas...</p>;

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
        <div className="my-2">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
        <div>
          <PrimaryButton onClick={() => toggle()} label={"Añadir tarea"} disabled={false} />
        </div>
      </div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <AddTaskForm onCancel={toggle} onSubmit={addTask} closeModal={toggle} />
      </Modal>
    </>
  );
};
