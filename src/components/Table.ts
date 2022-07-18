import createElement from "../utils/create-elem";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import store from "../store";
import calculate from "../utils/calculate";
import Total from "./Total";

export default function Table() {
  const data = store.getState();
  const { records, totalHour, totalMin } = calculate(data);

  const table = createElement("div", { className: ["table"] }, [
    TableHead(["날짜", "요일", "출근 시간", "퇴근 시간", "시간"]),
    ...records.map((record) => TableRow(record)),
    Total(totalHour, totalMin),
  ]);

  return table;
}
