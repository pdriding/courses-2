import React, { useState } from "react";

// 1. State: array of { id: number; text: string }
// 2. Button to add a todo with a timestamp id
// 3. Render todos in <li>

type Todo = { id: number; text: string };

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  function handleClick() {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text: `Todo ${prevTodos.length + 1}` },
    ]);
  }
  return (
    <div>
      <button onClick={handleClick}></button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

// <Todo[]> = Array of ToDo objects
