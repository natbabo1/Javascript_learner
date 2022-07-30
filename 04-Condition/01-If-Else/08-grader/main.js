let entered = prompt("Enter your score");

if (entered === null || entered.trim() == '' || isNaN(+entered)) 
    alert("Please enter valid score")
else {
    let score = +entered;
    if (score >= 80) alert("Your grade is A!");
    else if (score >= 70) alert("Your grade is B!");
    else if (score >= 60) alert("Your grade is C!");
    else if (score >= 50) alert("Your grade is D!");
    else alert("Your grade is F!");
}