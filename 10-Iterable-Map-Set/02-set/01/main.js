let a = new Set();

a.add("Thailand");
a.add("Japan");
a.add("Thailand");
a.add("China");
a.add("India");
a.add("Thailand");
a.add("China");
a.add("Singapore");
a.add("Japan");
a.delete("India");

console.log(a);
console.log(a.size);

const arr = Array.from(a);

arr;
