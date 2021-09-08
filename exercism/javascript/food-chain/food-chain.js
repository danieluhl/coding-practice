//
// This is only a SKELETON file for the 'Food Chain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const animals = [
  ['fly', ''],
  ['spider', `It wriggled and jiggled and tickled inside her.`],
  ['bird', `How absurd to swallow a bird!`],
  ['cat', `Imagine that, to swallow a cat!`],
  ['dog', `What a hog, to swallow a dog!`],
  ['goat', `Just opened her throat and swallowed a goat!`],
  ['cow', `I don't know how she swallowed a cow!`],
  ['horse', `She's dead, of course!`],
];

const parts = {
  start: (animal) => `I know an old lady who swallowed a ${animal}.`,
  middle: (animal1, animal2) =>
    `She swallowed the ${animal1} to catch the ${animal2}${
      animal2 === 'spider'
        ? ' that wriggled and jiggled and tickled inside her'
        : ''
    }.`,
  end: `I don't know why she swallowed the fly. Perhaps she'll die.\n`,
};

export class Song {
  verse(num) {
    let [animal, tagline] = animals[num - 1];
    tagline &&= `${tagline}\n`;
    const start = `${parts.start(animal)}\n${tagline}`;
    let verse = '';
    if (num === 8) {
      return `${start}${verse}`;
    }
    while (num-- > 1) {
      const [animal1] = animals[num];
      const [animal2] = animals[num - 1];
      verse += parts.middle(animal1, animal2) + '\n';
    }

    return `${start}${verse}${parts.end}`;
  }

  verses(start, end) {
    let verses = '';
    for (let i = start; i <= end; i++) {
      verses += this.verse(i) + '\n';
    }
    return verses;
  }
}
