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

function createButton() {
  return '<button class="button" onclick="display()">다시 입력하기</button>';
}

function getTable(listOfTr) {
  return `
    <table>
      <thead>
        <tr>
          <th>날짜</th>
          <th>요일</th>
          <th>출근 시간</th>
          <th>퇴근 시간</th>
          <th>시간</th>
        </tr>
      </thead>
      ${listOfTr}
    </table>
  `;
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

      const tr = `<tr><td>${date}</td><td>${dayOfWeek}</td><td>${start}</td><td>${end}</td><td>${hour}시간 ${min}분</td></tr>`;

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
