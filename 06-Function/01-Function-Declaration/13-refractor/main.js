function checkAge1(age) {
    if (age > 18)
      return true;
    return confirm("Did parents allow you?");
}

function checkAge2(age) {
    return age > 18 ? true : confirm("Did parents allow you?");
}

function checkAge3(age) {
    return age > 18 || confirm("Did parents allow you?");
}

// alert(checkAge1(+prompt("Enter age:")));
// alert(checkAge2(+prompt("Enter age:")));
// alert(checkAge3(+prompt("Enter age:")));