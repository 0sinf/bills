function displayResult(times) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const [totalH, totalM, tbody, day] = getTotalTimes(times);

  const h = document.createElement("h1");
  h.classList.add("title");
  h.innerText = "입력 결과 출력";

  const content = document.createElement("div");
  content.classList.add("content");
  content.append(getTable(tbody));

  const result = getResult(totalH, totalM, day);

  const button = document.createElement("button");
  button.classList.add("button");
  button.onclick = () => displayInit();
  button.innerText = "다시 입력하기";

  container.append(h, content, result, button);
}

function getTotalTimes(times) {
  let cnt = 0;
  const tbody = document.createElement("div");
  tbody.classList.add("table__body");

  let [totalH, totalM] = times.split("\n").reduce(
    (prev, time) => {
      if (!time) {
        return prev;
      }

      const [date, dayOfWeek, start, end] = time.split(" ");

      const [hour, min] = getHourAndMinByTime(start, end);

      const tr = getTableRow([
        date,
        dayOfWeek,
        start,
        end,
        `${hour}시간 ${min}분`,
      ]);

      prev[0] += hour;
      prev[1] += min;
      tbody.append(tr);
      cnt += 1;
      return prev;
    },
    [0, 0]
  );

  totalH += Math.floor(totalM / 60);
  totalM = totalM % 60;

  return [totalH, totalM, tbody, cnt];
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

function getHourAndMinByTime(start, end) {
  const [startHour, startMin] = start.split(":").map(Number);
  const [endHour, endMin] = end.split(":").map(Number);

  let h = endHour - startHour;
  let m = endMin - startMin;

  if (endMin - startMin < 0) {
    m = 60 + m;
    h = h - 1;
  }

  return [h, m];
}

function getResult(totalH, totalM, day) {
  const result = document.createElement("div");
  result.classList.add("result");
  result.innerText = `Total time: 총 ${day}일 간 ${totalH}시간 ${totalM}분`;
  return result;
}
