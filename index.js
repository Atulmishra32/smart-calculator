// const display = document.querySelector("#result");
// const buttons = document.querySelectorAll("button");

const synth = window.speechSynthesis;
function speak(val) {
  let result = document.getElementById("result");
  result.value += val;
  if ("speechSynthesis" in window) {
    var msg = new SpeechSynthesisUtterance(val);
    window.speechSynthesis.speak(msg);
  } else {
    console.log("Speech synthesis not supported");
  }
}

function clearResult() {
  let result = document.getElementById("result");
  result.value = "";
}

function backspace() {
  let result = document.getElementById("result");
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  let result = document.getElementById("result");
  let res = eval(result.value);
  if ("speechSynthesis" in window) {
    var msg = new SpeechSynthesisUtterance("The result is " + res);
    window.speechSynthesis.speak(msg);
  } else {
    console.log("Speech synthesis not supported");
  }
  result.value = res;
}

// buttons.forEach((item) => {
//   item.onclick = () => {
//     if (item.id == "clear") {
//       display.innerText = "";
//     } else if (item.id == "backspace") {
//       let string = display.innerText.toString();
//       display.innerText = string.substr(0, string.length - 1);
//     } else if (display.innerText != "" && item.id == "equal") {
//       display.innerText = eval(display.innerText);
//     } else if (display.innerText == "" && item.id == "equal") {
//       display.innerText = "Empty!";
//       setTimeout(() => (display.innerText = ""), 2000);
//     } else {
//       display.innerText += item.id;
//     }
//   };
// });

const themeToggleBtn = document.querySelector(".theme-toggler");

const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
