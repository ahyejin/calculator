const input = document.querySelector(".inputExpression");
const result = document.querySelector(".result");
const allButtons = document.querySelector(".allButtons");
let operatorFlag = false;
allButtons.addEventListener("click", function (event) {
    let entry = event.target.textContent;
    if (entry === "ac") {
        input.textContent = "";
        result.textContent = "";
    }
    if(entry === "bs"){
        input.textContent = input.textContent.substring(0, input.textContent.length - 1);
        result.textContent = "";
    }
    if (Number.isInteger(+entry)) {
        input.textContent += entry;
        operatorFlag = true;
    }
    if (operatorFlag) {
        if (["+", "-", "*", "/", "%", "^"].includes(entry)) {
            input.textContent += entry;
            operatorFlag = false
        }
    }
    const expression = input.textContent;
    const array = expression.match(/^(\d+)([-+*/%^])(\d+)$/);
    if (array) {
        console.log(array);
        operate(array);
    }
    if (entry === "=") {
        input.textContent = result.textContent;
        result.textContent = "";

    }

})
function operate(input) {
    switch (input[2]) {
        case "+": add(input[1], input[3]);
            break;
        case "-": subtract(input[1], input[3]);
            break;
        case "*": multiply(input[1], input[3]);
            break;
        case "/": divison(input[1], input[3]);
            break;
        case "%": percentage(input[1], input[3]);
            break;
        case "^": power(input[1], input[3]);
            break;
    }
}
const add = function (a, b) {
    a = (+a);
    b = (+b);
    console.log(a);
    console.log(b);
    let ans = a + b;
    result.textContent = ans;
}
const subtract = function (a, b) {
    a = (+a);
    b = (+b);
    let ans = a - b;
    result.textContent = ans;
}
const multiply = function (a, b) {
    a = (+a);
    b = (+b);
    let ans = a * b;
    result.textContent = ans;
}
const divison = function (a, b) {
    a = (+a);
    b = (+b);
    let ans = a / b;
    result.textContent = ans;
}
const power = function (a, b) {
    a = (+a);
    b = (+b);
    let ans = Math.pow(a, b);
    result.textContent = ans;
}
const percentage = function (a, b) {
    a = (+a);
    b = (+b);
    let ans = (a / b) * 100;
    result.textContent = ans;
}