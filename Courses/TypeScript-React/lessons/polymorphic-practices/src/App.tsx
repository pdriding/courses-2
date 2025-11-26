import React, { useRef } from "react";
import Container from "./components/Container";
import { Container as StrictContainer } from "./components/StrictContainer";
import InfoBox from "./components/InfoBox";
import Input from "./components/Input";
import { Button } from "./components/Button";
import { SmartButton } from "./components/SmartButton";
import { Form, type FormHandle } from "./components/Form";

// Simple MyCard used for demo
function MyCard({ children }: { children: React.ReactNode }) {
  return <div style={{ border: "2px solid teal", padding: 8 }}>{children}</div>;
}

export default function App() {
  const formRef = useRef<FormHandle | null>(null);

  function handleSave(data: unknown) {
    const obj = data as Record<string, string>;
    console.log("Form saved:", obj);
  }

  return (
    <main style={{ padding: 16, fontFamily: "system-ui, sans-serif" }}>
      <h1>Polymorphic TS Exercises — All Demos</h1>

      <section>
        <h2>1 — Minimal Container (visual)</h2>
        <Container as="section">Section element</Container>
        <Container as="button" onClick={() => alert("hi")}>
          Click me
        </Container>
        <Container as={MyCard}>Card inner</Container>
      </section>

      <section>
        <h2>2 — Fully typed Generic Container (StrictContainer)</h2>
        <StrictContainer
          as="button"
          type="button"
          onClick={() => console.log("strict button")}
        >
          Strict Button
        </StrictContainer>
        <StrictContainer as="a" href="https://example.com" target="_blank">
          Strict Anchor
        </StrictContainer>
      </section>

      <section>
        <h2>3 — InfoBox (discriminated union)</h2>
        <InfoBox mode="hint">No items yet — try adding one.</InfoBox>
        <InfoBox mode="warning" severity="medium">
          You've added a few items — nice!
        </InfoBox>
      </section>

      <section>
        <h2>4 — Strict polymorphic (no-any stub)</h2>
        <p>
          StrictContainer above partially demonstrates typed props. For the
          hardcore no-`any` variant, check the component implementation.
        </p>
      </section>

      <section>
        <h2>5 — Input wrapper (native props merged)</h2>
        <Input id="demo1" label="Name" placeholder="Type name" />
        <Input id="demo2" label="Age" type="number" min={1} max={120} />
      </section>

      <section>
        <h2>6 — Button (discriminated union)</h2>
        <Button el="button" onClick={() => console.log("click")}>
          Regular Button
        </Button>
        <Button el="anchor" href="https://example.com" target="_blank">
          Anchor Button
        </Button>
      </section>

      <section>
        <h2>7 — SmartButton (infer from href)</h2>
        <SmartButton onClick={() => console.log("smart click")}>
          Smart regular
        </SmartButton>
        <SmartButton href="https://example.com">Smart link</SmartButton>
      </section>

      <section>
        <h2>8 — Form + clear() via forwardRef</h2>
        <Form onSave={handleSave} ref={formRef}>
          <Input id="g1" name="goal" label="Goal" placeholder="Add a goal" />
          <p>
            <Button el="button" type="submit">
              Save
            </Button>
            <Button
              el="button"
              type="button"
              onClick={() => formRef.current?.clear()}
            >
              Clear
            </Button>
          </p>
        </Form>
      </section>

      <section>
        <h2>9 — Mini-project hint</h2>
        <p>
          Use the components above to assemble the mini-project: a goal manager
          that uses Form, Input, InfoBox, and Container to render goals and
          warns when there are too many.
        </p>
      </section>
    </main>
  );
}
