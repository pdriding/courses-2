// 1. Same form as exercise 6
// 2. Use useRef<HTMLInputElement | null> instead of FormData
// 3. Log value on submit

import { type FormEvent, useRef } from "react";

export default function NewTodoRef() {
  const formRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const hmmm = formRef.current?.value;
    console.log(hmmm);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="test"
        ref={formRef}
        // value={value}
        // onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}
