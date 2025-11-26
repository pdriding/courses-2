// 1. Form with text input + submit button
// 2. On submit, use FormData to get the input value
// 3. Log it

import { type FormEvent } from "react";

export default function NewTodoFormData() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const test = fd.get("test")?.toString() || "";
    console.log(test);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="test"
        // value={value}
        // onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}
