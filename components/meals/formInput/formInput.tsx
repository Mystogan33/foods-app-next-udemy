import { InputHTMLAttributes } from "react";
import classes from "./formInput.module.css";

type TFormInputProps = {
  name: string;
  label: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  area?: boolean;
};

export default function FormInput({
  name,
  label,
  type = "text",
  area = false,
}: TFormInputProps) {
  return (
    <p className={classes.container}>
      <label htmlFor={name}>{label}</label>
      {!area ? (
        <input type={type} id={name} name={name} required />
      ) : (
        <textarea id={name} name={name} rows={10} required />
      )}
    </p>
  );
}
