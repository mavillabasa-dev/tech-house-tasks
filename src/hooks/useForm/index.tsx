import { validateAddTask } from "@/utils/validations";

import { ChangeEvent, useEffect, useState } from "react";

export const useForm = <T extends object>(initialState: T) => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<{[key:string]:string}>({});

  useEffect(() => {
    const initialErrors = validateAddTask(form);
    setErrors(initialErrors);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;

    const error = validateAddTask({ ...form, [name]: value });
    setErrors(error);

    setForm({
      ...form,
      [name]: value,
    });
  };

  return {
    form,
    handleChange,
    errors,
  };
};
