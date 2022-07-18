export default function calculate(data: string): string[][] {
  return data.split("\n").reduce((prev: string[][], curr: string) => {
    if (!curr) {
      prev.push(["", "", "", "", ""]);
      return prev;
    }

    const [date, day, start, end] = curr.split(" ");

    if (start === "결근") {
      prev.push([date, day, "결근", "결근", "결근"]);
      return prev;
    }

    const [h, m] = getHourAndMinByTime(start, end);

    prev.push([date, day, start, end, `${h}시간 ${m}분`]);

    return prev;
  }, []);
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
