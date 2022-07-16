import createElement from "../utils/create-elem";

export default function Textarea(placeholder: string) {
  const textarea = createElement(
    "textarea",
    { className: ["textarea"], placeholder },
    null
  );

  return textarea;
}
