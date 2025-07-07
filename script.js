const input = document.querySelector(".inputExpression");
const result = document.querySelector(".result");
const allButtons = document.querySelector(".allButtons");

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