import createElement from "../utils/create-elem";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

export default function Table() {
  // FIXME: textarea로 입력된 데이터 받아오기
  const records = [
    ["d", "d", "d", "d", "d"],
    ["d", "d", "d", "d", "d"],
  ];

  const table = createElement("div", { className: ["table"] }, [
    TableHead(["날짜", "요일", "출근 시간", "퇴근 시간", "시간"]),
    // TODO: Add body with Row
    ...records.map((record) => TableRow(record)),
  ]);

  return table;
}
