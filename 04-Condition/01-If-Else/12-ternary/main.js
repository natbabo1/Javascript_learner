let entered = prompt("Enter your score");

if (entered === null || entered.trim() == '' || isNaN(entered)) 
    alert("Please enter valid score")
else {
    let score = +entered;
    let message;
    message = score >= 80 ? "Your grade is A!" :
    score >= 70 ? "Your grade is B!" :
    score >= 60 ? "Your grade is C!" :
    score >= 50 ? "Your grade is D!" : "Your grade is F!";
    alert(message);
}