/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "@/hooks/useForm";
import { PrimaryButton } from "../primaryButton";
import { SecondaryButton } from "../secondaryButton";

interface AddTaskFormProps {
  onSubmit: (...args: any[]) => any;
  onCancel: () => void;
  closeModal: () => void;
}

export const AddTaskForm = ({ onSubmit, onCancel, closeModal }: AddTaskFormProps) => {
  const { form, handleChange, errors } = useForm({
    title: "",
    description: "",
    completed: false
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    closeModal();
  };

  return (
    <div className="bg-white rounded-lg p-6 w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Añadir tarea</h2>
        <button onClick={onCancel} className="text-gray-500">
          ✖
        </button>
      </div>
      <form onSubmit={submit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name" data-testid='name-input-add'>
            Nombre
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Nombre"
            className="w-full p-2 border border-gray-300 rounded"
            value={form.title}
            onChange={handleChange}
          />
          {errors.title && <p className="text-red-500 text-xs mt-2">{errors.title}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Descripción
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Descripción"
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
            value={form.description}
            onChange={handleChange}
          />
          {errors.description && <p className="text-red-500 text-xs mt-2">{errors.description}</p>}
        </div>
        <div className="flex justify-between">
          <SecondaryButton label="Cancelar" onClick={closeModal} />
          <PrimaryButton
            label="Guardar"
            onClick={submit}
            disabled={Object.keys(errors).length > 0}
          />
        </div>
      </form>
    </div>
  );
};
