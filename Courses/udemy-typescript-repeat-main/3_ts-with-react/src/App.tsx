import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";
import CourseGoalList from "./components/CouseGoalList";
import NewGoal from "./components/NewGoal";

export interface CourseGoalType {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);
  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoalType = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }
  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "Header image" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} deleteGoal={handleDeleteGoal} />
    </main>
  );
}
