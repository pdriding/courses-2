import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
import { useRef } from "react";

function App() {
  const input = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Container as="button">Click me</Container>
      <Input label="Test" id="test" ref={input} />
      {/* <p>
        <Button className="button" el="button">
          A button
        </Button>
      </p>
      <p>
        <Button className="button" el="anchor" href="https://google.com">
          A link
        </Button>
      </p> */}
    </main>
  );
}

export default App;

//  <Input id="name" label="Your name" type="text" />
//       <Input id="age" label="Your age" type="number" />
