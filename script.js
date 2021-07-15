/* querySelectorAll returns a nodelist (has only a few methods) whilst an array (has a lot more (useful) methods like map, filter, etc). For this exercise we can use forEach as it's both a nodelist and array method*/

const inputs = document.querySelectorAll(".controls input");
const labels = document.querySelectorAll("label");
const inputField = document.querySelector("#writing");
const inputFieldSection = document.querySelector(".text-input");
const textBtn = document.querySelector("#text-btn");
const doneBtn = document.querySelector("#results-btn");
const returnBtn = document.querySelector("#return-btn");
const inputText = document.querySelector(".text-written");
const sample = document.querySelector("#sample");
const samplePic = document.querySelector("#sample-pic");
const title = document.querySelector("#title");
const writeSomethingLabel = document.querySelector("#writing-label");

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

function showResult(e) {
  e.preventDefault();
  inputs.forEach((item) => (item.style.display = "none"));
  labels.forEach((thing) => (thing.style.display = "none"));
  labels.forEach((thing) => (thing.style.display = "none"));
  inputFieldSection.style.display = "none";
  returnBtn.style.display = "grid";
  doneBtn.style.display = "none";
  title.style.display = "none";
  sample.style.display = "none";
}

function enterKey(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    textBtn.click();
  }
}

function showSample() {
  samplePic.style.display = "grid";
}
function hideSample() {
  samplePic.style.display = "none";
}

function returnPanel(e) {
  e.preventDefault();
  inputs.forEach((item) => (item.style.display = "flex"));
  labels.forEach((thing) => (thing.style.display = "flex"));
  returnBtn.style.display = "none";
  sample.style.display = "grid";
  inputFieldSection.style.display = "block";
  doneBtn.style.display = "grid";
  writeSomethingLabel.style.display = "none";
  title.style.display = "grid";
  title.style.width = "100%";
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
textBtn.addEventListener("click", handleTextInput);
doneBtn.addEventListener("click", showResult);
returnBtn.addEventListener("click", returnPanel);
inputField.addEventListener("keyup", enterKey);
sample.addEventListener("mouseenter", showSample);
sample.addEventListener("mouseleave", hideSample);
