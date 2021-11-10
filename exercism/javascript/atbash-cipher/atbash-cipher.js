//
// This is only a SKELETON file for the 'Atbash Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const lowerA = 'a'.charCodeAt(0);
const lowerZ = 'z'.charCodeAt(0);

export const encode = (text) => {
  return [...text.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')]
    .map((l) => {
      if (!isNaN(l)) {
        return l;
      }
      return String.fromCharCode(lowerZ - (l.charCodeAt(0) - lowerA));
    })
    .join('')
    .replace(/\w{5}/g, (match) => `${match} `)
    .trimEnd();
};

export const decode = (text) => {
  return [...text.toLowerCase().replace(/\s/g, '')]
    .map((l) => {
      if (!isNaN(l)) {
        return l;
      }
      return String.fromCharCode(lowerZ - l.charCodeAt(0) + lowerA);
    })
    .join('');
};
