const map = new Map();

map.set("name", "Thomas");
console.log(map);
map.set("age", 31);
console.log(map);
map.set("name", "Dan");
console.log(map);
map.delete("age");
console.log(map);
console.log(map.has("birthDate"));
console.log(map.size);
map.clear();

console.log(map);
