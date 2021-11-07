//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const map = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
};

const stopCodons = ['UAA', 'UAG', 'UGA'];

export const translate = (codon = '') => {
  const codons = codon.match(/[A-Z]{1,3}/g) || [];
  let result = [];
  for (let i = 0; i < codons.length; i++) {
    const c = codons[i];
    if (stopCodons.includes(c)) {
      return result;
    } else if (!map[c] || c.length !== 3) {
      throw new Error('Invalid codon');
    }
    result.push(map[c]);
  }
  return result;
};
