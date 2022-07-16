import createElement from "../utils/create-elem";
export default function Header(value: string) {
  const header = createElement("h1", { className: ["title"] }, value);

  return header;
}
