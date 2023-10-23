const Customer = require("./Customer");

class Auth {
  constructor() {
    this.customers = [];
  }
  register(name, email, shippingAddress) {
    return this.customers.push(new Customer(name, email, shippingAddress));
  }
  login(email) {
    const customer = this.customers.find((c) => c.email === email);
    return customer || null;
  }
}
module.exports = Auth;
