let aGoogle = document.getElementById("toGoogle");

function confirmGoLink(event) {
  let thisLink = this.href;
  let askConfirm = confirm(`Leave for ${thisLink}`);

  if (askConfirm) {
    window.location.href = thisLink;
  }
}

aGoogle.addEventListener("click", confirmGoLink);
