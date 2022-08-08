let h2elm_qS = document.querySelector(".title-1");
let h2elm_qSA = document.querySelectorAll(".title-1");

h2elm_qS.style.color = "red";
for (let elem of h2elm_qSA) {
  elem.style.color = "blue";
}

let h2elm_gEByClass = document.getElementsByClassName("title-1");
for (let elem of h2elm_qSA) {
  elem.style.color = "green";
}

let h2elm_gEByTag = document.getElementsByTagName("h2");
// console.log(h2elm_gEByTag);
for (let elem of h2elm_gEByTag) {
  elem.style.color = "pink";
}
