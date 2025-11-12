import React from "react";
import type { ComponentPropsWithoutRef } from "react";

// TODO: create ButtonAsButton and ButtonAsAnchor union types
type ButtonAsButton = { el: "button" } & ComponentPropsWithoutRef<"button">;
type ButtonAsAnchor = { el: "anchor" } & ComponentPropsWithoutRef<"a">;
export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  // TODO: narrow with props.el and return either <button> or <a>
  if (props.el === "anchor") {
    const { el, ...rest } = props;
    return <a className="btn" {...(rest as ComponentPropsWithoutRef<"a">)} />;
  }
  const { el, ...rest } = props;
  return (
    <button className="btn" {...(rest as ComponentPropsWithoutRef<"button">)} />
  );
}
