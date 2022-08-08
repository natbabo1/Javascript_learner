let firstDiv = document.body.childNodes[1];
console.log(firstDiv);
firstDiv.style.color = "red";

let ulEle = firstDiv.nextSibling.nextSibling;
console.log(ulEle);
ulEle.style.color = "green";

let firstLi = ulEle.firstChild.nextSibling;
firstLi.style.color = "blue";

let lastLi = ulEle.lastChild.previousSibling;
lastLi.style.color = "orange";
