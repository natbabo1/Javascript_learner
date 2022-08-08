const topSalaries = (salaries) => {
  let topName = null;
  let topSalary = -Infinity;
  for (let [key, value] of Object.entries(salaries)) {
    if (topSalary < value) {
      topName = key;
      topSalary = value;
    }
  }
  return topName;
};

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

console.log(topSalaries(salaries));
