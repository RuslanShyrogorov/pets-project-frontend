import dayjs from 'dayjs';

const ageArr = [
  { ageStr: 'one', ageNum: 1 },
  { ageStr: 'two', ageNum: 2 },
  { ageStr: 'three', ageNum: 3 },
  { ageStr: 'four', ageNum: 4 },
  { ageStr: 'five', ageNum: 5 },
  { ageStr: 'six', ageNum: 6 },
  { ageStr: 'seven', ageNum: 7 },
  { ageStr: 'eight', ageNum: 8 },
  { ageStr: 'nine', ageNum: 9 },
  { ageStr: 'ten', ageNum: 10 },
  { ageStr: 'eleven', ageNum: 11 },
  { ageStr: 'twelve', ageNum: 12 },
  { ageStr: 'thirteen', ageNum: 13 },
  { ageStr: 'fourteen', ageNum: 14 },
  { ageStr: 'fifteen', ageNum: 15 },
  { ageStr: 'sixteen', ageNum: 16 },
  { ageStr: 'seventeen', ageNum: 17 },
  { ageStr: 'eighteen', ageNum: 18 },
  { ageStr: 'nineteen', ageNum: 19 },
  { ageStr: 'twenty', ageNum: 20 },
];

export function renameAgeDate(data) {
  const birthYear = dayjs(data).year();
  const todayYear = dayjs(new Date()).year();
  const durateYear = todayYear - birthYear;

  const birthMonth = dayjs(data).month() + 1;
  const todayMonth = dayjs(new Date()).month() + 1;
  const lastYearMonths = 12 - birthMonth;
  const month = lastYearMonths + todayMonth;

  const durateMonth = todayMonth - birthMonth;

  if (birthYear === todayYear) {
    const { ageStr } = ageArr.find(item => item.ageNum === durateMonth);
    return ageStr === 'one' ? `${ageStr} month` : `${ageStr} months`;
  }

  if (birthYear !== todayYear && month <= 12) {
    const { ageStr } = ageArr.find(item => item.ageNum === month);
    return ageStr === 'one' ? `${ageStr} month` : `${ageStr} months`;
  }

  if (durateYear > 0 && month > 12) {
    const { ageStr } = ageArr.find(item => item.ageNum === durateYear);
    return ageStr === 'one' ? `${ageStr} year` : `${ageStr} years`;
  }
}

// console.log(renameAgeDate('2022-03-22T22:00:00.000Z')); // => eleven months
// console.log(renameAgeDate('2022-07-22T22:00:00.000Z')); // => seven months
// console.log(renameAgeDate('2023-01-22T22:00:00.000Z')); // => one month
// console.log(renameAgeDate('2019-01-22T22:00:00.000Z')); // => four years
// console.log(renameAgeDate('2022-01-22T22:00:00.000Z')); // => one year
// console.log(renameAgeDate('2012-01-22T22:00:00.000Z')); // => eleven years
// console.log(renameAgeDate('2007-01-22T22:00:00.000Z')); // => sixteen years
