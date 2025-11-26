import React from "react";

// ✅ Import your exercise components here:
// import UserCard from "./components/UserCard";
import Card from "./components/Card";
import CardFC from "./components/CardFC";
import TodoList from "./components/TodoList";
// import { Todo } from "./components/types";
import NewTodoFormData from "./components/NewTodoFormData";
import NewTodoRef from "./components/NewTodoRef";
import NewTodoWithCallback from "./components/NewTodoWithCallback";
import Container from "./components/Container";

export default function App() {
  // Example state for the todo exercises
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos((prev) => [...prev, { id: Date.now(), text }]);
  };

  return (
    <div style={{ padding: "1rem" }}>
      {/* ===== Uncomment ONE section at a time to practice ===== */}

      {/* 1 - Basic Props */}
      {/* <UserCard name="Alice" age={25} /> */}

      {/* 2 - Props with children */}
      {/* <Card title="Hello">This is inside the card.</Card> */}

      {/* 3 - FC */}
      {/* <CardFC title="Hello from FC">Inside FC Card</CardFC> */}

      {/* 4 - Typing State */}
      {/* <TodoList /> */}

      {/* 5 + 6 - Exporting types + FormData */}
      {/* <NewTodoFormData /> */}

      {/* 7 - Using Refs */}
      {/* <NewTodoRef /> */}

      {/* 8 - Passing data up */}
      {/* <NewTodoWithCallback onAddTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul> */}

      {/* 9 - Polymorphic Component */}
      <Container
        as="button"
        variant="primary"
        onClick={() => alert("Clicked!")}
      >
        Click Me
      </Container>
    </div>
  );
}
