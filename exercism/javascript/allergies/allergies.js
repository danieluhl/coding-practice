//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const scoreMap = new Map([
  [1, 'eggs'],
  [2, 'peanuts'],
  [4, 'shellfish'],
  [8, 'strawberries'],
  [16, 'tomatoes'],
  [32, 'chocolate'],
  [64, 'pollen'],
  [128, 'cats'],
]);

export class Allergies {
  constructor(score) {
    this._score = score;
    this._foodList = this.list();
  }

  list() {
    if (this._foodList) {
      return this._foodList;
    }

    const scoreIterator = scoreMap.entries();
    let next;
    let foods = [];
    while ((next = scoreIterator.next()) && !next.done) {
      let [key, value] = next.value;
      if (key & this._score) {
        foods.push(value);
      }
    }
    return foods;

    // return Array.from(scoreMap.entries()).reduce((acc, [key, value]) => {
    //   if (key & this._score) {
    //     acc.push(value);
    //   }
    //   return acc;
    // }, []);
    // let foods = [];
    // scoreMap.forEach((value, key) => {
    //   if (key & this._score) {
    //     foods.push(value);
    //   }
    // });
    return foods;
  }

  allergicTo(food) {
    return this._foodList.includes(food);
  }
}
