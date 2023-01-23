//
// This is only a SKELETON file for the 'Knapsack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// this works for a key because order doesn't matter and duplicates are treated the same
const getItemsKey = (items) =>
  items.reduce((key, item) => `${key}${item.weight}${item.value}`, "");

const getBestValue = (maximumWeight, items, callCache) => {
  const itemsKey = getItemsKey(items);
  if (callCache[itemsKey]) {
    return callCache[itemsKey];
  }
  // can take all the items
  const [totalWeight, totalValue] = items.reduce(
    (totals, item) => {
      totals[0] = totals[0] + item.weight;
      totals[1] = totals[1] + item.value;
      return totals;
    },
    [0, 0]
  );
  if (totalWeight <= maximumWeight) {
    return totalValue;
  }

  // can't take all the items, try every permutation of items.length - 1
  const weights = items.map((_, i) => {
    const nextItems = [...items];
    nextItems.splice(i, 1);
    return getBestValue(maximumWeight, nextItems, callCache);
  });

  // what was the highest of those subsets?
  const maxWeight = Math.max(...weights);
  callCache[itemsKey] = maxWeight;
  return maxWeight;
};

export const knapsack = (maximumWeight, items) => {
  items.sort((a, b) => a.weight - b.weight);
  const callCache = {};
  return getBestValue(maximumWeight, items, callCache);
};
