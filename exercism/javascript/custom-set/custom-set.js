//
// This is only a SKELETON file for the 'Custom Set' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class CustomSet {
  constructor(arr = []) {
    this._arr = arr;
  }

  get arr() {
    return this._arr;
  }

  get size() {
    return this._arr.length;
  }

  empty() {
    return this._arr.length === 0;
  }

  contains(val) {
    return this._arr.includes(val);
  }

  add(val) {
    if (!this.contains(val)) {
      this._arr.push(val);
    }

    return this;
  }

  subset(sub) {
    if (this.empty()) {
      return true;
    }
    if (sub.empty()) {
      return false;
    }
    return sub.arr.join('').includes(this._arr.join(''));
  }

  disjoint(dis) {
    if (this.empty() || dis.empty()) {
      return true;
    }
    return !this._arr.some((a) => dis.contains(a));
  }

  eql(compare) {
    if (this.empty() && !compare.empty()) {
      return false;
    }
    if (this.size !== compare.size) {
      return false;
    }
    return this._arr.every((n) => compare.contains(n));
  }

  union(set2) {
    set2.arr.forEach((n) => {
      this.add(n);
    });
    return this;
  }

  intersection(set2) {
    let result = [];
    set2.arr.forEach((n) => {
      if (this.contains(n)) {
        result.push(n);
      }
    });
    return new CustomSet(result);
  }

  difference(set2) {
    let result = [];
    this.arr.forEach((n) => {
      if (!set2.contains(n)) {
        result.push(n);
      }
    });
    return new CustomSet(result);
  }
}
