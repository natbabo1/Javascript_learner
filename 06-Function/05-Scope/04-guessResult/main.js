let x = 1;
function func() {
  console.log(x); // error becuz function declare is hoisting
  let x = 2;
}
func();