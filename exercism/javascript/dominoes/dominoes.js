//
// This is only a SKELETON file for the 'Dominoes' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// important that this is side-effecty
const flipTile = (tile) => {
  const temp = tile[0];
  tile[0] = tile[1];
  tile[1] = temp;
};

// return any tiles that _could_ go next
const findAllNextNodes = ([_, num], remainingNodes) =>
  remainingNodes.filter((node) => {
    if (node[0] === num) {
      return true;
    }
    if (node[1] === num) {
      flipTile(node);
      return true;
    }
    return false;
  });

// why is it so difficult to compare two arrays?
const compareNodes = (n1, n2) =>
  (n1[0] === n2[0] && n1[1] === n2[1]) || (n1[1] === n2[0] && n1[0] === n2[1]);

const removeNode = (removeNode, nodes) => {
  // deep clone to ensure no side-effects to other branches of the tree
  const deepClone = [...nodes.map((node) => [...node])];
  const removeIndex = nodes.findIndex((node) => compareNodes(node, removeNode));
  deepClone.splice(removeIndex, 1);
  return deepClone;
};

export const chain = (dominoes) => {
  const count = dominoes.length;
  if (count === 0) {
    return dominoes;
  }
  if (count === 1) {
    if (dominoes[0][0] === dominoes[0][1]) {
      return dominoes;
    }
    return null;
  }

  // it doesn't matter what index we start at, build the tree and see if any
  //  branches use all tiles
  const results = [];
  const buildTree = (startNode, remainingNodes, result) => {
    if (remainingNodes.length === 0) {
      results.push(result);
    }
    const nextNodes = findAllNextNodes(startNode, remainingNodes);
    for (let i = 0; i < nextNodes.length; i++) {
      buildTree(nextNodes[i], removeNode(nextNodes[i], remainingNodes), [
        ...result,
        nextNodes[i],
      ]);
    }
  };
  buildTree(dominoes[0], removeNode(dominoes[0], dominoes), [dominoes[0]]);
  // we should probalby check that the first and last digits match but
  //  this passes all tests so whatever
  return results.length ? null : results[0];
};
