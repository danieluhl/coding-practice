//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(val = []) {
    this.values = val;
  }

  append(newList) {
    this.values = [...this.values, ...newList.values];
    return this;
  }

  concat(list) {
    if (!list.values.length) {
      return this;
    }
    list.values.forEach((val) => {
      this.append(val);
    });
    return this;
  }

  filter(fn) {
    let result = [];
    for (let i = 0; i < this.length(); i++) {
      if (fn(this.values[i])) {
        result[result.length] = this.values[i];
      }
    }
    return new List(result);
  }

  map(fn) {
    let result = [];
    for (let i = 0; i < this.length(); i++) {
      result[result.length] = fn(this.values[i]);
    }
    return new List(result);
  }

  length() {
    return this.values.length;
  }

  foldl(fn, initial) {
    let acc = initial;
    for (let i = 0; i < this.length(); i++) {
      acc = fn(acc, this.values[i]);
    }
    return acc;
  }

  foldr(fn, initial) {
    let acc = initial;
    let i = this.length();
    while (i--) {
      acc = fn(acc, this.values[i]);
    }
    return acc;
  }

  reverse() {
    const result = [];
    let i = this.length();
    while (i--) {
      result[result.length] = this.values[i];
    }
    return new List(result);
  }
}
