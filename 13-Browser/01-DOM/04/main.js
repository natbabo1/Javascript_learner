let secondLi = document.querySelector(".active");
secondLi.style.color = "red";

secondLi = document.querySelectorAll(".active");
secondLi[0].style.color = "green";

secondLi = document.getElementsByClassName("active");
secondLi[0].style.color = "blue";

secondLi = document.getElementById("2");
secondLi.style.color = "orange";

secondLi = document.getElementsByTagName("li");
secondLi[1].style.color = "pink";
