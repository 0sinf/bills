import createElement from "../utils/create-elem";

export default function Button({
  onclick,
  value,
}: {
  onclick: EventListener;
  value: string;
}) {
  const button = createElement(
    "button",
    { className: ["button"], events: { type: "click", action: onclick } },
    value
  );

  return button;
}
