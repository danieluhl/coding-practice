const root = require('./tree-data');

const isOverallBalanced = (root) => {
  if (!root.left && !root.right) {
    return true;
  }
  if (!isBalanced(root)) {
    return false;
  }
  const isRightBalanced = root.right ? isOverallBalanced(root.right) : true;
  const isLeftBalanced = root.left ? isOverallBalanced(root.left) : true;
  return isRightBalanced && isLeftBalanced;
};

const isBalanced = (root) => {
  return Math.abs(getDepth(root.right) - getDepth(root.left)) < 2;
};

const getDepth = (root) => {
  const depth = 1;
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return depth;
  }
  const rightDepth = root.right ? getDepth(root.right) + depth : 0;
  const leftDepth = root.left ? getDepth(root.left) + depth : 0;
  return Math.max(rightDepth, leftDepth);
};

console.log(isOverallBalanced(root));
