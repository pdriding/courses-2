import { type ElementType, type ComponentPropsWithoutRef } from "react";
import { Container } from "./answers";

// 1. Generic component <C extends ElementType = "div">
// 2. Props: as?: C, variant?: "primary" | "ghost", children?: React.ReactNode
// 3. Accept all native props of the given element
// 4. Render with the correct element type

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  variant?: "primary" | "ghost";
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType = "div">({
  as,
  variant,
  children,
}: ContainerProps<C>) {
  const Container = as || "div";

  return <Container>{children}</Container>;
}
