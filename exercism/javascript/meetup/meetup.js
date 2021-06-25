//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const dayMap = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
};

const getAllDaysByMonth = (date, month, day) => {
  let days = [];
  while (date.getMonth() === month) {
    if (date.getDay() === day) {
      days.push(date.getDate());
    }
    date.setDate(date.getDate() + 1);
  }
  return days;
};

const findTeenthDate = (days) => {
  return days.find((d) => d > 12 && d < 20);
};

const getterMap = {
  teenth: findTeenthDate,
  first: (days) => days[0],
  second: (days) => days[1],
  third: (days) => days[2],
  fourth: (days) => days[3],
  fifth: (days) => days[4],
  last: (days) => days.pop(),
};

export const meetup = (year, month, number, weekday) => {
  const monthIndex = month - 1;
  const days = getAllDaysByMonth(
    new Date(year, monthIndex, 1),
    monthIndex,
    dayMap[weekday.toLowerCase()]
  );
  return new Date(year, monthIndex, getterMap[number](days));
};
