//
// This is only a SKELETON file for the 'House' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/*

'This is the farmer sowing his corn',
'that kept the rooster that crowed in the morn',
'that woke the priest all shaven and shorn',
'that married the man all tattered and torn',
'that kissed the maiden all forlorn',
'that milked the cow with the crumpled horn',
'that tossed the dog',
'that worried the cat',
'that killed the rat',
'that ate the malt',
'that lay in the house that Jack built.',
'',
'This is the horse and the hound and the horn',
'that belonged to the farmer sowing his corn',
'that kept the rooster that crowed in the morn',
'that woke the priest all shaven and shorn',
'that married the man all tattered and torn',
'that kissed the maiden all forlorn',
'that milked the cow with the crumpled horn',
'that tossed the dog',
'that worried the cat',
'that killed the rat',
'that ate the malt',
'that lay in the house that Jack built.',

*/

let subjectVerb = [
  ['ate', 'malt'],
  ['killed', 'rat'],
  ['worried', 'cat'],
  ['tossed', 'dog'],
  ['milked', 'cow with the crumpled horn'],
  ['kissed', 'maiden all forlorn'],
  ['married', 'man all tattered and torn'],
  ['woke', 'priest all shaven and shorn'],
  ['kept', 'rooster that crowed in the morn'],
  ['belonged to', 'farmer sowing his corn'],
  ['', 'horse and the hound and the horn'],
];

export class House {
  static verse(num) {
    if (num === 1) {
      return [`This is the house that Jack built.`];
    }
    num = num - 2;
    let result = [`This is the ${subjectVerb[num][1]}`];
    num--;
    for (let i = num; i >= 0; i--) {
      result.push(`that ${subjectVerb[i][0]} the ${subjectVerb[i][1]}`);
    }
    result.push('that lay in the house that Jack built.');
    return result;
  }

  static verses(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
      result = [...result, ...House.verse(i), ''];
    }
    result.pop();
    return result;
  }
}
