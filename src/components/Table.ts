import createElement from "../utils/create-elem";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import store from "../store";
import calculate from "../utils/calculate";

export default function Table() {
  const data = store.getState();

  const { records, totalHour, totalMin } = calculate(data);

  const result = createElement(
    "p",
    { className: ["result"] },
    `Total: ${totalHour}시간 ${totalMin}분`
  );

  const table = createElement("div", { className: ["table"] }, [
    TableHead(["날짜", "요일", "출근 시간", "퇴근 시간", "시간"]),
    ...records.map((record) => TableRow(record)),
    result,
  ]);

  return table;
}
