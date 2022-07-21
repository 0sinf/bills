import createElement from "../utils/create-elem";
import "../css/loading.css";

export default function Loading() {
  const loading = createElement("div", { className: ["container"] }, [
    createElement("span", { className: ["dot"] }, null),
  ]);

  return loading;
}
