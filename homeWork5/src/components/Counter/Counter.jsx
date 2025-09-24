import { useCallback, useState } from "react";
import { ChildButton } from "../ChildButton/ChildButton";

export function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  console.log("counter");
  return (
    <>
      <p>Count: {count}</p>
      <ChildButton onClick={handleClick} label="добавить" />
    </>
  );
}
