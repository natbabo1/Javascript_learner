const factorial = num => num==0 ? 1 : num*factorial(num-1);

alert(factorial(prompt("Enter num")));
