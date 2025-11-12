import { PropsWithChildren, ReactNode } from "react";

type HeaderBase = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

export default function Header({
  image,
  children,
}: PropsWithChildren<HeaderBase>) {
  return (
    <>
      <img src={image.src} alt={image.alt} />
      {children}
    </>
  );
}
