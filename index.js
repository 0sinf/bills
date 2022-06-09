function display() {
  const container = document.getElementById("container");

  const h = document.createElement("h1");
  h.classList.add("title");
  h.innerText = "근무 시간 입력하기";

  const article = document.createElement("article");
  article.classList.add("content");
  article.id = "content";

  const textarea = document.createElement("textarea");
  textarea.classList.add("textarea");
  textarea.id = "times";
  textarea.placeholder = "예시) 6/7 화 11:00 18:00";

  const button = document.createElement("button");
  button.classList.add("button");
  button.onclick = () => calculate();
  button.innerText = "총 근무 시간 확인";

  article.append(textarea, button);
  container.append(h, article);
}

function createButton() {
  const button = document.createElement("button");
  button.classList.add("button");
  button.onclick = () => display();
  button.innerText = "다시 입력하기";

  return button;
}

function getTable(trs) {
  const tb = document.createElement("div");
  tb.classList.add("table");

  const th = document.createElement("div");
  th.classList.add("table__head");

  const headItems = ["날짜", "요일", "출근 시간", "퇴근 시간", "시간"];
  const tds = headItems.map((item) => {
    const td = document.createElement("div");
    td.classList.add("table__items");
    td.innerText = item;
    return td;
  });

  th.append(tds);

  tb.append(th, trs);

  return tb;
}

display();
