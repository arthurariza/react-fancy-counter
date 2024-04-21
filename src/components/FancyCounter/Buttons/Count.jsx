export default function Count({ handleClick, locked, children }) {
  return (
    <button className="count-btn" onClick={handleClick} disabled={locked}>
      {children}
    </button>
  );
}
