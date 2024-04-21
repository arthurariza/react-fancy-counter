import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import Count from "./Count";

export default function Container({ setCount, locked }) {
  const handleDecrement = (event) => {
    setCount((prev) => {
      if (prev <= 0) return 0;

      return prev - 1;
    });

    event.target.blur();
  };
  const handleIncrement = (event) => {
    setCount((prev) => prev + 1);

    event.target.blur();
  };

  return (
    <div className="button-container">
      <Count handleClick={handleDecrement} locked={locked}>
        <MinusIcon className="count-btn-icon" />
      </Count>
      <Count handleClick={handleIncrement} locked={locked}>
        <PlusIcon className="count-btn-icon" />
      </Count>
    </div>
  );
}
