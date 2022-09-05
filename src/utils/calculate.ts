interface returnCalculate {
  records: string[][];
  totalHour: number;
  totalMin: number;
  count: number;
}

export default function calculate(data: string): returnCalculate {
  let totalHour = 0,
    totalMin = 0,
    count = 0;

  const records = data.split("\n").reduce((prev: string[][], curr: string) => {
    if (!curr) {
      prev.push(["", "", "", "", ""]);
      return prev;
    }

    const [date, day, start, end] = curr.split(" ").filter((d) => d !== "");

    if (start === "결근") {
      prev.push([date, day, "결근", "결근", "결근"]);
      return prev;
    }

    const [h, m] = getHourAndMinByTime(start, end);
    totalHour += h;
    totalMin += m;
    count += 1;

    prev.push([date, day, start, end, `${h}시간 ${m}분`]);

    return prev;
  }, []);

  totalHour += Math.floor(totalMin / 60);
  totalMin %= 60;

  return { records, totalHour, totalMin, count };
}

function getHourAndMinByTime(start: string, end: string) {
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
