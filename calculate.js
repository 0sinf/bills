function calculate(times) {
  let cnt = 0;
  const tbody = document.createElement("div");
  tbody.classList.add("table__body");

  let [totalH, totalM] = times.split("\n").reduce(
    (prev, time) => {
      if (!time) {
        return prev;
      }

      const [date, dayOfWeek, start, end] = time.split(" ");

      if (checkExcept(start, end)) {
        const tr = getTableRow([date, dayOfWeek, "결근", "결근", "0시간 0분"]);
        tbody.append(tr);
        return prev;
      }

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

function checkExcept(start, end) {
  if (start) {
    return start === "결근" ? true : false;
  }
  return !start && !end;
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
