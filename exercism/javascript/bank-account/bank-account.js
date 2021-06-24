//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.isOpen = false;
  }

  open() {
    if (this.isOpen) {
      throw new ValueError();
    }
    this.isOpen = true;
    this._balance = 0;
  }

  close() {
    if (!this.isOpen) {
      throw new ValueError();
    }
    this.isOpen = false;
    this._balance = 0;
  }

  deposit(amt) {
    if (!this.isOpen || amt < 0) {
      throw new ValueError();
    }
    this._balance += amt;
  }

  withdraw(amt) {
    if (!this.isOpen || this._balance < amt || amt < 0) {
      throw new ValueError();
    }
    this._balance -= amt;
  }

  get balance() {
    if (!this.isOpen) {
      throw new ValueError();
    }
    return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
