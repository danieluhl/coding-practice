//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class NucleotideCounts {
  static parse(dna) {
    if (dna.match(/[^ATCG]/g)) {
      throw new Error('Invalid nucleotide in strand');
    }
    const dnaCountMap = [...dna].reduce((acc, next) => ++acc[next] && acc, {
      A: 0,
      C: 0,
      G: 0,
      T: 0,
    });
    return `${dnaCountMap['A']} ${dnaCountMap['C']} ${dnaCountMap['G']} ${dnaCountMap['T']}`;
  }
}
