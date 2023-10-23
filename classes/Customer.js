class Customer {
  constructor(name, email, shippingAddress) {
    this.name = name;
    this.email = email;
    this.shippingAddress = shippingAddress;
    this.orderHistory = [];
  }
  addToOrderHistory(cart) {
    return this.orderHistory.push(cart);
  }
}
