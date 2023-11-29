class Key {
    private signature: number = Math.random() * 10;

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {
    }
    getKey(): Key {
        return this.key;
    }
};

abstract class House {
    protected door: boolean = false;
    private tenants: Person[] = [];

    constructor(protected key: Key) { };

    comeIn(person: Person) {
        if (this.door) {
            this.tenants.push(person);
            console.log('Вы вошли в дом!');
        } else {
            console.log('Двери закрыты! Войти невозможно!');
        }
    }

    abstract openDoor(key: Key): void;
};

class myHouse extends House {

    openDoor(key: Key) {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('Двери открыты!')
        } else {
            console.log('Ключ не подходит! Двери закрыты!')
        }
    }
};

const key = new Key();

const house = new myHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};