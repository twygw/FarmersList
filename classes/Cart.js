class Cart {
  constructor(name, price, description, inStock) {
    this.product = [];
    this.total = 0;
  }
  addProduct(item) {
    this.product.push(item);
    this.total += price;
  }
  removeProduct(num) {
    this.product.splice(num, 1);
    this.total - price;
  }
}

module.exports = Cart;
