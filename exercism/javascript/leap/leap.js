//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/*

on every year that is evenly divisible by 4
  except every year that is evenly divisible by 100
    unless the year is also evenly divisible by 400

*/

const checkDivisble = (year, num) => year % num === 0;

export const isLeap = (year) =>
  checkDivisble(year, 400) ||
  (checkDivisble(year, 4) && !checkDivisble(year, 100));
