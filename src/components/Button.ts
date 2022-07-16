import createElement from "../utils/create-elem";

export default function Button({
  onclick,
  value,
}: {
  onclick: (evt: Event) => void;
  value: string;
}) {
  const button = createElement(
    "button",
    { className: ["button"], events: { type: "click", action: onclick } },
    value
  );

  return button;
}
