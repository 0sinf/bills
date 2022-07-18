import createElement from "../utils/create-elem";
import store from "../store/index";

export default function Textarea(placeholder: string) {
  const handleInput = (evt: Event) => {
    const value = (evt.target as any).value;
    store.dispatch({ type: "calculate", data: value });
  };

  const textarea = createElement(
    "textarea",
    {
      className: ["textarea"],
      placeholder,
      events: {
        type: "input",
        action: handleInput,
      },
    },
    null
  );

  return textarea;
}
