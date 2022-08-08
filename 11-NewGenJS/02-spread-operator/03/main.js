const personsArr = (fname, lname, ...hobbies) => [
  fname,
  lname,
  ...hobbies,
  hobbies.length
];

const personsObj = (fname, lname, ...hobbies) => ({
  fname,
  lname,
  hobbies,
  totalHobbies: hobbies.length
});

let input = ["John", "ShowRai", "Golf", "Game", "Eat"];

console.log(personsArr(...input));
console.log(personsObj(...input));
