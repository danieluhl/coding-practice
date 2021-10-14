//
// This is only a SKELETON file for the 'Forth' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isNumber = value => typeof value === 'number' && isFinite(value);
const isOperator = value => '+-/*'.includes(value);

export class Forth {
  constructor() {
    this._stack = [];
    this._replacers = [];
  }

  evaluate(ops) {
    ops = ops.toLowerCase();
    if (ops[0] === ':') {
      // user defined op, add to replace list
      ops = ops.slice(1, -1).trim().split(' ');
      const find = ops.shift();
      if (isNumber(parseInt(find))) {
        throw new Error('Invalid definition');
      }
      this._replacers.unshift([find, ops.join(' ')]);
      return;
    }
    this._replacers.forEach(([find, replace]) => {
      ops = ops.replaceAll(find, replace);
    });
    ops = ops.split(' ');
    ops.forEach(op => {
      if (isNumber(parseInt(op))) {
        this._stack.push(parseInt(op));
        return;
      }
      if (isOperator(op)) {
        const right = this._stack.pop();
        const left = this._stack.pop();
        if (left == null || right == null) {
          throw new Error('Stack empty');
        }
        const result = Math.floor(eval(`${left} ${op} ${right}`));
        if (!isNumber(result)) {
          throw new Error('Division by zero');
        }
        this._stack.push(result);
        return;
      }
      if (op === 'dup') {
        const toDup = this._stack[this._stack.length - 1];
        if (toDup == null) {
          throw new Error('Stack empty');
        }
        this._stack.push(toDup);
        return;
      }
      if (op === 'drop') {
        const toDrop = this._stack.pop();
        if (toDrop == null) {
          throw new Error('Stack empty');
        }
        return;
      }
      if (op === 'swap') {
        const left = this._stack.pop();
        const right = this._stack.pop();
        if (left == null || right == null) {
          throw new Error('Stack empty');
        }
        this._stack.push(left);
        this._stack.push(right);
        return;
      }
      if (op === 'over') {
        const left = this._stack.pop();
        const right = this._stack.pop();
        if (left == null || right == null) {
          throw new Error('Stack empty');
        }
        this._stack.push(right);
        this._stack.push(left);
        this._stack.push(right);
        return;
      }
      throw new Error('Unknown command');
    });
  }

  get stack() {
    return this._stack;
  }
}
