let one = document.getElementById("one");
let decimal = document.getElementById("point");
let input = document.getElementById("input");
// let two = document.getElementById("two");
// let three = document.getElementById("three");
// let four = document.getElementById("four");
// let five = document.getElementById("five");
// let six = document.getElementById("six");
// let seven = document.getElementById("seven");
// let eight = document.getElementById("eight");
// let nine = document.getElementById("nine");

let beforeWasDecimal = []

function assign(value) {
    let ops = ["+", "-", "*", "/", "."]
    let last = input.value.slice(-1);

    try {
        if(!ops.includes(last) || !ops.includes(value)){
            input.value += value;
            getAnswer(input.value);
        }
    } catch (e) {
        console.log(e.message);
    }
}

function getAnswer(v, a) {
    let result = eval(v);
    let equals = document.querySelector('button');
    let ans = document.querySelector('p');
    equals.addEventListener('click', function() {
        ans.innerHTML = result;
    });
}

let buttons = document.querySelectorAll('input[type="button"]');
var i;
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        assign(this.value);
    });
};

let operatorButtons = document.querySelectorAll('input[type="button"].grey');
var i;
for (i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', function () {
        decimal.disabled = false;
    });
};

decimal.addEventListener('click', function() {
    decimal.disabled = true;
});

if (input.value.length == 0) {
    operatorButtons.disabled = true;
}
