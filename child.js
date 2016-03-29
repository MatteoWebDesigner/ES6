export class Child extends Parent {
    constructor(name = null, age, type = 'child') {
        super(name, age);
        this.type = type;
        this.count = 0;
    }

    extendMethod(additionalMessage) {
        super.sayYourName();
        alert('extendMethod');
    }

    standardMethod() {
        console.log('standardMethod');
    }

    get age() {
        console.log(arguments, 'get');
        this.count++;
    }

    set age(digit) {
        if (digit == 8) {
            this.type = 'kid';
        }
        console.log(arguments, 'set');
    }

    static staticMethod() {
        console.log('staticMethod');
    }
}