const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const resetButton = document.getElementById("reset");
const numberTxt = document.querySelector(".number");

document.addEventListener("DOMContentLoaded", () => {
  let count = 0;
  plusButton.addEventListener("click", () => {
    count++;
    numberTxt.textContent = count;
  });
  minusButton.addEventListener("click", () => {
    count--;
    numberTxt.textContent = count;
  });
  resetButton.addEventListener("click", () => {
    count = 0;
    numberTxt.textContent = count;
  });
});
