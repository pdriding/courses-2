import { useImperativeHandle, useRef } from "react";
import type { ReactNode, Ref } from "react";
import { createPortal } from "react-dom";

export type ModalHandle = {
  open: () => void;
};

type ModalProps = {
  onClose: () => void;
  children: ReactNode;
  ref?: Ref<ModalHandle>;
};

export default function Modal({ onClose, children, ref }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current?.showModal(),
  }));

  return createPortal(
    <dialog ref={dialogRef} onClose={() => onClose()}>
      {children}
    </dialog>,
    document.getElementById("modal-root")!
  );
}
