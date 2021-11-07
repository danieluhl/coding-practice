//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const UPPER_CASE_MAX = 'Z'.charCodeAt(0);
const UPPER_CASE_MIN = 'A'.charCodeAt(0);
const LOWER_CASE_MAX = 'z'.charCodeAt(0);
const LOWER_CASE_MIN = 'a'.charCodeAt(0);

const getBounds = (charCode) => {
  return charCode <= LOWER_CASE_MAX && charCode >= LOWER_CASE_MIN
    ? [LOWER_CASE_MAX, LOWER_CASE_MIN]
    : [UPPER_CASE_MAX, UPPER_CASE_MIN];
};

const CHAR_REGEX = /[a-zA-Z]/;

export class RotationalCipher {
  static rotate(text, n) {
    return String.fromCharCode.apply(
      null,
      Array.from(text).map((char) => {
        const charCode = char.charCodeAt(0);
        if (!CHAR_REGEX.test(char)) {
          return charCode;
        }
        const [max, min] = getBounds(charCode);
        return ((charCode + n - min) % (max - min + 1)) + min;
      })
    );
  }
}
