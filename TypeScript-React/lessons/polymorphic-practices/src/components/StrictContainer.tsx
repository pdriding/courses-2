import React, { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";

// TODO: create a polymorphic props helper that omits keys from P
export type PolymorphicProps<C extends ElementType, P = {}> = P & {
  as?: C;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<C>, keyof P | "as" | "children">;

type MyProps = { variant?: "primary" | "ghost" };

export function Container<C extends ElementType = "div">(
  props: PolymorphicProps<C, MyProps>
) {
  const { as, children, variant, ...rest } = props as PolymorphicProps<
    C,
    MyProps
  >;
  const Component = (as ?? "div") as ElementType;
  // TODO: ensure rest is typed correctly and spread without `any` (challenge: avoid casts)
  return (
    <Component
      {...(rest as ComponentPropsWithoutRef<C>)}
      data-variant={variant}
    >
      {children}
    </Component>
  );
}
