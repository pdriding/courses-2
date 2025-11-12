import { createContext, ReactNode, useContext, useReducer } from "react";

// TODO
export type Session = {
  id: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  image: string;
  duration: number;
};

type SessionState = {
  upcomingSessions: Session[];
};

const initialState: SessionState = {
  upcomingSessions: [],
};

type StateContextValue = SessionState & {
  bookSession: (id: Session) => void;
  cancelSession: (sessionId: string) => void;
};

export function useSessionsContext() {
  const sessionsCtx = useContext(SessionsContext);

  if (sessionsCtx === undefined) {
    throw new Error("Timers context is null -- That should not be the case");
  }

  return sessionsCtx;
}

const SessionsContext = createContext<StateContextValue | undefined>(undefined);

type BookSessionAction = {
  type: "BOOK_SESSION";
  session: Session;
};

type CancelSessionAction = {
  type: "CANCEL_SESSION";
  sessionId: string;
};

type SessionsAction = BookSessionAction | CancelSessionAction;

function sessionsReducer(state: SessionState, action: SessionsAction) {
  if (action.type === "BOOK_SESSION") {
    if (
      state.upcomingSessions.some((session) => session.id === action.session.id)
    ) {
      return state;
    }
    return {
      upcomingSessions: state.upcomingSessions.concat(action.session),
    };
  }

  if (action.type === "CANCEL_SESSION") {
    return {
      upcomingSessions: state.upcomingSessions.filter(
        (session) => session.id !== action.sessionId
      ),
    };
  }

  return state;
}

type SessionContextProviderProps = {
  children: ReactNode;
};

export default function SessionContextProvider({
  children,
}: SessionContextProviderProps) {
  const [sessionsState, dispatch] = useReducer(sessionsReducer, initialState);

  const ctx: StateContextValue = {
    upcomingSessions: sessionsState.upcomingSessions,
    bookSession(id: Session) {
      dispatch({ type: "BOOK_SESSION", session: id });
      console.log(sessionsState);
    },
    cancelSession(id: string) {
      dispatch({ type: "CANCEL_SESSION", sessionId: id });
    },
  };

  return (
    <SessionsContext.Provider value={ctx}>{children}</SessionsContext.Provider>
  );
}
