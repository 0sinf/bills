import createElement from "../utils/create-elem";
import TableData from "./TableData";
export default function TableRow(data: string[]) {
  const tr = createElement(
    "div",
    { className: ["table__row"] },
    data.map((d) => TableData(d))
  );

  return tr;
}
