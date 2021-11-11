//
// This is only a SKELETON file for the 'Zipper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Zipper {
  constructor(root = null, focus = null, parents = []) {
    this.root = { ...root };
    this.focus = focus || this.root;
    this.parents = parents;
  }

  static fromTree(root) {
    return new Zipper(root);
  }

  toTree() {
    return this.root;
  }

  value() {
    return this.focus.value;
  }

  left() {
    if (this.focus.left === null) {
      return null;
    }
    this.parents.push(this.focus);
    this.focus.left = { ...this.focus.left };
    return new Zipper(this.root, this.focus.left, this.parents);
  }

  right() {
    if (this.focus.right === null) {
      return null;
    }
    this.parents.push(this.focus);
    this.focus.right = { ...this.focus.right };
    return new Zipper(this.root, this.focus.right, this.parents);
  }

  up() {
    if (this.parents.length === 0) {
      return null;
    }
    this.focus = this.parents.pop();
    return new Zipper(this.root, this.focus, this.parents);
  }

  setValue(val) {
    this.focus.value = val;
    return new Zipper(this.root, this.focus, this.parents);
  }

  setLeft(val) {
    this.focus.left = val;
    return new Zipper(this.root, this.focus, this.parents);
  }

  setRight(val) {
    this.focus.right = val;
    return new Zipper(this.root, this.focus, this.parents);
  }
}
