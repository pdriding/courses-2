// App.tsx

import Input from "./components/Input";
import Form, { type FormHandle } from "./components/Form";
import Button from "./components/Button";
import { useRef } from "react";

export default function App() {
  const customFormRef = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: number };
    console.log(extractedData);
    customFormRef.current?.clear();
  }
  return (
    <main>
      <Form onSave={handleSave} ref={customFormRef}>
        <Input label="Name" id="name" type="text" />
        <Input label="age" id="age" type="number" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}
