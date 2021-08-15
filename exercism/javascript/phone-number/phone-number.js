//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const REGEX_LETTERS = /[A-z]/g;
const REGEX_NON_NUMBERS = /\D/g;

const validators = [
  (n) => {
    if (n.match(REGEX_LETTERS)) {
      return 'Letters not permitted';
    }
  },
  (n) => {
    if (n.match(REGEX_NON_NUMBERS)) {
      return 'Punctuations not permitted';
    }
  },
  ({ length }) => {
    if (length < 10) {
      return 'Incorrect number of digits';
    } else if (length === 11) {
      return '11 digits must start with 1';
    } else if (length > 11) {
      return 'More than 11 digits';
    }
  },
  ([areaCodeDigit, ...rest]) => {
    if (areaCodeDigit === '0') {
      return 'Area code cannot start with zero';
    } else if (areaCodeDigit === '1') {
      return 'Area code cannot start with one';
    }
  },
  (n) => {
    const exchangeCodeDigit = n[3];
    if (exchangeCodeDigit === '0') {
      return 'Exchange code cannot start with zero';
    } else if (exchangeCodeDigit === '1') {
      return 'Exchange code cannot start with one';
    }
  },
];

export const clean = (phoneNumber) => {
  let cleanPhoneNumber = phoneNumber.replaceAll(/[()\-+\s.]/gi, '');
  if (cleanPhoneNumber.length === 11 && cleanPhoneNumber[0] === '1') {
    cleanPhoneNumber = cleanPhoneNumber.slice(1);
  }
  const errors = validators
    .map((fn) => {
      return fn(phoneNumber);
    })
    .filter(Boolean);
  // for now only throw the first caught error, but maybe
  //  in the future we'll want to list all errors in the UI
  if (errors.length > 0) {
    throw new Error(errors[0]);
  }
  return phoneNumber;
};
