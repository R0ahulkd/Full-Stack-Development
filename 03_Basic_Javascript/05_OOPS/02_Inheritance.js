class Person {
    constructor(name, height, eyeColor) {
        this.name = name;
        this.height = height;
        this.eyeColor = eyeColor;
    }

    speak() {
        return "Speaks Native Language";
    }
}

class Teacher extends Person{
    constructor(name, height, eyeColor) {
        super(name, height, eyeColor);
        this.company = "Moonpreneur";
    }
    speak() {
        return "Speaks English";
    }
}

const person = new Person("John","183","brown");
const teacher = new Teacher("Jack","190","Green");

console.log(person);
console.log(person.speak());
console.log(teacher);
console.log(teacher.speak());