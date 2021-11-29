interface IPerson {
  name: string;
  age: number;
  hello(phrase: string): void;
}

// let jyotiPerson: Person = {
//   name: "Jyoti",
//   age: 21,
//   hello(phrase: string) {
//     console.log(phrase + this.name);
//   },
// };

// let AbhiPerson: Person = {
//   name: "Abhi",
//   age: 20,
//   hello(phrase: string) {
//     console.log(phrase + this.name);
//   },
// };

//Interfaces with class

class Person implements IPerson {
  constructor(public name: string, public age: number) {}

  hello(phrase: string) {
    console.log(phrase + this.name);
  }
}

let jyoti: IPerson = new Person("Jyoti", 21);
let abhi: IPerson = new Person("Abhi", 20);

jyoti.hello("Hiee ");
abhi.hello("Hey! ");
