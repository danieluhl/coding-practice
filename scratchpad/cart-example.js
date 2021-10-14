const checkInventory = async (item) => item !== 'chair';

class Cart {
  cart = new Map();
  promiseQueue = [];
  addItem(item, qty = 1) {
    const inStockPromise = checkInventory(item);
    this.promiseQueue.push(inStockPromise);
    inStockPromise.then((res) => {
      if (!res) {
        console.log(`${item}, out of stock!`);
        return;
      }

      if (this.cart.has(item)) {
        this.cart.set(item, this.cart.get(item) + qty);
      } else {
        this.cart.set(item, qty);
      }
    });
  }
  removeItem(item, qty = 1) {
    if (this.cart[item]) {
      this.cart[item] -= qty;
    }
    if (this.cart[item] <= 0) {
      delete this.cart[item];
    }
  }
  print() {
    Promise.all(this.promiseQueue).then((results) => {
      this.cart.forEach((value, key) => {
        console.log(key, value);
      });
    });
  }
}

const myCart = new Cart();

myCart.addItem('table', 1);
myCart.addItem('table cloth', 1);
myCart.addItem('chair', 8);
myCart.addItem('table cloth');
myCart.removeItem('table');

myCart.print();
