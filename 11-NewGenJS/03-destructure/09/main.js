let user = {
  name: "John",
  years: 27
};

let { name, years, isAdmin = true } = user;

console.log(name, years, isAdmin);
