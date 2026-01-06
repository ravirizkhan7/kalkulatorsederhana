function appValue(value) {
  document.querySelector("#display").value += value;
}

function clearDisplay() {
  document.querySelector("#display").value = "";
}

function deleteDisplay() {
  const display = document.querySelector("#display");
  if (!display) return;
  if (display.value === "Error") {
    display.value = "";
    return;
  }
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.querySelector("#display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
