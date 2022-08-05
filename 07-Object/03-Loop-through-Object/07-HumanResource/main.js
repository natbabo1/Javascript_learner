const employees = {
    john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' }},
    peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
    mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
    sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
  };

let name = prompt("Name");
let message = "";
if (name in employees) {
    // message = `Name: ${name}, salary: ${employees[name].salary}, address: ${employees[name].address.district}, ${employees[name].address.province}`;
    message = `Name: ${name}, `;
    for (p1 in employees[name]) {
        message += `${p1}: `
        if (typeof(employees[name][p1]) === 'object') {
            for (p2 in employees[name][p1]) {
                message += `${employees[name][p1][p2]}, `;
            }
        }
        else 
            message += `${employees[name][p1]}, `
    }
    message = message.substring(0, message.length - 2);
} 
else 
    message = "Not found";

console.log(message);