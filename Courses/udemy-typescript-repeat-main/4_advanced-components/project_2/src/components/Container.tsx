import {
  type ReactNode,
  type ElementType,
  ComponentPropsWithoutRef,
} from "react";
// not to set but to accept the type from where
// the container props are being used.
type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

// To accept type and turn into a generic function (a function that works with different types that we do not know at the time)
export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || "div";
  // as would not work as needs to be Uppercase for components
  return <Component {...props}>{children}</Component>;
}
