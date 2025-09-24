import React from "react";

const { memo } = React;

export const ChildButton = memo(({ onClick, label }) => {
  console.log("ChildButton");
  return <button onClick={onClick}>{label}</button>;
});
