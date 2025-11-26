// =====================
// 1 - UserCard
// =====================
import React from "react";

export function UserCard({ name, age }: { name: string; age: number }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

// =====================
// 2 - Card
// =====================
import { ReactNode } from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div>
      <h2>{title}</h2>
      <section>{children}</section>
    </div>
  );
}

// =====================
// 3 - CardFC
// =====================
import { FC } from "react";

type CardProps = {
  title: string;
  children?: React.ReactNode;
};

export const CardFC: FC<CardProps> = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      <section>{children}</section>
    </div>
  );
};

// =====================
// 4 - TodoList
// =====================
import { useState } from "react";

type Todo = { id: number; text: string };

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo() {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: `Todo ${prev.length + 1}` },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

// =====================
// 5 - types.ts
// =====================
export type TodoType = {
  id: number;
  text: string;
};

// =====================
// 6 - NewTodoFormData
// =====================
export function NewTodoFormData() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const text = formData.get("todo") as string;
    console.log(text);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="todo" />
      <button type="submit">Add</button>
    </form>
  );
}

// =====================
// 7 - NewTodoRef
// =====================
export function NewTodoRef() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(inputRef.current?.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} />
      <button type="submit">Add</button>
    </form>
  );
}

// =====================
// 8 - NewTodoWithCallback
// =====================
type NewTodoWithCallbackProps = {
  onAddTodo: (text: string) => void;
};

export function NewTodoWithCallback({ onAddTodo }: NewTodoWithCallbackProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (inputRef.current?.value) {
      onAddTodo(inputRef.current.value);
      inputRef.current.value = "";
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} />
      <button type="submit">Add</button>
    </form>
  );
}

// =====================
// 9 - Container
// =====================
import { ElementType, ComponentPropsWithoutRef } from "react";

type PolymorphicProps<C extends ElementType> = {
  as?: C;
  variant?: "primary" | "ghost";
  children?: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<C>, "as" | "children">;

export function Container<C extends ElementType = "div">({
  as,
  variant,
  children,
  ...rest
}: PolymorphicProps<C>) {
  const Component = (as || "div") as ElementType;
  return (
    <Component
      {...(rest as ComponentPropsWithoutRef<any>)}
      data-variant={variant}
    >
      {children}
    </Component>
  );
}
