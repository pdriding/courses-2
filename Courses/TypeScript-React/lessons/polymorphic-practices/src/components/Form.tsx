import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  type FormEvent,
} from "react";

export type FormHandle = { clear: () => void };
export type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  onSave?: (data: unknown) => void;
};

export default function Form({ onSave, children, ...props }, ref) {
  const nativeFormRef = useRef<HTMLFormElement | null>(null);

  useImperativeHandle(
    ref,
    () => ({
      clear() {
        nativeFormRef.current?.reset();
      },
    }),
    []
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: collect FormData, convert to object, call onSave with unknown
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as unknown;
    onSave?.(data);
  }

  return (
    <form ref={nativeFormRef} onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  );
}
