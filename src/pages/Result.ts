import createElement from "../utils/create-elem";
import Header from "../components/Header";

export default function Result() {
  const container = createElement("div", { className: ["container"] }, [
    Header("입력 결과 출력"),
  ]);

  return container;
}
