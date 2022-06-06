function onClick() {
  const times = document.getElementById("times");
  const result = document.getElementById("result");

  const [totalH, totalM] = getTotalTimes(times.value);

  result.innerHTML = getResult(totalH, totalM);
}

function getTotalTimes(times) {
  let [totalH, totalM] = times.split("\n").reduce(
    (prev, time) => {
      if (!time) {
        return prev;
      }

      const [date, dayOfWeek, start, end] = time.split(" ");

      const [hour, min] = getHourAndMinByTime(start, end);

      prev[0] += hour;
      prev[1] += min;
      return prev;
    },
    [0, 0]
  );

  totalH += Math.floor(totalM / 60);
  totalM = totalM % 60;

  return [totalH, totalM];
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

function getResult(totalH, totalM) {
  return `
  Total time: ${totalH}시간 ${totalM}분
  `;
}
