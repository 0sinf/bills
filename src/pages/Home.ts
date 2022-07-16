import createElement from "../utils/create-elem";
import Header from "../components/Header";
export default function Home() {
  const container = createElement("div", { className: ["container"] }, [
    Header("근무 시간 입력"),
  ]);

  return container;
}
