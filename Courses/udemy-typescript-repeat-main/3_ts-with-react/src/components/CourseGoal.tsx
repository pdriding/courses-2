import { type ReactNode } from "react";

interface CourseGoalProps {
  id: number;
  title: string;
  children: ReactNode;
  deleteGoal: (id: number) => void;
}

export default function CourseGoal({
  id,
  title,
  children,
  deleteGoal,
}: CourseGoalProps) {
  return (
    <>
      <article>
        <div>
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
        <button onClick={() => deleteGoal(id)}>Delete</button>
      </article>
    </>
  );
}
