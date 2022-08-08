let upBtn = document.getElementById("increaseBtn");
let downBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");
let currentValue = document.getElementById("currentValue");

const increaseCurrentValue = () =>
  (currentValue.innerHTML = +currentValue.innerHTML + 1);
const decreaseCurrentValue = () => {
  currentValue.innerHTML =
    +currentValue.innerHTML > 0 ? +currentValue.innerHTML - 1 : 0;
};
const resetValue = () => (currentValue.innerHTML = 0);

upBtn.addEventListener("click", increaseCurrentValue);
downBtn.addEventListener("click", decreaseCurrentValue);
resetBtn.addEventListener("click", resetValue);
