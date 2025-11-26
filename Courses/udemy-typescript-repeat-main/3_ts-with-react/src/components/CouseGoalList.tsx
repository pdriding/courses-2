import CourseGoal from "./CourseGoal";
import { type CourseGoalType } from "../App";

interface goalsType {
  goals: CourseGoalType[];
  deleteGoal: (id: number) => void;
}

export default function CourseGoalList({ goals, deleteGoal }: goalsType) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal
            id={goal.id}
            deleteGoal={() => deleteGoal(goal.id)}
            title={goal.title}
          >
            {goal.description}
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
