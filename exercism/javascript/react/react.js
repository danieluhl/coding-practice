//
// This is only a SKELETON file for the 'React' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InputCell {
  constructor(value) {
    this.value = value;
    this.compute = () => {};
  }

  setCompute(fn) {
    this.compute = fn;
  }

  setValue(value) {
    this.value = value;
    this.compute();
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    this.inputCells = inputCells;
    inputCells.forEach((cell) =>
      cell.setCompute(() => {
        this.compute();
      })
    );
    this.fn = fn;
    this.val = fn(this.inputCells);
    this.cbs = new Set();
    this.comp = () => {};
  }

  setCompute(fn) {
    this.comp = fn;
  }

  compute() {
    this.val = this.fn(this.inputCells);
    this.cbs.forEach((fn) => fn(this));
  }

  get value() {
    this.comp();
    return this.val;
  }

  addCallback(cb) {
    this.cbs.add(cb);
  }

  removeCallback(cb) {
    this.cbs.remove(cb);
  }
}

export class CallbackCell {
  constructor(fn) {
    this.fn = fn;
  }

  get values() {}
}
