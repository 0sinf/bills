import createElement from "../utils/create-elem";
import TableData from "./TableData";

export default function TableHead(columns: string[]) {
  const head = createElement(
    "div",
    { className: ["table__head"] },
    columns.map((column) => TableData(column))
  );

  return head;
}
