const numbers = document.querySelectorAll(".numbers");
const mainDisplay = document.querySelector("#display");
const secDisplay = document.getElementById("display2");
const resulDisplay = document.getElementById("display3");
const dot = document.querySelector(".dot");
const operations = document.querySelectorAll(".operations");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const del = document.querySelector(".delete");
const memory = document.querySelector(".memory");

let memDisplay1 = "";
let memDisplay2 = "";
let result = 0;
let alreadyDot = false;
var lastDigit = "";
let digitCount = 0;

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !alreadyDot) {
      alreadyDot = true;
    } else if (e.target.innerText === "." && alreadyDot) {
      return;
    }
    if (mainDisplay.innerText == result) {
      memDisplay1 = "";
    }
    if (digitCount >= 10) {
      return;
    }
    memDisplay1 += e.target.innerText;
    mainDisplay.innerText = memDisplay1;
    digitCount += 1;
  });
});

operations.forEach((symbol) => {
  symbol.addEventListener("click", (e) => {
    lastDigit = memDisplay1[memDisplay1.length - 1];
    if (
      lastDigit === "+" ||
      lastDigit === "-" ||
      lastDigit === "/" ||
      lastDigit === "*"
    ) {
      return;
    }
    memDisplay1 += e.target.innerText;
    mainDisplay.innerText = memDisplay1;
    alreadyDot = false;
    digitCount = 0;
  });
});

equal.addEventListener("click", () => {
  if (mainDisplay.innerText == result) {
    return;
  }
  memDisplay2 = memDisplay1;
  secDisplay.innerText = memDisplay2;
  result = eval(memDisplay2);
  memDisplay1 = result;
  mainDisplay.innerText = result;
  resulDisplay.innerText = result;
  digitCount = 0;
});

clear.addEventListener("click", () => {
  memDisplay1 = "";
  memDisplay2 = "";
  mainDisplay.innerText = 0;
  secDisplay.innerText = 0;
  resulDisplay.innerText = 0;
});

del.addEventListener("click", () => {
  memDisplay1 = memDisplay1.slice(0, -1);
  mainDisplay.innerText = memDisplay1;
});

// memory.addEventListener('click', () => {
//     lastDigit = memDisplay1[memDisplay1.length-1]
//     if (lastDigit === '+' || lastDigit === '-' || lastDigit === '/' || lastDigit === '*' ) {
//     memDisplay1 += result
//     mainDisplay.innerText = memDisplay1
//     }
// })

window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9"
  ) {
    pressBtn(e.key);
  } else if (e.key === "/" || e.key === "*" || e.key === "-" || e.key === "+") {
    pressOperation(e.key);
  } else if (e.key === "=" || e.key == "Enter") {
    equal.click();
  } else if (e.key === ".") {
    dot.click();
  } else if (e.key == "Backspace") {
    del.click();
  }
});

function pressBtn(key) {
  numbers.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}

function pressOperation(key) {
  operations.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}
