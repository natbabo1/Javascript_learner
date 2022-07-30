let num1 = prompt("Enter num1");
if (num1 == null || num1.trim() == '' || isNaN(num1)) alert("Invalid number");
else if (+num1 > 0) alert("Positive number");
else if (+num1 == 0) alert("Zero");
else if (+num1 < 0) alert("Negative number");
