//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// export const twoFer = (name = 'you') => `One for ${name}, one for me.`;
const DEFAULT_NAME = 'you';
const OPENING = 'One for ';
const CLOSING = ', one for me.';
function getNameWithDefault() {
  if (
    typeof arguments !== 'undefined' &&
    arguments.length > 0 &&
    typeof arguments[0] !== 'undefined'
  ) {
    return arguments[0];
  } else {
    return DEFAULT_NAME;
  }
}
function toTitleCase(name) {
  const lowerName = name.toLowerCase();
  const firstLetter = name[0];
  const nameNoFirst = lowerName.slice(1);
  if (name === DEFAULT_NAME) {
    return firstLetter + nameNoFirst;
  } else {
    return firstLetter.toUpperCase() + lowerName.slice(1);
  }
}
const compose = (a, b) => (arg) => b(a(arg));
export function twoFer() {
  let name;
  if (typeof arguments !== 'undefined' && arguments.length > 0) {
    name = arguments[0];
  } else {
    name = undefined;
  }
  const getFinalName = compose(getNameWithDefault, toTitleCase);
  return OPENING + getFinalName(name) + CLOSING;
}
