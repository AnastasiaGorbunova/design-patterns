class Panda {
	constructor(props) {
		this.type = 'Panda';
		this.name = props.name;
		this.weight = props.weight;
		this.age = props.age;
	}
}

class Elephant {
	constructor(props) {
		this.type = 'Elephant';
		this.name = props.name;
		this.weight = props.weight;
		this.age = props.age;
		this.trunkLength = props.trunkLength; 
	}
}

class Giraffe {
	constructor(props) {
		this.type = 'giraffe';
		this.name = props.name;
		this.weight = props.weight;
		this.age = props.age;
		this.neckLength = props.neckLength;
	}
}

class NotificationFactory {

	create(type, props) {
		switch (type) {
			case 'panda':
				return new Panda(props);
			case 'elephant':
				return new Elephant(props);
			case 'giraffe':
				return new Giraffe(props);
			default:
				return;
		}
	}
}

// const factory = new AnimalFactory();

// const giraffe = factory.create('giraffe', {
// 	name: 'Johny',
// 	weight: 800,
// 	neckLength: 3,
// 	age: 2
// });

// console.log(giraffe);
