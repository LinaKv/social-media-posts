// 'Fri Dec 29 19:15:04 +0000 2017' to DD/MM/YYYY HH:MM
export function formattedDate(date) {
  const dateArr = date.toLowerCase().split(" ");
  const time = dateArr[3].split(":");
  const month = dateArr[1];
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  const monthNum = months.indexOf(month) + 1;
  const day = parseInt(dateArr[2], 10);
  const year = parseInt(dateArr[5], 10);

  let hour = parseInt(time[0], 10);
  if (hour[0] === "0") {
    hour = `0${parseInt(time[0])}`;
  }

  let min = time[1];
  if (min[0] === "0") {
    min = `0${parseInt(time[1])}`;
  }

  return `${day}/${monthNum}/${year} ${hour}:${min}`;
}
