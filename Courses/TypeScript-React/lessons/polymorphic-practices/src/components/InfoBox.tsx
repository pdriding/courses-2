import React from "react";

// TODO: define HintBoxProps and WarningBoxProps and their union
type HintBoxProps = { mode: "hint"; children: React.ReactNode };
type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: React.ReactNode;
};
export type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  // TODO: narrow by mode and render different markup for 'hint' vs 'warning'
  if (props.mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{props.children}</p>
      </aside>
    );
  }
  return (
    <aside className={`infobox infobox-warning warning--${props.severity}`}>
      <h2>Warning</h2>
      <p>{props.children}</p>
    </aside>
  );
}
