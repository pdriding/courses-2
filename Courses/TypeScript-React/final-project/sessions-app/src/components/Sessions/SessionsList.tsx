import SessionItem from "./SessionItem.tsx";

export type SESSIONS = {
  sessions: {
    id: string;
    title: string;
    summary: string;
    description: string;
    duration: number;
    date: string;
    image: string;
  }[];
};

export default function SessionsList({ sessions }: SESSIONS) {
  return (
    <ul id="sessions-list">
      {sessions.map((session) => (
        <li key={session.id}>
          <SessionItem {...session} />
        </li>
      ))}
    </ul>
  );
}
