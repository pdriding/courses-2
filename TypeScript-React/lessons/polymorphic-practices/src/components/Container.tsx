import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type Props<T extends ElementType = "div"> = {
  as?: T;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

export default function Container<C extends ElementType = "div">({
  as,
  children,
}: Props<C>) {
  const Component = (as || "div") as ElementType;
  // TODO: render the passed element (rename `as` -> `As` so JSX treats it like a component)
  return <Component>{children}</Component>; // skeleton: basic behavior already present
}
