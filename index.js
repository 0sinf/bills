function createElem(type, className, option) {
  const elem = document.createElement(type);
  elem.classList.add(className);

  if (!option) {
    return elem;
  }

  Object.entries(option).forEach(([key, value]) => {
    elem[key] = value;
  });

  return elem;
}

function displayInit() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const h = createElem("h1", "title", { innerText: "근무 시간 입력하기" });

  const content = createElem("article", "content");

  const textarea = createElem("textarea", "textarea", {
    placeholder: "예시) 6/7 화 11:00 18:00",
  });

  const button = createElem("button", "button", {
    onclick: () => displayResult(textarea.value, 2),
    innerText: "총 근무 시간 확인",
  });

  content.append(textarea, button);
  container.append(h, content);
}

function getTable(tbody) {
  const tb = createElem("div", "table");

  const th = createElem("div", "table__head");

  const headItems = ["날짜", "요일", "출근 시간", "퇴근 시간", "시간"];
  headItems.forEach((item) => {
    const td = createElem("div", "table__items", { innerText: item });
    th.append(td);
  });

  tb.append(th, tbody);

  return tb;
}

function displayResult(times, timeout) {
  const container = document.getElementById("container");

  container.innerText = "Loading ... ";

  setTimeout(() => {
    container.innerHTML = "";

    const [totalH, totalM, tbody, day] = calculate(times);

    const h = createElem("h1", "title", { innerText: "입력 결과 출력" });

    const content = createElem("div", "content");
    content.append(getTable(tbody));

    const result = getResultMessage(totalH, totalM, day);

    const button = createElem("button", "button", {
      onclick: () => displayInit(),
      innerText: "다시 입력하기",
    });

    container.append(h, content, result, button);
  }, timeout * 1000);
}

function getTableRow(items) {
  const tr = createElem("div", "table__row");

  items.forEach((item) => {
    const td = createElem("div", "table__items", { innerText: item });
    tr.append(td);
  });

  return tr;
}

function getResultMessage(totalH, totalM, day) {
  const result = createElem("div", "result", {
    innerText: `Total time: 총 ${day}일 간 ${totalH}시간 ${totalM}분`,
  });
  return result;
}

displayInit();
