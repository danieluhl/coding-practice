//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const sortWord = (word) => word.split('').sort().join('');

export const findAnagrams = (word, list) => {
  word = word.toLowerCase();
  const sortedWord = sortWord(word);
  return list.filter((compare) => {
    compare = compare.toLowerCase();
    return compare !== word && sortWord(compare) === sortedWord;
  });
};
