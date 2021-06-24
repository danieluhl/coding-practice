//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const squareRoot = (num) => {
  let initialEstimate = num >> 1;
  if (initialEstimate) {
    let newEstimate = (initialEstimate + num / initialEstimate) >> 1;
    while (newEstimate < initialEstimate) {
      initialEstimate = newEstimate;
      newEstimate = (initialEstimate + num / initialEstimate) >> 1;
    }
    return initialEstimate;
  }
  return num;
};
