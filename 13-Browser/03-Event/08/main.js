let thatButton = document.getElementById("hideShowToggle");
let thatText = document.getElementById("toggleText");

function hideShowToggles(event) {
  let textInbutton = this.innerHTML;
  if (textInbutton == "Hide") {
    this.innerHTML = "Show";
    thatText.style.display = "none";
  } else {
    this.innerHTML = "Hide";
    thatText.style.display = "";
  }
}

thatButton.addEventListener("click", hideShowToggles);
