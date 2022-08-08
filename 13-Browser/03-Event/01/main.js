let button = document.getElementById("btn");

button.addEventListener("click", () => alert("1")); // (1)
button.removeEventListener("click", () => alert("1")); // (2)
button.onclick = () => alert(2); // (3)
// (1), (3) && (2) didn't remove becuz byref
