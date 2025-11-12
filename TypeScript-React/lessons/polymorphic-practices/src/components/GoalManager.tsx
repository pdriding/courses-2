import React, { useState, useRef } from "react";
import { Form } from "../components/Form";
import Input from "../components/Input";
import InfoBox from "../components/InfoBox";
import Container from "../components/Container";

export default function GoalManager() {
  const [goals, setGoals] = useState<Array<{ id: string; text: string }>>([]);
  const formRef = useRef<any>(null);

  function handleSave(data: unknown) {
    // TODO: assert `data` to expected shape and push to goals
  }

  return (
    <section>
      <Form onSave={handleSave} ref={formRef}>
        <Input id="goal" name="goal" label="Goal" />
        <button type="submit">Add</button>
      </Form>

      {/* TODO: render InfoBox conditionally and map goals inside Container */}
    </section>
  );
}
