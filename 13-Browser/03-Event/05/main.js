function clickToLogName() {
  console.log(this.name);
}
function logInput(event) {
  console.log(event.target.value);
}

let allInputs = document.getElementsByTagName("input");
for (let ele of allInputs) {
  ele.addEventListener("click", clickToLogName);
  ele.addEventListener("input", logInput);
}
