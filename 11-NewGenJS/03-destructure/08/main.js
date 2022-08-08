const checkAge = ({ firstname, lastname, age }) =>
  age >= 18 ? `Hello, ${firstname} ${lastname}.` : `You can't no access`;

const person1 = {
  firstname: "Jimmy",
  lastname: "Cena",
  age: 17
};
const person2 = {
  firstname: "Cimmy",
  lastname: "Jena",
  age: 30
};
const person3 = {
  firstname: "Kimmy",
  lastname: "Uena",
  age: 9
};

console.log(checkAge(person1));
console.log(checkAge(person2));
console.log(checkAge(person3));
