class Car {
  constructor(name, color) {
    (this.name = name), (this.color = color);
  }
  drive() {
    return `I am driving ${this.color} ${this.name}`;
  }
}

const car = new Car("bmw", "cherry");
const Gwagon = new Car("mercedes", "g wagon amg");
car.name = "helllomoto";
car.color = "bloackberry";

console.log(car.drive());
console.log(Gwagon.drive());

// data encapsulatin hiding the data
class Students {
  constructor() {
    var name;
    var age;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}

const stud1 = new Students();
stud1.setName("stud1");
console.log(stud1.getName());

console.log(stud1.name);

class Animal {
  constructor(live, types) {
    this.live = live;
    this.types = types;
  }
  eat() {
    if (this.types == "carnivarous") {
      return "Non Vegeterian/vegeterain Animal ";
    }
    if (this.types == "omniivarous") {
      return "pure Non Vegeterian Animal ";
    }
    if (this.types == "herbivarous") {
      return "pure Vegeterian Animal ";
    }
  }
  sleep() {
    return "sleep yes";
  }
}
class Human extends Animal {
  constructor(live, types, name) {
    super(live, types);
    this.name = name;
  }
  drive() {
    return this.sleep() + this.name + "drive car";
  }
}

const human1 = new Human("yes", "carnivarous", "Naresh");
console.log(human1.eat());
console.log(human1.drive());
