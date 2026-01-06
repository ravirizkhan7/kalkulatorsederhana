function appValue(value) {
  document.querySelector("#display").value += value;
}

function clearDisplay() {
  document.querySelector("#display").value = "";
}

function calaculate() {
  const display = document.querySelector("#display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
