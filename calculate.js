// FIXME: 하드코딩된 요소들 변경 필요 (Element, Value)

function calculate() {
  const container = document.getElementById("container");
  const times = document.getElementById("times");
  const content = document.getElementById("content");
  const result = document.getElementById("result");

  const [totalH, totalM, listOfTr, day] = getTotalTimes(times.value);

  content.innerHTML = getTable(listOfTr);
  result.innerHTML = getResult(totalH, totalM, day);
  container.innerHTML += createButton();
}

function getTotalTimes(times) {
  let cnt = 0;

  let [totalH, totalM, listOfTr] = times.split("\n").reduce(
    (prev, time) => {
      if (!time) {
        return prev;
      }

      const [date, dayOfWeek, start, end] = time.split(" ");

      const [hour, min] = getHourAndMinByTime(start, end);

      const tr = `
        <div class="table__body">
          <div class="table__items">${date}</div>
          <div class="table__items">${dayOfWeek}</div>
          <div class="table__items">${start}</div>
          <div class="table__items">${end}</div>
          <div class="table__items">${hour}시간 ${min}분</div>
        </div>`;

      prev[0] += hour;
      prev[1] += min;
      prev[2].push(tr);
      cnt += 1;
      return prev;
    },
    [0, 0, []]
  );

  totalH += Math.floor(totalM / 60);
  totalM = totalM % 60;

  return [totalH, totalM, listOfTr.join(""), cnt];
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
  return `
  Total time: 총 ${day}일 간 ${totalH}시간 ${totalM}분
  `;
}
