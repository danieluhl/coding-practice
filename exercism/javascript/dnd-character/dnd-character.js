//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (score) => {
  if (score < 3) {
    throw new Error('Ability scores must be at least 3');
  }
  if (score > 18) {
    throw new Error('Ability scores can be at most 18');
  }
  return Math.floor((score - 10) / 2);
};

const rollDice = () => {
  return Math.floor(Math.random() * 6) + 1;
};

export class Character {
  abilityMap = {
    strength: null,
    dexterity: null,
    constitution: null,
    intelligence: null,
    wisdom: null,
    charisma: null,
    hitpoints: null,
  };

  static rollAbility() {
    const [lowest, ...rest] = Array.from(new Array(4), () => rollDice()).sort();
    return rest.reduce((a, b) => a + b);
  }

  getAbility(ability) {
    this.abilityMap[ability] ??= Character.rollAbility();
    return this.abilityMap[ability];
  }

  get strength() {
    return this.getAbility('strength');
  }

  get dexterity() {
    return this.getAbility('dexterity');
  }

  get constitution() {
    return this.getAbility('constitution');
  }

  get intelligence() {
    return this.getAbility('intelligence');
  }

  get wisdom() {
    return this.getAbility('wisdom');
  }

  get charisma() {
    return this.getAbility('charisma');
  }

  get hitpoints() {
    return 10 + abilityModifier(this.constitution);
  }
}
