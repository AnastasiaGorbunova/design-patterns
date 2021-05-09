class Counter {

	constructor() {
		if (Counter.exists) {
			return Counter.instance;
		}
		this.count = 0;
		Counter.instance = this;
		Counter.exists = true;
	}
  
	getCount() {
		return this.count;
	}
  
	increaseCount() {
		return this.count++;
	}
}

// const counter = new Counter();
// counter.increaseCount();

// console.log('Increased counter: ', counter.getCount());

// const newCounter = new Counter();
// console.log('Increased counter: ', newCounter.getCount());
