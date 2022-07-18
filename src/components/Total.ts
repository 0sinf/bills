import createElement from "../utils/create-elem";

export default function Total(
  totalHour: number,
  totalMin: number,
  count: number
) {
  return createElement(
    "p",
    { className: ["result"] },
    `Total: 총 ${count}일 간 ${totalHour}시간 ${totalMin}분`
  );
}
