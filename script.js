/* querySelectorAll returns a nodelist (has only a few methods) whilst an array (has a lot more (useful) methods like map, filter, etc). For this exercise we can use forEach as it's both a nodelist and array method*/

const inputs = document.querySelectorAll(".controls input");
const inputField = document.querySelector("#writing");
const btn = document.querySelector("button");
const inputText = document.querySelector(".text-written");
const sample = document.querySelector("#sample");
const samplePic = document.querySelector("#sample-pic");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  //or nothing for elements that dont have sizing dataset

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

function handleTextInput(e) {
  e.preventDefault();
  inputText.innerHTML = inputField.value;
}

function enterKey(e) {
  if (event.key === "Enter") {
    e.preventDefault();
    btn.click();
  }
}

function showSample() {
  samplePic.style.display = "grid";
}
function hideSample() {
  samplePic.style.display = "none";
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
btn.addEventListener("click", handleTextInput);
inputField.addEventListener("keyup", enterKey);
sample.addEventListener("mouseenter", showSample);
sample.addEventListener("mouseleave", hideSample);
