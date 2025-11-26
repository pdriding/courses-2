// Input.tsx
import { forwardRef, type ComponentPropsWithRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & Omit<ComponentPropsWithRef<"input">, "id">; // optional: remove duplicate 'id'

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, ...props }, ref) => {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} {...props} ref={ref} />
      </p>
    );
  }
);

Input.displayName = "Input"; // good for debugging

export default Input;
