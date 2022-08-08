let hiderButton = document.getElementById("hideTextButton");
let h1ToBeHidden = document.getElementById("h1ToHide");

hiderButton.addEventListener("click", (event) => {
  h1ToBeHidden.style.display = "none";
});
