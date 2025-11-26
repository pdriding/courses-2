import { type ReactNode } from "react";

interface HintModeProps {
  mode: "hint";
  children: ReactNode;
}

interface WarningModeProps {
  mode: "warning";
  severity?: "low" | "medium" | "high";
  children: ReactNode;
}

type InfoBoxProps = HintModeProps | WarningModeProps;

export default function InfoBox(props: InfoBoxProps) {
  const { children } = props;
  if (props.mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
