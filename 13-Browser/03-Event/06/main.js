let thatButton = document.getElementById("hideMe");

function vanishing(event) {
  this.style.display = "none";
}
// thatButton.style.display = "none";
thatButton.addEventListener("click", vanishing);
