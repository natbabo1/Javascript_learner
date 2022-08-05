let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

let sumSalary = 0;

for (salary in salaries)
  sumSalary += salaries[salary];

console.log(sumSalary);