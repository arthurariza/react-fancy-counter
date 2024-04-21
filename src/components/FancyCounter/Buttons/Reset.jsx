import { ResetIcon } from "@radix-ui/react-icons";

export default function Reset({ setCount }) {
  const handleClick = () => {
    setCount(0);
  };

  return (
    <button className="reset-btn">
      <ResetIcon className="reset-btn-icon" onClick={handleClick} />
    </button>
  );
}
