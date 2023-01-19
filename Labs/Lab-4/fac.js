"use strict";
let fact = 1;
let enterNum = Number(prompt("Enter any number."));
const btn = document.querySelector(".clk");
const display = document.querySelector(".display");
console.log(enterNum);
if (!enterNum) {
    document.querySelector(
        ".if-0"
    ).innerHTML = `Please enter a truthy value coz <sub><b>0</b></sub> and <sub><b>left empty</b></sub> is a falsy value.`;
}

for (let i = enterNum; i >= 1; i--) {
    fact = fact * i;
}
btn.addEventListener("click", function() {
    document.querySelector(".fact").style.display = "block";
    document.querySelector(".display").innerHTML = fact;
});