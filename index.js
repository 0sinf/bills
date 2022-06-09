function displayInit() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const h = document.createElement("h1");
  h.classList.add("title");
  h.innerText = "근무 시간 입력하기";

  const content = document.createElement("article");
  content.classList.add("content");
  content.id = "content";

  const textarea = document.createElement("textarea");
  textarea.classList.add("textarea");
  textarea.id = "times";
  textarea.placeholder = "예시) 6/7 화 11:00 18:00";

  const button = document.createElement("button");
  button.classList.add("button");
  button.onclick = () => displayResult(textarea.value);
  button.innerText = "총 근무 시간 확인";

  content.append(textarea, button);
  container.append(h, content);
}

function getTable(tbody) {
  const tb = document.createElement("div");
  tb.classList.add("table");

  const th = document.createElement("div");
  th.classList.add("table__head");

  const headItems = ["날짜", "요일", "출근 시간", "퇴근 시간", "시간"];
  headItems.forEach((item) => {
    const td = document.createElement("div");
    td.classList.add("table__items");
    td.innerText = item;
    th.append(td);
  });

  tb.append(th, tbody);

  return tb;
}

displayInit();
