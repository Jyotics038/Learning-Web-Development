// const person: {
//   name: string;
//   age: number;
// } = {

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Jyoti",
  age: 21,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1]=10;

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //console.log(hobby.map()); //ERROR
}

if (person.role === Role.AUTHOR) {
  console.log("is Author");
}
