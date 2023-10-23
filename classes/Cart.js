class Cart {
  constructor() {
    this.products = [];
    this.total = 0;
  }
  addProduct(product) {
    this.products.push(product);
    this.total += product.price;
  }
  removeProduct(product) {
    let space = this.products.indexOf(product);
    this.products.splice(space, 1);
    this.total -= product.price;
  }
}

module.exports = Cart;
