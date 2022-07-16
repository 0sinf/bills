import createElement from "../utils/create-elem";
import Header from "../components/Header";
import Article from "../components/Article";
import Textarea from "../components/Textarea";
import Button from "../components/Button";
import { go } from "../router/index";
export default function Home() {
  const container = createElement("div", { className: ["container"] }, [
    Header("근무 시간 입력"),
  ]);

  const textarea = Textarea("예시) 6/7 화 11:00 18:00");
  const button = Button({ onclick: go("/result"), value: "총 근무 시간 확인" });
  const article = Article([textarea, button]);

  container.append(article);

  return container;
}
