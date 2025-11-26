import React from "react";
import type { ComponentPropsWithoutRef } from "react";

// TODO: define props so button-only variant disallows href
type AnchorProps = { href: string } & ComponentPropsWithoutRef<"a">;
type BtnProps = { href?: never } & ComponentPropsWithoutRef<"button">;
export type SmartButtonProps = AnchorProps | BtnProps;

function isAnchor(p: SmartButtonProps): p is AnchorProps {
  // TODO: implement a reliable runtime check (use 'in' operator)
  return "href" in p && typeof (p as any).href === "string";
}

export function SmartButton(props: SmartButtonProps) {
  if (isAnchor(props)) {
    const { href, children, ...rest } = props;
    return (
      <a
        className="smart-btn"
        href={href}
        {...(rest as ComponentPropsWithoutRef<"a">)}
      >
        {children}
      </a>
    );
  }
  const { children, ...rest } = props as BtnProps;
  return (
    <button className="smart-btn" {...rest}>
      {children}
    </button>
  );
}
