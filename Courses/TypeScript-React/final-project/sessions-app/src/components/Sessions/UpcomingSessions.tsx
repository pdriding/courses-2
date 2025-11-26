import { useEffect, useRef } from "react";

import Modal, { type ModalHandle } from "../UI/Modal.tsx";
import UpcomingSession from "./UpcomingSession.tsx";
import { useSessionsContext } from "../../store/session-context.tsx";
import Button from "../UI/Button.tsx";

// TODO
type UpcomingSessionsProps = {
  onClose: () => void;
};

export default function UpcomingSessions({ onClose }: UpcomingSessionsProps) {
  const sessionsCtx = useSessionsContext();
  const hasSessions = sessionsCtx.upcomingSessions.length > 0;

  const modal = useRef<ModalHandle>(null);

  useEffect(() => {
    modal.current?.open();
  }, []);

  function handleCancelSession(id: string) {
    sessionsCtx.cancelSession(id);
  }

  return (
    <Modal ref={modal} onClose={onClose}>
      <h2>Upcoming Sessions</h2>
      {hasSessions && (
        <ul>
          {sessionsCtx.upcomingSessions.map((session) => (
            <li key={session.id}>
              <UpcomingSession
                session={session}
                onCancel={() => handleCancelSession(session.id)}
              />
            </li>
          ))}
        </ul>
      )}
      {!hasSessions && <p>No upcoming sessions.</p>}
      <p className="actions">
        <Button onClick={onClose}>Close</Button>
      </p>
    </Modal>
  );
}
