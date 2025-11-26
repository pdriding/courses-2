import { useRef, type FormEvent } from "react";

// 1. Props: onAddTodo: (text: string) => void
// 2. Use a ref for the input
// 3. On submit, call onAddTodo with the entered text

type NewTodoWithCallbackProps = {
  onAddTodo: (text: string) => void;
};

export default function NewTodoWithCallback({
  onAddTodo,
}: NewTodoWithCallbackProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inputRef.current?.value) {
      onAddTodo(inputRef.current.value);
      inputRef.current.value = "";
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="test"
        ref={formRef}
        placeholder="Type something..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}
