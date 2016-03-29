export class Parent {
    constructor(name = null, age = 16) {
        this.name = name;
        this.age = age;
    }
    sayYourName(additionalMessage) {
        var message = `Hi my name is ${this.name}`;
        if (additionalMessage) {
            message += ` ${additionalMessage}`;
        }
        alert(message);
    }
}