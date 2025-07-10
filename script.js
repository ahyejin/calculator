const input = document.querySelector(".inputExpression");
const result = document.querySelector(".result");
const allButtons = document.querySelector(".allButtons");
let operatorFlag = false;
let decimalFlag = false;
allButtons.addEventListener("click", function (event) {
    let entry = event.target.textContent;
    if (entry === "ac") {
        input.textContent = "";
        result.textContent = "";
        operatorFlag = false;
        return;
    }
    if (entry === "bs") {
        input.textContent = input.textContent.substring(0, input.textContent.length - 1);
        result.textContent = "";
        result.style.color = "black";
        console.log(input.textContent);
        
        const matchExpression = input.textContent.match(/^(\d+)$/);
        console.log(matchExpression);
        if (matchExpression) {
            operatorFlag = true;
        }
        console.log(input.textContent);

    } if (decimalFlag) {
        if (entry === ".") {
            input.textContent += entry;
            decimalFlag = false;
        }
    }
    if (Number.isInteger(+entry)) {
        input.textContent += entry;
        result.style.color = "black";
        operatorFlag = true;
        decimalFlag = true;
    }
    if (operatorFlag) {
        if (["+", "-", "*", "/", "%", "^"].includes(entry)) {
            input.textContent += entry;
            operatorFlag = false;
            decimalFlag = false;
        }
    }
    const expression = input.textContent;
    const array = expression.match(/^(-?\d+(?:\.\d+)?)([-+*/%^])(\d+(?:\.\d+)?)$/);
    if (array) {
        operate(array);
        operatorFlag = false;
    }
    if (entry === "=") {

        if (result.textContent === "Can't divide by 0") {
            result.textContent = "";
            input.textContent = "";
        }
        if (result.textContent !== "") {
            if (!(+(result.textContent).isInteger)) {
                input.textContent = Math.round(+(result.textContent) * 1000) / 1000;
                result.textContent = "";
                operatorFlag = true;
            }
            else {
                input.textContent = result.textContent;
                result.textContent = "";
                operatorFlag = true;
            }
        }
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
    if (b == 0) {
        result.textContent = "Can't divide by 0";
        result.style.color = "red";
        return;
    }
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
    if (b == 0) {
        result.textContent = "Can't divide by 0";
        result.style.color = "red";
        return;
    }
    let ans = (a / b) * 100;
    result.textContent = ans;
}