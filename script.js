class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = "";
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});

// const numberButtons = document.querySelectorAll("[data-number]");
// const operationButtons = document.querySelectorAll("[data-operation]");
// let equalsButton = document.querySelector("[data-equals]");
// let deleteButton = document.querySelector("[data-delete]");
// let allClearButton = document.querySelector("[data-all-clear]");
// const previousOperandTextElement = document.querySelector(
//   "[data-previous-operand]"
// );
// const currentOperandTextElement = document.querySelector(
//   "[data-current-operand]"
// );
// let previousOperand = "";
// let currentOperand = "";
// let operation = undefined;

// function add(n1, n2) {
//   return n1 + n2;
// }

// function subtract(n1, n2) {
//   return n1 - n2;
// }

// function multiply(n1, n2) {
//   return n1 * n2;
// }

// function divide(n1, n2) {
//   return n1 / n2;
// }

// function calculate(n1, operator, n2) {
//   let result = "";

//   if (operator === "add") {
//     result = parseFloat(n1) + parseFloat(n2);
//   } else if (operator === "subtract") {
//     result = parseFloat(n1) - parseFloat(n2);
//   } else if (operator === "multiply") {
//     result = parseFloat(n1) * parseFloat(n2);
//   } else if (operator === "divide") {
//     if (n2 === "0") {
//       alert("You can't divide by 0");
//       return;
//     } else {
//       result = parseFloat(n1) / parseFloat(n2);
//     }
//   }
//   return result;
// }

// function appendNumber(number) {
//   console.log(number);
//   if (number === "." && currentOperand.includes(".")) return;
//   currentOperand = currentOperand.toString() + number.toString();
// }

// function chooseOperation(operation) {
//   if (currentOperand === "") return;
//   if (previousOperand !== "") {
//     compute();
//   }
//   operation = operation;
//   previousOperand = currentOperand;
//   currentOperand = "";
// }

// function compute() {
//   let computation;
//   const prev = parseFloat(previousOperand);
//   const current = parseFloat(currentOperand);
//   if (isNaN(prev) || isNaN(current)) return;
//   switch (operation) {
//     case "add":
//       computation = add(prev, current);
//       break;
//     case "subtract":
//       computation = subtract(prev, current);
//       break;
//     case "multiply":
//       computation = multiply(prev, current);
//       break;
//     case "divide":
//       computation = divide(prev, current);
//       break;
//     default:
//       return;
//   }

//   currentOperand = computation;
//   operation = undefined;
//   previousOperand = "";
// }

// function updateDisplay() {
//   currentOperandTextElement.innerText = currentOperand;
//   previousOperandTextElement.innerText = previousOperand;
// }

// function clear() {
//   currentOperand = "";
//   previousOperand = "";
//   operation = undefined;
// }

// function deleteNumber() {
//   currentOperand = currentOperand.toString().slice(0, -1);
// }

// numberButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     appendNumber(button.innerText);
//     updateDisplay();
//   });
// });

// operationButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     chooseOperation(button.innerText);
//     updateDisplay();
//   });
// });

// equalsButton.addEventListener("click", () => {
//   compute();
//   updateDisplay();
// });

// allClearButton.addEventListener("click", () => {
//   clear();
//   updateDisplay();
// });

// deleteButton.addEventListener("click", () => {
//   deleteNumber();
//   updateDisplay();
// });

// const calculator = document.querySelector(".calculator");
// const keys = calculator.querySelector(".-keys");
// const display = document.querySelector(".-display");

// keys.addEventListener("click", (e) => {
//   if (e.target.matches("button")) {
//     const key = e.target;
//     const action = key.dataset.action;
//     const keyContent = key.textContent;
//     const displayedNum = display.textContent;
//     const previousKeyType = calculator.dataset.action;

//     Array.from(key.parentNode.children).forEach((k) => {
//       console.log(k);
//       k.classList.remove("is-depressed");
//     });

//     if (!action) {
//       if (
//         displayedNum === "0" ||
//         previousKeyType === "operator" ||
//         previousKeyType === "calculate"
//       ) {
//         display.textContent = keyContent;
//       }
//     } else if (
//       action === "add" ||
//       action === "subtract" ||
//       action === "multiply" ||
//       action === "divide"
//     ) {
//       const firstValue = calculator.dataset.firstValue;
//       const operator = calculator.dataset.operator;
//       const secondValue = displayedNum;

//       if (
//         firstValue &&
//         operator &&
//         previousKeyType !== "operator" &&
//         previousKeyType !== "calculate"
//       ) {
//         const calcValue = calculate(firstValue, operator, secondValue);
//         display.textContent = calcValue;
//         calculator.dataset.firstValue = calcValue;
//       } else {
//         calculator.dataset.firstValue = displayedNum;
//       }

//       key.classList.add("is-depressed");
//       calculator.dataset.previousKeyType = "operator";
//       calculator.dataset.operator = action;
//     } else if (action === "decimal") {
//       if (!displayedNum.includes(".")) {
//         display.textContent = displayedNum + ".";
//       } else if (
//         previousKeyType === "operator" ||
//         previousKeyType === "calculate"
//       ) {
//         display.textContent = "0.";
//       }
//     } else if (action === "clear") {
//       if (key.textContent === "AC") {
//         calculator.dataset.firstValue = "";
//         calculator.dataset.modValue = "";
//         calculator.dataset.operator = "";
//         calculator.dataset.previousKeyType = "";
//       } else {
//         key.textContent = "AC";
//       }

//       display.textContent = 0;
//       calculator.dataset.previousKeyType = "clear";
//     } else if (action !== "clear") {
//       if (
//         displayedNum === "0" ||
//         previousKeyType === "operator" ||
//         previousKeyType === "calculate"
//       ) {
//         display.textContent = keyContent;
//       } else {
//         display.textContent = displayedNum + keyContent;
//       }
//     } else if (action === "calculate") {
//       let firstValue = calculator.dataset.firstValue;
//       const operator = calculator.dataset.operator;
//       let secondValue = displayedNum;

//       if (firstValue) {
//         if (previousKeyType === "calculate") {
//           firstValue = displayedNum;
//           secondValue = calculator.dataset.modValue;
//         } else {
//           calculator.dataset.modValue = secondValue;
//         }

//         display.textContent = calculate(firstValue, operator, secondValue);
//       }

//       calculator.dataset.previousKeyType = "calculate";
//     }

//     Array.from(key.parentNode.children).forEach((k) =>
//       k.classList.remove("is-depressed")
//     );
//   }
// });

// const calculate = (n1, operator, n2) => {
//   let result = "";

//   if (operator === "add") {
//     result = parseFloat(n1) + parseFloat(n2);
//   } else if (operator === "subtract") {
//     result = parseFloat(n1) - parseFloat(n2);
//   } else if (operator === "multiply") {
//     result = parseFloat(n1) * parseFloat(n2);
//   } else if (operator === "divide") {
//     if (n2 === "0") {
//       alert("You can't divide by 0");
//       return;
//     } else {
//       result = parseFloat(n1) / parseFloat(n2);
//     }
//   }
//   return result;
// };

// function appendNumber(number) {
//   console.log(number);
//   if (number === "." && currentOperand.includes(".")) return;
//   currentOperand = currentOperand.toString() + number.toString();
// }

// numberButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     let x = appendNumber(button.innerText);
//     console.log(button.innerText);
//     console.log(x);
//     updateDisplay();
//     console.log(currentOperand);
//     console.log(previousOperand);
//     console.log(operation);
//   });
// });

// operationButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     chooseOperation(button.innerText);
//     console.log(button.innerText);
//     console.log(chooseOperation(button.innerText));
//     updateDisplay();
//   });
// });

// equalsButton.addEventListener("click", () => {
//   compute();
//   updateDisplay();
// });

// allClearButton.addEventListener("click", () => {
//   clear();
//   updateDisplay();
// });

// deleteButton.addEventListener("click", () => {
//   deleteNumber();
//   updateDisplay();
// });

// function chooseOperation(operation) {
//   if (currentOperand === "") return;
//   if (previousOperand !== "") {
//     compute();
//   }
//   operation = operation;
//   previousOperand = currentOperand;
//   currentOperand = "";
// }

// function compute() {
//   let computation;
//   const prev = parseFloat(previousOperand);
//   const current = parseFloat(currentOperand);
//   if (isNaN(prev) || isNaN(current)) return;
//   switch (operation) {
//     case "+":
//       computation = add(prev, current);
//       break;
//     case "-":
//       computation = subtract(prev, current);
//       break;
//     case "*":
//       computation = multiply(prev, current);
//       break;
//     case "÷":
//       computation = divide(prev, current);
//       break;
//     default:
//       return;
//   }
//   currentOperand = computation;
//   operation = undefined;
//   previousOperand = "";
// }

// function deleteNumber() {
//   currentOperand = currentOperand.toString().slice(0, -1);
// }

// function updateDisplay() {
//   currentOperandTextElement.innerText = currentOperand;
//   previousOperandTextElement.innerText = previousOperand;
//   console.log(currentOperandTextElement.innerText);
//   console.log(previousOperandTextElement.innerText);
// }

// function clear() {
//   currentOperand = "";
//   previousOperand = "";
//   operation = undefined;
// }

// const calculator = document.querySelector(".calculator");
// const keys = calculator.querySelector(".keys");
// const display = document.querySelector(".-display");
// // const display2 = document.querySelector(".-display__previous");

// keys.addEventListener("click", (e) => {
//   if (e.target.matches("button")) {
//     const key = e.target;
//     const action = key.dataset.action;
//     const keyContent = key.textContent;
//     const displayedNum = display.textContent;
//     const previousKeyType = calculator.dataset.action;

//     Array.from(key.parentNode.children).forEach((k) =>
//       k.classList.remove("is-depressed")
//     );

//     if (!action) {
//       if (
//         displayedNum === "0" ||
//         previousKeyType === "operator" ||
//         previousKeyType === "calculate"
//       ) {
//         display.textContent = keyContent;
//       }
//     } else if (
//       action === "add" ||
//       action === "subtract" ||
//       action === "multiply" ||
//       action === "divide"
//     ) {
//       const firstValue = calculator.dataset.firstValue;
//       const operator = calculator.dataset.operator;
//       const secondValue = displayedNum;

//       if (
//         firstValue &&
//         operator &&
//         previousKeyType !== "operator" &&
//         previousKeyType !== "calculate"
//       ) {
//         const calcValue = calculate(firstValue, operator, secondValue);
//         display.textContent = calcValue;
//         calculator.dataset.firstValue = calcValue;
//       } else {
//         calculator.dataset.firstValue = displayedNum;
//       }

//       key.classList.add("is-depressed");
//       calculator.dataset.previousKeyType = "operator";
//       calculator.dataset.operator = action;
//     } else if (action === "decimal") {
//       if (!displayedNum.includes(".")) {
//         display.textContent = displayedNum + ".";
//       } else if (
//         previousKeyType === "operator" ||
//         previousKeyType === "calculate"
//       ) {
//         display.textContent = "0.";
//       }
//     } else if (action === "clear") {
//       if (key.textContent === "AC") {
//         calculator.dataset.firstValue = "";
//         calculator.dataset.modValue = "";
//         calculator.dataset.operator = "";
//         calculator.dataset.previousKeyType = "";
//       } else {
//         key.textContent = "AC";
//       }

//       display.textContent = 0;
//       calculator.dataset.previousKeyType = "clear";
//     } else if (action !== "clear") {
//       if (
//         displayedNum === "0" ||
//         previousKeyType === "operator" ||
//         previousKeyType === "calculate"
//       ) {
//         display.textContent = keyContent;
//       } else {
//         display.textContent = displayedNum + keyContent;
//       }
//     } else if (action === "calculate") {
//       let firstValue = calculator.dataset.firstValue;
//       const operator = calculator.dataset.operator;
//       let secondValue = displayedNum;

//       if (firstValue) {
//         if (previousKeyType === "calculate") {
//           firstValue = displayedNum;
//           secondValue = calculator.dataset.modValue;
//         } else {
//           calculator.dataset.modValue = secondValue;
//         }

//         display.textContent = calculate(firstValue, operator, secondValue);
//       }

//       calculator.dataset.previousKeyType = "calculate";
//     }

//     Array.from(key.parentNode.children).forEach((k) =>
//       k.classList.remove("is-depressed")
//     );
//   }
// });

// different way of doing it
// const display = document.querySelector(".-display");
// const buttons = document.querySelectorAll("button");

// function compute() {
//   let result = "";
//   let num1 = "";
//   let num2 = "";
//   let operator = "";
//   for (let i = 0; i < display.innerText.length; i++) {
//     if (display.innerText[i] === "+" || display.innerText[i] === "-") {
//       operator = display.innerText[i];
//       num1 = display.innerText.slice(0, i);
//       num2 = display.innerText.slice(i + 1);
//     } else if (display.innerText[i] === "x") {
//       operator = "multiply";
//       num1 = display.innerText.slice(0, i);
//       num2 = display.innerText.slice(i + 1);
//     } else if (display.innerText[i] === "÷") {
//       operator = "divide";
//       num1 = display.innerText.slice(0, i);
//       num2 = display.innerText.slice(i + 1);
//     }
//   }
//   result = calculate(num1, operator, num2);
//   display.innerText = result;
// }

// function calculate(num1, operator, num2) {
//   let result = "";
//   if (operator === "add") {
//     result = parseFloat(num1) + parseFloat(num2);
//   } else if (operator === "subtract") {
//     result = parseFloat(num1) - parseFloat(num2);
//   } else if (operator === "multiply") {
//     result = parseFloat(num1) * parseFloat(num2);
//   } else if (operator === "divide") {
//     result = parseFloat(num1) / parseFloat(num2);
//   }
//   return result;
// }

// buttons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     const buttonText = e.target.innerText;
//     console.log(buttonText);
//     if (buttonText === "AC") {
//       display.innerText = "";
//     } else if (buttonText === "=") {
//       display.innerText = result;
//     } else if (buttonText === "DEL") {
//       display.innerText = display.innerText.slice(0, -1);
//     } else if (buttonText === "." && display.innerText.includes(".")) {
//       return;
//     } else if (buttonText === "." && display.innerText === "") {
//       display.innerText = "0.";
//     } else if (buttonText === "." && display.innerText !== "") {
//       display.innerText += buttonText;
//     } else if (display.innerText === "0") {
//       display.innerText = buttonText;
//     } else if (display.innerText !== "0") {
//       display.innerText += buttonText;
//     } else if (buttonText === "0" && display.innerText === "0") {
//       return;
//     } else if (buttonText === "0" && display.innerText !== "0") {
//       display.innerText += buttonText;
//     } else if (buttonText === "0" && display.innerText === "") {
//       return;
//     } else if (buttonText === "0" && display.innerText !== "") {
//       display.innerText += buttonText;
//     }
//   });
// });
