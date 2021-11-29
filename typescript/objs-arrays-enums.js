"use strict";
// const person: {
//   name: string;
//   age: number;
// } = {
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Jyoti",
    age: 21,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
// person.role.push('admin');
// person.role[1]=10;
let favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()); //ERROR
}
if (person.role === Role.AUTHOR) {
    console.log("is Author");
}
