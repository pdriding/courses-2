import React from "react";
import type { ComponentPropsWithoutRef } from "react";

// TODO: merge custom props with native input props
type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({ label, id, ...props }: InputProps) {
  // TODO: render label + input and forward remaining props
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </p>
  );
}
