const smallA = 'a'.charCodeAt(0);
const alphaLen = 26;

const isCoprime = (a) => {
  // even numbers are never coprime with 26
  if (a % 2 === 0) {
    return false;
  }
  if (alphaLen % a === 0) {
    return false;
  }
  return true;
};

export const encode = (phrase, { a, b }) => {
  if (!isCoprime(a)) {
    throw new Error('a and m must be coprime.');
  }
  phrase = phrase.toLowerCase().replace(/[^a-zA-Z0-9]*/g, '');
  // (ax + b) % m
  return [...phrase]
    .map((letter) => {
      if (!isNaN(letter)) {
        return letter;
      }
      const letterIndex = letter.charCodeAt(0) - smallA;
      return String.fromCharCode(((a * letterIndex + b) % alphaLen) + smallA);
    })
    .map((l, i) => (i > 0 && i % 5 === 0 ? ` ${l}` : l))
    .join('');
};

const getMMI = (a) => {
  for (let i = 0; i < 100; i++) {
    if ((a * i) % alphaLen === 1) {
      return i;
    }
  }
};

export const decode = (phrase, { a, b }) => {
  phrase = phrase.toLowerCase().replace(/\s/g, '');
  //a^-1(y - b) mod m`
  if (!isCoprime(a)) {
    throw new Error('a and m must be coprime.');
  }
  const mmi = getMMI(a);
  return [...phrase]
    .map((letter) => {
      const letterIndex = letter.charCodeAt(0) - smallA;
      console.log({ letter, letterIndex, a, b, mmi });
      console.log((mmi * (letterIndex - b)) % alphaLen);
      console.log(
        String.fromCharCode(((mmi * (letterIndex - b)) % alphaLen) + smallA)
      );
      return String.fromCharCode(
        ((mmi * (letterIndex - b)) % alphaLen) + smallA
      );
    })
    .join('');
};
