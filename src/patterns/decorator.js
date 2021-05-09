class Coffee {

	constructor() {
		this.price = 2;
	}
  
	getPrice() {
		return this.price;
	}

    getReceipt() {
        return `Coffee price: ${this.price}`;
    }
}

class Sugar {
	constructor(coffee) {
		this.coffee = coffee;
  	}

	getPrice() {
		return this.coffee.getPrice() + 1;
	}
  
	getReceipt() {
		return `Coffee with sugar: ${this.getPrice()}`;
	}
}

// let coffee = new Coffee();
// coffee = new Sugar(coffee);

// console.log(coffee.getReceipt());
