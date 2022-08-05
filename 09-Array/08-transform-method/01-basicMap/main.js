const array1 = [1, 2, 30, 400];
// result: [2, 4, 60, 800]
console.log(array1.map(e => e*2));

const array2 = [1, 2, 3, 4];
// result: ["1", "2", "3", "4"]
console.log(array2.map(e => ""+e));

const array3 = [1, '1', 2, {}];
// result: ["number", "string", "number", "object"]
console.log(array3.map(e => typeof(e)));

const array4 = ['apple', 'banana', 'orange'];
// result: ["APPLE", "BANANA", "ORANGE"]
console.log(array4.map(e => e.toUpperCase()));

const array5 = [1, 3, 4, 5, 6, 7, 8];
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
console.log(array5.map(e => e % 2 == 0 ? "even" : "odd"));

const array6 = [1, -3, 2, 8, -4, 5];
// result: [1, 3, 2, 8, 4, 5]
console.log(array6.map(e => Math.abs(e)));

const array7 = [100, 200.25, 300.84, 400.3];
// result: ["100.00", "200.25", "300.84", "400.30"]
console.log(array7.map(e => e.toFixed(2)));

const array8 = [0, 5, 10, 7, 6, 5, 0];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
console.log(array8.map(e => month[e]));

const array9 = [1, 16, 81, 256, 625, 1296];
// result: [1, 2, 3, 4, 5, 6]
console.log(array9.map(e => Math.pow(e, 1/4)));

const array10 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
// result: ["apple", "banana", "watermelon"]
console.log(array10.map(e => e.name));

const array11 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
// result: [14, 18, 32]
console.log(array11.map(e => e.age));

const array12 = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' }
];
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]
console.log(array12.map(e => `${e.name} ${e.surname}`));

const array13 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' }
];
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]

console.log(array13.map(e => ({
    name: e.name,
    birth: e.birth,
    age: 2021 - e.birth.slice(0, 4)
})));

const array14 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]
const monthLower = month.map(e => e.toLowerCase());
console.log(array14.map(e => `<tr><td>${e.name}</td><td>${e.birth.slice(8,10)} ${monthLower[+e.birth.slice(5,7)-1]} ${e.birth.slice(0,4)}</td></tr>`));

function toTdTrTag (ele) {
    let trOpener = "<tr>", trCloser = "</tr>";
    let tdOpener = "<td>", tdCloser = "</td>";
    
    let friutName = ele.name;
    let date = ele.birth.slice(8, 10);
    let monthNum = +ele.birth.slice(5, 7);
    let year = ele.birth.slice(0, 4);
    let monthText = monthLower[monthNum-1];

    return trOpener+tdOpener+friutName+tdCloser+tdOpener+date+" "+monthText+" "+year+tdCloser+trCloser;
}

console.log(array14.map(toTdTrTag))