import createElement from "../utils/create-elem";

export default function Total(totalHour: number, totalMin: number) {
  return createElement(
    "p",
    { className: ["result"] },
    `Total: ${totalHour}시간 ${totalMin}분`
  );
}
