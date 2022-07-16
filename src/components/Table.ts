import createElement from "../utils/create-elem";
import TableHead from "./TableHead";

export default function Table() {
  const table = createElement("div", { className: ["table"] }, [
    TableHead(["날짜", "요일", "출근 시간", "퇴근 시간", "시간"]),
  ]);

  return table;
}
