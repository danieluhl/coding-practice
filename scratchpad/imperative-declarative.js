
const needle = [1, 2, 3];
const haystack = [1, 3]

const isSubset = (domain, subset) => {
  for(let i = 0; i < subset.length; i++) {
    if(domain.indexOf(subset[i]) === -1) {
      return false;
    }
  }
  return true;
}

const isSubset2 = (domain, subset) => subset.every(el => domain.includes(el))

console.log(imp(haystack, needle));
console.log(dec(haystack, needle));