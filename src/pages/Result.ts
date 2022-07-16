import createElement from "../utils/create-elem";
import Header from "../components/Header";
import Button from "../components/Button";
import { go } from "../router/index";

export default function Result() {
  const container = createElement("div", { className: ["container"] }, [
    Header("입력 결과 출력"),
  ]);

  const button = Button({ onclick: go("/"), value: "다시 입력하기" });

  container.append(button);

  return container;
}
