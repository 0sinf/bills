"use strict";

const fs = require("fs");
const WAGE = 10000;

function checkTimeValue(start, end, hour, min) {
  if (start !== Number(hour)) {
    console.log(`${start} doesn't not equal ${hour} in HOUR.`);
  }

  if (end === 0 && min) {
    console.log(`Minute isn't zero.`);
  }

  if (end !== 0 && end !== Number(min)) {
    console.log(`${end} doesn't not equal ${min} in HOUR.`);
  }
}

function getHourAndMin(start, end) {
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

      const [h, m] = getHourAndMin(start, end);

      checkTimeValue(h, m, hour, min);

      prev[0] += h;
      prev[1] += m;
      return prev;
    },
    [0, 0]
  );

  totalH += Math.floor(totalM / 60);
  totalM = totalM % 60;

  console.log(`Total time: ${totalH}시간 ${totalM}분`);

  console.log(
    `Total wage: ₩${(
      totalH * WAGE +
      Math.floor((totalM / 60) * WAGE)
    ).toLocaleString("ko-kr")}원`
  );
}

main();
