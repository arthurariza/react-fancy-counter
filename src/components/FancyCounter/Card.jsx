import { useEffect, useState } from "react";
import Container from "./Buttons/Container";
import Reset from "./Buttons/Reset";
import Count from "./Count";
import Title from "./Title";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count >= 5;

  useEffect(() => {
    const handleSpaceDown = (event) => {
      if (event.code === "Space" && !locked) {
        setCount((prev) => prev + 1);
      }
    };

    window.addEventListener("keydown", handleSpaceDown);

    return () => {
      window.removeEventListener("keydown", handleSpaceDown);
    };
  }, [count, locked]);

  return (
    <article className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <Reset setCount={setCount} />
      <Container setCount={setCount} locked={locked} />
    </article>
  );
}
