export default function Title({ locked }) {
  const title = locked ? "Locked, Please buy PRO version" : "Fancy Counter";

  return <h1 className="title">{title}</h1>;
}
