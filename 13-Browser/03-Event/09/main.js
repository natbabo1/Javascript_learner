let phoneNumber = document.getElementById("phoneNumber");
let checkPhoneNumberBtn = document.getElementById("checkPhoneNumber");
let statusText = document.createElement("p");

function checkPhoneNumber(event) {
  let phone = phoneNumber.value;
  phoneNumber.style.borderColor = "red";
  statusText.style.color = "red";
  if (phone.trim() == "") {
    statusText.innerHTML = "Phone Number is required";
  } else if (isNaN(phone)) {
    statusText.innerHTML = "Phone Number is invalid";
  } else if (phone.length != 10) {
    statusText.innerHTML = "Invalid length";
  } else {
    statusText.innerText = "Your number is valid";
    phoneNumber.style.borderColor = "green";
    statusText.style.color = "green";
  }
  this.after(statusText);
}

checkPhoneNumberBtn.addEventListener("click", checkPhoneNumber);
