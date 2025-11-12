import Container from "./UI/Container.tsx";
import {
  useTimersContext,
  type Timer as TimerProps,
} from "../store/timers-context.tsx";
import { useEffect, useState, useRef } from "react";

export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const { isRunning } = useTimersContext();

  setRemainingTime((prevTime) => {
    if (prevTime <= 0) {
      return prevTime;
    }
    return prevTime - 50;
  });

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = interval.current = setInterval(function () {
        setRemainingTime((prevTime) => prevTime - 50);
      }, 50);

      interval.current = timer;
    } else if (!isRunning && interval.current) {
      clearInterval(interval.current);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime}></progress>
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
