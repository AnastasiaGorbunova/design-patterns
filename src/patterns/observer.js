class Observable {
	constructor() {
		this.observers = [];
	}

	subscribe(observer) {
		this.observers.push(observer);
	}

	unsubscribe(observer) {
		return this.observers.filter(subscriber => subscriber !== observer);
	}

	notify(data) {
		this.observers.forEach(subscriber => subscriber(data));
	}
}

// const observable = new Observable();

// observable.subscribe(() => console.log('Subscription 1'));
// observable.subscribe(() => console.log('Subscription 1'));

// observable.notify();
