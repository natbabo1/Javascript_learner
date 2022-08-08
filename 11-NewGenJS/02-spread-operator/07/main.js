const cloneObject = (obj) => ({ ...obj });

console.log(cloneObject({ id: 9, name: "John", lastName: "Cena" }));
