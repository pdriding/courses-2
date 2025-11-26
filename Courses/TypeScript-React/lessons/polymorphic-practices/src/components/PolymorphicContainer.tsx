import { ElementType } from "react";

type PolymorphicProps<C extends React.ElementType> = {
  as?: C;
  children?: React.ReactNode;
};

export function Container<C extends React.ElementType = "div">({
  as,
  children,
  ...rest
}: PolymorphicProps<C>) {
  const Component = as ?? "div";
  return <Component {...(rest as any)}>{children}</Component>; // TODO: spread native props for autocomplete
}
