// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.
export class Robot {
  constructor() {
    this.setName();
  }
  setName() {
    this._name = Robot.currentNamesList.pop();
  }
  reset() {
    this.setName();
  }
  get name() {
    return this._name;
  }
}

const generateAllNames = () => {
  const names = [];
  for (let l1 = 65; l1 <= 90; l1++) {
    for (let l2 = 65; l2 <= 90; l2++) {
      for (let n1 = 0; n1 < 10; n1++) {
        for (let n2 = 0; n2 < 10; n2++) {
          for (let n3 = 0; n3 < 10; n3++) {
            names.push(
              `${String.fromCharCode(l1)}${String.fromCharCode(
                l2
              )}${n1}${n2}${n3}`
            );
          }
        }
      }
    }
  }
  return names;
};
const shuffleAllNames = (names) => [...names.sort(() => Math.random() - 0.5)];

Robot.allNames = generateAllNames();
Robot.currentNamesList = shuffleAllNames(Robot.allNames);
Robot.releaseNames = function () {
  this.currentNamesList = shuffleAllNames(this.allNames);
};
