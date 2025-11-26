import { type FormEvent } from "react";
import { useRef } from "react";

interface NewGoalProps {
  onAddGoal: (goal: string, summary: string) => void;
}

export default function newGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<null | HTMLInputElement>(null);
  const summary = useRef<null | HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    event.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
