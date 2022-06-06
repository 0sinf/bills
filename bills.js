const fs = require("fs");
const WAGE = 10000;

function main() {
  const bills = fs.readFileSync("./bills.txt", { encoding: "utf-8" });

  let [totalH, totalM] = bills.split("\n").reduce(
    (prev, bill) => {
      if (!bill) {
        return prev;
      }

      const [date, dayOfWeek, start, end, hour, min] = bill
        .replace("시간", "")
        .replace("분", "")
        .split(" ");

      const [h, m] = getHourAndMinByTime(start, end);

      checkTimeValue(h, m, hour, min);

      prev[0] += h;
      prev[1] += m;
      return prev;
    },
    [0, 0]
  );

  totalH += Math.floor(totalM / 60);
  totalM = totalM % 60;

  getResult(totalH, totalM);
}

function getResult(totalH, totalM) {
  console.log(`Total time: ${totalH}시간 ${totalM}분`);

  console.log(
    `Total wage: ₩${(
      totalH * WAGE +
      Math.floor((totalM / 60) * WAGE)
    ).toLocaleString("ko-kr")}원`
  );
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

function checkTimeValue(h, m, hour, min) {
  if (isNotEqualHour(h, hour)) {
    console.log(`${h} doesn't not equal ${hour} in HOUR.`);
  }

  if (endIsZeroButMinIsNotZero(m, min)) {
    console.log(`Minute isn't zero.`);
  }

  if (isNotEqualMin(m, min)) {
    console.log(`${m} doesn't not equal ${min} in Minute.`);
  }
}

function isNotEqualHour(h, hour) {
  return h !== Number(hour);
}

function endIsZeroButMinIsNotZero(m, min) {
  return m === 0 && min;
}

function isNotEqualMin(m, min) {
  return m !== 0 && m !== Number(min);
}

main();
