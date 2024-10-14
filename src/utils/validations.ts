/* eslint-disable @typescript-eslint/no-explicit-any */
export interface FormState {
  title: string;
  description: string;
}

export const validateAddTask = (values: any) => {
  const errors: Partial<FormState> = {};

  if (!values.title) {
    errors.title = "El titulo de la tarea es requerido";
  }

  if (!values.description) {
    errors.description = "La descripción de la tarea es requerida";
  }

  return errors;
};
