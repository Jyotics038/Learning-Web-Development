function Logger(constructor: Function) {
  console.log("Logging data");
  console.log(constructor);
}
@Logger
class Persons {
  name = "Jyoti";
  constructor() {
    console.log("Creating object....");
  }
}

// const person1 = new Person1();
// console.log(person1);
