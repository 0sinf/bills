import createElement from "../utils/create-elem";

export default function Loading() {
  const circle = createElement("span", { className: ["dot"] }, null);
  return circle;
}
