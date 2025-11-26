"use client";

export default function FilterError({ error }) {
  return (
    <div id="error">
      <h1>Invalid filter!</h1>
      <p>{error.message}</p>
    </div>
  );
}
