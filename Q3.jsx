import { useState } from "react";

export function useForm(initial, validate) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});

  const handleChange = e =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const submit = async () => {
    const errs = await validate(values);
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const reset = () => setValues(initial);

  return { values, errors, handleChange, submit, reset };
}
