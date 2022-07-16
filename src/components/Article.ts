import createElement from "../utils/create-elem";

export default function Article(value: HTMLElement[] | null) {
  const contents = createElement("article", { className: ["content"] }, null);

  if (!value) {
    return contents;
  }

  contents.append(...value);

  return contents;
}
