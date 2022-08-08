let thirdLi = document.querySelector("[id='3']");
thirdLi.style.color = "red";
console.log(thirdLi);

thirdLi = document.querySelectorAll("li");
thirdLi[thirdLi.length - 1].style.color = "blue";
console.log(thirdLi[thirdLi.length - 1]);

thirdLi = document.getElementById("3");
thirdLi.style.color = "green";
console.log(thirdLi);

thirdLi = document.getElementsByTagName("li");
thirdLi[2].style.color = "orange";
console.log(thirdLi[2]);
