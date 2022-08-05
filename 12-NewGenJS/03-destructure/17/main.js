const names = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jack", lastName: "Dann" },
  { firstName: "Joe", lastName: "Dunne" }
];

for ({ firstName, lastName } of names) {
  console.log(`${firstName} ${lastName}`);
}
