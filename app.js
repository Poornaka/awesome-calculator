let one = document.getElementById("one");
let decimal = document.getElementById("point");
let input = document.getElementById("input");

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
        return null;
    }
}

let ans = document.querySelector('p');
function getAnswer(v, a) {
    let result = eval(v);
    let equals = document.querySelector('button.equals');
    equals.addEventListener('click', function() {
        ans.innerHTML = result;
    });
}

let buttons = document.querySelectorAll('input[type="button"]');
var i;
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        assign(this.value);
        for (i = 0; i < operatorButtons.length; i++) {
            operatorButtons[i].disabled = false;
        }
    });
};

let operatorButtons = document.querySelectorAll('input[type="button"].grey');
var i;
for (i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', function () {
        decimal.disabled = false;
    });
};

document.querySelector('button.clear').addEventListener('click', function() {
    input.value = null;
    ans.innerHTML = "∞";
})

decimal.addEventListener('click', function() {
    decimal.disabled = true;
});

if (input.value.length == 0) {
    for (i = 0; i < operatorButtons.length; i++) {
        operatorButtons[i].disabled = true;
    }
}
