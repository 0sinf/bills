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

function createElem(type, className, option) {
  const elem = document.createElement(type);
  elem.classList.add(className);

  Object.entries(option).forEach(([key, value]) => {
    elem[key] = value;
  });

  return elem;
}

function displayResult(times) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const [totalH, totalM, tbody, day] = calculate(times);

  const h = document.createElement("h1");
  h.classList.add("title");
  h.innerText = "입력 결과 출력";

  const content = document.createElement("div");
  content.classList.add("content");
  content.append(getTable(tbody));

  const result = getResultMessage(totalH, totalM, day);

  const button = document.createElement("button");
  button.classList.add("button");
  button.onclick = () => displayInit();
  button.innerText = "다시 입력하기";

  container.append(h, content, result, button);
}

function getTableRow(items) {
  const tr = document.createElement("div");
  tr.classList.add("table__row");

  items.forEach((item) => {
    const td = document.createElement("div");
    td.classList.add("table__items");
    td.innerText = item;
    tr.append(td);
  });

  return tr;
}

function getResultMessage(totalH, totalM, day) {
  const result = document.createElement("div");
  result.classList.add("result");
  result.innerText = `Total time: 총 ${day}일 간 ${totalH}시간 ${totalM}분`;
  return result;
}

displayInit();
